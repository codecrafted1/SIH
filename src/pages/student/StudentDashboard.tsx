import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Bell,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  FileText,
  //GraduationCap,
  LayoutDashboard,
  LogOut,
  Menu,
  MoreHorizontal,
  Search,
  Settings,
  Target,
  TrendingUp,
  User,
  X,
  Zap,
} from "lucide-react";

import "./StudentDashboard.css";

type Skill = {
  name: string;
  score: number;
  level: string;
};

type Opportunity = {
  company: string;
  role: string;
  type: string;
  location: string;
  match: number;
};

const skills: Skill[] = [
  { name: "JavaScript", score: 82, level: "Strong" },
  { name: "React", score: 64, level: "Developing" },
  { name: "MongoDB", score: 51, level: "Developing" },
  { name: "Node.js", score: 42, level: "Needs work" },
];

const opportunities: Opportunity[] = [
  {
    company: "TechNova",
    role: "Frontend Developer Intern",
    type: "Internship",
    location: "Remote",
    match: 92,
  },
  {
    company: "CodeLabs",
    role: "React Developer Intern",
    type: "Internship",
    location: "Bengaluru",
    match: 87,
  },
  {
    company: "Nexora",
    role: "Junior Web Developer",
    type: "Full-time",
    location: "Hybrid",
    match: 81,
  },
];

const navItems = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "My Profile", icon: User },
  { label: "Skill Assessment", icon: FileText },
  { label: "Skill Analysis", icon: Target },
  { label: "Opportunities", icon: BriefcaseBusiness },
  { label: "Learning", icon: BookOpen },
  { label: "Applications", icon: CheckCircle2 },
  { label: "Progress", icon: TrendingUp },
];

