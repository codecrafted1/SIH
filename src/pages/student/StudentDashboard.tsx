import {
  ArrowRight,
  Bell,
  BookOpen,
  BriefcaseBusiness,
  ChevronDown,
  CircleHelp,
  FileText,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Menu,
  Search,
  Settings,
  Target,
  TrendingUp,
  User,
  X,
} from "lucide-react";
import { useState } from "react";

import "./StudentDashboard.css";

const skills = [
  { name: "JavaScript", score: 82 },
  { name: "React", score: 64 },
  { name: "Node.js", score: 42 },
  { name: "MongoDB", score: 51 },
];

const opportunities = [
  {
    type: "Internship",
    title: "Frontend Developer Intern",
    company: "TechNova",
    match: 92,
    location: "Remote",
  },
  {
    type: "Internship",
    title: "React Developer Intern",
    company: "CodeLabs",
    match: 87,
    location: "Bengaluru",
  },
  {
    type: "Job",
    title: "Junior Web Developer",
    company: "Nexora",
    match: 81,
    location: "Hybrid",
  },
];

const navItems = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "My Profile", icon: User },
  { label: "Skill Assessment", icon: FileText },
  { label: "Skill Analysis", icon: Target },
  { label: "Opportunities", icon: BriefcaseBusiness },
  { label: "Learning", icon: BookOpen },
  { label: "Applications", icon: GraduationCap },
  { label: "Progress", icon: TrendingUp },
];

