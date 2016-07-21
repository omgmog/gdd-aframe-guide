---
layout: base
title: Grouping
type: basic
order: 7
---

As you start to create more complicated scenes in A-Frame, you will want to group entities to make scaling or animating them easier.

To group entities, you just need to wrap them in an entity, and then apply all of your animations to the wrapper entity.

Here's an example arcade joystick:

![](http://i.imgur.com/igRo6Dk.gif){:.ui.image.centered.fluid}

```html
<a-entity scale=".25 .25 .25">
  <a-entity id="stick">
    <!--
    The ball on the top of the joystick
    -->
    <a-sphere
      radius="1.8"
      position="0 6 0"
      color="#d00"
    ></a-sphere>
    <!-- the metal pole of the joystick -->
    <a-cylinder
      height="5.5"
      radius=".5"
      color="#999"
      position="0 2.5 0"
    ></a-cylinder>
    <!-- this controls the animation of the "stick" entity -->
    <a-animation
      attribute="rotation"
      to="15 0 -15"
      from="-15 0 15"
      repeat="indefinite"
      fill="forwards"
      direction="alternate"
    ></a-animation>
  </a-entity>
  <!--
  the base ring of the joystick, this doesn't need to animate
  so it's outside of the "stick" entity
  -->
  <a-cylinder
    height=".25"
    radius="2.4"
    color="#222"
    position="0 0 0"
  ></a-cylinder>
</a-entity>
```
