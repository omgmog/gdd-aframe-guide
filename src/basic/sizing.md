---
layout: base
title: Sizing
type: basic
order: 5
---

When you create an entity, you can specify it's dimensions using the component attributes:

```html
<a-box
  width="2"
  height="2"
  depth="2"
></a-box>
```

This can also be represented using a single attribute for `geometry`:

```html
<a-box
  geometry="width: 2; height: 2; depth: 2"
></a-box>
```

When working with the `<a-sphere>` entity, you specify the size using the `radius`:

```html
<a-sphere
  radius="2"
></a-sphere>
```

If you want to create a non-uniformly sized sphere, you can use scaling to squash or stretch on any of the x/y/z axis.

## Further reading:

- [A-Frame Docs: Geometry](https://aframe.io/docs/0.2.0/components/geometry.html)
- [A-Frame Docs: Scale](https://aframe.io/docs/0.2.0/components/scale.html)
