---
layout: base
title: JavaScript
type: advanced
---

You can select and manipulate A-Frame entities and components as you would any other HTML.

## Vanilla JavaScript

```javascript
.querySelector('a-image')
.getAttribute('opacity')
.setAttribute('material', 'color', 'red')
.addEventListener('collide')
.createElement('a-entity')
```

## With Libraries
With libraries...

```javascript
$('a-box').attr('width', 5);

d3.select('a-scene').selectAll('a-box.bar').data(data);
```

## AFRAME

A-Frame exposes its public interface through the window.AFRAME browser global. This same interface is exposed if requiring with NPM (require('aframe');). AFRAME can be used to register new things and extend AFRAME’s capabilities.

## Further reading:

- [A-Frame Docs: AFRAME](https://aframe.io/docs/0.2.0/core/AFRAME.html)
