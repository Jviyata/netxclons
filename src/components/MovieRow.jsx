import { useRef, useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import './MovieRow.css'

function MovieRow({ title, movies, onMovieClick, onAddToList, onViewAll, onShowToast, infiniteScroll = true, showArrows = true }) {
  const scrollContainer = useRef(null)
  const [displayMovies, setDisplayMovies] = useState([])
  
  // Create infinite scroll by duplicating movies
  useEffect(() => {
    if (movies.length > 0) {
      // Only duplicate if infinite scroll is enabled
      if (infiniteScroll) {
        setDisplayMovies([...movies, ...movies, ...movies])
      } else {
        setDisplayMovies(movies)
      }
    }
  }, [movies, infiniteScroll])

  const scroll = (direction) => {
    const container = scrollContainer.current
    const scrollAmount = 300
    
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount
    } else {
      container.scrollLeft += scrollAmount
    }
  }

  const handleScroll = (e) => {
    if (!infiniteScroll) return // Disable infinite scroll logic if prop is false
    
    const container = e.target
    const singleSetWidth = container.scrollWidth / 3
    
    // When reaching the end of the first set, jump to beginning of second set
    if (container.scrollLeft >= singleSetWidth * 2) {
      container.scrollLeft = singleSetWidth
    }
    // When reaching the beginning, jump to end of second set
    else if (container.scrollLeft <= 0) {
      container.scrollLeft = singleSetWidth
    }
  }

  return (
    <div className="movie-row-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <h2 className="movie-row-title">{title}</h2>
      </div>
      <div className="movie-row-wrapper">
        {showArrows && <button onClick={() => scroll('left')} className="movie-row-button" title="Scroll left">◀</button>}
        <div 
          ref={scrollContainer}
          className="movie-row"
          onScroll={handleScroll}
        >
          {displayMovies.map((movie, index) => (
            <MovieCard
              key={`${movie.id}-${index}`}
              movie={movie}
              onMovieClick={() => onMovieClick(movie)}
              onAddToList={onAddToList}
              onShowToast={onShowToast}
            />
          ))}
        </div>
        {showArrows && <button onClick={() => scroll('right')} className="movie-row-button" title="Scroll right">▶</button>}
      </div>
    </div>
  )
}

export default MovieRow