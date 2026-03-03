import { useState } from 'react'

function MovieCard({ movie, onMovieClick, onAddToList, onShowToast }) {
  const [isClicked, setIsClicked] = useState(false)
  const [isPlayingTrailer, setIsPlayingTrailer] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleCardClick = (e) => {
    e.stopPropagation()
    setIsClicked(!isClicked)
  }

  const handleOpenModal = (e) => {
    e.stopPropagation()
    onMovieClick?.(movie)
  }

  const handleThumbsUp = (e) => {
    e.stopPropagation()
    onShowToast?.('We will recommend more like this!')
  }

  const handleThumbsDown = (e) => {
    e.stopPropagation()
    onShowToast?.('We will recommend less like this')
  }

  return (
    <>
      <div 
        style={{
          ...styles.card,
          ...(isClicked && styles.cardExpanded),
          ...(isHovered && !isClicked && styles.cardHover),
        }}
        onClick={handleOpenModal}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isClicked && (
          <img src={movie.image} alt={movie.title} style={{
            ...styles.image,
            ...(isHovered && { filter: 'brightness(1.1) contrast(1.05)' }),
          }} />
        )}
        
        {isClicked && isPlayingTrailer && (
          <div style={styles.trailerContainer}>
            <button 
              style={styles.trailerCloseButton}
              onClick={() => setIsPlayingTrailer(false)}
              title="Close Trailer"
            >
              ✕
            </button>
            <iframe 
              style={styles.trailerIframe}
              src={`${movie.trailerUrl}?autoplay=1&controls=1&mute=1`}
              title={`${movie.title} Trailer`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        )}
        
        {isClicked && !isPlayingTrailer && (
          <div style={styles.expandedContent}>
            <img src={movie.image} alt={movie.title} style={styles.backgroundImage} />
            
            <button 
              style={styles.closeButton}
              onClick={() => setIsClicked(false)}
              title="Close"
            >
              ✕
            </button>
            
            <div style={styles.infoSection}>
              <h1 style={styles.title}>{movie.title}</h1>
              
              <div style={styles.metadata}>
                <span style={styles.metadataItem}>{movie.year || 2024}</span>
                <span style={styles.metadataDivider}>•</span>
                <span style={styles.metadataItem}>{movie.category.charAt(0).toUpperCase() + movie.category.slice(1)}</span>
                <span style={styles.metadataDivider}>•</span>
                <span style={styles.metadataItem}>{movie.seasons || 1} {movie.seasons === 1 ? 'Season' : 'Seasons'}</span>
                <span style={styles.metadataDivider}>•</span>
                <span style={styles.metadataItem}>HD</span>
              </div>

              <div style={styles.ratingSection}>
                <span style={styles.ratingBadge}>{movie.rating || 'TV-14'}</span>
                <span style={styles.ratingText}>{movie.type === 'tv' ? `Watch Season ${movie.seasons} Now` : 'Watch Now'}</span>
              </div>
              
              <p style={styles.description}>{movie.description}</p>

              <div style={styles.castSection}>
                <span style={styles.castLabel}>Cast:</span>
                <span style={styles.castNames}> {movie.cast || 'TBA'}</span>
              </div>

              <div style={styles.creatorSection}>
                <span style={styles.creatorLabel}>{movie.type === 'tv' ? 'Creator:' : 'Director:'}</span>
                <span style={styles.creatorNames}> {movie.creator || 'Unknown'}</span>
              </div>

              <div style={styles.recommendationSection}>
                <span style={styles.thumbIcon}>👍</span>
                <span style={styles.recommendationText}>We think you'll love this!</span>
                <span style={styles.recommendationSubtext}>Based on what you've watched and rated</span>
              </div>
              
              <div style={styles.buttonsColumn}>
                <button style={styles.playButton}>▶ Play</button>
                <button 
                  style={styles.trailerButton}
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsPlayingTrailer(true)
                  }}
                >
                  <svg style={styles.trailerIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Play Trailer
                </button>
                
                <div style={styles.secondaryButtons}>
                  <button 
                    style={styles.addButton}
                    onClick={(e) => {
                      e.stopPropagation()
                      onAddToList(movie)
                    }}
                  >
                    + Add to List
                  </button>
                  <button 
                    style={styles.iconButton} 
                    title="Like"
                    onClick={handleThumbsUp}
                  >
                    <svg style={styles.thumbUpIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7.3,11.4,10.1,3a.6.6,0,0,1,.8-.3l1,.5a2.6,2.6,0,0,1,1.4,2.3V9.4h6.4a2,2,0,0,1,1.9,2.5l-2,8a2,2,0,0,1-1.9,1.5H4.3a2,2,0,0,1-2-2v-6a2,2,0,0,1,2-2h3v10"/>
                    </svg>
                  </button>
                  <button 
                    style={styles.iconButton} 
                    title="Dislike"
                    onClick={handleThumbsDown}
                  >
                    <svg style={styles.thumbDownIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7.3,12.6,10.1,21a.6.6,0,0,0,.8.3l1-.5a2.6,2.6,0,0,0,1.4-2.3V14.6h6.4a2,2,0,0,0,1.9-2.5l-2-8a2,2,0,0,0-1.9-1.5H4.3a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2h3V2.6"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div style={styles.moreButtonsRow}>
                <button style={styles.moreButton}>
                  <svg style={styles.moreIcon} viewBox="0 0 24 24" fill="currentColor">
                    <rect x="2" y="3" width="4" height="4" rx="1"/>
                    <rect x="8" y="3" width="4" height="4" rx="1"/>
                    <rect x="14" y="3" width="4" height="4" rx="1"/>
                    <rect x="2" y="9" width="4" height="4" rx="1"/>
                    <rect x="8" y="9" width="4" height="4" rx="1"/>
                    <rect x="14" y="9" width="4" height="4" rx="1"/>
                    <rect x="2" y="15" width="4" height="4" rx="1"/>
                    <rect x="8" y="15" width="4" height="4" rx="1"/>
                    <rect x="14" y="15" width="4" height="4" rx="1"/>
                  </svg>
                  More Episodes
                </button>
                <button style={styles.moreButton}>
                  <svg style={styles.moreIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  More Like This
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {isClicked && (
        <div 
          style={styles.backdrop}
          onClick={() => setIsClicked(false)}
        />
      )}
    </>
  )
}

const styles = {
  card: {
    position: 'relative',
    minWidth: '300px',
    height: '169px',
    backgroundColor: '#333',
    borderRadius: '4px',
    overflow: 'visible',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
  },
  cardExpanded: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '95vw',
    maxWidth: '1600px',
    height: 'auto',
    maxHeight: '90vh',
    zIndex: 10,
    borderRadius: '8px',
    overflow: 'hidden',
  },
  trailerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 15,
    backgroundColor: '#000',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  trailerIframe: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
  trailerCloseButton: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '28px',
    width: 'auto',
    height: 'auto',
    cursor: 'pointer',
    transition: 'all 0.2s',
    zIndex: 20,
    padding: '0',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  hoverPreview: {
    width: '420px',
    backgroundColor: '#1a1a1a',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    zIndex: 9999,
    borderRadius: '8px',
    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.98)',
    overflow: 'visible',
    maxHeight: 'none',
  },
  hoverBannerContainer: {
    position: 'relative',
    width: '100%',
    height: '180px',
    overflow: 'hidden',
  },
  hoverBannerImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  hoverTitleOverlay: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    padding: '16px 12px',
    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.5) 100%)',
  },
  hoverTitleText: {
    fontSize: '18px',
    fontWeight: '900',
    margin: 0,
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
    letterSpacing: '0.5px',
    lineHeight: 1.2,
  },
  hoverCloseButton: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    border: 'none',
    color: 'white',
    fontSize: '24px',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all 0.2s',
    zIndex: 10,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hoverControlsSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    padding: '12px 12px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  hoverControlsLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  hoverPlayButton: {
    padding: '8px 20px',
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    minWidth: '90px',
    justifyContent: 'center',
  },
  hoverPlayIcon: {
    width: '14px',
    height: '14px',
    color: '#000',
  },
  hoverActionButton: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    border: '2px solid rgba(255, 255, 255, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#fff',
    transition: 'all 0.2s',
    flexShrink: 0,
  },
  hoverActionIcon: {
    width: '16px',
    height: '16px',
    color: '#fff',
    stroke: '#fff',
  },
  hoverVolumeButton: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    border: '2px solid rgba(255, 255, 255, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#fff',
    transition: 'all 0.2s',
    flexShrink: 0,
  },
  hoverVolumeIcon: {
    width: '16px',
    height: '16px',
    color: '#fff',
    stroke: '#fff',
  },
  hoverMetadataSection: {
    padding: '12px 12px',
    flex: 1,
    overflow: 'visible',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    maxHeight: 'none',
  },
  hoverMetadataRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '11px',
    flexWrap: 'wrap',
  },
  hoverYear: {
    color: '#fff',
    fontWeight: '500',
  },
  hoverMetaItem: {
    color: '#b3b3b3',
    fontWeight: '500',
  },
  hoverRatingRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '10px',
    flexWrap: 'wrap',
  },
  hoverRatingBadge: {
    border: '1px solid #999',
    padding: '2px 5px',
    borderRadius: '2px',
    color: '#fff',
    fontWeight: '600',
  },
  hoverContentWarning: {
    color: '#b3b3b3',
  },
  hoverDescription: {
    fontSize: '11px',
    color: '#b3b3b3',
    margin: 0,
    lineHeight: '1.4',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  hoverImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  imageZoom: {
    transform: 'scale(1.1)',
  },
  expandedContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 1,
    zIndex: 0,
  },
  closeButton: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '28px',
    width: 'auto',
    height: 'auto',
    cursor: 'pointer',
    transition: 'all 0.2s',
    zIndex: 20,
    padding: '0',
  },
  infoSection: {
    position: 'relative',
    zIndex: 5,
    padding: '50px 60px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    background: 'linear-gradient(to bottom, rgba(180,180,180,0.4), rgba(150,150,150,0.6))',
    borderRadius: '8px',
    margin: '20px',
  },
  title: {
    fontSize: '62px',
    fontWeight: '900',
    margin: 0,
    color: '#fff',
    lineHeight: 1,
  },
  metadata: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#fff',
    fontWeight: '600',
  },
  metadataItem: {
    fontWeight: '600',
  },
  metadataDivider: {
    color: '#999',
  },
  ratingSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '12px',
  },
  ratingBadge: {
    border: '1px solid #999',
    padding: '4px 10px',
    borderRadius: '2px',
    fontWeight: '700',
    color: '#fff',
  },
  ratingText: {
    color: '#ccc',
    fontWeight: '500',
  },
  watchSection: {
    marginTop: '8px',
  },
  watchLabel: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#fff',
  },
  description: {
    fontSize: '16px',
    color: '#e5e5e5',
    margin: 0,
    lineHeight: '1.5',
    maxWidth: '75%',
  },
  castSection: {
    fontSize: '13px',
    color: '#ccc',
    marginTop: '8px',
  },
  castLabel: {
    fontWeight: '600',
    color: '#fff',
  },
  castNames: {
    color: '#b3b3b3',
  },
  creatorSection: {
    fontSize: '13px',
    color: '#ccc',
  },
  creatorLabel: {
    fontWeight: '600',
    color: '#fff',
  },
  creatorNames: {
    color: '#b3b3b3',
  },
  recommendationSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13px',
    marginTop: '12px',
  },
  thumbIcon: {
    width: '24px',
    height: '24px',
    objectFit: 'contain',
  },
  thumbUpIcon: {
    width: '14px',
    height: '14px',
    color: '#fff',
  },
  thumbDownIcon: {
    width: '14px',
    height: '14px',
    color: '#fff',
  },
  recommendationText: {
    fontWeight: '700',
    color: '#fff',
  },
  recommendationSubtext: {
    color: '#999',
    fontSize: '11px',
  },
  buttonsColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    width: '80%',
    marginTop: '24px',
  },
  playButton: {
    padding: '12px 32px',
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    color: '#fff',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.2s',
    width: '100%',
    outline: 'none',
  },
  trailerButton: {
    padding: '12px 32px',
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    color: '#fff',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.2s',
    width: '100%',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },
  trailerIcon: {
    width: '20px',
    height: '20px',
    color: 'white',
    flexShrink: 0,
  },
  secondaryButtons: {
    display: 'flex',
    gap: '10px',
    width: '100%',
    alignItems: 'center',
  },
  addButton: {
    flex: 2,
    padding: '10px 16px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    border: 'none',
    color: 'white',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
    outline: 'none',
    height: '44px',
  },
  iconButton: {
    flex: 0.8,
    padding: '10px 12px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    border: 'none',
    color: 'white',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '44px',
    outline: 'none',
  },
  moreButtonsRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: '12px',
    width: '80%',
    marginTop: '14px',
  },
  moreButton: {
    flex: 1,
    padding: '10px 16px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    border: 'none',
    color: '#e5e5e5',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    outline: 'none',
    height: '44px',
  },
  moreIcon: {
    width: '18px',
    height: '18px',
    color: 'white',
    flexShrink: 0,
  },
  svg: {
    width: '20px',
    height: '20px',
    color: 'white',
  },
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 9,
  },
}

export default MovieCard
