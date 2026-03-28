import { RESOURCES, TAG_COLORS } from '../data/mockData'
import './ResourceDashboard.css'

function ResourceCard({ resource }) {
  const color = TAG_COLORS[resource.tag] || '#888'

  return (
    <div className="resource-card card">
      <div className="resource-icon">{resource.icon}</div>
      <h3 className="resource-title">{resource.title}</h3>
      <p className="resource-desc">{resource.desc}</p>
      <div className="resource-footer">
        <span className="resource-count">{resource.count}</span>
        <span className="badge" style={{ background: color + '22', color }}>
          {resource.tag}
        </span>
      </div>
    </div>
  )
}

function ResourceDashboard() {
  return (
    <div className="resource-dashboard">
      <div className="resource-grid">
        {RESOURCES.map(r => (
          <ResourceCard key={r.id} resource={r} />
        ))}
      </div>
    </div>
  )
}

export default ResourceDashboard
