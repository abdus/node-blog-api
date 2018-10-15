# Node Blog API

### Simple API written using NodeJS, Express and MongoDB.

## Table of Content
- [Introduction](#introduction)
- [How to Setup Locally](#How-to-Setup-Locally)
- [API Endpoints](#api-endpoints)
    - GET [`/api/blog/all`](#/api/blog/posts) Retrieve all posts

## Introduction
This is a blog API built with Node JS and ExpressJS. It uses MongoDB for storing database. As of now, this project doesn't have front-end codes yet. You have to build front-end by yourself with any of the available framework (or with JS, HTML & CSS), make API call to back-end to fetch blogposts/users and render them in from-end. It uses JSON to transfar data between client and server.

## How to Setup Locally 
1. Fork this Repository(if you want to keep it sync) and clone the fork `git clone <URL>`
2. Change directory to the project root `cd DIRNAME`
3. Install npm packages using using `npm install`
4. Start your development server `node bin/www`

## API Endpoints
All API calls need auth, i.e. you need an access token to make a successful API call. To get an access token, you need to register yourself using email and password. You can use mongo shell to create a document under collection `users` or you can use `/signup` endpoint. By default, `/signup` end-point save a new user as _not approved_ account and doesn't have _admin_ access. You can easily set them to `true` through mongo shell. Note that, it `/api` endpoints won't work if this options are set to `false`. Below is a sample fetch request to create a new account. 

```js
fetch('/auth/signup'{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'YOUR NAME HERE',
        displayName: 'NICK NAME [OPTIONAL]',
        Website: 'example.com [OPTIONAL]',
        email: 'YOU@EMAIL.COM',
        password: 'YOUR PASS'
    })
})
.then(res => res.json())
.then(res => {
    // Here you will get your account status
})
.catch(err => console.log(err));
```