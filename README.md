# Overview

Author by Samuel Amador

**Note**: This application belongs to the author. Please don't copy/reproduce this
source code without written permission from the author.

# Sample Login credential

Email: `sam@test.com` <br/>
Password: `test1234`

# System Requirements

Backend: `Laravel v.9.0`
- Prerequisites: composer, php >= 8.0
<br/>

Frontend Stack: `NextJS with typescript`
- Pre-requisite: nodejs

# Installation

`$ git clone https://github.com/smzapp/simple-app-test.git`

<b>Laravel Application</b>

- copy .env.example as .env

`$ cd backend-api`

`$ composer install` else, add ` --ignore-platform-reqs` to bypass php version

`$ php artisan key:generate`

`$ php artisan migrate --seed`

`$ php artisan passport:install`

`$ php artisan serve`

<br/>

<b>NextJS Application</b>

- copy .env.example as .env and assign appropriate setup

`$ cd frontend-nextjs`

`$ npm install`

`$ npm run dev`

# Screenshot

https://i.imgur.com/P6PjCxw.png