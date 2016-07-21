---
layout: base
title: Components
type: basic
order: 2
---

A component is represented by an HTML attribute

```html
<a-entity width>
```

A component's properties are passed via a string into a HTML attribute where it will be parsed later.

If a component has only one property to define, then it looks like a normal HTML attribute

```html
<a-entity width="1">
```

If a component has more than one property to define, then properties are passed in through a syntax similar to inline CSS styles

```html
<a-entity geometry="primitive: box; width: 1">
```
