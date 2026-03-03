import './ProfileSelector.css'

function ProfileSelector({ onProfileSelect }) {
  const profiles = [
    { id: 1, name: 'Viyata', image: '/assets/1.jpg' },
  ]

  return (
    <div className="profile-selector">
      <div className="profile-container">
        <h1 className="profile-title">Who's watching?</h1>
        
        <div className="profiles-grid">
          {profiles.map(profile => (
            <div 
              key={profile.id}
              className="profile-card"
              onClick={() => onProfileSelect(profile.name)}
            >
              <div className="profile-avatar" style={{ backgroundColor: '#FF3E9B', color: '#ffffff' }}>V</div>
              <p className="profile-name">{profile.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileSelector
