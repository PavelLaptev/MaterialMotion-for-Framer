{materialMo} = require "materialMo"

Framer.Device.contentScale = 3

frameClr = "00A7FF"
frameFlag = 1

#BARS
backgroundA = new BackgroundLayer
	backgroundColor: "rgba(234,234,234,1)"

navBar = new Layer
	height: 80
	width: 360
	backgroundColor: "rgba(96,61,255,1)"
navBar.html = "Wire mode"
navBar.style =
	color: "rgba(255,255,255,0.6)"
	fontSize: "18px"
	padding: "38px 20px"

switchCont = new Layer
	width: 46
	height: 15
	borderRadius: 50
	x: 290
	y: 44
	backgroundColor: "rgba(0,0,0,0.5)"

switchCirc = new Layer
	superLayer: switchCont
	y: -4
	width: 24
	height: 24
	backgroundColor: "rgba(255,255,255,1)"
	borderRadius: 100

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

navBar.onClick (event, layer) ->
	if frameFlag is 1
		frameFlag = 0
		card.visible = false
		cardWire.visible = true
		roundMask.visible = true
		switchCirc.animate
			properties:
				x: 30
			time: 0.2
		switchCont.animate
			properties:
				backgroundColor: "rgba(81,255,7,0.5)"
			time: 0.2
	else
		frameFlag = 1
		card.visible = true
		cardWire.visible = false
		roundMask.visible = false
		switchCirc.animate
			properties:
				x: 0
			time: 0.2
		switchCont.animate
			properties:
				backgroundColor: "rgba(0,0,0,0.5)"
			time: 0.2

#CARD
card = new Layer
	backgroundColor: "rgba(255,255,255,0.69)"
	width: 130
	height: 180
	x: 200
	y: 380
	shadowColor: "rgba(61,61,61,0.28)"
	borderRadius: 4
	shadowBlur: 4
	shadowY: 2
card.clip = true

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
	borderRadius: 100
	superLayer: card

header = new Layer
	height: 18
	y: 130
	x: 30
	width: 70
	backgroundColor: "rgba(217,217,217,1)"
	superLayer: card

#click event
flagCard = 1

card.onClick (event, layer) ->
	if flagCard is 0
		flagCard = 1
		rect.animate
			properties:
				width: 70
				height: 70
				borderRadius: 100
			time: 0.2
		header.animate
			properties:
				height: 18
				width: 70
				y: 130
				backgroundColor: "rgba(217,217,217,1)"
			time: 0.2
		materialCard.reverse()
		rectWire.animate
			properties:
				width: 70
				height: 70
				borderRadius: 100
			time: 1
		headerWire.animate
			properties:
				height: 18
				width: 70
				y: 130
			time: 1
		materialCardWire.reverse()
	else
		flagCard = 0
		rect.animate
			properties:
				width: 140
				height: 140
				borderRadius: 0
			time: 0.2
		header.animate
			properties:
				height: 30
				width: 240
				y: 200
				backgroundColor: "gray"
			time: 0.2
		materialCard.start()
		rectWire.animate
			properties:
				width: 140
				height: 140
				borderRadius: 0
			time: 1
		headerWire.animate
			properties:
				height: 30
				width: 240
				y: 200
			time: 1
		materialCardWire.start()


#card wire
#CARD
cardWire = new Layer
	width: 130
	height: 180
	x: 200
	y: 380
	borderRadius: 4
	backgroundColor: "transparent"
	borderWidth: 2
	borderColor: frameClr
cardWire.clip = true
cardWire.visible = false

materialCardWire = new materialMo
	layer: cardWire
	x: 30
	y: 110
	width: 300
	height: 440
	time: 1
	curve: "ease-in-out"
		
rectWire = new Layer
	backgroundColor: "transparent"
	borderWidth: 2
	borderColor: frameClr
	width: 70
	height: 70
	y: 30
	x: 30
	borderRadius: 100
	superLayer: cardWire

headerWire = new Layer
	height: 18
	y: 130
	x: 30
	width: 70
	backgroundColor: "transparent"
	borderWidth: 2
	borderColor: frameClr
	superLayer: cardWire

roundMask = new Layer
	backgroundColor: 'transparent'
	width: 210
	height: 320
	x: 60
	y: 210
roundMask.clip = true
roundMask.visible = false

round = new Layer
	backgroundColor: "transparent"
	opacity: 0.4
	borderWidth: 2
	borderColor: frameClr
	width: 440
	height: 480
	y: -230
	x: 65
	borderRadius: 1000
	superLayer: roundMask


#click event
flagCardWire = 1

cardWire.onClick (event, layer) ->
	if flagCardWire is 0
		flagCardWire = 1
		rectWire.animate
			properties:
				width: 70
				height: 70
				borderRadius: 100
			time: 1
		headerWire.animate
			properties:
				height: 18
				width: 70
				y: 130
			time: 1
		materialCardWire.reverse()
		rect.animate
			properties:
				width: 70
				height: 70
				borderRadius: 100
			time: 0.2
		header.animate
			properties:
				height: 18
				width: 70
				y: 130
				backgroundColor: "rgba(217,217,217,1)"
			time: 0.2
		materialCard.reverse()
	else
		flagCardWire = 0
		rectWire.animate
			properties:
				width: 140
				height: 140
				borderRadius: 0
			time: 1
		headerWire.animate
			properties:
				height: 30
				width: 240
				y: 200
			time: 1
		materialCardWire.start()
		rect.animate
			properties:
				width: 140
				height: 140
				borderRadius: 0
			time: 0.2
		header.animate
			properties:
				height: 30
				width: 240
				y: 200
				backgroundColor: "gray"
			time: 0.2
		materialCard.start()



