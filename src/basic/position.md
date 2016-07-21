---
layout: base
title: Position
type: basic
order: 6
---

Positioning entities is done by specifying the offset on the `x`, `y` and `z` axis.

```html
<a-box
  position="0 2 -2"
></a-box>
```

If an entity is inside another entity, the positioning is relative to the parent entity.

```html
<a-entity position="-2 2 -2">
  <a-box position="-2 2 -2">
    <!-- This box will actually be at -4 4 -4 relative to the scene-->
  </a-box>
</a-entity>
```

## Further reading:

- [A-Frame Docs: Position](https://aframe.io/docs/0.2.0/components/position.html)
