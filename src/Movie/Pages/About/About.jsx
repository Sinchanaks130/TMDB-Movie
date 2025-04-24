import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About the Project</h1>
      <p>
        This project is a movie discovery application built using React.js. It allows users to browse movies, view detailed information about each movie, search for movies, and explore cast details. The application is designed to be responsive and user-friendly, with a focus on providing a seamless experience across different devices.
      </p>

      <h2>Functionality</h2>
      <ul>
        <li><strong>Movie Discovery:</strong> Users can browse a list of movies fetched from the TMDB API. The movies are displayed in a grid layout with details such as title, overview, and rating.</li> 
        <li><strong>Search:</strong> Users can search for movies by entering a query in the search bar. The application dynamically updates the movie list based on the search results.</li>
        <li><strong>Pagination:</strong> The movie list is paginated, allowing users to navigate through multiple pages of results.</li>
        <li><strong>Movie Details:</strong> Clicking on a movie card navigates to a detailed view of the movie, including its overview, genres, release date, and rating. Users can also watch the movie trailer directly from this page.</li>
        <li><strong>Cast Details:</strong> Users can explore detailed information about the cast members, including their biography, birthday, and a list of movies they have appeared in.</li>
        <li><strong>Dark/Light Mode:</strong> The application supports a toggleable dark/light mode, enhancing user experience based on their preference.</li>
        <li><strong>Responsive Design:</strong> The application is fully responsive, ensuring a consistent experience across devices of different screen sizes.</li>
      </ul>

      <h2>HTML Structure</h2>
      <p>
        The application is structured into several components, each responsible for a specific part of the UI. The main components include:
      </p>
      <ul>
        <li><strong>Navbar:</strong> The navigation bar at the top of the page includes links to different sections of the application, a search bar, and a dark/light mode toggle.</li>
        <li><strong>Home:</strong> The home page displays a list of movies fetched from the TMDB API. It includes pagination controls to navigate through the movie list.</li>
        <li><strong>MoviePage:</strong> This component displays detailed information about a selected movie, including its trailer, cast, and other relevant details.</li>
        <li><strong>CastDetails:</strong> This component provides detailed information about a cast member, including their biography and a list of movies they have appeared in.</li>
        <li><strong>Contact:</strong> A contact form that allows users to send messages. It includes a loader and a popup message to enhance user interaction.</li>
        <li><strong>Login:</strong> A login page that authenticates users before granting access to the application.</li>
      </ul>

      <h2>CSS Styles</h2>
      <p>
        The application uses CSS for styling, with a focus on creating a modern and responsive design. Key styling features include:
      </p>
      <ul>
        <li><strong>Responsive Grid Layout:</strong> The movie list is displayed in a grid layout that adjusts based on the screen size, ensuring a consistent experience across devices.</li>
        <li><strong>Dark/Light Mode:</strong> The application supports a toggleable dark/light mode, with styles dynamically applied based on the user's preference.</li>
        <li><strong>Animations:</strong> The application includes subtle animations to enhance user interaction, such as hover effects on buttons and cards.</li>
        <li><strong>Loader:</strong> A custom loader is displayed during data fetching operations, providing visual feedback to the user.</li>
        <li><strong>Modal and Popup:</strong> The application uses modals and popups for displaying additional information, such as the movie trailer and contact form success message.</li>
      </ul>

      <h2>Technologies Used</h2>
      <ul>
        <li><strong>React.js:</strong> The application is built using React.js, leveraging its component-based architecture for a modular and maintainable codebase.</li>
        <li><strong>React Router:</strong> Used for navigation between different pages of the application.</li>
        <li><strong>Axios:</strong> Used for making HTTP requests to the TMDB API.</li>
        <li><strong>Framer Motion:</strong> Used for adding animations to the UI components.</li>
        <li><strong>CSS:</strong> Custom CSS is used for styling the application, with a focus on responsiveness and modern design.</li>
      </ul>
    </div>
  );
};

export default About;