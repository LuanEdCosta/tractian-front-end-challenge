# :1st_place_medal: Tractian Front-end Challenge

This project was created for the Front End Software Engineer challenge.

## :computer: Tech Stack

List with the most relevant libraries used in this project.

- react
- TypeScript
- MUI 5
- i18next
- react-query
- axios
- date-fns
- react-hook-form
- zod
- jest
- testing-library
- eslint
- prettier
- swc
- vite

## :file_folder: Folder Structure

- **src**: This is where the source code of the application is located. It contains the following directories:

  - **@types**: Contains TypeScript declaration files (.d.ts). This directory is used to implement TypeScript Module Augmentation and global utility types.

  - **app**: Contains the component that renders the entire app. It initializes all the global configurations such as providers, css baseline, custom fonts, app error boundary, etc.

  - **components**: Contains the application's components which are divided into two categories: dumb and stateful. Dumb components only receive data via props and don't have internal state. Stateful components, on the other hand, could access data via Context API, props, contain internal state, and so on.

  - **hooks**: Contains reusable custom React hooks.

  - **locales**: Contains all translations organized by language, and are separated into three categories: translations for pages, components, and shared.

  - **models**: Contains TypeScript types that can be used throughout the app. Union and intersection types must be avoided.

  - **pages**: Contains the pages of the app. Each page can have its components, custom hooks, or configurations.

  - **routes**: Contains the routes of the app to map paths to pages.

  - **services**: Contains functions to fetch data from APIs.

  - **themes**: Contains MUI 5 theme files.

  - **types**: Contains reusable TypeScript types that can use models or other types from the same folder. Union and intersection are allowed here.

  - **utils**: Contains reusable utility functions, preferably pure functions.

- **dist**: Contains the build assets.

## :rocket: Installation

```bash
yarn install
```

## :scroll: Scripts

See the [package.json](package.json) file for more scripts.

### `yarn dev`

Runs the app in the development mode.

### `yarn test`

Run tests.

### `yarn build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn preview`

Preview the app after build.

## :man: Author

Luan Eduardo da Costa | [Follow me on Linkedin](https://www.linkedin.com/in/luaneducosta)
