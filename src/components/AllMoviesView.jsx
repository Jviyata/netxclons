import './AllMoviesView.css'

function AllMoviesView({ movies, viewTitle = 'All Movies & Shows', onBack, onMovieClick, onAddToList, hideImageTitles = false }) {
  return (
    <div className="all-movies-view">
      <div className="all-movies-header">
        <h1 className="all-movies-title">{viewTitle}</h1>
        <button className="all-movies-back" onClick={onBack}>← Back</button>
      </div>
      
      <div className="all-movies-grid">
        {movies.map(movie => (
          <div 
            key={movie.id}
            className="all-movies-card"
            onClick={() => onMovieClick(movie)}
          >
            <img src={movie.image} alt={movie.title} className="all-movies-card-image" />
            {!hideImageTitles && (
              <div className="all-movies-card-title-overlay">
                <h3 className="all-movies-card-title-text">{movie.title}</h3>
              </div>
            )}
            <div className="all-movies-card-overlay">
              <h3 className="all-movies-card-title">{movie.title}</h3>
              <p className="all-movies-card-category">{movie.category}</p>
              <button 
                className="all-movies-card-add"
                onClick={(e) => {
                  e.stopPropagation()
                  onAddToList(movie)
                }}
              >
                + Add to List
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllMoviesView
