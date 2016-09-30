# Overview

-----------------------
### Contents

#### [Plot](readme.md)

#### [Getting Started](gettting_started.md)

#### [Overview & Tables](readme.md)

#### [Shop Routes and Pages](shop_routes_pages.md)

#### [Donut Routes and Pages](donut_routes_pages.md)
-------------------------


Your app consists of three resources: shops, employees, and donuts.

 - Shops have many donuts, many donuts belong to many shops.
 - Shops have many employees, employee belongs to a shop.
 - Employee has one favorite donut

*plot stuff: the donuts for all the shops are stored and distributed from one factory.*

## Tables

|Shop
|----------------
|id
|name (text)
|city (text)


|Donut
|----------------
|id
|name (text)
|topping (text)
|price (int)


|Shop_donut
|----------------
|id
|shop_id (fk)
|donut_id (fk)


|Employee
|----------------|
|id
|first_name (text)
|last_name (text)
|favorite_donut (fk)

#### [⇐ Previous (Getting started)](getting_started.md) | [Next (Shop Routes & Pages) ⇒](shop_routes_pages.md)
