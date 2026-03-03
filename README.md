# Netflix Clone – Interactive React Application

**Live Site:**  
https://jviyata.github.io/netflix-clone1/  

**Important:** Please open the live site in an **Incognito / Private Browser window** to ensure the latest deployed version loads correctly and avoids cached files.

**Repository:**  
https://github.com/Jviyata/netflix-clone1  

---

A fully functional Netflix clone built with React and Vite, featuring responsive design, interactive components, and modern UI/UX patterns.

---

## Original Website/App Chosen (Name + Link)

**Netflix**  
https://www.netflix.com/

Netflix is a streaming entertainment platform that provides movies, TV shows, personalized recommendations, and user profile experiences.

---

## Scope of Recreation (What Was Recreated)

This project recreates the core Netflix user interface and primary functionality, including:

- Home page layout with hero banner  
- Categorized horizontal movie rows  
- Search functionality  
- Movie detail modal  
- “My List” watchlist feature  
- Profile selection screen  
- Responsive design across devices  

The focus was on replicating the visual structure and interactive behavior of Netflix’s browsing experience rather than backend streaming functionality.

---

## Features Implemented

- Real-time search by title or description  
- Featured hero banner section  
- Horizontal movie rows with infinite scroll effect  
- Movie details modal with metadata (cast, year, seasons, rating, creator)  
- Trailer link integration  
- Add to My List with duplicate prevention  
- Continue Watching section  
- Toast notifications for user feedback  
- Profile selector on app launch  
- All Movies grid view  
- Responsive design (mobile, tablet, desktop)  
- Smooth animations and hover effects  
- Dark Netflix-inspired theme  

---

## Technical Implementation

The application is built using React and Vite with a component-based architecture.

### Component Structure

- App.jsx (main controller)
- ProfileSelector
- Header + SearchBar
- Hero
- MovieRow
- MovieCard
- AllMoviesView
- MovieModal
- Toast

CSS Modules are used for scoped styling, along with responsive media queries and animation transitions.

Infinite scrolling is achieved by tripling movie arrays to create a seamless scroll illusion.

---

## State Management

State is managed using React’s `useState` hook inside App.jsx and individual components.

Main state variables include:

- `searchTerm` – controls search input  
- `selectedMovie` – manages modal visibility  
- `myList` – stores saved movies  
- `currentProfile` – tracks selected profile  
- `viewType` – manages view rendering (home, movies, tv)  
- `toast` – handles notification messages  
- `displayMovies` – supports infinite scroll logic  

State is passed through props to maintain centralized control.

---

## Routing Structure

The application uses conditional rendering instead of React Router.

**Flow Structure:**

Profile Selector → Home View  
Search → Dedicated Results View  
View All → Grid View  
Home button → Returns to main dashboard  

This simplified routing structure keeps navigation controlled within App.jsx.

---

## Hooks Used

- `useState` – state management  
- `useEffect` – initialization and infinite scroll duplication  
- `useRef` – scroll container DOM references  

---

## Future Improvements

- localStorage integration for persistent My List  
- Remove items from watchlist  
- User ratings and reviews  
- Advanced filtering (genre, year, rating)  
- Recommendation engine  
- Real API integration (OMDb or TMDb)  
- Authentication and user accounts  
- Multi-profile management  
- Theme toggle (dark/light)  
- Progressive Web App support  

---

Version 1.0.0  
Status: Complete and deployed
