---
layout: base
title: Lighting
type: basic
---

Lights are entities that emit light. The light affects all materials except those using the flat shader.

Lights can be positioned as with any other entity.

By default, A-Frame scenes inject default lighting, an ambient light and a directional light. These default lights are visible in the DOM with the data-aframe-default-light attribute. Whenever any lights are added, the default lights are removed from the scene.

A new light entity will use the `directional` type by default, other options are:

- ambient
- directional
- hemisphere
- point
- spot

Each of these light types can have their `color` and `intensity` specified. The `hemisphere`, `point` and `spot` lights have additional properties.

```html
<a-entity
  light="color: #AFA; intensity: 1.5"
  position="-1 1 0"
></a-entity>
```

## Further reading:

- [A-Frame Docs: Light](https://aframe.io/docs/0.2.0/components/light.html)
