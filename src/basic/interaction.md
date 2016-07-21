---
layout: base
title: Interaction
type: basic
order: 9
---

The cursor component lets us interact with entities through clicking and gazing. It uses the raycaster component to:

- Listen for mouse clicks and gaze-based fuses.
- Capture only the first intersected entity.
- Emit special mouse and hover events (e.g., relating to mouse down/up/enter/leave).
- Have additional states for hovering.

![](https://i.imgur.com/WSfndpr.gif){:.ui.image.centered}

You can specify if the cursor should be `fuse` based.

{:.ui.piled.segment}
>  If the cursor is set to be fuse-based, the cursor will trigger a click if the user gazes at one entity for a set amount of time. Imagine a laser strapped to the user’s head, and the laser extends out into the scene. After the timeout, whatever entity the laser intersects first will be clicked.
>
> Fuse-based interactions can feel natural for VR and do not require any additional input devices other than the headset.

You can specify the `maxDistance` that entities should be clickable in.

You can specify the `timeout`, to set how long something should be gazed at before a "click" is emitted.

You can use the `fusing` and `click` events to trigger animations to indicate what the cursor is doing.

```html
<a-entity
  cursor="fuse: true; maxDistance: 30; timeout: 500"
  position="0 0 -5"
  geometry="primitive: ring"
  material="color: white; shader: flat">
  <a-animation
    begin="click"
    easing="ease-in"
    attribute="scale"
    fill="backwards"
    from="0.1 0.1 0.1"
    to="1 1 1"></a-animation>
  <a-animation
    begin="fusing"
    easing="ease-in"
    attribute="scale"
    fill="forwards"
    from="1 1 1"
    to="0.1 0.1 0.1"></a-animation>
</a-entity>
```

## Further reading:

- [A-Frame Docs: Cursor](https://aframe.io/docs/0.2.0/components/cursor.html)
