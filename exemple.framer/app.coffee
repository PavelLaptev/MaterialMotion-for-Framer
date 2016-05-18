{materialMo} = require "materialMo"

Framer.Device.contentScale = 3

#BARS
backgroundA = new BackgroundLayer
	backgroundColor: "rgba(234,234,234,1)"

navBar = new Layer
	height: 80
	width: Screen.width
	backgroundColor: "rgba(96,61,255,1)"

statusBar = new Layer
	height: 24
	width: Screen.width
	superLayer: navBar
	backgroundColor: "rgba(0,0,0,0.23)"

deviceNavBar = new Layer
	height: 48
	width: Screen.width
	y: 594
	backgroundColor: "rgba(0,0,0,1)"


#NEW LAYERS AND MOTION

#new layer
card = new Layer
	y: 459
	x: 29
	width: 105
	height: 102
	backgroundColor: "rgba(255,86,64,1)"
	borderRadius: 17

#new material motion layer
materialMotion = new materialMo
	layer: card
	x: 220
	y: 116

#starting animation
materialMotion.start()

card.onClick (event, layer) ->
	materialMotion.reverse()







