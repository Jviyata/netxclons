import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import MovieRow from './components/MovieRow'
import MovieModal from './components/MovieModal'
import ProfileSelector from './components/ProfileSelector'
import AllMoviesView from './components/AllMoviesView'
import Toast from './components/Toast'
import './App.css'
import spiderManImg from './assets/32.jpeg'
import oppenheimerImg from './assets/33.jpeg'
import laLaLandImg from './assets/34.jpeg'

// Image mapping - maps IDs to image paths
const imageMap = {
  1: '/netflix-clone1/assets/1.jpg',
  2: '/netflix-clone1/assets/2.jpg',
  3: '/netflix-clone1/assets/3.jpg',
  4: '/netflix-clone1/assets/4.jpg',
  5: '/netflix-clone1/assets/5.jpg',
  6: '/netflix-clone1/assets/6.jpg',
  8: '/netflix-clone1/assets/8.jpg',
  9: '/netflix-clone1/assets/9.jpg',
  10: '/netflix-clone1/assets/10.jpg',
  11: '/netflix-clone1/assets/11.jpg',
  12: '/netflix-clone1/assets/12.jpg',
  13: '/netflix-clone1/assets/13.jpg',
  14: '/netflix-clone1/assets/14.jpg',
  15: '/netflix-clone1/assets/15.jpg',
  16: '/netflix-clone1/assets/16.jpg',
  17: '/netflix-clone1/assets/17.jpg',
  18: '/netflix-clone1/assets/18.jpg',
  19: '/netflix-clone1/assets/19.jpg',
  20: '/netflix-clone1/assets/20.jpg',
  21: '/netflix-clone1/assets/21.jpg',
  22: '/netflix-clone1/assets/22.jpg',
  23: '/netflix-clone1/assets/23.jpg',
  25: '/netflix-clone1/assets/25.jpg',
  26: '/netflix-clone1/assets/26.jpg',
  27: '/netflix-clone1/assets/27.jpg',
  28: '/netflix-clone1/assets/28.jpg',
  29: '/netflix-clone1/assets/29.jpg',
  30: '/netflix-clone1/assets/30.jpg',
  32: spiderManImg,
  33: oppenheimerImg,
  34: laLaLandImg,
}

