# NodeJS Typescript Serverless Template


### Stack

* [NodeJS](https://nodejs.org/en/download/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
* [ExpressJS](https://expressjs.com/) - Framework most commonly used to build APIs with NodeJS
* [Typescript](https://www.typescriptlang.org/index.html#download-links) - Provides us with a type structure for Javascript
* [Serverless Framework](https://serverless.com/) - Toolkit for building serverless applications .

### Customization

Node.js changes:

- Add the routes definitions in the `src/routes.ts`
- Add the corresponding routes handling contollers as new `.ts` files

Serverless changes:
- Update the `service`
- Update the functions each mapping to the routes defined in the `src/routes.ts`

### Pre-requisites

Setup Servlerless:

```
$ npm i -g serverless    
```

Set serverless credentials
```
$ serverless config credentials \ 
    --provider aws \ 
    --key xxxxxxxxxxxxxx \ 
    --secret xxxxxxxxxxxxxx
```

Create a serverless project/service
```
$ serverless create --template aws-nodejs --path <project folder name>
```

This template works with express, typescript and node hence the template is `aws-nodejs`

### Local setup

To install dependencies of project.
```
$ cd <project folder name>
$ npm install
```
To generate files JS.
```
$ npm run build
```

Run project.
```
$ npm run start
```

### Deployment

Deploy to AWS

```
$ npm run deploy
```

If you get a identity related error during deployment
```
$ export AWS_ACCESS_KEY_ID=<AWS_ACCESS_KEY_ID>
$ export AWS_SECRET_ACCESS_KEY=<AWS_SECRET_ACCESS_KEY>
```

License
----
MIT

[Credit](https://medium.com/@eliasjcjunior/create-serverless-application-with-express-and-typescript-a4c0c25060b2)
