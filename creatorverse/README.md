# creatorverse app

### Overview

- Intro
- Tech used
- Description and functionality
- Github link
- Backend Express server

**Intro**

Creatorverse is a project displaying the power of React combined with express.js server API's and an external news API tied to a back-end Supabase. All React components are displayed correctly on desktop screen using css grid and very minimal media queries. The app displays a list of creators with CRUD operations without any authentication.

**Tech used**

In this project React was used for the responsive design along with css display grid. React hooks were maximized to increase loading and performance. Bandwith, server strain, mobile performance are all taken into account when designing the app. This app was built with and MVC (Model-View-Controller) Architecture in mind. The user interacts with the application through the View when adding, updating and deleting items with the front-end UI. The View captures the user info and sends it to the controller. The Controller receives the creator cards and processes it (validates inputs and determines actions to take) to interact with the model. The model is actually supabase. Supabase has the model for the documents which define the data structures and business logic, and interacts with the database. Supabase stores the data. These are the steps of the data flow.

[1.] React (View) sends requests to -------> Express.js (Controller);
[2.]Express.js processes requests, uses Supabase API to access or modify data;
[3.]Supabase returns data to the Controller;
[4.]The Controller sends data back to the View

This separation keeps the application organized, scalable, and maintainable.

**Description and Functionality**
Creatorverse is a site that provides results based on creators cards searched. The site is designed to function on any browser- mobile or desktop. No need to install special extensions. Plans to improve the project includes user database management, archiving creator cards feature, adding location services to determine user location for local creators.

**Github link**
[live site] https://github.com/jcalcan/creatorverse.git
[updated project with back-end]

Good luck and have fun!
