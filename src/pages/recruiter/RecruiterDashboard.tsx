import { useState } from "react";
import {
  ArrowUpRight,
  Bell,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  FileText,
  LayoutDashboard,
  LogOut,
  Menu,
  MoreHorizontal,
  Search,
  Settings,
  Target,
  TrendingUp,
  User,
  Users,
  X,
  Plus,
  MapPin,
  Clock3,
} from "lucide-react";

import "./RecruiterDashboard.css";

interface Opportunity {
  title: string;
  type: string;
  location: string;
  applications: number;
  matches: number;
  status: "Active" | "Draft";
}

interface Candidate {
  name: string;
  role: string;
  skills: string[];
  match: number;
  experience: string;
}

const opportunities: Opportunity[] = [
  {
    title: "Frontend Developer Intern",
    type: "Internship",
    location: "Remote",
    applications: 32,
    matches: 8,
    status: "Active",
  },
  {
    title: "Data Analyst Intern",
    type: "Internship",
    location: "Bengaluru",
    applications: 46,
    matches: 11,
    status: "Active",
  },
  {
    title: "React Developer",
    type: "Full-time",
    location: "Hybrid",
    applications: 18,
    matches: 6,
    status: "Active",
  },
];

const candidates: Candidate[] = [
  {
    name: "Aarav Sharma",
    role: "Frontend Developer",
    skills: ["React", "JavaScript", "Node.js"],
    match: 94,
    experience: "2 projects",
  },
  {
    name: "Ananya Verma",
    role: "Full Stack Developer",
    skills: ["React", "MongoDB", "Express"],
    match: 89,
    experience: "3 projects",
  },
  {
    name: "Rohan Mehta",
    role: "Web Developer",
    skills: ["JavaScript", "Node.js", "MongoDB"],
    match: 84,
    experience: "2 projects",
  },
];

const navItems = [
  {
    label: "Overview",
    icon: LayoutDashboard,
  },
  {
    label: "My Opportunities",
    icon: BriefcaseBusiness,
  },
  {
    label: "Post Opportunity",
    icon: Plus,
  },
  {
    label: "Candidate Matches",
    icon: Target,
  },
  {
    label: "Applications",
    icon: FileText,
  },
  {
    label: "Saved Candidates",
    icon: Users,
  },
];

