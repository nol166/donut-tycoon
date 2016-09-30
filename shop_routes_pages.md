-----------------------
### Contents

[Plot](readme.md)

#### [Getting Started](readme.md)

#### [Overview & Tables](readme.md)

#### [Shop Routes and Pages](shop_routes_pages.md)

#### [Donut Routes and Pages](donut_routes_pages.md)
-------------------------

## Shop Routes

You'll be making a page (.ejs) for each `GET` request (see below).

| Route Name     | Request Method | Example Request URL |  Route                   
|----------------|----------------|---------------------|----------------------
| shop index     | `GET`          | `/shops`            |  `/shops`
| shop show page | `GET`          | `/shops/1`          |  `/shops/:shop_id`
| shop edit      | `GET`          | `/shops/1/edit`     |  `/shops/:shop_id/edit`
| shop update    | `PUT/PATCH`    | `/shops/1/`         |  `/shops/:shop_id`
| shop new page  | `GET`          | `/shops/new`        |  `/shops/new`
| shop create    | `POST`         | `/shops`            |  `/shops`
| shop destroy   | `DELETE`       | `/shops`            |  `/shops`


| Route Name     | Request Method | Example Request URL |  Route                   
|----------------|----------------|---------------------|----------------------
| shop employee index page | `GET`  | `/shops/1/employees`            |  `/shops/:shop_id/employees`
| shop employee show page | `GET`| `/shops/1/employees/1`  |  `/shops/:shop_id/employees/:employee_id`
| shop employee edit page | `GET`| `/shops/1/employees/1/edit`  |  `/shops/:shop_id/employees/:employee_id/edit`
| shop employee update | `PUT/PATCH`| `/shops/1/employees/1`  |  `/shops/:shop_id/employees/:employee_id`
| shop employee new page | `GET`| `/shops/1/employees/new`  |  `/shops/:shop_id/employees/new`
| shop employee create | `POST`| `/shops/1/employees`  |  `/shops/:shop_id/employees`
| shop employee destroy | `DELETE`| `/shops/1/employees`  |  `/shops/:shop_id/employees`

# Shop Pages

**Shop index page**
 - This is your home page
 - Lists all of the shops.
 - Has a button to the new shop page.
 - Each shop listing should be a clickable link to the **shop show page**.
 - Has buttons to the **shop edit page** and the **shop delete route** for each shop.

**Shop new page**
 - Has a form with form fields that match the columns in your shops table
 - Submit button goes to the **shop create** route which creates the new shop, and goes back to the index page

**Shop edit page**
 - Has a form that is populated with a single shop's information, based on the shop id in the route
 - Submit button that goes to the **shop update** route which updates the shop and goes back to the show page for that shop.

**Shop show page**
 - Shows all of the details of shop including the donuts they carry (comes from the donuts table), and employees (comes from employee table).
 - Has link to **shop employee index**

**Shop employee index page**
 - Has listing of all of the employees for that shop
 - **The rest of the employee pages are pretty much the same as shop except with employees for that shop_id**

#### [⇐ Previous 'Read Me'](overview.md) | [Next 'Getting Started' ⇒](donuts_routes_pages.md)
