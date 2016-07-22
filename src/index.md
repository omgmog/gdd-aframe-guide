---
layout: base
title: An introduction to A-Frame
---

A-Frame allows you to use **markup** to create VR experiences that work across desktops, smartphones and VR devices using Three.js.

## Getting started

To use A-Frame you need to be running a local webserver.

Use the following commands in your terminal to download the `aframe-boilerplate` and get started:

{% highlight bash %}
git clone https://github.com/aframevr/aframe-boilerplate.git
cd aframe-boilerplate && rm -rf .git
npm install
npm start
{% endhighlight %}

Alternatively, or if you don't have `git` installed, you can simply download and extract the `aframe-boilerplate` [as a zip](https://github.com/aframevr/aframe-boilerplate/archive/master.zip), and use the following commands:

{% highlight bash %}
cd aframe-boilerplate
npm install
npm start
{% endhighlight %}

And then the boilerplate should be viewable in your web browser at [http://localhost:3000](http://localhost:3000)
