# ZCOM

Create and share React components

## Setup
```bash
npm install -g zcom
```

## Commands

#### Create a component
```bash
zcom my-component
```

#### Create a internal component (inside a project)
```bash
zcom my-component -i [componentsDir]
```

#### Dev (Storybook)
```bash
zcom dev
```
Port can be setted using `PORT` environment var.

Static files can be served from `/statics/` directory.

This search `./**/stories.js` files in the current directory. `**/dist/**` are excluded.

#### Build
```bash
zcom build
```

#### Version patch (build) and publish to npm
```bash
zcom pap
```

#### Build the storybook (static)
```bash
zcom build-storybook
```

#### Build the storybook and serve (by ngrok)
```bash
zcom serve
```
