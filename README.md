<p align="center">
  <img width="150" src="https://i.ibb.co/N3DnS25/perfil-300.jpg">
</p>
<h1 align=center>API</h1>
<p align="center">Just a Node.js REST API.</p>

<div align="center">

<a href="https://www.linkedin.com/in/izabela-matos/" rel="linkedin">![Author](https://img.shields.io/badge/made%20by-izabela-green)</a>
![Languages](https://img.shields.io/github/languages/count/izabela-am/fluke?color=green)
![Repository Size](https://img.shields.io/github/repo-size/izabela-am/fluke?color=green)
![Last Commit](https://img.shields.io/github/last-commit/izabela-am/fluke?color=green)

</div>


<img src="https://media-exp1.licdn.com/dms/image/C4D1BAQHoXizF4_hqZA/company-background_10000/0/1594770682384?e=2159024400&v=beta&t=3yhYJPHxmkyCFz8HSEOnKAp-WLoCxmBbRGycF56c2XU">

## :books: Let me tell you a little bit about this project:
This API is one of the parts of the technical challenge step of the Fluke hiring process.
The challenge was to build an application, using Node.js, with the following specifications:
- The API must be integrated with a NoSQL database;
- You have full control of the application's scope, make all technical decisions regarding architecture and design patterns as you see fit;
- Don't forget the docs!

## :boom: The decisions I made and how I built the API:
Ok, let me show you how I built this project and all the decisions I had to make. Let's take this step-by-step so we don't get lost on the way:
- __Architecture & Design__: Are you familiar with DDD (Domain-Driven Design)? If not, let me tell you a little bit about it:
  - First things first, what is a "domain"? Well, the domain is the __core__ of the business we're working at. It's based on a series of ideas,
  knowledge and business processes. DDD values that developers take part on the process of understanding the business instead of just talking to its specialists.
  In short, if we as developers do not know how to model our software according the needs of our business, how are we supposed to make it work?
  - DDD uses something called Domain Model Patterns, a series of design patterns that are used to compose the layers we will work with. The patterns I used in this project are:
    - __Repositories__: They make the connection between the application's routes and the layer of data persistency;
    - __Aggregate Objects__: different entities that are in the same context and make use of each other;
    - __Value Objects__: They represent typed values. I find these a little harder to describe, so if you want to know more about them check out [this article](https://medium.com/swlh/value-objects-to-the-rescue-28c563ad97c6)
  - But why did I choose DDD? I recommend the reading of [this article](https://www.informit.com/articles/article.aspx?p=1944876&seqNum=2#:~:text=DDD%20provides%20sound%20software%20development,and%20who%20must%20be%20involved.), that helped me understand the benefits of Domain Driven Design a lot better.
  - I also tried my best to apply the SOLID principles while building this;
  
 This was not my first time applying these concepts inside a proejct, but it's always interesting to do so and I always learn a lot.
***
  
- __The techinical decisions__: Let's talk about all the frameworks, libraries and things of the sort that I chose to go with:
  - I built this API using __TypeScript__;
  - The framework I chose was __Express__, simply because it's my go-to Node.js framework;
  - I picked __MongoDB__ + __TypeORM__ because one of the rules of this challenge was that I had to use a non-relational database.;
  - I used __JWT__ (JSON Web Token) to create user authentication logic;
  - I picked __ts-node-dev__ to run my server while developing the API;
  - For async error handling, I used __express-async-errors__
  - The library I used to hash the user passwords before saving them on the database was __bcryptjs__;
  - __reflect-metadata__ to do runtime reflection on types
  - __TL;DR__. This is the project's stack:
    - Node.js;
    - TypeScript;
    - Express;
    - MongoDB + TypeORM;
    - JWT;
    - reflect-metadata;
    - express-async-errors;
    -ts-node-dev;
    - Bcryptjs;

<p align="center">
  <img width="50" src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png">
</p>

## Routes:
### POST /registerNewCustomer:
```
curl --request POST
  --url http://localhost:3333/registerNewCustomer
  --header 'Content-Type: application/json'
  --data '{
      "name": "Izabela",
      "cpf": "12345678912",
      "cellphone": "123456789",
      "email": "izabela@teste.com",
      "password": "123"
    }'
```
- __Response example__: If successful, the request should return an object with some of the user's data
```json
  {
    "id": "6027b3a3ff9fc91940792e10",
    "name": "Izabela",
    "email": "izabela@teste.com",
    "created_at": "2021-02-14T11:31:38.376+00:00"
    "updated_at": "2021-02-14T11:31:38.376+00:00"
  }
```
***
### POST /authentication:
```
curl --request POST
  --url http://localhost:3333/authentication
  --header 'Content-Type: application/json'
  --data '{
      "email": "izabela@teste.com",
      "password": "123"
    }'
```
- __Response example__: If successful, the request should return the user's ID and a JWT token.
```json
  {
    "user": "6027b3a3ff9fc91940792e10",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTMyMjgyOTUsImV4cCI6MTYxMzMxNDY5NSwic3ViIjoiNjAyN2IzYTNmZjlmYzkxOTQwNzkyZTEwIn0.57UBry4SGf--wbs8C-VjI3MBw4uC9BKkn0eYak_gpw4"
  }
```
__Take the token from this request's response and use it as a header on requests that need authentication__

***

### POST /productsOrder:
For this request, make sure you don't forget to pass the desired product's id as a query param.
This request requires authentication, so don't forget to take the token you've gotten from the /authentication request and use it as a header here.
```
curl --request POST
  --url 'http://localhost:3333/productsOrder?productId={productId}'
  --header 'Authorization: Bearer Token'
```
- __Response example__: If successful, the request should return the user's purchased product
```json
  {
    "id": "6029249f59437c0cd43c9e5f"
    "price": 129.99
    "package_name": "Pacote Alto Consumo: 30GB"
  }
```
Let's look at the flow chart of this request:
<p align="center">  
  <img width="450px" src="https://64.media.tumblr.com/3c2ba79210ac2a3b13da91c8a963ce95/638f7ca38a8d87e1-1b/s1280x1920/58826c8948fd45afac3409891ce10c6c8ad99cd2.png">
</p>

***

### GET /currentPackage:
This request requires authentication, so don't forget to take the token you've gotten from the /authentication request and use it as a header here.
```
curl --request GET
  --url http://localhost:3333/currentPackage
  --header 'Authorization: Bearer Token'
```
- __Response example__: If successful, the request should return all of the user's purchased products + the number of products he has bought
```json
  {
    {
      "id": "6029249f59437c0cd43c9e5f"
      "price": 129.99
      "package_name": "Pacote Alto Consumo: 30GB"
    },
    bought_products:
}
```

***
### POST /portabilityRequest:
This request requires authentication, so don't forget to take the token you've gotten from the /authentication request and use it as a header here.
```
curl --request POST
  --url http://localhost:3333/portabilityRequest
  --header 'Authorization: Bearer Token
  --header 'Content-Type: application/json'
  --data '{
      "name": "Izabela",
      "cpf": "12345678912",
      "cellphone": "12345"
    }'
```
- __Response example__: If successful, the request should return the user's opened ticket
```json
{
  "tickets": [
    {
      "id": "60290b015c732837c4980fd5",
      "customer_name": "Izabela",
      "customer_cpf": "12345678912",
      "customer_cellphone": "123456",
      "customer_id": "60290a1a34b0772de4fa0456",
      "created_at": "2021-02-14T11:35:29.825Z",
      "updated_at": "2021-02-14T11:35:29.825Z"
    }
  ],
  "opened_tickets": 1
}
```
Let's look at the flow chart of this request:
<p align="center">  
  <img width="450px" src="https://64.media.tumblr.com/79986f84f62704bf5a6eccf5ebc21d22/638f7ca38a8d87e1-04/s1280x1920/cf1112156839c382b8534fd7247f871a01519a14.png">
</p>

***

### GET /portabilities:
This request requires authentication, so don't forget to take the token you've gotten from the /authentication request and use it as a header here.

```
curl --request GET
  --url http://localhost:3333/portabilities
  --header 'Authorization: Bearer Token
```
- __Response example__: If successful, the request should return all of the user's opened tickets + the total of tickets the user has opened
```json
{
  "tickets": [
    {
      "id": "60290b015c732837c4980fd5",
      "customer_name": "Izabela",
      "customer_cpf": "12345678912",
      "customer_cellphone": "123456",
      "customer_id": "60290a1a34b0772de4fa0456",
      "created_at": "2021-02-14T11:35:29.825Z",
      "updated_at": "2021-02-14T11:35:29.825Z"
    }
  ],
  "opened_tickets": 1
}
```
***

### GET /pipipi:
__BEWARE!!!!!!!! This is the most important route of this application__
```
curl --request GET \
  --url http://localhost:3333/pipipi
```
- __Response example__: If successful, the request should return the following message:
```json
{
  "message": "popopo"
}
```


<p align="center">
  <img width="50" src="https://camo.githubusercontent.com/ce9c7a173f38722e129d5ae832a11c928ff72683fae74cbcb9fff41fd9957e63/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f332f33662f4769745f69636f6e2e7376672f3130323470782d4769745f69636f6e2e7376672e706e67">
</p>

## :running: Let's run this thing!!:
```shell
  # Clone this repository
  - git clone https://github.com/izabela-am/fluke-ts.git
  
  # Enter project directory
  - cd fluke-ts
  
  # Install all project dependencies
  - yarn
  
  # Start the server
  - yarn dev
```


## :fork_and_knife: Contributions:
```shell
  # Fork this repository
  # Create a branch for your features
  git checkout -b my-feature
  
  # Commit your changes (and make sure to write a nice commit message!)
  git commit -m "My message here"
  
  # Push your branch
  git push origin my-feature
```

## :information_source: License:
This project uses the <a href="https://github.com/izabela-am/GoBarber-API/blob/master/LICENSE">MIT License</a>.  
Built with :heart: by <a href="https://www.linkedin.com/in/izabela-matos/">Izabela</a>
