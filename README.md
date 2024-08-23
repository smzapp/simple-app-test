# Overview

Author: Samuel Amador
<br/>
Description: This application is intended for ad-group. Please don't use/reproduce this
source code without written permission from the author.


# System Requirements

Backend: `Laravel v.9.0`
- Prerequisites: composer, php >= 8.0
<br/>

Frontend Stack: `NextJS with typescript`
- Installed nodejs

# Installation

`$ git clone [APP]`

<b>Laravel Application</b>

- copy .env.example as .env

`$ cd backend-api`

`$ composer install`

`$ php artisan key:generate`

`$ php artisan migrate --seed`

`$ php artisan passport:install`

`$ php artisan serve`

<br/>

<b>NextJS Application</b>

- copy .env.example as .env and assign proper

`$ cd frontend-nextjs`

`$ npm install`

`$ npm run dev`

# Sample Login credential

`email: sam@test.com`
`password: test1234`