function StudentDashboard() {
  const [activeItem, setActiveItem] = useState("Overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="student-dashboard">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <button
          className="dashboard-overlay"
          onClick={closeSidebar}
          aria-label="Close sidebar"
        />
      )}

      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="brand-mark">
            <span>S</span>
          </div>

          <div className="brand-copy">
            <strong>SkillBridge</strong>
            <span>Student Portal</span>
          </div>

          <button
            className="mobile-close"
            onClick={closeSidebar}
            aria-label="Close menu"
          >
            <X size={19} />
          </button>
        </div>

        <div className="sidebar-section-label">WORKSPACE</div>

        <nav className="dashboard-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.label;

            return (
              <button
                key={item.label}
                className={`dashboard-nav-item ${isActive ? "active" : ""}`}
                onClick={() => {
                  setActiveItem(item.label);
                  closeSidebar();
                }}
              >
                <Icon size={18} strokeWidth={1.8} />
                <span>{item.label}</span>

                {item.label === "Opportunities" && (
                  <span className="nav-count">12</span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="sidebar-bottom">
          <div className="completion-card">
            <div className="completion-top">
              <div>
                <span>Profile completion</span>
                <strong>75%</strong>
              </div>
              <span className="completion-icon">
                <TrendingUp size={15} />
              </span>
            </div>

            <div className="completion-track">
              <div className="completion-fill" />
            </div>

            <p>Complete your profile to improve matching.</p>

            <button onClick={() => setActiveItem("My Profile")}>
              Complete profile
              <ArrowUpRight size={14} />
            </button>
          </div>

          <button className="sidebar-extra">
            <Settings size={17} />
            <span>Settings</span>
          </button>

          <button className="sidebar-extra">
            <CircleHelp size={17} />
            <span>Help & Support</span>
          </button>

          <div className="sidebar-profile">
            <div className="profile-avatar">KA</div>

            <div className="sidebar-profile-info">
              <strong>Khushi Ambastha</strong>
              <span>Student</span>
            </div>

            <MoreHorizontal size={18} />
          </div>
        </div>
      </aside>

      {/* Main Area */}
      <div className="dashboard-main">
        {/* Topbar */}
        <header className="dashboard-topbar">
          <div className="topbar-left">
            <button
              className="mobile-menu"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={21} />
            </button>

            <div className="breadcrumb">
              <span>Student Portal</span>
              <ChevronRight size={14} />
              <strong>{activeItem}</strong>
            </div>
          </div>

          <div className="topbar-right">
            <div className="dashboard-search">
              <Search size={17} />
              <input placeholder="Search anything..." />
              <span>⌘ K</span>
            </div>

            <button className="notification-button">
              <Bell size={19} strokeWidth={1.8} />
              <span />
            </button>

            <div className="topbar-profile">
              <button
                className="topbar-profile-button"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <div className="topbar-avatar">KA</div>

                <div>
                  <strong>Khushi</strong>
                  <span>Student</span>
                </div>

                <ChevronRight
                  size={15}
                  className={profileOpen ? "rotate-chevron" : ""}
                />
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
                  <div />
                  <button className="logout-button">
                    <LogOut size={16} />
                    Log out
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="dashboard-content">
          {/* Welcome */}
          <section className="dashboard-welcome">
            <div>
              <div className="welcome-eyebrow">
                <span className="status-dot" />
                Your career workspace
              </div>

              <h1>
                Good evening, Khushi<span>.</span>
              </h1>

              <p>
                Keep building your skills. Your next opportunity is closer
                than you think.
              </p>
            </div>

            <button className="assessment-button">
              <Zap size={17} />
              Take skill assessment
              <ArrowUpRight size={16} />
            </button>
          </section>

          {/* Main Stats */}
          <section className="dashboard-stats">
            <article className="stat-card featured-stat">
              <div className="stat-card-top">
                <span className="stat-label">Overall skill score</span>
                <span className="stat-icon">
                  <Target size={17} />
                </span>
              </div>

              <div className="score-row">
                <strong>72</strong>
                <span>/100</span>

                <div className="score-change">
                  <TrendingUp size={13} />
                  +8%
                </div>
              </div>

              <div className="mini-progress">
                <div style={{ width: "72%" }} />
              </div>

              <p>Above 68% of students in your domain</p>
            </article>

            <article className="stat-card">
              <div className="stat-card-top">
                <span className="stat-label">Skill gaps</span>
                <span className="stat-icon neutral">
                  <Target size={17} />
                </span>
              </div>

              <div className="simple-stat">
                <strong>03</strong>
              </div>

              <div className="stat-bottom">
                <span className="warning-dot" />
                <span>2 high priority</span>
              </div>
            </article>

            <article className="stat-card">
              <div className="stat-card-top">
                <span className="stat-label">Matched opportunities</span>
                <span className="stat-icon neutral">
                  <BriefcaseBusiness size={17} />
                </span>
              </div>

              <div className="simple-stat">
                <strong>12</strong>
              </div>

              <div className="stat-bottom positive">
                <TrendingUp size={14} />
                <span>4 new this week</span>
              </div>
            </article>

            <article className="stat-card">
              <div className="stat-card-top">
                <span className="stat-label">Learning progress</span>
                <span className="stat-icon neutral">
                  <BookOpen size={17} />
                </span>
              </div>

              <div className="simple-stat">
                <strong>48%</strong>
              </div>

              <div className="stat-bottom">
                <span>Node.js Fundamentals</span>
              </div>
            </article>
          </section>

          {/* Main Grid */}
          <section className="dashboard-grid">
            {/* Skill Profile */}
            <article className="dashboard-card skill-card">
              <div className="card-header">
                <div>
                  <span className="card-eyebrow">YOUR SKILLS</span>
                  <h2>Skill profile</h2>
                </div>

                <button className="text-button">
                  View analysis
                  <ArrowUpRight size={14} />
                </button>
              </div>

              <div className="skill-list">
                {skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill-info">
                      <div>
                        <strong>{skill.name}</strong>
                        <span
                          className={`skill-level ${skill.level
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          {skill.level}
                        </span>
                      </div>

                      <strong className="skill-score">{skill.score}%</strong>
                    </div>

                    <div className="skill-track">
                      <div
                        className={`skill-fill ${
                          skill.score < 50
                            ? "low"
                            : skill.score < 70
                              ? "medium"
                              : "high"
                        }`}
                        style={{ width: `${skill.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="skill-footer">
                <div>
                  <span className="legend-dot strong" />
                  Strong
                </div>
                <div>
                  <span className="legend-dot developing" />
                  Developing
                </div>
                <div>
                  <span className="legend-dot gap" />
                  Needs work
                </div>
              </div>
            </article>

            {/* Next Move */}
            <article className="dashboard-card next-move-card">
              <div className="next-move-label">
                <span>
                  <Zap size={14} />
                  RECOMMENDED NEXT MOVE
                </span>

                <span className="priority-tag">HIGH PRIORITY</span>
              </div>

              <h2>Strengthen your Node.js skills</h2>

              <p>
                Your current score is <strong>42%</strong>. Improving this
                skill could unlock <strong>7 more opportunities</strong>.
              </p>

              <div className="gap-visual">
                <div className="gap-score">
                  <strong>42</strong>
                  <span>Current</span>
                </div>

                <div className="gap-line">
                  <span />
                </div>

                <div className="gap-score target">
                  <strong>70</strong>
                  <span>Target</span>
                </div>
              </div>

              <button className="next-move-button">
                View learning path
                <ArrowRight size={16} />
              </button>
            </article>

            {/* Opportunities */}
            <article className="dashboard-card opportunities-card">
              <div className="card-header">
                <div>
                  <span className="card-eyebrow">CAREER MATCHES</span>
                  <h2>Recommended opportunities</h2>
                </div>

                <button className="text-button">
                  View all
                  <ArrowUpRight size={14} />
                </button>
              </div>

              <div className="opportunity-list">
                {opportunities.map((opportunity) => (
                  <div
                    className="opportunity-item"
                    key={`${opportunity.company}-${opportunity.role}`}
                  >
                    <div className="company-logo">
                      {opportunity.company.charAt(0)}
                    </div>

                    <div className="opportunity-main">
                      <strong>{opportunity.role}</strong>
                      <div>
                        <span>{opportunity.company}</span>
                        <i />
                        <span>{opportunity.type}</span>
                        <i />
                        <span>{opportunity.location}</span>
                      </div>
                    </div>

                    <div className="match-score">
                      <strong>{opportunity.match}%</strong>
                      <span>match</span>
                    </div>

                    <button className="opportunity-arrow">
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </article>

            {/* Learning */}
            <article className="dashboard-card learning-card">
              <div className="card-header">
                <div>
                  <span className="card-eyebrow">KEEP LEARNING</span>
                  <h2>Continue learning</h2>
                </div>

                <button className="icon-only-button">
                  <MoreHorizontal size={18} />
                </button>
              </div>

              <div className="learning-content">
                <div className="learning-icon">
                  <BookOpen size={23} />
                </div>

                <div className="learning-info">
                  <span>BACKEND DEVELOPMENT</span>
                  <h3>Node.js Fundamentals</h3>
                  <p>8 lessons · 2h 40m remaining</p>

                  <div className="learning-progress">
                    <div>
                      <span />
                    </div>
                    <strong>48%</strong>
                  </div>
                </div>
              </div>

              <button className="continue-button">
                Continue learning
                <ArrowRight size={15} />
              </button>
            </article>
          </section>

          {/* Bottom Journey */}
          <section className="journey-card">
            <div className="journey-copy">
              <span className="card-eyebrow">YOUR JOURNEY</span>
              <h2>Build. Learn. Connect. Grow.</h2>
              <p>
                Every assessment and learning milestone brings you one step
                closer to becoming industry-ready.
              </p>
            </div>

            <div className="journey-steps">
              <div className="journey-step completed">
                <span className="journey-number">
                  <CheckCircle2 size={16} />
                </span>
                <div>
                  <strong>Profile</strong>
                  <span>Completed</span>
                </div>
              </div>

              <div className="journey-connector active" />

              <div className="journey-step completed">
                <span className="journey-number">
                  <CheckCircle2 size={16} />
                </span>
                <div>
                  <strong>Assessment</strong>
                  <span>Completed</span>
                </div>
              </div>

              <div className="journey-connector active" />

              <div className="journey-step current">
                <span className="journey-number">03</span>
                <div>
                  <strong>Skill gaps</strong>
                  <span>In progress</span>
                </div>
              </div>

              <div className="journey-connector" />

              <div className="journey-step">
                <span className="journey-number">04</span>
                <div>
                  <strong>Opportunities</strong>
                  <span>Next</span>
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