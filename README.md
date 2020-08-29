# Retrieve Type
Easily get the type of an object in javascript

## Installation
You can use `retrieveType` on node.js or on the web using `npm install retrieve-type` or the cdn on unpkg. 

## Examples
```
const retrieveType = require('retrieve-type')

retrieveType(['a', 'b'])
// = array

retrieveType(Math)
// = math

retrieveType(() => { console.log('test') })
// = function

retrieveType({})
// = object
```