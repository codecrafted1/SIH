import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Eye,
  EyeOff,
  GraduationCap,
  Sparkles,
  X,
} from "lucide-react";

import "./SignupPage.css";

type UserRole = "student" | "recruiter";

function SignupPage() {
    const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);

  const initialRole: UserRole =
    params.get("role") === "recruiter" ? "recruiter" : "student";

  const [role, setRole] = useState<UserRole>(initialRole);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    college: "",
    company: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleRoleChange = (selectedRole: UserRole) => {
    setRole(selectedRole);

    setFormData({
      fullName: "",
      email: "",
      password: "",
      college: "",
      company: "",
    });

    const url = new URL(window.location.href);
    url.searchParams.set("role", selectedRole);
    window.history.replaceState({}, "", url);
  };

  const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();

  console.log({
    role,
    ...formData,
  });

  if (role === "student") {
    navigate("/dashboard/student");
  } else {
    navigate("/dashboard/recruiter");
  }
};

  const isStudent = role === "student";

  return (
    <main className="signup-page">

      {/* LEFT PANEL */}
      <section className="signup-intro">

        <div className="signup-brand">
          <div className="signup-brand-mark">
            <Sparkles size={20} strokeWidth={1.7} />
          </div>

          <div>
            <span className="signup-brand-name">
              SkillBridge
            </span>

            <span className="signup-brand-tagline">
              ACADEMIA × INDUSTRY
            </span>
          </div>
        </div>

        <div className="signup-intro-content">

          <div className="signup-kicker">
            <span />
            {isStudent
              ? "YOUR CAREER JOURNEY STARTS HERE"
              : "CONNECT WITH THE RIGHT TALENT"}
          </div>

          <h1>
            {isStudent ? (
              <>
                Build your path.
                <br />
                <em>Bridge the gap.</em>
              </>
            ) : (
              <>
                Find the right
                <br />
                <em>skills, faster.</em>
              </>
            )}
          </h1>

          <p>
            {isStudent
              ? "Create your profile, discover your skill gaps and find opportunities that match where you want to go."
              : "Create your recruiter profile, define your requirements and discover students whose skills match your opportunities."}
          </p>

          <div className="signup-benefits">

            <div className="signup-benefit">
              <div className="benefit-check">
                <Check size={14} />
              </div>

              <span>
                {isStudent
                  ? "Personalized skill assessment"
                  : "Skill-based candidate matching"}
              </span>
            </div>

            <div className="signup-benefit">
              <div className="benefit-check">
                <Check size={14} />
              </div>

              <span>
                {isStudent
                  ? "Courses & opportunity recommendations"
                  : "Post internships & job opportunities"}
              </span>
            </div>

            <div className="signup-benefit">
              <div className="benefit-check">
                <Check size={14} />
              </div>

              <span>
                {isStudent
                  ? "Build an industry-ready profile"
                  : "Discover relevant student talent"}
              </span>
            </div>

          </div>

        </div>

        <div className="signup-intro-footer">
          <span>Bridging Academia with Industry</span>
          <span>© 2026 SkillBridge</span>
        </div>

      </section>


      {/* RIGHT PANEL */}
      <section className="signup-form-section">

 <button
    type="button"
    className="signup-close"
    onClick={() => (window.location.href = "/")}
    aria-label="Go back"
  >
    <X size={20} strokeWidth={1.8} />
  </button>

        <div className="signup-form-wrapper">

          <div className="signup-form-header">

            <span className="form-eyebrow">
              CREATE ACCOUNT
            </span>

            <h2>
              Welcome to
              <br />
              <em>SkillBridge.</em>
            </h2>

            <p>
              Create your account to get started.
            </p>

          </div>


          {/* ROLE SWITCHER */}

          <div className="role-switcher">

            <button
              type="button"
              className={isStudent ? "active" : ""}
              onClick={() => handleRoleChange("student")}
            >
              <GraduationCap
                size={17}
                strokeWidth={1.7}
              />

              <span>Student</span>
            </button>

            <button
              type="button"
              className={!isStudent ? "active" : ""}
              onClick={() => handleRoleChange("recruiter")}
            >
              <BriefcaseBusiness
                size={17}
                strokeWidth={1.7}
              />

              <span>Recruiter</span>
            </button>

          </div>


          {/* FORM */}

          <form
            className="signup-form"
            onSubmit={handleSubmit}
          >

            {/* NAME */}

            <div className="form-field">
              <label htmlFor="fullName">
                {isStudent
                  ? "Full name"
                  : "Recruiter name"}
              </label>

              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder={
                  isStudent
                    ? "Enter your full name"
                    : "Enter your name"
                }
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>


            {/* EMAIL */}

            <div className="form-field">
              <label htmlFor="email">
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>


            {/* COLLEGE / COMPANY */}

            <div className="form-field">
              <label htmlFor={isStudent ? "college" : "company"}>
                {isStudent
                  ? "College / University"
                  : "Company"}
              </label>

              <input
                id={isStudent ? "college" : "company"}
                name={isStudent ? "college" : "company"}
                type="text"
                placeholder={
                  isStudent
                    ? "Enter your college"
                    : "Enter your company"
                }
                value={
                  isStudent
                    ? formData.college
                    : formData.company
                }
                onChange={handleChange}
                required
              />
            </div>


            {/* PASSWORD */}

            <div className="form-field">
              <label htmlFor="password">
                Password
              </label>

              <div className="password-wrapper">

                <input
                  id="password"
                  name="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={8}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(
                      (previous) => !previous
                    )
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>

              </div>

              <span className="field-hint">
                Minimum 8 characters
              </span>
            </div>


            {/* SUBMIT */}

            <button
              type="submit"
              className="signup-submit"
            >
              <span>
                Create{" "}
                {isStudent
                  ? "Student"
                  : "Recruiter"}{" "}
                Account
              </span>

              <ArrowRight
                size={18}
                strokeWidth={1.7}
              />
            </button>

          </form>


          {/* LOGIN */}

          <div className="signup-login">

            <span>
              Already have an account?
            </span>

            <a href="/login">
              Sign in
              <ArrowRight
                size={14}
                strokeWidth={1.7}
              />
            </a>

          </div>


          <p className="signup-terms">
            By creating an account, you agree to our
            Terms of Service and Privacy Policy.
          </p>

        </div>

      </section>

    </main>
  );
}

export default SignupPage;