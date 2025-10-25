# MarathonPro - Marathon Management System

MarathonPro is a comprehensive web application designed to connect runners with marathon events. It provides a seamless platform for users to discover, register for, and manage their marathon participation. Event organizers can also use the platform to list and manage their marathons.

##[Live Site] - https://marathon-management-syst-3a566.web.app

##  Key Features

- Event Discovery: Browse a dynamic list of upcoming marathons with filtering and search capabilities to find the perfect race.
- Simple Registration: A straightforward and easy-to-use registration form for any marathon event.
- Secure Authentication: Robust user authentication system powered by Firebase, supporting both email/password and Google login.
- Personalized Dashboard:A dedicated dashboard for users to view their registered events, track application status, and manage their profile.
- Admin Event Management: Organizers have the ability to add, update, and manage their own marathon listings through a secure dashboard.
- Fully Responsive: A mobile-first design ensures a seamless experience across all devices, from desktops to smartphones.


### Newly Added Features

1. **Favorite List Feature**
   - **Description:** Users can now save their preferred marathon events to a “Favorite List”. This allows them to quickly access marathons they are interested in without searching again.
   - **Implementation Details:**
     - Added a Favorites context using React Context API to manage state across the app.
     - Used LocalStorage to persist favorite marathons even after page refresh.
     - Added a heart icon (react-icons FaHeart) in Navbar and on marathon cards to toggle favorites.
     - Added a Favorites page (`/favorites`) to show all saved marathons.
   - **Why this feature improves the project:**
     - Enhances user experience by providing quick access to preferred events.
     - Encourages user engagement by allowing personalization of marathon selection.

2. **Search Functionality**
   - **Description:** Users can search marathons by title or location in real-time.
   - **Implementation Details:**
     - Added a search input on the MarathonCard page.
     - Used React `useState` and `useEffect` to filter marathons dynamically based on input.
     - Search results update immediately as the user types.
   - **Why this feature improves the project:**
     - Improves usability and accessibility of the marathon list.
     - Allows users to quickly find events matching their interests without scrolling.

3. **“Details” Button in My Apply**
   - **Description:** Users can now view detailed information of a marathon they applied for by clicking the “See Details” button in the My Apply page.
   - **Implementation Details:**
     - Added a button on each marathon row in the My Apply table.
     - Clicking the button navigates to `/marathonDetails/:id` using React Router `useNavigate`.
     - The Marathon Details page shows full information including title, location, registration dates, contact number, additional info, and image.
     - Reused the same Marathon Details page component used elsewhere to keep consistency.
   - **Why this feature improves the project:**
     - Provides users full details of applied marathons in one click.
     - Makes the application more interactive and user-friendly.
     - Ensures consistency across pages by reusing existing components.

     
##  Tech Stack

- Frontend: React, Vite, React Router
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: Firebase
- Styling: Tailwind CSS, DaisyUI




