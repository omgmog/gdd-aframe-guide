---
layout: base
title: Materials
type: basic
---

The material component defines the appearance of an entity. The built-in shaders allow us to define properties such as color, opacity, or textures.

Here is an example defining a red material using the default "standard" shading model:

```html
<a-entity
  geometry="primitive: box"
  material="color: red"
></a-entity>
```

Here is an example of using the "flat" built-in shading model:

```html
<a-entity
  geometry="primitive: box"
  material="shader: flat; color: red"
></a-entity>
```

![](http://i.imgur.com/ACP2Ekl.png){:.ui.image.centered.fluid}

You can also specify the `opacity` of the material.

```html
<a-entity
  geometry="primitive: box"
  material="color: red; opacity: .5"
></a-entity>
```

![](http://i.imgur.com/3EvCSMg.png){:.ui.image.centered.fluid}

You can apply textures that you've specified in your `<a-assets>` like this:

```html
<a-entity
  geometry="primitive: box"
  material="src: #texture1"
></a-entity>
```

![](http://i.imgur.com/Relfn7S.png){:.ui.image.centered.fluid}

If you're using textures with alpha transparency, you can tell A-Frame to render these after everything else so that the transparency works:

```html
<a-entity
  geometry="primitive: box"
  material="src: #texture1; transparent: true"
></a-entity>
```

![](http://i.imgur.com/cUkAuI5.png){:.ui.image.centered.fluid}

## Further reading:

- [A-Frame Docs: Material](https://aframe.io/docs/0.2.0/components/material.html)
