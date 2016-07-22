---
layout: base
title: Templating
type: advanced
---

If you don't like writing cumbersome HTML-esque markup, you can use any templating language to make the task easier.

```javascript
// Jade/Pug example
a-scene(
  fog='type: linear; far: 20; color: #1a1a1a'
)
  a-entity(
    position='2 2.5 0'
    rotation='0 12 0'
  )
    each foo,index in locals.bar
      a-entity(
        position=(index * 1.4) + ' 0 ' + (index * -2)
        rotation='0 ' + (index * -15) + ' 0'
      )
```
