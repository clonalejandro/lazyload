# lazyload
A lazyload in javascript and css

## How to use

### Set your images like this 

```html
<img src="" data-src="imageYouWantToLoad">
```

### Include files

```html
<link href="lazyload.min.css" rel="stylesheet">
<script src="lazyload.min.js" type="text/javascript"></script>
```

### Instance lazyload

```js
const timeout = 250;
new LazyLoad(timeout);
```
