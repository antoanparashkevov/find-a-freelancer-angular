# Find A Freelancer

Once you run `ng serve` or just `ng s` you can visit the web application from here: http://localhost:4200
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

https://user-images.githubusercontent.com/80749603/209160538-c162e94b-9379-40b1-a1fe-2dcb61826598.png


## Mobile

