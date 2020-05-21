# Bynder Back-End Assignment

The idea is to create a microservice that integrates Unsplash (https://unsplash.com/). Unsplash offers a JSON API, which you can use by creating a free developer account, you can find the instructions and API

<ul>
    <li> Service runs in a Docker container </li>
</ul>

## Prerequisites

```
Install Node.js first. Built with latest version
```

## Reference API

Port exposed as 3000

#### List photos:

GET localhost:{port}/photos

#### List collections:

GET localhost :{port}/collections/{user id}

#### Create new collection:

POST localhost:{port} /collections/

```
Content-Type: raw/json
 - title: the collection title - required
 - description: the collection description - optional
```

#### App a photo to a collection:

POST localhost :{port}/collections/{collection id}/add/{photo id}

### Description of usual server responses

-   200 OK – the request was successfully;
-   201 CREATED – the request was successfully created;
-   400 BAD REQUEST – the request was not understood;
-   404 NOT FOUND – the request was not found;
-   500 SERVER ERROR

### Installing

Runs on docker container

```
git clone https://github.com/andremlsantos/Bynder-assigment.git
docker build -t bynder-backend .
docker run -it -p 3000:3000 bynder-backend
```

## Built With

-   [Express](https://expressjs.com/) - Web application server framework
-   [Body-parser](https://github.com/expressjs/body-parser) - Node.js body parsing middleware.
-   [Unsplash-js](https://github.com/unsplash/unsplash-js) - A server-side Javascript wrapper for working with the Unsplash API.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
