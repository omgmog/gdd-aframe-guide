---
layout: base
title: Assets
type: basic
order: 4
---

Assets are placed within `<a-assets>`, which is placed within `<a-scene>`. Assets include:

- `<a-asset-item>` - Miscellaneous assets such as 3D models
- `<a-mixin>` - Reusable mixins
- `<audio>` - Sound files
- `<img>` - Image textures
- `<video>` - Video textures

As you can see, you can use regular `<audio>`, `<img>` and `<video>` elements as assets.

```html
<a-assets>
  <!-- an image to be used as a texture -->
  <img id="texture1" src="texture.png" />
  <!-- a sound asset -->
  <audio id="willheim" src="scream.mp3"></audio>
  <!-- a mixin -->
  <a-mixin id="giant" scale="10 10 10"></a-mixin>
</a-assets>
```

The scene loading will be blocked until all of these assets are fetched (or fail to load).

The default timeout for loading an asset is 3 seconds. This can be changed using the `timeout` attribute on `<a-assets>`.

To use the assets, you can simply reference them by their unique id's

```html
<a-entity
  geometry="primitive: box"
  material="src: #texture1"
  mixin="giant"
></a-entity>
```

## Further reading:

- [A-Frame Docs: Asset Management](https://aframe.io/docs/0.2.0/core/asset-management-system.html)
