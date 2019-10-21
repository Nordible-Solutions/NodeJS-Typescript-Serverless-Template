# NodeJS Typescript Serverless Template


### Stack

* [NodeJS](https://nodejs.org/en/download/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
* [ExpressJS](https://expressjs.com/) - Framework most commonly used to build APIs with NodeJS
* [Typescript](https://www.typescriptlang.org/index.html#download-links) - Provides us with a type structure for Javascript
* [Serverless Framework](https://serverless.com/) - Toolkit for building serverless applications .

### Installation and Use

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


To install dependencies of project.
```
$ cd serverless-template
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

Deploy to AWS

```
$ serverless deploy
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
