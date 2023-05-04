# UrlShortener API

## Description

This repository contains my first ever project built in NestJS, it was requested to me as a part of a Job Application, where a series of requirements were given to me and this app would need to follow them. 

This app serves the purpose of shortening URLs, you send a URL to certain API and it returns a shortened URL. Building this project I learned a lot about NestJS and building APIs, such as writting controllers, service, modules and entity layers as well as connecting it to the database and manipulating the data.

## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
    - [urlshorter](#urlshorter)
        - [POST urlshorter/encode](#posturlshorter/encode)  
        - [GET urlshorter/encode:id](#GETurlshorter/dencode/:id)  
- [Contributing](#contributing)
- [License](#license)

## Installation

In order to run this project in your local machine you need to follow these steps:
1. Clone the repository
2. Move to the cloned repo path
3. Install all the dependencies ```npm install```
4. Create a database in [mongoDB atlas](https://www.mongodb.com/atlas) and get the cluster connection URL
    - Go to cluster overview
    - Click on the connect button
    - Select Connect your application with drivers
    - Get the URL and replace with your credentials
5. Import the URL within the Mongoose module in ```/src/app.module.ts```
6. Build the project ```npm run build ```
7. Run in development mode ```npm run start:dev ```

## Usage

In order to shorten an URL you need to call the following APIs:

## urlshorter
### POST urlshorter/encode
Send the URL you want to shorten in the body of the request

Body of the request:
```
{
    "url": "urlYouWantToShorten.com" 
}
```
Response

``` 
{
    "_id": "645342839e681055a51803a2",
    "url": "urlYouWantToShorten.com",
    "newUrl": "nsa34d.sh/aGJzO",
    "__v": 0
}
```
API Controller
```
@Post('encode')
  @HttpCode(HttpStatus.CREATED)
  encode(@Body('url') url: string) {
    return this.urlshorterService.encode(url);
  }
```

### GET urlshorter/decode/:id
Request Example:
```
GET urlshorter/decode/645342839e681055a51803a2
```
Response
``` 
{
    "_id": "645342839e681055a51803a2",
    "url": "urlYouWantToShorten.com",
    "newUrl": "nsa34d.sh/aGJzO",
    "__v": 0
}
```
API Controller
``` 
  @Get('decode/:id')
  @HttpCode(HttpStatus.FOUND)
  decode(@Param('id') id: string) {
    return this.urlshorterService.decode(id);
  }
```
## Contributing
If you would like to contribute to the project, please feel free to open a pull request.

## License
This project is licensed under the MIT License.
