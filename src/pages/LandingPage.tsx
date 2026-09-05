import { useEffect ,useRef, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  GraduationCap,
  Layers3,
  Sparkles,
  Target ,
  X,
} from "lucide-react";
import "./LandingPage.css";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

interface ScrambleButtonProps {
  children: string;
  className?: string;
  onClick? :() => void;
}

function ScrambleButton({
  children,
  className = "",
  onClick,

}: ScrambleButtonProps) {
  const [text, setText] = useState(children);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scramble = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    let iteration = 0;

    intervalRef.current = setInterval(() => {
      setText(
        children
          .split("")
          .map((letter, index) => {
            if (index < iteration) return letter;

            return characters[
              Math.floor(Math.random() * characters.length)
            ];
          })
          .join("")
      );

      iteration += 0.5;

      if (iteration >= children.length) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }

        setText(children);
      }
    }, 35);
  };

  return (
    <button
      className={`scramble-button ${className}`}
      onMouseEnter={scramble}
      onClick={onClick}
    >
      <span>{text}</span>
     <ArrowRight size={17} strokeWidth={1.8} />
    </button>
  );
}

const steps = [
  {
    number: "01",
    title: "Build your profile",
    description:
      "Create a profile that captures your academic background, skills, interests and career goals.",
    icon: GraduationCap,
  },
  {
    number: "02",
    title: "Assess your skills",
    description:
      "Take skill-based assessments designed to understand your current technical and professional capabilities.",
    icon: Target,
  },
  {
    number: "03",
    title: "Find your skill gaps",
    description:
      "Understand where you stand and identify the exact skills you need to improve for your target roles.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Discover opportunities",
    description:
      "Get internships, jobs, courses and industry programs matched to your skills and interests.",
    icon: BriefcaseBusiness,
  },
  {
    number: "05",
    title: "Connect with industry",
    description:
      "Move from learning to opportunity by connecting your profile directly with relevant industry requirements.",
    icon: Building2,
  },
];

const reasons = [
  {
    number: "01",
    title: "All-in-one",
    description:
      "Assessment, skill analysis, learning and opportunities in one connected platform.",
    icon: Layers3,
  },
  {
    number: "02",
    title: "Skill-first",
    description:
      "Recommendations are driven by what you know, what you need and where you want to go.",
    icon: Target,
  },
  {
    number: "03",
    title: "Industry-ready",
    description:
      "Connect academic learning with the skills and requirements companies actually look for.",
    icon: Building2,
  },
  {
    number: "04",
    title: "Personalized",
    description:
      "Every student gets a different pathway based on their profile, assessment and goals.",
    icon: Sparkles,
  },
];

function LandingPage() {
  const [showRoleModal, setShowRoleModal] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowRoleModal(false);
      }
    };

    if (showRoleModal) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [showRoleModal]);

