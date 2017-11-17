# ZCOM

Create and share React components

## Setup
```bash
npm install -g zcom
```

## Commands

#### Create a component
```bash
zcom create my-component
```

#### Create a internal component (inside a project)
```bash
zcom create my-component -i [componentsDir]
```

#### Dev (Storybook)
```bash
zcom dev
```
Port can be setted using `PORT` environment var.

Static files can be served from `/statics/` directory.

#### Build
```bash
zcom build
```

#### Version patch, build and publish to npm
```bash
zcom pap
```

#### Build static version of storybook
```bash
zcom build-storybook
```

#### Build storybook and serve it (by ngrok)
```bash
zcom serve
```
