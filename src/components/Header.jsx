import './header.css'

function Header({ activeTab, onTabChange }) {
  const TABS = [
    { id: "events",        label: "Events",     icon: "📅" },
    { id: "announcements", label: "Clubs",      icon: "📢" },
    { id: "notes",         label: "Notes",      icon: "📝" },
    { id: "resources",     label: "Resources",  icon: "📚" },
    { id: "hackathons",    label: "Hackathons", icon: "🏆" },
  ]

  return (
    <header className="header">
      <div className="header-inner">
        {/* Brand */}
        <div className="header-brand">
          <span className="brand-logo">⬡</span>
          <h1 className="brand-name">
            Campus<span className="brand-accent">Hub</span>
          </h1>
          <span className="brand-sub">digital campus</span>
        </div>

        {/* Nav Tabs */}
        <nav className="header-nav">
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => onTabChange(tab.id)}
            >
              <span className="nav-icon">{tab.icon}</span>
              <span className="nav-label">{tab.label}</span>
            </button>
          ))}
        </nav>

        {/* User Avatar */}
        <div className="header-user">
          <div className="notification-bell">🔔</div>
          <div className="user-avatar">RK</div>
        </div>
      </div>
    </header>
  )
}

export default Header
