\github\hello-world\react\indecision-app\

-Install npm
npm install -g yarn

-Install live-server
yarn add live-server
-start live-server
live-server public

-Install babel
yarn add babel-cli@6.24.1
yarn init
yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
yarn add babel-plugin-transform-class-properties

-Install react
yarn add react@16.0.0 react-dom@16.0.0
yarn add react-modal

-start babel to translate JSX to ES5:
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

-webpack
yarn add webpack
yarn add babel-core@6.25.0 babel-loader@7.1.1
yarn add webpack-dev-server

-loader to css and style to inject style tag into dom
yarn add style-loader css-loader
-Convert scss or sass to regular css 
yarn add sass-loader node-sass 
-reset browsers css
yarn add normalize.css

yarn run server
yarn run build
yarn run dev-server



-Remove global dependences
yarn global remove babel-cli live-server
npm unistall -g babel-cli live-server

- visual studio code
install Babel ES6/ES7 extension
install Path Intellisense extension


-React router
yarn add react-router-dom

-Redux
yarn add redux