const handleRoleSelect = (
  role: "student" | "recruiter"
) => {
  window.location.href = `/signup?role=${role}`;
};

  return (
    <main className="landing-page">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="navbar">

        <div className="brand">
          <div className="brand-mark">
            <Sparkles size={21} strokeWidth={1.8} />
          </div>

          <div className="brand-copy">
            <span className="brand-name">SkillBridge</span>
            <span className="brand-tagline">
              ACADEMIA × INDUSTRY
            </span>
          </div>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#how-it-works">How it works</a>
          <a href="#platform">Platform</a>
          <a href="#why-us">Why us</a>
        </div>

      <ScrambleButton
  className="nav-cta"
  onClick={() => setShowRoleModal(true)}
>
  Get Started
</ScrambleButton>
      </nav>
{/* =====================================================
    ROLE SELECTION MODAL
===================================================== */}
{showRoleModal && (
  <div
    className="role-modal-overlay"
    onMouseDown={(event) => {
      if (event.target === event.currentTarget) {
        setShowRoleModal(false);
      }
    }}
  >
    <div className="role-modal">

      {/* CLOSE */}
      <button
        className="role-modal-close"
        onClick={() => setShowRoleModal(false)}
        aria-label="Close"
      >
        <X size={19} strokeWidth={1.7} />
      </button>

      {/* HEADER */}
      <div className="role-modal-header">

        <div className="role-modal-mark">
          <Sparkles size={20} strokeWidth={1.7} />
        </div>

        <div className="role-modal-kicker">
          GET STARTED
        </div>

        <h2>
          Choose your
          <br />
          <em>path.</em>
        </h2>

        <p>
          Tell us how you want to use SkillBridge.
          We'll take you to the right experience.
        </p>

      </div>

      {/* ROLE OPTIONS */}
      <div className="role-options">

        {/* STUDENT */}
        <button
          className="role-card"
          onClick={() => handleRoleSelect("student")}
        >
          <div className="role-card-top">

            <div className="role-icon">
              <GraduationCap
                size={25}
                strokeWidth={1.6}
              />
            </div>

            <ArrowRight
              className="role-arrow"
              size={20}
              strokeWidth={1.5}
            />

          </div>

          <div className="role-card-content">
            <span className="role-label">
              FOR STUDENTS
            </span>

            <h3>
              I'm a Student
            </h3>

            <p>
              Assess your skills, discover your gaps
              and find opportunities matched to you.
            </p>
          </div>

          <div className="role-card-bottom">
            <span>Student Dashboard</span>
          </div>

        </button>


        {/* RECRUITER */}
        <button
          className="role-card"
          onClick={() => handleRoleSelect("recruiter")}
        >
          <div className="role-card-top">

            <div className="role-icon">
              <BriefcaseBusiness
                size={25}
                strokeWidth={1.6}
              />
            </div>

            <ArrowRight
              className="role-arrow"
              size={20}
              strokeWidth={1.5}
            />

          </div>

          <div className="role-card-content">
            <span className="role-label">
              FOR INDUSTRY
            </span>

            <h3>
              I'm a Recruiter
            </h3>

            <p>
              Define skill requirements, discover
              matched talent and hire with confidence.
            </p>
          </div>

          <div className="role-card-bottom">
            <span>Recruiter Dashboard</span>
          </div>

        </button>

      </div>

      {/* FOOTER */}
      <div className="role-modal-footer">
        <span>Already have an account?</span>

        <button
          onClick={() => {
            setShowRoleModal(false);
            console.log("Sign in");
          }}
        >
          Sign in
          <ArrowRight size={14} strokeWidth={1.7} />
        </button>
      </div>

    </div>
  </div>
)}

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero-section" id="home">

        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />

        <div className="hero-content">

          <div className="hero-eyebrow">
            <span />
            Academia × Industry Collaboration
          </div>

          <h1 className="hero-title">
            <span>Build</span>
            <span>skills.</span>
            <span className="muted">Find</span>
            <span className="muted">opportunities.</span>
          </h1>

          <p className="hero-description">
            A unified platform that helps students understand
            their skills, identify gaps, discover opportunities
            and connect with industry.
          </p>

          <div className="hero-actions">
           <ScrambleButton
  className="primary-button"
  onClick={() => setShowRoleModal(true)}
>
  Explore Platform
</ScrambleButton>

            <a
              href="#how-it-works"
              className="secondary-button"
            >
              See how it works
              <ArrowRight size={17} strokeWidth={1.8} />
            </a>
          </div>

          <div className="hero-note">
            <CheckCircle2 size={15} />
            <span>Built around skills, not just degrees.</span>
          </div>

        </div>


        {/* =================================================
            PC + VIDEO
        ================================================= */}

        <div className="hero-visual">

          <div className="computer">

            <div className="computer-frame">

              <div className="computer-screen">

                <div className="browser-bar">
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                  <span className="browser-dot" />

                  <span className="browser-address">
                    skillbridge / opportunities
                  </span>
                </div>

                {/* ACTUAL VIDEO INSIDE PC */}

                <div className="screen-video">
                  <video
                    className="internship-video"
                    src="/internship-video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>

              </div>
            </div>

            <div className="computer-base">
              <div className="computer-neck" />
              <div className="computer-foot" />
            </div>

          </div>


          {/* FLOATING MATCH CARD */}

          <div className="floating-card skill-match-card">
            <div className="floating-icon">
              <Target size={18} />
            </div>

            <div className="floating-copy">
              <span>Skill Match</span>
              <strong>92%</strong>
            </div>
          </div>


          {/* FLOATING OPPORTUNITY CARD */}

          <div className="floating-card opportunity-card">
            <div className="floating-icon">
              <BriefcaseBusiness size={18} />
            </div>

            <div className="floating-copy">
              <span>New opportunity</span>
              <strong>Internship</strong>
            </div>
          </div>

        </div>

      </section>


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section
        className="how-section"
        id="how-it-works"
      >

        <div className="section-heading">

          <div className="section-kicker">
            <span>01</span>
            HOW IT WORKS
          </div>

          <h2>
            From where you are
            <br />
            <em>to where you want to be.</em>
          </h2>

          <p>
            SkillBridge creates a clear path between academic
            learning and industry opportunities.
          </p>

        </div>


        <div className="timeline">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                className="timeline-item"
                key={step.number}
              >

                <div className="timeline-number">
                  {step.number}
                </div>

                <div className="timeline-icon">
                  <Icon
                    size={22}
                    strokeWidth={1.6}
                  />
                </div>

                <div className="timeline-content">

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>

                </div>

                <ArrowRight
                  className="timeline-arrow"
                  size={20}
                  strokeWidth={1.5}
                />

              </div>
            );
          })}

        </div>

      </section>


{/* =====================================================
    FOR STUDENTS / FOR INDUSTRY
===================================================== */}

<section className="audience-section" id="platform">

  <div className="section-heading audience-heading">
    <div className="section-kicker">
      <span>02</span>
      ONE PLATFORM · TWO SIDES
    </div>

    <h2>
      Built for both sides
      <br />
      <em>of the bridge.</em>
    </h2>

    <p>
      SkillBridge connects students looking for opportunities
      with industries looking for the right skills.
    </p>
  </div>

  <div className="audience-grid">

    {/* STUDENT */}
    <article className="audience-card student-card">

      <div className="audience-card-top">
        <div className="audience-icon">
          <GraduationCap size={25} strokeWidth={1.6} />
        </div>

        <span className="audience-label">
          FOR STUDENTS
        </span>
      </div>

      <div className="audience-content">
        <h3>
          Know where you stand.
          <br />
          <em>Know where to go.</em>
        </h3>

        <p>
          Discover your strengths, identify skill gaps and
          get personalized learning and career opportunities.
        </p>
      </div>

      <div className="audience-flow">

        <div className="audience-step">
          <span>01</span>
          <strong>Build Profile</strong>
        </div>

        <div className="audience-flow-line" />

        <div className="audience-step">
          <span>02</span>
          <strong>Take Assessment</strong>
        </div>

        <div className="audience-flow-line" />

        <div className="audience-step">
          <span>03</span>
          <strong>Find Skill Gaps</strong>
        </div>

        <div className="audience-flow-line" />

        <div className="audience-step">
          <span>04</span>
          <strong>Get Opportunities</strong>
        </div>

      </div>

      <div className="audience-card-footer">
        <span>Student Dashboard</span>
        <ArrowRight size={18} strokeWidth={1.6} />
      </div>

    </article>


    {/* INDUSTRY */}
    <article className="audience-card industry-card">

      <div className="audience-card-top">
        <div className="audience-icon">
          <BriefcaseBusiness size={25} strokeWidth={1.6} />
        </div>

        <span className="audience-label">
          FOR INDUSTRY
        </span>
      </div>

      <div className="audience-content">
        <h3>
          Define what you need.
          <br />
          <em>Find who matches.</em>
        </h3>

        <p>
          Define skill requirements, post opportunities and
          discover students whose capabilities match your needs.
        </p>
      </div>

      <div className="audience-flow">

        <div className="audience-step">
          <span>01</span>
          <strong>Define Skills</strong>
        </div>

        <div className="audience-flow-line" />

        <div className="audience-step">
          <span>02</span>
          <strong>Post Opportunity</strong>
        </div>

        <div className="audience-flow-line" />

        <div className="audience-step">
          <span>03</span>
          <strong>Find Matches</strong>
        </div>

        <div className="audience-flow-line" />

        <div className="audience-step">
          <span>04</span>
          <strong>Shortlist Talent</strong>
        </div>

      </div>

      <div className="audience-card-footer">
        <span>Industry Dashboard</span>
        <ArrowRight size={18} strokeWidth={1.6} />
      </div>

    </article>

  </div>

</section>



      {/* =====================================================
          WHY SKILLBRIDGE
      ===================================================== */}

      <section
        className="why-section"
        id="why-us"
      >

        <div className="section-heading why-heading">

          <div className="section-kicker">
            <span>03</span>
            WHY SKILLBRIDGE
          </div>

          <h2>
            One platform.
            <br />
            <em>A better bridge.</em>
          </h2>

          <p>
            Instead of treating education and employment as
            separate journeys, SkillBridge connects them.
          </p>

        </div>


        <div className="reason-grid">

          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                className="reason-card"
                key={reason.number}
              >

                <div className="reason-top">

                  <span>{reason.number}</span>

                  <div className="reason-icon">
                    <Icon
                      size={22}
                      strokeWidth={1.6}
                    />
                  </div>

                </div>

                <div>

                  <h3>{reason.title}</h3>

                  <p>{reason.description}</p>

                </div>

                <div className="reason-line" />

              </article>
            );
          })}

        </div>

      </section>


      {/* =====================================================
          ECOSYSTEM
      ===================================================== */}

      <section className="ecosystem-section">

        <div className="ecosystem-grid">

          <div className="ecosystem-copy">

            <div className="section-kicker light">
              <span>04</span>
              THE ECOSYSTEM
            </div>

            <h2>
              Everyone moves
              <br />
              <em>forward together.</em>
            </h2>

            <p>
              Students build capabilities. Academia understands
              outcomes. Industry discovers relevant talent.
              SkillBridge brings the three together.
            </p>

          <ScrambleButton
  className="light-button"
  onClick={() => setShowRoleModal(true)}
