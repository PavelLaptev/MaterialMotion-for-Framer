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


#FAB
maskLayer = new Layer
	x: (Screen.width/3)/2.1
	y: (Screen.height/3)/2
	width: 320
	height: 470
	backgroundColor: "rgba(123,123,123,0.)"
	borderRadius: 6
maskLayer.clip = true

layerA = new Layer
	x: maskLayer.width/3.2
	y: maskLayer.height/2.6
	width: 70
	height: 70
	backgroundColor: "rgba(255,75,91,1)"
	borderRadius: 100
	shadowBlur: 6
	superLayer: maskLayer
	shadowY: 2
layerA.force2d = true

materialA = new materialMo
	layer: layerA
	scale: 9
	backgroundColor: 'fff'
	curve: "ease-in-out"
	time: 0.3

materialMask = new materialMo
	layer: maskLayer
	x: 20
	y: 100
	curve: "ease-in-out"
	time: 0.3
	shadowBlur: 6
	shadowY: 4

#click event
flagA = 1

layerA.onClick (event, layer) ->
	if flagA is 0
		flagA = 1
		layerB.opacity = 0
		materialMask.reverse()
		materialA.reverse()
		materialB.reverse()
	else
		flagA = 0
		layerB.opacity = 1
		materialMask.start()
		materialA.start()
	
#moving dot inside card
layerB = new Layer
	x: 20
	y: 380
	width: 70
	height: 70
	backgroundColor: "rgba(77,22,255,1)"
	borderRadius: 100
	shadowBlur: 4
	opacity: 0
	superLayer: maskLayer
	shadowY: 2

materialB = new materialMo
	layer: layerB
	x: 230
	y: 20
	backgroundColor: "FFCB09"
	time: 0.2
	curve: "ease-in-out"

materialB_state2 = new materialMo
	layer: layerB
	x: 20
	y: 20
	borderRadius: 4
	backgroundColor: "1CF879"
	time: 0.2
	curve: "ease-in-out"

materialB_state3 = new materialMo
	layer: layerB
	x: 230
	y: 380
	rotation: 0
	borderRadius: 100
	backgroundColor: "FFCB09"
	time: 0.2
	curve: "ease-in-out"

materialB_state4 = new materialMo
	layer: layerB
	x: 20
	y: 380
	rotation: 0
	borderRadius: 100
	backgroundColor: "rgba(77,22,255,1)"
	time: 0.2
	curve: "ease-in-out"
	

#click event for dot
flagB = 1

layerB.onClick (event, layer) ->
	if flagB is 1
		flagB = 2
		materialB.start()
	else if flagB is 2
		flagB = 3
		materialB_state2.start()
	else if flagB is 3
		flagB = 4
		materialB_state3.start()
	else if flagB is 4
		flagB = 1
		materialB_state4.start()

#CARD
card = new Layer
	backgroundColor: "rgba(255,255,255,0.69)"
	width: 130
	height: 180
	x: 210
	y: 300
	shadowColor: "rgba(61,61,61,0.28)"
	borderRadius: 4
	shadowBlur: 4
	shadowY: 2
card.clip = true
card.placeBehind(maskLayer)

materialCard = new materialMo
	layer: card
	x: 30
	y: 110
	width: 300
	height: 440
	time: 0.2
	curve: "ease-in-out"
	
rect = new Layer
	backgroundColor: "rgba(82,238,190,1)"
	width: 70
	height: 70
	y: 30
	x: 30
	superLayer: card

header = new Layer
	height: 18
	y: 130
	x: 30
	width: 70
	backgroundColor: "rgba(217,217,217,1)"
	superLayer: card

fakeText = new Layer
	height: 178
	width: 240
	x: 30
	y: 200
	image: "images/text.png"
	superLayer: card


#click event
flagCard = 1

card.onClick (event, layer) ->
	if flagCard is 0
		flagCard = 1
		header.animate
			properties:
				height: 18
				width: 70
				backgroundColor: "rgba(217,217,217,1)"
			time: 0.2
		materialCard.reverse()
	else
		flagCard = 0
		header.animate
			properties:
				height: 30
				width: 200
				backgroundColor: "gray"
			time: 0.3
		materialCard.start()

