# @mariaadelaide/static-seed

Maria Adelaide starts a new static website project.

## How to use this seed?

MA Static Seed can be used in two ways:

- In a **completely static mode**, where no step of building/processing/compiling the files occurs and thus all the tasks that relate to bundling, dependencies resolution, shared HTML partials, deployment, SASS compilation, CSS prefixing, etc, must be done/managed manually. For this step, one can skip the Requirements, Setup and Usage sections below and start the development by editing the files (`index.html`) on the code editor of choice (though setup of [EditorConfig](https://editorconfig.org) is highly recommended nonetheless) and upload them to an web server/hosting for deployment using any preferred method.
- In a **tooling mode**, where ... 

## Requirements

-   Make sure you have **Node.js** installed, [or otherwise install it](https://nodejs.org/en/download/):
    
    ```shell
    $ node -v
    $ npm -v
    ```

## Setup

Install dependencies:

```shell
$ npm install
```

## Usage

-   To run the project without tooling:
    
    ```shell
    $ npm run live-server
    ```