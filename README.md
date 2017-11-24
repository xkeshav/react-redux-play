Steps to build UI
---

### Prerequisite 

- Istall *node js*, If you don't have node js than please install node js using the [node.js installer](https://nodejs.org/en/) or using *nvm* in macOS

Note: `npm` is installed as part of node. Please note the node version 6.3.x and npm 3.10.3 or higher ( check using `node -v` and `npm -v`)

- Install *yarn* globally with below commands ( v 1.2.1 or higher )

```
sudo npm install -g yarn
```


- Install *Babel* ( v 6.26.0 ) and eslint ( v 4.8.0 ) to make copmpatibility and avilability for ES6 syntax and features

```
yarn global add eslint babel-cli
```

## How to Start
- clone the repository name 
- open terminal and navigate to your desired system directory (  `cd /opt/`)
- run `git clone < repo name>`
- navigate to the new project folder `cd /opt/react-redux-play/`
- Install all required packages from project root directory (where the *package.json* is located).

```
yarn 
```

Note: prior to run above command make sure you have *package.json* and *webpack.config.js* file in root folder

- create *.babelrc* file at project root directory with below content

``` 
    {
        "presets": [ "env", "react" ],
        "plugins": [
                  "transform-es2015-destructuring", "transform-object-rest-spread"
                ]
    }
```


- Start the application by running 

```
yarn start
```

Terminal will display the URL,  probably its *http://localhost:8080* , after webpack compiles succesfully


### What you learn 

- webapck configuration
- Babel and eslint options
- how reactjs component based architecture with redux
- knowledge about state management, reducer, services, es6, modular approach
- form validation with `redux-form` 
- recreate login and register page with functional component approach
- modifed redux logger to remove our redux-form state logging
- learn how `redux-form` work with react and react-redux ; earlier tried `react-redux-form` too 
- changes in **webpack.config.js** , change syntax from *loader* to  *use*   


Thanks for the wonderful blog from which I inherit the code and folder structure
http://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example

- Ask me anything for any issue or query.