function App() {
  const allMovies = [
    // Drama (9)
    { id: 1, title: 'Bridgerton', image: imageMap[1], category: 'drama', type: 'tv', description: 'The drama continues in the Bridgerton universe as romance and scandal intertwine in high society.', trailerUrl: 'https://www.youtube.com/embed/P87Exm0VMrI?si=K60oQM7iLnZjqkhB', cast: 'Nicola Coughlan, Luke Newton, Antony Starr', year: 2024, seasons: 4, rating: 'TV-14', creator: 'Shonda Rhimes' },
    { id: 2, title: 'Finding Her Edge', image: imageMap[2], category: 'drama', type: 'tv', description: 'A young woman discovers her inner strength while navigating the challenges of modern life.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Emma Stone, Andrew Garfield, Ryan Gosling', year: 2024, seasons: 2, rating: 'TV-14', creator: 'Unknown' },
    { id: 3, title: 'Gilmore Girls', image: imageMap[3], category: 'drama', type: 'tv', description: 'A mother and daughter navigate life in the quirky town of Stars Hollow with coffee and conversation.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Lorelai Gilmore, Rory Gilmore, Luke Danes', year: 2024, seasons: 7, rating: 'TV-14', creator: 'Amy Sherman-Palladino' },
    { id: 4, title: 'Gossip Girl', image: imageMap[4], category: 'drama', type: 'tv', description: 'Manhattan\'s elite navigate scandals and secrets in the Upper East Side.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Blake Lively, Leighton Meester, Ed Westwick', year: 2024, seasons: 6, rating: 'TV-14', creator: 'Josh Safran' },
    { id: 5, title: 'Outer Banks', image: imageMap[5], category: 'drama', type: 'tv', description: 'A tight-knit group of teens search for hidden treasure while navigating class divisions.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Chase Stokes, Madelyn Cline, Madison Bailey', year: 2024, seasons: 4, rating: 'TV-14', creator: 'Jonas Pate' },
    { id: 8, title: 'Sweet Magnolias', image: imageMap[8], category: 'drama', type: 'tv', description: 'Three lifelong friends support each other through the complexities of life, family, and new romance.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'JoAnna Garcia Swisher, Brooke Elliott, Heather Headley', year: 2024, seasons: 3, rating: 'TV-14', creator: 'Sheila Kelley' },
    { id: 9, title: 'Firefly Lane', image: imageMap[9], category: 'drama', type: 'tv', description: 'Two best friends navigate decades of friendship, from teenage years to adulthood.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Katherine Heigl, Sarah Chalke, Yael Yurman', year: 2024, seasons: 3, rating: 'TV-14', creator: 'Maggie Friedman' },
    { id: 10, title: 'The Crown', image: imageMap[10], category: 'drama', type: 'tv', description: 'The political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the 20th century.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Claire Foy, Olivia Colman, Gillian Anderson', year: 2024, seasons: 5, rating: 'TV-MA', creator: 'Peter Morgan' },
    
    // Romance (10)
    { id: 11, title: 'His & Hers', image: imageMap[11], category: 'romance', type: 'movie', description: 'Two strangers find love in unexpected circumstances in this heartwarming romance.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Lucy Hale, Jake Allyn, Justin Hartley', year: 2024, seasons: 1, rating: 'TV-14', creator: 'Unknown' },
    { id: 12, title: 'People We Meet on Vacation', image: imageMap[12], category: 'romance', type: 'movie', description: 'Best friends take one last vacation together to determine if their friendship could be something more.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Lakeith Stanfield, Cristin Milioti, Jemaine Clement', year: 2024, seasons: 2, rating: 'TV-14', creator: 'Emily Gipson' },
    { id: 13, title: 'Emily in Paris', image: imageMap[13], category: 'romance', type: 'tv', description: 'A young American woman from the Midwest moves to Paris for an unexpected job opportunity.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Lily Collins, Lucas Bravo, Philippine Leroy-Beaulieu', year: 2024, seasons: 4, rating: 'TV-14', creator: 'Darren Star' },
    { id: 14, title: 'Virgin River', image: imageMap[14], category: 'romance', type: 'tv', description: 'A nurse practitioner moves to a remote California town where she finds unexpected romance and healing.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Alexandra Breckenridge, Martin Henderson, Benjamin Hollingsworth', year: 2024, seasons: 5, rating: 'TV-MA', creator: 'Sheryl Anderson' },
    { id: 15, title: 'The Summer I Turned Pretty', image: imageMap[15], category: 'romance', type: 'tv', description: 'A love triangle unfolds during one transformative summer at the beach house.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Lola Tung, Christopher Briney, Gavin Casalegno', year: 2024, seasons: 2, rating: 'TV-14', creator: 'Jenny Han' },
    { id: 16, title: 'XO, Kitty', image: imageMap[16], category: 'romance', type: 'tv', description: 'Kitty travels to Seoul to reunite with her long-distance boyfriend, only to find herself navigating new relationships.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Anna Cathcart, Megan Suri, Pha Sohpia Brown', year: 2024, seasons: 2, rating: 'TV-14', creator: 'Jenny Han' },
    { id: 17, title: 'Sex and the City', image: imageMap[17], category: 'romance', type: 'tv', description: 'Four friends navigate love, friendship, and fashion in New York City.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Sarah Jessica Parker, Kim Cattrall, Kristin Davis', year: 2024, seasons: 6, rating: 'TV-MA', creator: 'Darren Star' },
    { id: 18, title: 'Never Have I Ever', image: imageMap[18], category: 'romance', type: 'tv', description: 'A first-generation Indian American teenager navigates high school, family, and complicated feelings.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Maitreyi Ramakrishnan, Poorna Jagannathan, Richa Moorjani', year: 2024, seasons: 4, rating: 'TV-14', creator: 'Mindy Kaling' },
    { id: 19, title: 'To All the Boys I Loved Before', image: imageMap[19], category: 'romance', type: 'tv', description: 'A teen\'s secret love letters are mysteriously mailed to her crushes, turning her life upside down.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Lana Condor, Noah Centineo, Janel Parrish', year: 2024, seasons: 3, rating: 'TV-14', creator: 'Jenny Han' },
    { id: 20, title: 'Heartstopper', image: imageMap[20], category: 'romance', type: 'tv', description: 'Two British teens at an all-boys school discover their unlikely friendship might be something more.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Kit Connor, Joe Locke, William Gao', year: 2024, seasons: 2, rating: 'TV-14', creator: 'Alice Oseman' },
    
    // Mystery (9)
    { id: 21, title: 'Wednesday', image: imageMap[21], category: 'mystery', type: 'tv', description: 'Wednesday Addams investigates a killing spree while navigating life at Nevermore Academy.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Jenna Ortega, Catherine Zeta-Jones, Luis Guzmán', year: 2024, seasons: 2, rating: 'TV-14', creator: 'Miles Millar, Alfred Gough' },
    { id: 22, title: 'Pretty Little Liars', image: imageMap[22], category: 'mystery', type: 'tv', description: 'Four friends are haunted by the mysterious disappearance of their best friend and threatening messages from "A".', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Troian Bellisario, Ashley Benson, Shay Mitchell', year: 2024, seasons: 7, rating: 'TV-14', creator: 'I. Marlene King' },
    { id: 23, title: 'Only Murders in the Building', image: imageMap[23], category: 'mystery', type: 'tv', description: 'Three strangers share an obsession with true crime and suddenly find themselves investigating one in their own building.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Steve Martin, Martin Short, Selena Gomez', year: 2024, seasons: 3, rating: 'TV-MA', creator: 'Steve Martin, Dan Fogelman' },
    { id: 25, title: 'Big Little Lies', image: imageMap[25], category: 'mystery', type: 'tv', description: 'The apparently perfect lives of three mothers unravel to the point of murder in Monterey, California.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Nicole Kidman, Reese Witherspoon, Laura Dern', year: 2024, seasons: 2, rating: 'TV-MA', creator: 'David E. Kelley' },
    { id: 26, title: 'Veronica Mars', image: imageMap[26], category: 'mystery', type: 'tv', description: 'A high school student moonlights as a private investigator solving crimes in her wealthy California town.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Kristen Bell, Enrico Colantoni, Jason Dohring', year: 2024, seasons: 4, rating: 'TV-14', creator: 'Rob Thomas' },
    { id: 27, title: 'Nancy Drew', image: imageMap[27], category: 'mystery', type: 'tv', description: 'The legendary teenage detective investigates supernatural mysteries in her coastal hometown.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Kennedy McMann, Scott Wolf, Lesley-Ann Brandt', year: 2024, seasons: 4, rating: 'TV-14', creator: 'Carolyn Popp, Nicki Hedren' },
    { id: 28, title: 'Dead to Me', image: imageMap[28], category: 'mystery', type: 'tv', description: 'A widow dealing with loss befriends a free spirit with a shocking secret.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Christina Applegate, Linda Cardellini, James Marsden', year: 2024, seasons: 3, rating: 'TV-MA', creator: 'Liz Feldman' },
    { id: 29, title: 'The Watcher', image: imageMap[29], category: 'mystery', type: 'movie', description: 'A family moves into their dream home, only to be plagued by ominous letters from someone calling themselves "The Watcher".', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Naomi Watts, Bobby Cannavale, Jennifer Coolidge', year: 2024, seasons: 1, rating: 'TV-MA', creator: 'Ian Brennan' },
    { id: 30, title: 'Riverdale', image: imageMap[30], category: 'mystery', type: 'tv', description: 'A subversive take on Archie Comics as the town of Riverdale deals with dark mysteries and scandals.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'KJ Apa, Lili Reinhart, Camila Mendes', year: 2024, seasons: 7, rating: 'TV-14', creator: 'Roberto Aguirre-Sacasa' },
    
    // Action
    { id: 32, title: 'Spider-Man: Far From Home', image: imageMap[32], category: 'action', type: 'movie', description: 'Spider-Man must stop Mysterio while on a school trip across Europe.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Tom Holland, Zendaya, Michael Keaton', year: 2019, seasons: 1, rating: 'PG-13', creator: 'Jon Watts' },
    { id: 33, title: 'Oppenheimer', image: imageMap[33], category: 'action', type: 'movie', description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Cillian Murphy, Robert Downey Jr., Emily Blunt', year: 2023, seasons: 1, rating: 'R', creator: 'Christopher Nolan' },
    
    // Romance/Drama
    { id: 34, title: 'La La Land', image: imageMap[34], category: 'romance', type: 'movie', description: 'A jazz musician and an actress fall in love while pursuing their dreams in Los Angeles.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Ryan Gosling, Emma Stone, John Legend', year: 2016, seasons: 1, rating: 'PG-13', creator: 'Damien Chazelle' },
  ]

  const continueWatchingList = [
    { id: 26, title: 'Veronica Mars', image: imageMap[26], category: 'mystery', description: 'A high school student moonlights as a private investigator solving crimes in her wealthy California town.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Kristen Bell, Enrico Colantoni, Jason Dohring', year: 2024, seasons: 4, rating: 'TV-14', creator: 'Rob Thomas' },
    { id: 13, title: 'Emily in Paris', image: imageMap[13], category: 'romance', description: 'A young American woman from the Midwest moves to Paris for an unexpected job opportunity.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Lily Collins, Lucas Bravo, Philippine Leroy-Beaulieu', year: 2024, seasons: 4, rating: 'TV-14', creator: 'Darren Star' },
    { id: 15, title: 'The Summer I Turned Pretty', image: imageMap[15], category: 'romance', description: 'A love triangle unfolds during one transformative summer at the beach house.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Lola Tung, Christopher Briney, Gavin Casalegno', year: 2024, seasons: 2, rating: 'TV-14', creator: 'Jenny Han' },
    { id: 20, title: 'Heartstopper', image: imageMap[20], category: 'romance', description: 'Two British teens at an all-boys school discover their unlikely friendship might be something more.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Kit Connor, Joe Locke, William Gao', year: 2024, seasons: 2, rating: 'TV-14', creator: 'Alice Oseman' },
    { id: 17, title: 'Sex and the City', image: imageMap[17], category: 'romance', description: 'Four friends navigate love, friendship, and fashion in New York City.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Sarah Jessica Parker, Kim Cattrall, Kristin Davis', year: 2024, seasons: 6, rating: 'TV-MA', creator: 'Darren Star' },
  ]

  const watchAgainList = [
    { id: 2, title: 'Stranger Things', image: imageMap[2], category: 'drama', description: 'When a young boy disappears in the 1980s, his friends must uncover a mystery involving secret government experiments.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Winona Ryder, David Harbour, Millie Bobby Brown', year: 2024, seasons: 4, rating: 'TV-14', creator: 'The Duffer Brothers' },
    { id: 8, title: 'The Crown', image: imageMap[8], category: 'drama', description: 'A behind-the-scenes look at the reign of Queen Elizabeth II and the political intrigues of the British royal family.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Claire Foy, Olivia Colman, Imelda Staunton', year: 2024, seasons: 6, rating: 'TV-MA', creator: 'Peter Morgan' },
    { id: 18, title: 'Money Heist', image: imageMap[18], category: 'mystery', description: 'A group of thieves executes an ambitious heist on the Spanish Royal Mint.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Álvaro Morte, Itziar Ituño, Pedro Alonso', year: 2024, seasons: 5, rating: 'TV-MA', creator: 'Álex de la Iglesia' },
    { id: 21, title: 'Ozark', image: imageMap[21], category: 'drama', description: 'A financial advisor moves his family to the Ozarks and gets involved in money laundering.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Jason Bateman, Laura Linney, Sofia Hublitz', year: 2024, seasons: 4, rating: 'TV-MA', creator: 'Bill Dubuque' },
    { id: 9, title: 'The Office', image: imageMap[9], category: 'romance', description: 'A mockumentary about the daily lives of office employees at a paper company.', trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cast: 'Steve Carell, Rainn Wilson, John Krasinski', year: 2024, seasons: 9, rating: 'TV-14', creator: 'Greg Daniels' },
  ]

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [myList, setMyList] = useState([])
  const [currentProfile, setCurrentProfile] = useState(null)
  const [showAllMovies, setShowAllMovies] = useState(false)
  const [viewType, setViewType] = useState('home') // 'home', 'movies', 'tv'
  const [toast, setToast] = useState(null)

  const handleAddToList = (movie) => {
    if (!myList.find(m => m.id === movie.id)) {
      setMyList([...myList, movie])
      setToast(`${movie.title} added to My List!`)
    } else {
      setToast(`${movie.title} is already in My List!`)
    }
  }

  const handleShowToast = (message) => {
    setToast(message)
  }

  // Filter movies based on search term
  const searchResults = searchTerm.trim() ? allMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.description.toLowerCase().includes(searchTerm.toLowerCase())
  ) : []

  // Show profile selector if no profile selected
  if (!currentProfile) {
    return <ProfileSelector onProfileSelect={setCurrentProfile} />
  }

  // Show search results if search term exists
  if (searchTerm.trim()) {
    return (
      <div className="app">
        <Header 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onProfileClick={() => setCurrentProfile(null)}
          allMovies={allMovies}
          onHome={() => setSearchTerm('')}
          onViewAllMovies={() => {
            setShowAllMovies(true)
            setViewType('movie')
          }}
          onViewAllTV={() => {
            setShowAllMovies(true)
            setViewType('tv')
          }}
        />
        <AllMoviesView 
          movies={searchResults}
          viewTitle={`Search Results for "${searchTerm}"`}
          onBack={() => setSearchTerm('')}
          onMovieClick={setSelectedMovie}
          onAddToList={handleAddToList}
        />
        <MovieModal 
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          onAddToList={handleAddToList}          onShowToast={handleShowToast}        />
        {toast && <Toast message={toast} onClose={() => setToast(null)} />}
      </div>
    )
  }

  // Show all movies/tv if requested
  if (showAllMovies) {
    const filteredMovies = viewType === 'tv' 
      ? allMovies.filter(m => m.type === 'tv')
      : allMovies.filter(m => m.type === 'movie')
    
    return (
      <div className="app">
        <Header 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onProfileClick={() => setCurrentProfile(null)}
          allMovies={allMovies}
          onHome={() => setShowAllMovies(false)}
          onViewAllMovies={() => setViewType('movie')}
          onViewAllTV={() => setViewType('tv')}
        />
        <AllMoviesView 
          movies={filteredMovies}
          viewTitle={viewType === 'tv' ? 'TV Shows' : 'Movies'}
          onBack={() => setShowAllMovies(false)}
          onMovieClick={setSelectedMovie}
          onAddToList={handleAddToList}
        />
        <MovieModal 
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          onAddToList={handleAddToList}
          onShowToast={handleShowToast}
        />
        {toast && <Toast message={toast} onClose={() => setToast(null)} />}
      </div>
    )
  }

  return (
    <div className="app">
      <Header 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onProfileClick={() => setCurrentProfile(null)}
        allMovies={allMovies}
        onHome={() => {}}
        onViewAllMovies={() => {
          setShowAllMovies(true)
          setViewType('movie')
        }}
        onViewAllTV={() => {
          setShowAllMovies(true)
          setViewType('tv')
        }}
      />
      <Hero 
        onMovieClick={setSelectedMovie}
        movieData={allMovies.find(m => m.title === 'Bridgerton')}
      />
      
      {/* My List Section */}
      {myList.length > 0 && (
        <MovieRow 
          title="My List" 
          movies={myList}
          onMovieClick={setSelectedMovie}
          onAddToList={handleAddToList}
          onShowToast={handleShowToast}
          infiniteScroll={false}
        />
      )}

      {/* Continue Watching Section */}
      <MovieRow 
        title="Continue Watching for Viyata" 
        movies={continueWatchingList}
        onMovieClick={setSelectedMovie}
        onAddToList={handleAddToList}
        onShowToast={handleShowToast}
        infiniteScroll={false}
        showArrows={false}
      />

      {/* Drama Section */}
      <MovieRow 
        title="Drama" 
        movies={allMovies.filter(m => m.category === 'drama')}
        onMovieClick={setSelectedMovie}
        onAddToList={handleAddToList}
        onShowToast={handleShowToast}
        onViewAll={() => setShowAllMovies(true)}
      />

      {/* Romance Section */}
      <MovieRow 
        title="Romance" 
        movies={allMovies.filter(m => m.category === 'romance')}
        onMovieClick={setSelectedMovie}
        onAddToList={handleAddToList}
        onShowToast={handleShowToast}
        onViewAll={() => setShowAllMovies(true)}
      />

      {/* Mystery Section */}
      <MovieRow 
        title="Mystery" 
        movies={allMovies.filter(m => m.category === 'mystery')}
        onMovieClick={setSelectedMovie}
        onAddToList={handleAddToList}
        onShowToast={handleShowToast}
        onViewAll={() => setShowAllMovies(true)}
      />

      {/* Watch Again Section */}
      <MovieRow 
        title="Watch Again" 
        movies={watchAgainList}
        onMovieClick={setSelectedMovie}
        onAddToList={handleAddToList}
        onShowToast={handleShowToast}
      />

      {/* Movie Modal */}
      <MovieModal 
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
        onAddToList={handleAddToList}
        onShowToast={handleShowToast}
      />
      
      {/* Toast Notification */}
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  )
}

export default App