function StudentDashboard() {
  const [activeItem, setActiveItem] = useState("Overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="student-dashboard">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`student-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-top">
          <div className="dashboard-logo">
            <div className="logo-mark">S</div>

            <div>
              <h2>SkillBridge</h2>
              <span>Student Portal</span>
            </div>
          </div>

          <button
            className="mobile-close"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="dashboard-nav">
          <p className="nav-label">WORKSPACE</p>

          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                className={`nav-item ${
                  activeItem === item.label ? "active" : ""
                }`}
                onClick={() => {
                  setActiveItem(item.label);
                  setSidebarOpen(false);
                }}
              >
                <Icon size={19} strokeWidth={1.8} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-bottom">
          <div className="profile-progress">
            <div className="progress-heading">
              <span>Profile completion</span>
              <strong>75%</strong>
            </div>

            <div className="progress-track">
              <div className="progress-fill" style={{ width: "75%" }} />
            </div>

            <p>Complete your profile to improve matching.</p>

            <button>
              Complete profile
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="sidebar-actions">
            <button>
              <Settings size={18} />
              Settings
            </button>

            <button>
              <CircleHelp size={18} />
              Help & Support
            </button>
          </div>
        </div>
      </aside>

      {/* Main Area */}
      <div className="dashboard-main">
        {/* Topbar */}
        <header className="dashboard-topbar">
          <button
            className="mobile-menu"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <Menu size={22} />
          </button>

          <div className="dashboard-search">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search courses, internships, skills..."
            />
          </div>

          <div className="topbar-actions">
            <button className="notification-btn">
              <Bell size={20} strokeWidth={1.8} />
              <span className="notification-dot" />
            </button>

            <div className="profile-menu-wrapper">
              <button
                className="topbar-profile"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <div className="profile-avatar">K</div>

                <div className="profile-info">
                  <strong>Khushi</strong>
                  <span>Student</span>
                </div>

                <ChevronDown size={16} />
              </button>

              {profileOpen && (
                <div className="profile-dropdown">
                  <button>
                    <User size={16} />
                    My Profile
                  </button>

                  <button>
                    <Settings size={16} />
                    Settings
                  </button>

                  <div className="dropdown-divider" />

                  <button className="logout-btn">
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="dashboard-content">
          <section className="welcome-section">
            <div>
              <p className="welcome-eyebrow">STUDENT DASHBOARD</p>

              <h1>
                Good morning, Khushi<span>.</span>
              </h1>

              <p>
                Here's a snapshot of your skills, progress and opportunities
                waiting for you.
              </p>
            </div>

            <button className="assessment-btn">
              Take assessment
              <ArrowRight size={17} />
            </button>
          </section>

          {/* Stats */}
          <section className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <TrendingUp size={20} />
              </div>

              <div className="stat-content">
                <span>Overall Skill Score</span>
                <strong>72%</strong>
                <small className="positive">↑ 8% this month</small>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <FileText size={20} />
              </div>

              <div className="stat-content">
                <span>Assessment Status</span>
                <strong className="stat-status">Completed</strong>
                <small>Last taken 4 days ago</small>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <Target size={20} />
              </div>

              <div className="stat-content">
                <span>Skill Gaps</span>
                <strong>3</strong>
                <small>Need improvement</small>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <BriefcaseBusiness size={20} />
              </div>

              <div className="stat-content">
                <span>Matched Opportunities</span>
                <strong>12</strong>
                <small>Based on your skills</small>
              </div>
            </div>
          </section>

          {/* Main Grid */}
          <section className="dashboard-grid">
            {/* Skills */}
            <div className="dashboard-card skills-card">
              <div className="card-header">
                <div>
                  <span className="card-eyebrow">SKILL PROFILE</span>
                  <h2>Your current skills</h2>
                </div>

                <button className="text-btn">
                  View analysis
                  <ArrowRight size={15} />
                </button>
              </div>

              <div className="skills-list">
                {skills.map((skill) => (
                  <div className="skill-row" key={skill.name}>
                    <div className="skill-meta">
                      <span>{skill.name}</span>
                      <strong>{skill.score}%</strong>
                    </div>

                    <div className="skill-track">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Step */}
            <div className="dashboard-card next-step-card">
              <div className="card-eyebrow">RECOMMENDED NEXT STEP</div>

              <div className="next-step-icon">
                <Target size={22} />
              </div>

              <h2>Strengthen your Node.js skills.</h2>

              <p>
                Your assessment shows that Node.js is currently your biggest
                skill gap for your selected path.
              </p>

              <div className="recommendation-meta">
                <span>3 resources</span>
                <span>•</span>
                <span>~6 hours</span>
              </div>

              <button className="dark-btn">
                Start learning
                <ArrowRight size={16} />
              </button>
            </div>
          </section>

          {/* Opportunities */}
          <section className="dashboard-card opportunities-card">
            <div className="card-header">
              <div>
                <span className="card-eyebrow">FOR YOU</span>
                <h2>Recommended opportunities</h2>
              </div>

              <button className="text-btn">
                View all
                <ArrowRight size={15} />
              </button>
            </div>

            <div className="opportunities-list">
              {opportunities.map((opportunity) => (
                <div className="opportunity-row" key={opportunity.title}>
                  <div className="company-mark">
                    {opportunity.company.charAt(0)}
                  </div>

                  <div className="opportunity-info">
                    <div className="opportunity-title">
                      <h3>{opportunity.title}</h3>
                      <span>{opportunity.type}</span>
                    </div>

                    <p>
                      {opportunity.company} · {opportunity.location}
                    </p>
                  </div>

                  <div className="match-score">
                    <strong>{opportunity.match}%</strong>
                    <span>Match</span>
                  </div>

                  <button className="view-opportunity">
                    View
                    <ArrowRight size={15} />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Grid */}
          <section className="bottom-grid">
            <div className="dashboard-card learning-card">
              <div className="card-header">
                <div>
                  <span className="card-eyebrow">LEARNING</span>
                  <h2>Continue learning</h2>
                </div>

                <button className="text-btn">
                  View all
                  <ArrowRight size={15} />
                </button>
              </div>

              <div className="course-item">
                <div className="course-icon">
                  <BookOpen size={19} />
                </div>

                <div className="course-content">
                  <h3>Node.js Fundamentals</h3>
                  <p>Module 4 of 8</p>

                  <div className="course-progress">
                    <div
                      className="course-progress-fill"
                      style={{ width: "48%" }}
                    />
                  </div>
                </div>

                <strong>48%</strong>
              </div>
            </div>

            <div className="dashboard-card journey-card">
              <div className="card-eyebrow">YOUR JOURNEY</div>

              <h2>Keep building momentum.</h2>

              <p>
                You're making progress. Complete your skill gaps to unlock
                better opportunities.
              </p>

              <div className="journey-stats">
                <div>
                  <strong>4</strong>
                  <span>Skills assessed</span>
                </div>

                <div>
                  <strong>7</strong>
                  <span>Resources completed</span>
                </div>

                <div>
                  <strong>3</strong>
                  <span>Applications</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default StudentDashboard;