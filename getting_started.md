# Getting Started

-----------------------
### Contents

#### [Plot](readme.md)

#### [Getting Started](gettting_started.md)

#### [Overview & Tables](readme.md)

#### [Shop Routes and Pages](shop_routes_pages.md)

#### [Donut Routes and Pages](donut_routes_pages.md)
-------------------------


### Checklist

  - Create the express app
   - Create your `server.js`
   - Create your folders
   - `npm init`
   - install production dependencies
     - ejs, bodyparser, pg, knex
   - install dev dependencies
     - mocha, chai, supertest, morgan
   - Setup your `npm start` and `npm test` commands in your `package.json` file to run in the appropriate environments


  - Setup your tests
    - create a folder test and add your test files in there.
    - require mocha, chai, supertest, your server.js file, knex (with proper config for using your test db)
    - create a simple 'booyah' test
    - create a simple 'booyah' test that goes to a route in your app.
      - Make it pass
    - Make your first real test that checks to see that all of the shops from your DB are listed in the index page (you'll have to create your own shops in your test file using knex)
      - Make it pass
    - Repeat for all other routes, testing for appropriate content

#### [⇐ Previous (Plot)](readme.md) | [Next (Overview) ⇒](overview.md)