>
  Get Started
</ScrambleButton>

          </div>


          {/* ================================
              ECOSYSTEM DIAGRAM
          ================================= */}

         <div className="ecosystem-visual">

  {/* Background grid */}
  <div className="ecosystem-grid-pattern" />

  {/* Decorative rings */}
  <div className="ecosystem-ring ecosystem-ring-large" />
  <div className="ecosystem-ring ecosystem-ring-small" />

  {/* CONNECTION SYSTEM */}
  <svg
    className="ecosystem-connections"
    viewBox="0 0 700 520"
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
  >
    {/* Student → SkillBridge */}
    <line
      x1="145"
      y1="105"
      x2="350"
      y2="260"
      className="ecosystem-line"
    />

    {/* Academia → SkillBridge */}
    <line
      x1="555"
      y1="105"
      x2="350"
      y2="260"
      className="ecosystem-line"
    />

    {/* Industry → SkillBridge */}
    <line
      x1="350"
      y1="445"
      x2="350"
      y2="260"
      className="ecosystem-line"
    />

    {/* Connection dots */}
    <circle
      cx="145"
      cy="105"
      r="4"
      className="connection-dot"
    />

    <circle
      cx="555"
      cy="105"
      r="4"
      className="connection-dot"
    />

    <circle
      cx="350"
      cy="445"
      r="4"
      className="connection-dot"
    />

    <circle
      cx="350"
      cy="260"
      r="5"
      className="connection-dot-center"
    />
  </svg>


  {/* STUDENT */}
  <div className="ecosystem-node ecosystem-student">

    <div className="ecosystem-node-icon">
      <GraduationCap
        size={22}
        strokeWidth={1.7}
      />
    </div>

    <div className="ecosystem-node-copy">
      <strong>Student</strong>
      <span>Build skills</span>
    </div>

  </div>


  {/* ACADEMIA */}
  <div className="ecosystem-node ecosystem-academia">

    <div className="ecosystem-node-icon">
      <Building2
        size={22}
        strokeWidth={1.7}
      />
    </div>

    <div className="ecosystem-node-copy">
      <strong>Academia</strong>
      <span>Enable growth</span>
    </div>

  </div>


  {/* INDUSTRY */}
  <div className="ecosystem-node ecosystem-industry">

    <div className="ecosystem-node-icon">
      <BriefcaseBusiness
        size={22}
        strokeWidth={1.7}
      />
    </div>

    <div className="ecosystem-node-copy">
      <strong>Industry</strong>
      <span>Find talent</span>
    </div>

  </div>


  {/* CENTER */}
  <div className="ecosystem-center">

    <div className="ecosystem-center-icon">
      <Sparkles
        size={28}
        strokeWidth={1.5}
      />
    </div>

    <strong>SkillBridge</strong>

    <span>THE BRIDGE</span>

  </div>


  {/* Decorative dots */}
  <span className="ecosystem-dot dot-1" />
  <span className="ecosystem-dot dot-2" />
  <span className="ecosystem-dot dot-3" />
  <span className="ecosystem-dot dot-4" />

</div>
        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="footer-main">

          <div className="footer-brand">

            <div className="brand">

              <div className="brand-mark">
                <Sparkles
                  size={20}
                  strokeWidth={1.8}
                />
              </div>

              <div className="brand-copy">

                <span className="brand-name">
                  SkillBridge
                </span>

                <span className="brand-tagline">
                  ACADEMIA × INDUSTRY
                </span>

              </div>

            </div>

            <p>
              Bridging academia with industry,
              <br />
              one skill at a time.
            </p>

          </div>


          <div className="footer-links">

            <div>

              <span className="footer-title">
                PLATFORM
              </span>

              <a href="#home">Home</a>
              <a href="#how-it-works">
                How it works
              </a>
              <a href="#why-us">
                Why SkillBridge
              </a>

            </div>


            <div>

              <span className="footer-title">
                ECOSYSTEM
              </span>

              <a href="#home">Students</a>
              <a href="#home">Academia</a>
              <a href="#home">Industry</a>

            </div>


            <div>

              <span className="footer-title">
                EXPLORE
              </span>

              <a href="#home">Opportunities</a>
              <a href="#home">Assessments</a>
              <a href="#home">Resources</a>

            </div>

          </div>

        </div>


        <div className="footer-bottom">
          <span>© 2026 SkillBridge</span>
          <span>
            Bridging Academia with Industry
          </span>
        </div>

      </footer>

    </main>
  );
}

export default LandingPage;