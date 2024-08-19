# The Wild Oasis Hotel Management App

The Wild Oasis hotel management app is a full-featured React web application designed for hotel employees to manage cabins, bookings, and guests. It integrates with Supabase for its backend and uses advanced React techniques including Higher-Order Components (HOCs), the Compound Component Pattern, and React Query.

![image](https://github.com/user-attachments/assets/fd622a55-a526-4f8e-befa-3a18ff433faa)
![image](https://github.com/user-attachments/assets/4cddf490-3c58-4fc2-bebc-efa4f041b1cc)

## Table of Contents

- [Key Features](#key-features)
- [My Process](#my-process)
- [Built With](#built-with)
- [What I Learned](#what-i-learned)
- [Installation](#installation)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Key Features

- **Authentication**: Users must be logged in to access the application. New users can only sign up within the app to ensure only actual hotel employees have accounts.
- **User Management**: Users can upload an avatar, and change their name and password.
- **Cabin Management**: View a table of all cabins with photo, name, capacity, price, and discount. Users can create, update, or delete cabins, including uploading photos.
- **Booking Management**: View a table of all bookings with details including arrival and departure dates, status, paid amount, and guest data. Bookings can be checked in, checked out, or deleted. 
- **Payment Handling**: Users can confirm payment upon check-in and add breakfast options for the stay.
- **Guest Data**: Manage guest information including full name, email, national ID, nationality, and country flag.
- **Dashboard**: Display important information including guest check-ins/outs, statistics on bookings and sales, and charts for daily hotel sales and stay durations.
- **Settings**: Configure application-wide settings such as breakfast price, booking constraints, and enable dark mode.

## My Process

1. **React Fundamentals**: Developed a strong understanding of React components, state management, and routing.
2. **Authentication and User Management**: Implemented secure user authentication with Supabase.
3. **Form Handling**: Used React Hook Form for efficient form validation and management.
4. **Data Fetching and Caching**: Employed React Query for data fetching and caching.
5. **Real-time Updates**: Integrated real-time data updates using Supabase.
6. **Responsive UI Design**: Created a responsive design with Styled Components.
7. **Toast Notifications**: Added user notifications with React Hot Toast.
8. **Data Visualization**: Utilized Recharts for visualizing statistics and data.
9. **Routing and Navigation**: Facilitated smooth navigation using React Router.
10. **Settings Management**: Implemented configuration options for application-wide settings.
11. **HOC & Compound Pattern**: Used HOCs and Compound Component Pattern for code reusability and organization.
12. **Dark Mode**: Implemented dark mode for user preference.

## Built With

- **React**: JavaScript library for building user interfaces
- **Supabase**: Backend-as-a-Service for authentication and database management
- **React Query**: Data fetching and state management
- **React Router**: Routing and navigation
- **React Hook Form**: Form management
- **React Hot Toast**: Notifications
- **Recharts**: Data visualization
- **Styled Components**: CSS-in-JS styling
- **Vite**: Development server and build tool

## What I Learned

Building "The Wild Oasis" has expanded my technical skills and knowledge in the following areas:

- React fundamentals, authentication, and user management
- Efficient form handling with React Hook Form
- Data fetching and caching with React Query
- Real-time updates and responsive UI design
- Toast notifications, data visualization, and routing
- Implementing application-wide settings and dark mode
- Code reusability with HOCs and Compound Component Pattern
- Project planning and management with Git version control

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/CodePapa360/The-Wild-Oasis.git
    ```
2. Navigate to the project directory and install dependencies:
    ```bash
    npm install
    ```
3. Build the project:
    ```bash
    npm run build
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```

## Author

- [Jarmo van Doorn](https://github.com/YourGitHubUsername)

## Acknowledgments

- This app was developed as part of the Udemy course "The Ultimate React Course 2023: React, Redux & More" by Jonas Smechmann. Special thanks to Jonas for his exceptional teaching and guidance during the course.
