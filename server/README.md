#Setup
- Inside this folder run `npm install`
- Run `npm start` and go to `http://localhost:3000`
- Also keep the mongodb server running for while running this application

#Application
- Application contains 3 URL
  - `http://localhost:3000`
    - This is the base URL and will serve as temporary home page
  - `http://localhost:3000/new`
    - This is the admin input page
    - Here the admin will enter the title and content and submit the feed
    - Once login is added , this link will require authentication to access
  - `http://localhost:3000/all`
    - This is the notice board page
    - This page shows all the notice that was posted by the admin
