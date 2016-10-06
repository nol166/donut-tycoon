## Donut Routes

-----------------------
### Contents

#### [Plot](readme.md)

#### [Getting Started](getting_started.md)

#### [Overview & Tables](overview.md)

#### [Shop Routes and Pages](shop_routes_pages.md)

#### [Donut Routes and Pages](donut_routes_pages.md)
-------------------------


You'll be making a page (.ejs) for each `GET` request (see below).

| Route Name     | Request Method | Example Request URL |  Route                   
|----------------|----------------|---------------------|----------------------
| donut index     | `GET`          | `/donuts`            |  `/donuts`
| donut show page | `GET`          | `/donuts/1`          |  `/donuts/:donut_id`
| donut edit      | `GET`          | `/donuts/1/edit`     |  `/donuts/:donut_id/edit`
| donut update    | `PUT/PATCH`    | `/donuts/1/`         |  `/donuts/:donut_id`
| donut new page  | `GET`          | `/donuts/new`        |  `/donuts/new`
| donut destroy   | `DELETE`       | `/donuts`            |  `/donuts`
| donut create    | `POST`         | `/donuts`            |  `/donuts`

# Donut Pages

**Donut index page**
 - Lists all of the donuts.
 - Has a button to the new donut page.
 - Each donut listing should be a clickable link to the **donut show page**.
 - Has buttons to the **donut edit page** and the **donut delete route** for each donut.

**Donut new page**
 - Has a form with form fields that match the columns in your donuts table
 - Submit button goes to the **donut create** route which creates the new donut, and goes back to the index page

**Donut edit page**
 - Has a form that is populated with a single donut's information, based on the donut id in the route
 - Submit button that goes to the **donut update** route which updates the donut and goes back to the show page for that donut.

**Donut show page**
 - Shows all of the details of donut including which shops carry it (comes from the shops table)

#### [⇐ Previous 'Read Me'](shop_routes_pages.md)
