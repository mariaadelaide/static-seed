# @mariaadelaide/static-seed

Maria Adelaide starts a new static website project.

## How to use this seed?

MA Static Seed can be used in two ways:

- In a **completely static mode**, where no step of building/processing/compiling occurs and thus all the tasks that relate to bundling, dependencies resolution, shared HTML partials, deployment, SASS compilation, CSS prefixing, etc, must be done/managed manually. For this step, one can skip the Requirements, Setup and Usage sections below and start the development by editing the files (`index.html`) on the code editor of choice (though setup of [EditorConfig](https://editorconfig.org) is highly recommended nonetheless) and upload them to an web server/hosting for deployment using any preferred method. For convenience a **local web server** with **live reload** is offered on this mode nonetheless, which in this case Requirements and Setup steps must be observed.
- In a **tooling mode**, where we achieve a more modern/up-to-date workflow through the use of [Parcel](https://parceljs.org) and other scripts, capable of supporting the specific requirements and challenges of modern web development and its associated ecosystem. Thus, using this mode one will have support for:
  - **[SASS](https://sass-lang.com)** compilation.
  - **Client side templating** through [Pug](https://pugjs.org) (support for better static files generation through partials, layouts and template blocks).
  - Automatic **transpilation of JS code** through [Babel](https://babeljs.io) (configured to support a specific set of browsers) that allow for safer usage of newer features while keeping significant compatibility, by inserting all the necessary polyfills for these, for instance.
  - **Dependencies/ES6 modules resolution** (for instance, by automatically looking up `node_modules` folder when importing modules, without one having to type the full path).
  - Flexible **environment/config variables** system with dotenv/[dotenv-flow](https://github.com/kerimdzhanov/dotenv-flow).
  - **Cache busting** and optimization with content hash appended to asset filenames.
  - Built-in **local/dev (static) web server** with file changes **watcher** and **livereload**.
  - Built-in **FTP/FTPS/SFTP deployment** through [ftp-deploy](https://www.npmjs.com/package/ftp-deploy).

## Requirements

-   Make sure you have **Node.js** installed, [or otherwise install it](https://nodejs.org/en/download/):
    
    ```shell
    $ node -v
    $ npm -v
    ```

## Setup

1.  Install dependencies:

    ```shell
    $ npm install
    ```

2.  Remove this `README.md` file, fill in `README.md.template` accordingly and rename to remove the template suffix.

3.  Setup all the required `.env` variables for deployment config. Keep in mind that **one shouldn't ever commit 'secrets' /passwords on `.env` file**, but place them instead on a just local override `.env.local` (being ignored)

## Usage

### Static Mode (Optional)

Optionally, you can run a **local web server** with **live reload** while using this mode:

```shell
$ npm run server
```

### Tooling Mode

Run:

```shell
$ npm start
```

### Commands

The complete list of commands available is:

- **`npm run build`** — Cleans previous distribution build and rebuilds the whole project for deployment (staging/preview, etc) on the `/dist` folder.
- **`npm run build:clean`** — Cleans the distribution build (`/dist` folder).
- **`npm run clean`** — Cleans all generated files (distribution build, dev/local build, Parcel cache).
- **`npm run deploy`** — Deploys the project based off `NODE_ENV` environment and the `.env`/[dotenv](https://github.com/motdotla/dotenv) config.
- **`npm run server`** — Runs just a local dev web server with live reload, but without any build process at all.
- **`npm start`** — Main development command, runs Parcel build with a dev server and re-builds on/watches file changes.

## Deployment

### Setup

Set all `FTP_DEPLOY_...` variables on `.env` accordingly and add a `.env.local` file with the following content:

```
FTP_DEPLOY_PASSWORD="<password>"
```

### Deploy

Run to deploy to/using the default `NODE_ENV`:

```shell
$ npm run deploy
```

For a specific `NODE_ENV` do:

```shell
$ NODE_ENV=production npm run deploy
```

## Maintainers/Who to talk

For questions about about this project or issues, you can reach out to:

- Pedro Santa \<pedro@mariaadelaide.com\>