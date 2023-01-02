# URL Shortener

This repository contains the source code for a URL Shortener application built using the NestJS framework.

## Prerequisites
- Node.js 10.x or higher
- NestJS 8.x or higher

## Installation
1. Clone the repository
2. Move into the `src` directory
3. Install dependencies `npm install`
4. Run the application `npm run start`

## Usage
The application will start up on port `3000`, and you can access the application at http://localhost:3000/.

To shorten a URL, you can send an HTTP POST request to http://localhost:3000/shorten with the URL you want to shorten in the body. The application will return a shortened URL that you can use.

## Testing
To run tests, you can use the following command:
`npm run test`

## Contributing
If you would like to contribute to the project, please feel free to open a pull request.

## License
This project is licensed under the MIT License.
