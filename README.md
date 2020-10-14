# Frontend Assignment - REST Countries API with color theme switcher

![Design preview for the REST Countries API with color theme switcher coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

**To do this challenge, you need a good understanding of JavaScript.**

## The challenge

Your challenge is to integrate with the [REST Countries API](https://restcountries.eu) to pull country data and display it like in the designs.

You can use any JavaScript framework/library on the front-end such as [Angular](https://angular.io/), [React](https://reactjs.org) or [Vue](https://vuejs.org). You also have complete control over which packages you use to do things like make HTTP requests or style your project.

Your users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

## Where to find everything

Your task is to build out the project to the designs inside the `/design` folder.

In this challenge, you will find mobile and desktop designs in light and dark mode color schemes for both pages.

The designs are in JPG static format. This will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`. This should help train your eye to perceive differences in spacings and sizes.

There are no assets for this challenge, as the country flags will be pulled from the [REST Countries API](https://restcountries.eu) and you can use an icon font library for the icons.

There is a `style-guide.md` file, which contains the information you'll need, such as color palette and fonts.

## Building your project

Feel free to use any workflow that you feel comfortable with.

## Deploying your project

There are a number of ways to host your project for free. We recommend using [Vercel](https://bit.ly/fem-vercel) as it's an amazing service and extremely simple to get set up with. If you'd like to use Vercel, here are some steps to follow to get started:

1. [Sign up to Vercel](https://bit.ly/fem-vercel-signup) and go through the onboarding flow, ensuring your GitHub account is connected by using their [Vercel for GitHub](https://vercel.com/docs/v2/git-integrations/vercel-for-github) integration.
2. Connect your project to Vercel from the ["Import project" page](https://vercel.com/import), using the "From Git Repository" button and selecting the project you want to deploy.
3. Once connected, every time you `git push`, Vercel will create a new [deployment](https://vercel.com/docs/v2/platform/deployments) and the deployment URL will be shown on your [Dashboard](https://vercel.com/dashboard). You will also receive an email for each deployment with the URL.

**Have fun building!** 🚀

This is sample POC project that has been build to demonstate the ability of my tecinical skill set in React eco systm. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Library used

### IDE setup

[VS Code](https://code.visualstudio.com/) is used to develop this project

#### Plugins used

- [ESLint](https://eslint.org/) - Find and fix problems in your JavaScript code
- [Prettier Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - It is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary. Prettier does exdents the `eslint-config-prettier` and `eslint-plugin-prettier`
- [pretty-quick](https://github.com/azz/pretty-quick) - Runs code formatting on files changes.
- [husky](https://github.com/typicode/husky) - Pre commit Hook - Husky can prevent bad `git commit` and `git push`

#### 3rd Party packages
- [numeral](http://numeraljs.com/) - A javascript library for formatting and manipulating numbers.
- [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) - DOM bindings for React Router.
- [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [scss](https://sass-lang.com/) - CSS preprocessor. Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.

### Archtecture

This project is build using `redux` and the binding library `react-redux` to manage the state of the application.Even though the state for this application does needs to be managed globally. A middleware of `redux-thunk` is used to perform side effets. The hooks like `useSelector`, `useDispatch`, `useHistory` & `useParams` are also used to manage connect the state and to handle the router.

### Folder Structure

Kept the files just 2 level depth from the project `src` folder. Enabled absolute import for more code readability.

## Improvements

    1. Code spliting - Better way to handle styles
    2. Better management of the errors when I able to interact with the endpoints
    3. Add unit test cases
    4. Enhance Types for the project

## Install
    $ git clone https://github.com/sdmels/rest-countries-react-redux.git
    $ cd rest-countries-react-redux
    $ npm install


