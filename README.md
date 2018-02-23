# Webpack Starter
Webpack boilerplate for web apps (w/ Babel &amp; Sass)


## Contents
- [Installation](#installation)
- [Folder structure](#folder-structure)
- [Scripts](#scripts)


## Installation

1. Download the [latest release](https://github.com/movingobjects/webpack-starter/releases/latest)
1. Update `package.json` to fit your specific project
1. Install dependencies

    ```bash
    $ cd path/to/your-project
    $ npm install
    ```
1. Start it up!

    ```bash
    $ npm run dev
    ```


## Folder structure

```
root
├── app
│   ├── dist
│   ├── resources
│   └── src
└── scripts
```

- #### `root`
    Stores `.gitignore`, `package.json`, and `README.md`, along with Webpack and other configuration files (e.g., `.babelrc`, `.editorconfig`).

- #### `app`
    Stores source code and resources related specifically to the application.

    - #### `app/dist`
        The web-ready build of the `app/src/` folder is created here.

        _**Note**: Ignored in `.gitignore`._

    - #### `app/resources`
        Stores related resource files, like favicons.

    - #### `app/src`
        Stores the source code and assets. These can be structured in whatever way makes sense for the project.

- #### `scripts`
    Stores NPM scripts detailed [below](#scripts).


## Scripts

### Development

Use [webpack dev server](https://github.com/webpack/webpack-dev-server) to run the application on a development server with live reloading.

```bash
$ npm run dev
```

### Production

Build the application into a web-ready distributable bundle (in `/app/dist`).

```bash
$ npm run build
```


### Cleaning scripts

Clear the `node_modules` folder and reinstall all modules:

```bash
$ npm run reinstall
```

Fix permissions to the scripts in the `scripts` folder so they're executable:

```bash
$ npm run enable-scripts
```
