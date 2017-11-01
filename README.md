![](img/zcom.png)

Create, develop and distribute React components

## Setup
```bash
npm install -g zcom
```

## Create a component
```bash
zcom my-component
```

## Create a internal component (inside a project)
```bash
zcom my-component -i [componentsDir]
```

## Dev (Storybook)
Can set the port using `PORT` env var. Load `./**/stories.js` files in the
current directory. `**/dist/**` is excluded.
```bash
zcom dev
```

## Build
```bash
zcom build
```

## Patch (build) and publish to npm
```bash
zcom pap
```

## Build the storybook (static)
```bash
zcom build-storybook
```

## Build the storybook and serve by ngrok (static)
```bash
zcom serve
```
