class materialMo

	constructor: (options = {}) ->
		layer = options.layer
		animateY = options.y
		animateX = options.x
		animateWidth = options.width
		animateHeight = options.height
		animateScale = options.scale
		animateScaleX = options.scaleX
		animateScaleY = options.scaleY
		@animateTime = options.time ?= 0.4
		normalMove = options.normalMove ?= true
		reverseMove = options.reverseMove ?= true

		@firstAnimation = new Animation
			layer: layer
			properties:
				scale: animateScale
				backgroundColor: options.backgroundColor
				borderRadius: options.borderRadius
				shadowY: options.shadowY
				shadowX: options.shadowX
				shadowBlur: options.shadowBlur
				shadowColor: options.shadowColor
				shadowSpread: options.shadowSpread
				opacity: options.opacity
				rotation: options.rotation
				rotationX: options.rotationX
				rotationY: options.rotationY
				rotationZ: options.rotationZ
				y: animateY
				height: animateHeight
				scaleY: animateScaleY
			curve: options.curve ?= "ease-in-out"
			time:
				if layer.y > animateY
					@animateTime
				else
					@animateTime/1.5


		@secondAnimation = new Animation
			layer: layer
			properties:
				x: animateX
				scaleX: animateScaleX
				width: animateWidth
			curve: options.curve ?= "ease-in-out"
			time:
				if layer.y > animateY
					@animateTime/1.5
				else
					@animateTime

		@reverseFirstAnimation = new Animation
			layer: layer
			properties:
				scale: layer.scale
				backgroundColor: layer.backgroundColor
				borderRadius: layer.borderRadius
				shadowY: layer.shadowY
				shadowX: layer.shadowX
				shadowBlur: layer.shadowBlur
				shadowColor: layer.shadowColor
				shadowSpread: layer.shadowSpread
				opacity: layer.opacity
				rotation: layer.rotation
				rotationX: layer.rotationX
				rotationY: layer.rotationY
				rotationZ: layer.rotationZ
				y: layer.y
				height: layer.height
			curve: options.curve ?= "ease-in-out"
			time:
				if layer.y < animateY
					@animateTime
				else
					@animateTime/1.5

		@reverseSecondAnimation = new Animation
			layer: layer
			properties:
				x: layer.x
				width: layer.width
			curve: options.curve ?= "ease-in-out"
			time:
				if layer.y < animateY
					@animateTime/1.5
				else
					@animateTime

	start: =>
		@firstAnimation.start()
		@secondAnimation.start()

	reverse: =>
		@reverseFirstAnimation.start()
		@reverseSecondAnimation.start()


exports.materialMo = materialMo