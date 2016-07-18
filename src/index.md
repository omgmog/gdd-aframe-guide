---
layout: base
title: An introduction to A-Frame
---

Under the hood, A-Frame is a three.js framework that brings the entity-component-system pattern to the DOM. A-Frame is built as an abstraction layer on top of three.js and is extensible enough to do just about anything that three.js can do.

A-Frame allows you to use **markup** to create VR experiences that work across desktop, smartphones and VR devices.

In A-Frame:

- An entity is represented by `<a-entity>`. It is the core building block that comprises everything within a scene.
- A component is represented by an HTML attribute (e.g. `<a-entity engine>`).
- A component's properties are passed via a string into a HTML attribute where it will be parsed later.
- If a component has only one property to define, then it looks like a normal HTML attribute (e.g. `<a-entity visible="false">`).
- If a component has more than one property to define, then properties are passed in through a syntax similar to inline CSS styles (e.g., `<a-entity engine="cylinders: 4; horsepower: 158; mass: 200">`).

## Getting started

To use A-Frame you need to be running a local webserver.

I've created a repository with some examples. Use the following commands in your terminal to get started:

```bash
git clone git@github.com:omgmog/gdd-aframe-examples.git
cd gdd-aframe-examples
npm install -g gulp
npm install
gulp
```

## Basic

- [Entities]()

## Advanced

