# Find A Freelancer

You can visit the project from here: https://findfreelancers.vercel.app.
If you run the web application in development mode, run `ng serve` or just `ng s` you can visit the web application from here: http://localhost:4200
# Table of Contents
- <a href="#about">About</a>
- <a href="#features">Features</a>
- <a href="#project-structure">Project Structure</a>
- <a href="#application-pictures">Application Pictures</a>

# <p id="about">About</p>

Find a Freelancer is a web application that allows users to look for the right freelancers to get the job done or register themselves as a freelancer. The application offers viewing the list of freelancers without registration and even to contact them without having to register on the site which is a convenience. 

# <p id="features">Features</p>

- <strong>Authentication</strong>
    - Login
        - log in with existing account

    - Register
        - create new account

- <strong>Freelancers</strong>
    - Freelancer
        - browse already registered freelancers
        - view a specific freelancer (detailed information)
        - register as a freelancer

- <strong>Proposals</strong>
    - Proposal
        - view incoming proposals (messages)
        - contact/send a proposal for a specific freelancer

    - Unauthorized user
        - browse all registered freelancers
        - view details for a specific freelancer
        - contact/send proposal to freelancer
      
- <strong>Profile</strong>
    - Profile
        - view email address and your registration as a freelancer
    - Management
        - easy manage your registration as a freelancer like to edit or delete.
        

# <p id="project-structure">Project Structure</p>
- Client
    - auth
        - login - login component for user authentication
        - register - register component for user authentication
    - core
        - guards
            - auth guard - navigates users to the login component if they are not authenticated
        - services
            - auth - responsible for making login, register or logout request to the server, also autoLogin functionality
            - freelancer-storage - responsible for fetching the skills categories, to fetch all freelancers, also to store them, to get the individual freelancer, to edit or delete them
            - loader - responsible storing the subject which changes the loading-spinner behaviour
            - freelancer-registration-resolver - responsible for get the individual freelancer right before the edit component is being loaded
            - profile-storage - responsible for fetching the user information and to get the registration as a freelancer
            - proposal-storage - responsible for posting a proposal or fetch the individual proposal
        - features
            - proposal - it handles logic related to the proposals section
            - freelancers - responsible for each freelancer (details page) and functionality about all freelancers
            - profile - handles logic and display data of the logged user and the registration as a freelancer
        - shared
          - shared-badge - holds the style and template structure of each area of expertise (skill)
          - shared-spinner - spinner component that is displayed when the data is not loaded yet
          - shared-button - two types of buttons: one as a normal `<button>` html tag, the other is as a routerLink `<a>`
          - shared-card - used as a wrapper for almost every block
          - shared-dialog - used to display error messages, used also as a combination with shared-spinner
    - styles - stores scss files

# <p id="application-pictures">Application Pictures</p>

## Desktop
![home](https://user-images.githubusercontent.com/80749603/209162217-c8db6c13-9e07-4c76-ba76-7c13fac0504b.png)

![details](https://user-images.githubusercontent.com/80749603/209162287-f1f9025f-bf33-48ae-ac65-b8b343223fe3.png)

![contact](https://user-images.githubusercontent.com/80749603/209162346-a125e676-216d-4d06-9262-69033b74727b.png)

![proposals](https://user-images.githubusercontent.com/80749603/209162635-dc7150d0-6f73-4752-98b8-3c29857c535a.png)

![auth](https://user-images.githubusercontent.com/80749603/209162403-6fc55a1e-69bd-4477-a0c8-4c4b3bd46b6f.png)

![profile](https://user-images.githubusercontent.com/80749603/209162483-82fb32e3-2bb6-447e-b58f-c3b7c3b7c8db.png)

![edit](https://user-images.githubusercontent.com/80749603/209162550-778fc8af-5baf-4a8a-97ac-0b6814c8c3f4.png)

## Mobile

![home_m](https://user-images.githubusercontent.com/80749603/209163166-d64e6407-b6de-4af3-b46b-3f6d68076ab0.png)

![home_m_nav](https://user-images.githubusercontent.com/80749603/209163234-c7c21c50-b9d2-45a3-9d3a-c0147fb7b184.png)

![profile_m](https://user-images.githubusercontent.com/80749603/209163337-2da2bbf8-92e1-4563-8314-dc6ba61694c2.png)

![proposals_m](https://user-images.githubusercontent.com/80749603/209163420-58c417e5-fca0-4fdf-bc9d-1a65f494b337.png)

![delete_m](https://user-images.githubusercontent.com/80749603/209163502-90620c87-03e0-49db-ba0b-89c0ad218ebb.png)