function RecruiterDashboard() {
  const [activeItem, setActiveItem] = useState("Overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleNavigation = (label: string) => {
    setActiveItem(label);
    setSidebarOpen(false);
  };

  return (
    <div className="recruiter-dashboard">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="recruiter-sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`recruiter-sidebar ${
          sidebarOpen ? "recruiter-sidebar-open" : ""
        }`}
      >
        <div className="recruiter-sidebar-top">
          <div className="recruiter-brand">
            <div className="recruiter-brand-mark">S</div>

            <div>
              <h2>SkillBridge</h2>
              <span>Recruiter Portal</span>
            </div>
          </div>

          <button
            className="recruiter-mobile-close"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={19} />
          </button>
        </div>

        <div className="recruiter-workspace-label">WORKSPACE</div>

        <nav className="recruiter-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.label;

            return (
              <button
                key={item.label}
                className={`recruiter-nav-item ${
                  isActive ? "recruiter-nav-active" : ""
                }`}
                onClick={() => handleNavigation(item.label)}
              >
                <Icon size={18} strokeWidth={1.8} />
                <span>{item.label}</span>

                {item.label === "Applications" && (
                  <span className="recruiter-nav-count">18</span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="recruiter-sidebar-bottom">
          <button
            className={`recruiter-nav-item ${
              activeItem === "Company Profile" ? "recruiter-nav-active" : ""
            }`}
            onClick={() => handleNavigation("Company Profile")}
          >
            <User size={18} strokeWidth={1.8} />
            <span>Company Profile</span>
          </button>

          <button
            className={`recruiter-nav-item ${
              activeItem === "Settings" ? "recruiter-nav-active" : ""
            }`}
            onClick={() => handleNavigation("Settings")}
          >
            <Settings size={18} strokeWidth={1.8} />
            <span>Settings</span>
          </button>

          <button className="recruiter-nav-item">
            <CircleHelp size={18} strokeWidth={1.8} />
            <span>Help & Support</span>
          </button>

          <div className="recruiter-account">
            <div className="recruiter-avatar">T</div>

            <div className="recruiter-account-info">
              <strong>TechNova</strong>
              <span>Recruiter</span>
            </div>

            <button className="recruiter-account-more">
              <MoreHorizontal size={18} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Area */}
      <div className="recruiter-main-area">
        {/* Topbar */}
        <header className="recruiter-topbar">
          <div className="recruiter-topbar-left">
            <button
              className="recruiter-menu-button"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={21} />
            </button>

            <div className="recruiter-search">
              <Search size={18} strokeWidth={1.8} />
              <input
                type="text"
                placeholder="Search candidates, opportunities..."
              />
            </div>
          </div>

          <div className="recruiter-topbar-right">
            <button className="recruiter-icon-button">
              <Bell size={19} strokeWidth={1.8} />
              <span className="recruiter-notification-dot" />
            </button>

            <div className="recruiter-profile-wrapper">
              <button
                className="recruiter-profile"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <div className="recruiter-profile-avatar">T</div>

                <div className="recruiter-profile-text">
                  <strong>TechNova</strong>
                  <span>Recruiter</span>
                </div>

                <ChevronRight
                  size={16}
                  className={`recruiter-profile-chevron ${
                    profileOpen ? "profile-chevron-open" : ""
                  }`}
                />
              </button>

              {profileOpen && (
                <div className="recruiter-profile-dropdown">
                  <button>
                    <User size={16} />
                    Company Profile
                  </button>

                  <button>
                    <Settings size={16} />
                    Settings
                  </button>

                  <div />

                  <button className="recruiter-logout">
                    <LogOut size={16} />
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="recruiter-content">
          {/* Header */}
          <section className="recruiter-welcome">
            <div>
              <p className="recruiter-eyebrow">RECRUITER OVERVIEW</p>

              <h1>Good evening, TechNova.</h1>

              <p>
                Find the right talent through skills, not just resumes.
              </p>
            </div>

            <button className="recruiter-primary-button">
              <Plus size={17} />
              Post Opportunity
              <ArrowUpRight size={16} />
            </button>
          </section>

          {/* Stats */}
          <section className="recruiter-stats-grid">
            <div className="recruiter-stat-card">
              <div className="recruiter-stat-top">
                <span>Active Opportunities</span>

                <div className="recruiter-stat-icon">
                  <BriefcaseBusiness size={18} />
                </div>
              </div>

              <strong>04</strong>

              <p>
                <TrendingUp size={14} />
                2 added this month
              </p>
            </div>

            <div className="recruiter-stat-card">
              <div className="recruiter-stat-top">
                <span>Total Applications</span>

                <div className="recruiter-stat-icon">
                  <FileText size={18} />
                </div>
              </div>

              <strong>128</strong>

              <p>
                <TrendingUp size={14} />
                18% from last month
              </p>
            </div>

            <div className="recruiter-stat-card">
              <div className="recruiter-stat-top">
                <span>Matched Candidates</span>

                <div className="recruiter-stat-icon">
                  <Target size={18} />
                </div>
              </div>

              <strong>36</strong>

              <p>
                <TrendingUp size={14} />
                Skill-based matches
              </p>
            </div>

            <div className="recruiter-stat-card">
              <div className="recruiter-stat-top">
                <span>Shortlisted</span>

                <div className="recruiter-stat-icon">
                  <CheckCircle2 size={18} />
                </div>
              </div>

              <strong>12</strong>

              <p>
                <span className="recruiter-neutral-dot" />
                Candidates this month
              </p>
            </div>
          </section>

          {/* Main Grid */}
          <section className="recruiter-dashboard-grid">
            {/* Opportunities */}
            <div className="recruiter-panel recruiter-opportunities-panel">
              <div className="recruiter-panel-header">
                <div>
                  <span className="recruiter-panel-label">
                    YOUR OPPORTUNITIES
                  </span>
                  <h2>Open positions</h2>
                </div>

                <button className="recruiter-view-all">
                  View all
                  <ArrowUpRight size={15} />
                </button>
              </div>

              <div className="recruiter-opportunity-list">
                {opportunities.map((opportunity) => (
                  <div
                    className="recruiter-opportunity"
                    key={opportunity.title}
                  >
                    <div className="recruiter-opportunity-icon">
                      <BriefcaseBusiness size={18} />
                    </div>

                    <div className="recruiter-opportunity-info">
                      <div className="recruiter-opportunity-title-row">
                        <h3>{opportunity.title}</h3>

                        <span className="recruiter-status">
                          <span />
                          {opportunity.status}
                        </span>
                      </div>

                      <div className="recruiter-opportunity-meta">
                        <span>{opportunity.type}</span>

                        <span>
                          <MapPin size={13} />
                          {opportunity.location}
                        </span>

                        <span>
                          <Users size={13} />
                          {opportunity.applications} applications
                        </span>
                      </div>
                    </div>

                    <div className="recruiter-match-box">
                      <strong>{opportunity.matches}</strong>
                      <span>matches</span>
                    </div>

                    <button className="recruiter-more-button">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Candidate Matches */}
            <div className="recruiter-panel recruiter-candidates-panel">
              <div className="recruiter-panel-header">
                <div>
                  <span className="recruiter-panel-label">
                    SKILL-BASED MATCHING
                  </span>
                  <h2>Top candidates</h2>
                </div>

                <button className="recruiter-view-all">
                  Explore
                  <ArrowUpRight size={15} />
                </button>
              </div>

              <div className="recruiter-candidate-list">
                {candidates.map((candidate) => (
                  <div className="recruiter-candidate" key={candidate.name}>
                    <div className="recruiter-candidate-avatar">
                      {candidate.name.charAt(0)}
                    </div>

                    <div className="recruiter-candidate-info">
                      <h3>{candidate.name}</h3>

                      <span>{candidate.role}</span>

                      <div className="recruiter-skills">
                        {candidate.skills.map((skill) => (
                          <span key={skill}>{skill}</span>
                        ))}
                      </div>
                    </div>

                    <div className="recruiter-candidate-match">
                      <strong>{candidate.match}%</strong>
                      <span>match</span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="recruiter-candidates-footer">
                View all matched candidates
                <ChevronRight size={16} />
              </button>
            </div>
          </section>

          {/* Bottom Section */}
          <section className="recruiter-bottom-grid">
            {/* Skill Demand */}
            <div className="recruiter-panel recruiter-demand-panel">
              <div className="recruiter-panel-header">
                <div>
                  <span className="recruiter-panel-label">
                    TALENT INSIGHTS
                  </span>
                  <h2>Skills in demand</h2>
                </div>

                <button className="recruiter-more-button">
                  <MoreHorizontal size={18} />
                </button>
              </div>

              <div className="recruiter-skill-demand">
                <div className="recruiter-demand-row">
                  <div>
                    <strong>React</strong>
                    <span>42 candidates</span>
                  </div>

                  <div className="recruiter-demand-bar">
                    <span style={{ width: "88%" }} />
                  </div>

                  <strong>88%</strong>
                </div>

                <div className="recruiter-demand-row">
                  <div>
                    <strong>JavaScript</strong>
                    <span>38 candidates</span>
                  </div>

                  <div className="recruiter-demand-bar">
                    <span style={{ width: "80%" }} />
                  </div>

                  <strong>80%</strong>
                </div>

                <div className="recruiter-demand-row">
                  <div>
                    <strong>Node.js</strong>
                    <span>31 candidates</span>
                  </div>

                  <div className="recruiter-demand-bar">
                    <span style={{ width: "68%" }} />
                  </div>

                  <strong>68%</strong>
                </div>

                <div className="recruiter-demand-row">
                  <div>
                    <strong>MongoDB</strong>
                    <span>27 candidates</span>
                  </div>

                  <div className="recruiter-demand-bar">
                    <span style={{ width: "57%" }} />
                  </div>

                  <strong>57%</strong>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="recruiter-action-card">
              <div className="recruiter-action-number">01</div>

              <div className="recruiter-action-content">
                <span>BUILD YOUR TALENT PIPELINE</span>

                <h2>
                  Need someone
                  <br />
                  specific?
                </h2>

                <p>
                  Create an opportunity and let SkillBridge find candidates
                  based on their verified skills.
                </p>

                <button>
                  Create opportunity
                  <ArrowUpRight size={16} />
                </button>
              </div>

              <div className="recruiter-action-decoration">
                <Target size={80} strokeWidth={0.7} />
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="recruiter-dashboard-footer">
            <span>SkillBridge Recruiter Portal</span>

            <div>
              <span>Academia</span>
              <span>×</span>
              <span>Industry</span>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default RecruiterDashboard;