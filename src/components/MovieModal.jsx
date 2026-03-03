import './MovieModal.css'

function MovieModal({ movie, onClose, onAddToList, onShowToast }) {
  if (!movie) return null

  const handleAddClick = () => {
    onAddToList(movie)
    onClose()
  }

  const handleThumbsUp = () => {
    onShowToast?.('We will recommend more like this!')
  }

  const handleThumbsDown = () => {
    onShowToast?.('We will recommend less like this')
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <div className="modal-banner">
          <img src={movie.image} alt={movie.title} className="modal-banner-image" />
          <div className="modal-banner-overlay"></div>
        </div>

        <div className="modal-body">
          {/* Title - Largest, high contrast */}
          <h1 className="modal-title">{movie.title}</h1>
          
          {/* Metadata row - Compact and scannable */}
          <div className="modal-metadata">
            <span className="metadata-item">{movie.year || 2024}</span>
            <span className="metadata-divider">•</span>
            <span className="metadata-item">{movie.category.charAt(0).toUpperCase() + movie.category.slice(1)}</span>
            <span className="metadata-divider">•</span>
            <span className="metadata-item">HD</span>
            <span className="metadata-divider">•</span>
            <span className="metadata-item">{movie.rating || 'TV-14'}</span>
          </div>

          {/* Content rating + warning - Secondary */}
          <div className="modal-rating">
            <span className="rating-badge">{movie.rating || 'TV-14'}</span>
            <span className="rating-text">Some content may not be suitable for children</span>
          </div>
          
          {/* Description */}
          <p className="modal-description">{movie.description}</p>
          
          {/* Primary CTA - Large, visually dominant */}
          <div className="modal-buttons">
            <button className="play-button">▶ Play</button>
          </div>

          {/* Add to List with thumbs up/down */}
          <div className="modal-action-row">
            <button 
              className="add-to-list-button"
              onClick={handleAddClick}
            >
              + Add to List
            </button>
            <button className="thumb-button" title="Like" onClick={handleThumbsUp}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7.3,11.4,10.1,3a.6.6,0,0,1,.8-.3l1,.5a2.6,2.6,0,0,1,1.4,2.3V9.4h6.4a2,2,0,0,1,1.9,2.5l-2,8a2,2,0,0,1-1.9,1.5H4.3a2,2,0,0,1-2-2v-6a2,2,0,0,1,2-2h3v10"/>
              </svg>
            </button>
            <button className="thumb-button" title="Dislike" onClick={handleThumbsDown}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7.3,12.6,10.1,21a.6.6,0,0,0,.8.3l1-.5a2.6,2.6,0,0,0,1.4-2.3V14.6h6.4a2,2,0,0,0,1.9-2.5l-2-8a2,2,0,0,0-1.9-1.5H4.3a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2h3V2.6"/>
              </svg>
            </button>
          </div>

          {/* Secondary actions */}
          <div className="modal-secondary-actions">
            <button className="secondary-action">More Episodes</button>
            <button className="secondary-action">More Like This</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieModal