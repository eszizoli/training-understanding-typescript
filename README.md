# Understanding TypeScript Training

This repo is created for own use based on [Udemy Understanding TypeScript course](https://www.udemy.com/course/understanding-typescript).

## Setting up a basic project 

### Recommended extensions

- ESLint
- Material Icon Theme
- Path Intellisense
- Prettier - Code formatter

### Setup TypeScript development

- Download and Install **Node.js** - https://nodejs.org/en/download/prebuilt-installer
- Instal TypeScript `npm install -g typescript`

### Create the first TypeScript project

In the project folder:
- `npm init`
- `npm install --save-dev lite-server`
- create app.ts file
- compile app.ts => `tsc app.ts` => app.js file will be created
- edit package.json file, add to scripts:
```json
"scripts": {
    ...
    "start": "lite-server"
  },
```

To use start script: `npm run start` (or just simplay: `npm start`)

## TypeScript compiler

Generate JavaScript file from TypeScript file:
- compile a single *.ts: `tsc app.ts`
- to automatic recompile use watch mode: `tsc app.ts -w`

Initizite a TypeScript project: `tsc --init`
- the init command will generate a TypeScript project config file: `tsconfig.json`
- to compile all *.ts file in TypeScipt project: `tsc`
- watch mode: `tsc -w`
