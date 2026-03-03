import React, { useState, useRef } from 'react';
import './Header.css';
import netflixLogo from '../assets/Netflix.png';
import SearchBar from './SearchBar';

function Header({ searchTerm, onSearchChange, onProfileClick, allMovies = [], onHome, onViewAllMovies, onViewAllTV }) {
  const [showNotifications, setShowNotifications] = useState(false);

  // Use actual movies from the app for notifications, or create default ones
  const getNotifications = () => {
    if (allMovies.length > 0) {
      const bridgerton = allMovies.find(m => m.title === 'Bridgerton');
      const findingHerEdge = allMovies.find(m => m.title === 'Finding Her Edge');
      const gilmoreGirls = allMovies.find(m => m.title === 'Gilmore Girls');
      const gossipGirl = allMovies.find(m => m.title === 'Gossip Girl');
      const outerBanks = allMovies.find(m => m.title === 'Outer Banks');

      const customNotifications = [];

      if (bridgerton) {
        customNotifications.push({
          id: bridgerton.id,
          title: 'Bridgerton',
          subtitle: 'Part 2 is out now!',
          image: bridgerton.image,
          time: '1 week ago'
        });
      }

      if (findingHerEdge) {
        customNotifications.push({
          id: findingHerEdge.id,
          title: 'You might like',
          subtitle: 'Finding Her Edge',
          image: findingHerEdge.image,
          time: '2 weeks ago'
        });
      }

      if (gilmoreGirls) {
        customNotifications.push({
          id: gilmoreGirls.id,
          title: 'New Release',
          subtitle: 'Gilmore Girls',
          image: gilmoreGirls.image,
          time: '3 weeks ago'
        });
      }

      if (gossipGirl) {
        customNotifications.push({
          id: gossipGirl.id,
          title: 'New Release',
          subtitle: 'Gossip Girl',
          image: gossipGirl.image,
          time: '4 weeks ago'
        });
      }

      if (outerBanks) {
        customNotifications.push({
          id: outerBanks.id,
          title: 'New Release',
          subtitle: 'Outer Banks',
          image: outerBanks.image,
          time: '5 weeks ago'
        });
      }

      return customNotifications.length > 0 ? customNotifications : allMovies.slice(0, 6).map((movie, index) => ({
        id: movie.id,
        title: 'New Release',
        subtitle: movie.title,
        image: movie.image,
        time: `${index + 1} week${index !== 0 ? 's' : ''} ago`
      }));
    }
    return [
      { id: 1, title: 'Now Available', subtitle: 'Season 3', image: '/assets/1.jpg', time: '3 weeks ago' },
      { id: 2, title: 'Behold, forbidden love', subtitle: 'Your romantic escape is here', image: '/assets/2.jpg', time: '3 weeks ago' },
      { id: 3, title: 'Now Available', subtitle: 'Live Episode', image: '/assets/3.jpg', time: '4 weeks ago' },
      { id: 4, title: 'Netflix Lookahead', subtitle: 'Explore what\'s coming soon.', image: '/assets/4.jpg', time: '1 month ago' },
      { id: 5, title: 'New Arrival', subtitle: 'Veronica Mars', image: '/assets/5.jpg', time: '1 month ago' },
    ];
  };

  const notifications = getNotifications();

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img 
            src={netflixLogo}
            alt="Netflix"
            className="netflix-logo"
          />
        </div>
        
        <nav className="nav-menu">
          <a href="#" className="nav-item active" onClick={(e) => { e.preventDefault(); onHome?.() }}>Home</a>
          <a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); onViewAllTV?.() }}>TV Shows</a>
          <a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); onViewAllMovies?.() }}>Movies</a>
        </nav>

        <div className="header-spacer"></div>

        <div className="header-right">
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={onSearchChange}
          />

          <div className="notification-container">
            <button 
              className="notification-btn" 
              title="Notifications"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="style=linear">
                  <g id="notification-bell-new">
                    <path id="vector" d="M14.7356 19.5801C14.7356 19.8834 14.658 20.1838 14.5073 20.4641C14.3565 20.7444 14.1356 20.9991 13.857 21.2136C13.5785 21.4281 13.2478 21.5983 12.8839 21.7144C12.52 21.8304 12.1299 21.8902 11.736 21.8902C11.3421 21.8902 10.9521 21.8304 10.5881 21.7144C10.2242 21.5983 9.89354 21.4281 9.61501 21.2136C9.33647 20.9991 9.11552 20.7444 8.96478 20.4641C8.81404 20.1838 8.73645 19.8834 8.73645 19.5801" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path>
                    <path id="vector_2" d="M18.7917 10.9112C18.8915 11.7454 19.1223 12.5607 19.4774 13.3265L19.7421 13.8972C20.7516 16.0741 19.4369 18.6186 17.0773 19.0547L16.9171 19.0843C13.4921 19.7174 9.98001 19.7174 6.55497 19.0843C4.17606 18.6446 2.91751 16.0127 4.06867 13.885L4.29508 13.4665C4.91326 12.3239 5.23697 11.0453 5.23697 9.74614L5.23697 8.42485C5.23697 6.20106 6.49561 4.16885 8.48651 3.1781C10.2177 2.3166 12.1995 2.15641 14.0267 2.70339" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path>
                    <circle id="vector_3" cx="17.8599" cy="6.03711" r="2.5" stroke="#ffffff" strokeWidth="1.5"></circle>
                  </g>
                </g>
              </svg>
            </button>
            
            {showNotifications && (
              <div className="notifications-panel">
                <h3 className="notifications-title">Notifications</h3>
                <div className="notifications-list">
                  {notifications.map(notif => (
                    <div key={notif.id} className="notification-item">
                      <img src={notif.image} alt={notif.subtitle} className="notification-thumbnail" />
                      <div className="notification-content">
                        <h4 className="notification-title-text">{notif.title}</h4>
                        <p className="notification-subtitle-text">{notif.subtitle}</p>
                        <span className="notification-time">{notif.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <button className="profile-icon" onClick={onProfileClick}>
            <div className="header-profile-avatar">V</div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;