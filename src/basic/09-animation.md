---
layout: base
title: Animation
type: basic
---

Animations in A-Frame are defined by attaching an `<a-animation>` element as a child of the entity to animate.

With an `<a-animation>` you can specify the `attribute` that you wish to animate, the state to go `from` and `to`, the `dur` (duration) of the animation, the `fill` mode, `repeat` count, `direction` and `easing` method.

Here's an example to make an entity rotate on it's `y` axis:

```html
<a-entity>
  <a-entity position="5 0 0" geometry="primitive: box"></a-entity>
  <a-animation
    attribute="rotation"
     dur="10000"
     fill="forwards"
     to="0 360 0"
     repeat="indefinite"
   ></a-animation>
</a-entity>
```

![](http://i.imgur.com/XcLI5wM.gif){:.ui.image.centered.fluid}


## Further reading:

- [A-Frame Docs: Animations](https://aframe.io/docs/0.2.0/components/animations.html)
