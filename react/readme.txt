\github\hello-world\react\indecision-app\

-Install npm
npm install -g yarn

-Install live-server
npm install -g live-server

-Install babel
npm install -g babel-cli@6.24.1
yarn init
yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2


-start babel to translate JSX to ES5:
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

-start live-server
live-server public


- visual studio code
install Babel ES6/ES7 extension
install Path Intellisense extension