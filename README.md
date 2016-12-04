# @jacobmarshall/human-time

Display time in a human-readable format.

## Usage

You can install the library using `npm`

```
$ npm install --save @jacobmarshall/human-time
```

and use it like

```js
import human from '@jacobmarshall/human-time';

human(new Date());
// => "just now"

human(new Date(Date.now() + 5 * 1000))
// => "5 seconds from now"

human(new Date(Date.now() + 5 * 1000), false)
// => "5 seconds"
```

## License

MIT
