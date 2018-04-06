### Use

```js
import MyComponent from 'my-component';

export default () => (
  <MyComponent
    title={'hello'}
    onClick={()=>console.log('clicked')}
  />
)

```

### Props

#### theme<Object>
It merges with the default theme overriding some styled component props:

```js
import MyComponent from 'my-component';

const theme = {
  mainBg:'#F00'
}

export default () => (
  <MyComponent
    theme={theme}
  />
)
```


<!-- Props info will be included automatically at the end-->
