![FrameLoader for Framer.JS](https://dl.dropboxusercontent.com/s/l2nr0ufudcdn7sb/materialMo-head.png?dl=0)

materialMotion is a module that allows you to create simple [material motion](https://www.google.com/design/spec/motion/movement.html#movement-movement-within-screen-bounds) in an arc


## Installation

1. Download **materialMo.coffee** module
2. Create a framer project and drop **materialMo.coffee** inside the /modules folder
3. Add **{materialMo} = require "materialMo"** at the top of your document (case-sensitive).

More info about modules in Framer: [FramerJS Docs - Modules](http://framerjs.com/docs/#modules)

## Usage

Create a layer you want to animate and then just create **new materialMo** layer like this:

```coffeescript
materialMotion = new materialMo
```

Now you need to specify the layer you want to animate
```coffeescript
materialMotion = new materialMo
	layer: card
```

and specify properties
```coffeescript
materialMotion = new materialMo
	layer: card
	x: 220
	y: 116
```

Done!

---

### all properties for motionMo

```coffeescript
materialMotion = new materialMo
	layer: layerA
	scale: 1
	backgroundColor: "#f45"
	borderRadius: 4
	shadowY: 2
	shadowX: 0
	shadowBlur: 6
	shadowColor: rgba(0,0,0,0.4)
	shadowSpread: 0
	opacity: 1
	rotation: 45
	rotationX: 0
	rotationY: 0
	rotationZ: 0
	y: 10
	x: 10
	height: 200
	width: 200
	scaleY: 1
	scaleX: 1
	curve: "ease"
	time: 0.2
```

---

![](https://dl.dropboxusercontent.com/s/qsjvaw2mor1ipn4/mat-gif1.gif?dl=0)
![](https://dl.dropboxusercontent.com/s/c4p5vwqxyw2hcgp/mat-gif2.gif?dl=0)
![](https://dl.dropboxusercontent.com/s/b84hn4i2xrb9vke/mat-gif-wire.gif?dl=0)

---



---
## Framer exemples
[Simple exemple from video](http://share.framerjs.com/8v797fueeyxs/)

[WireFrame motion](http://share.framerjs.com/i8520pp0gimj/)

[Basic motions](http://share.framerjs.com/srxkz3r7gu45/)