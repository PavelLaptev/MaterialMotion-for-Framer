require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"materialMo":[function(require,module,exports){
var materialMo,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

materialMo = (function() {
  function materialMo(options) {
    var animateHeight, animateScale, animateScaleX, animateScaleY, animateWidth, animateX, animateY, layer, normalMove, reverseMove;
    if (options == null) {
      options = {};
    }
    this.reverse = bind(this.reverse, this);
    this.start = bind(this.start, this);
    layer = options.layer;
    animateY = options.y;
    animateX = options.x;
    animateWidth = options.width;
    animateHeight = options.height;
    animateScale = options.scale;
    animateScaleX = options.scaleX;
    animateScaleY = options.scaleY;
    this.animateTime = options.time != null ? options.time : options.time = 0.4;
    normalMove = options.normalMove != null ? options.normalMove : options.normalMove = true;
    reverseMove = options.reverseMove != null ? options.reverseMove : options.reverseMove = true;
    this.firstAnimation = new Animation({
      layer: layer,
      properties: {
        scale: animateScale,
        backgroundColor: options.backgroundColor,
        borderRadius: options.borderRadius,
        shadowY: options.shadowY,
        shadowX: options.shadowX,
        shadowBlur: options.shadowBlur,
        shadowColor: options.shadowColor,
        shadowSpread: options.shadowSpread,
        opacity: options.opacity,
        rotation: options.rotation,
        rotationX: options.rotationX,
        rotationY: options.rotationY,
        rotationZ: options.rotationZ,
        y: animateY,
        height: animateHeight,
        scaleY: animateScaleY
      },
      curve: options.curve != null ? options.curve : options.curve = "ease-in-out",
      time: layer.y > animateY ? this.animateTime : this.animateTime / 1.5
    });
    this.secondAnimation = new Animation({
      layer: layer,
      properties: {
        x: animateX,
        scaleX: animateScaleX,
        width: animateWidth
      },
      curve: options.curve != null ? options.curve : options.curve = "ease-in-out",
      time: layer.y > animateY ? this.animateTime / 1.5 : this.animateTime
    });
    this.reverseFirstAnimation = new Animation({
      layer: layer,
      properties: {
        scale: layer.scale,
        backgroundColor: layer.backgroundColor,
        borderRadius: layer.borderRadius,
        shadowY: layer.shadowY,
        shadowX: layer.shadowX,
        shadowBlur: layer.shadowBlur,
        shadowColor: layer.shadowColor,
        shadowSpread: layer.shadowSpread,
        opacity: layer.opacity,
        rotation: layer.rotation,
        rotationX: layer.rotationX,
        rotationY: layer.rotationY,
        rotationZ: layer.rotationZ,
        y: layer.y,
        height: layer.height
      },
      curve: options.curve != null ? options.curve : options.curve = "ease-in-out",
      time: layer.y < animateY ? this.animateTime : this.animateTime / 1.5
    });
    this.reverseSecondAnimation = new Animation({
      layer: layer,
      properties: {
        x: layer.x,
        width: layer.width
      },
      curve: options.curve != null ? options.curve : options.curve = "ease-in-out",
      time: layer.y < animateY ? this.animateTime / 1.5 : this.animateTime
    });
  }

  materialMo.prototype.start = function() {
    this.firstAnimation.start();
    return this.secondAnimation.start();
  };

  materialMo.prototype.reverse = function() {
    this.reverseFirstAnimation.start();
    return this.reverseSecondAnimation.start();
  };

  return materialMo;

})();

exports.materialMo = materialMo;


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdXNlci9Ecm9wYm94L2ZyYW1lci9tYXRlcmlhbE1vdGlvbl93aXJlZnJhbWVzLmZyYW1lci9tb2R1bGVzL21hdGVyaWFsTW8uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBQSxVQUFBO0VBQUE7O0FBQU07RUFFUSxvQkFBQyxPQUFEO0FBQ1osUUFBQTs7TUFEYSxVQUFVOzs7O0lBQ3ZCLEtBQUEsR0FBUSxPQUFPLENBQUM7SUFDaEIsUUFBQSxHQUFXLE9BQU8sQ0FBQztJQUNuQixRQUFBLEdBQVcsT0FBTyxDQUFDO0lBQ25CLFlBQUEsR0FBZSxPQUFPLENBQUM7SUFDdkIsYUFBQSxHQUFnQixPQUFPLENBQUM7SUFDeEIsWUFBQSxHQUFlLE9BQU8sQ0FBQztJQUN2QixhQUFBLEdBQWdCLE9BQU8sQ0FBQztJQUN4QixhQUFBLEdBQWdCLE9BQU8sQ0FBQztJQUN4QixJQUFDLENBQUEsV0FBRCwwQkFBZSxPQUFPLENBQUMsT0FBUixPQUFPLENBQUMsT0FBUTtJQUMvQixVQUFBLGdDQUFhLE9BQU8sQ0FBQyxhQUFSLE9BQU8sQ0FBQyxhQUFjO0lBQ25DLFdBQUEsaUNBQWMsT0FBTyxDQUFDLGNBQVIsT0FBTyxDQUFDLGNBQWU7SUFFckMsSUFBQyxDQUFBLGNBQUQsR0FBc0IsSUFBQSxTQUFBLENBQ3JCO01BQUEsS0FBQSxFQUFPLEtBQVA7TUFDQSxVQUFBLEVBQ0M7UUFBQSxLQUFBLEVBQU8sWUFBUDtRQUNBLGVBQUEsRUFBaUIsT0FBTyxDQUFDLGVBRHpCO1FBRUEsWUFBQSxFQUFjLE9BQU8sQ0FBQyxZQUZ0QjtRQUdBLE9BQUEsRUFBUyxPQUFPLENBQUMsT0FIakI7UUFJQSxPQUFBLEVBQVMsT0FBTyxDQUFDLE9BSmpCO1FBS0EsVUFBQSxFQUFZLE9BQU8sQ0FBQyxVQUxwQjtRQU1BLFdBQUEsRUFB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QUFBO0VBRk07O3VCQUlQLE9BQUEsR0FBUyxTQUFBO0lBQ1IsSUFBQyxDQUFBLHFCQUFxQixDQUFDLEtBQXZCLENBQUE7V0FDQSxJQUFDLENBQUEsc0JBQXNCLENBQUMsS0FBeEIsQ0FBQTtFQUZROzs7Ozs7QUFLVixPQUFPLENBQUMsVUFBUixHQUFxQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjbGFzcyBtYXRlcmlhbE1vXG5cblx0Y29uc3RydWN0b3I6IChvcHRpb25zID0ge30pIC0+XG5cdFx0bGF5ZXIgPSBvcHRpb25zLmxheWVyXG5cdFx0YW5pbWF0ZVkgPSBvcHRpb25zLnlcblx0XHRhbmltYXRlWCA9IG9wdGlvbnMueFxuXHRcdGFuaW1hdGVXaWR0aCA9IG9wdGlvbnMud2lkdGhcblx0XHRhbmltYXRlSGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHRcblx0XHRhbmltYXRlU2NhbGUgPSBvcHRpb25zLnNjYWxlXG5cdFx0YW5pbWF0ZVNjYWxlWCA9IG9wdGlvbnMuc2NhbGVYXG5cdFx0YW5pbWF0ZVNjYWxlWSA9IG9wdGlvbnMuc2NhbGVZXG5cdFx0QGFuaW1hdGVUaW1lID0gb3B0aW9ucy50aW1lID89IDAuNFxuXHRcdG5vcm1hbE1vdmUgPSBvcHRpb25zLm5vcm1hbE1vdmUgPz0gdHJ1ZVxuXHRcdHJldmVyc2VNb3ZlID0gb3B0aW9ucy5yZXZlcnNlTW92ZSA/PSB0cnVlXG5cblx0XHRAZmlyc3RBbmltYXRpb24gPSBuZXcgQW5pbWF0aW9uXG5cdFx0XHRsYXllcjogbGF5ZXJcblx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdHNjYWxlOiBhbmltYXRlU2NhbGVcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBvcHRpb25zLmJhY2tncm91bmRDb2xvclxuXHRcdFx0XHRib3JkZXJSYWRpdXM6IG9wdGlvbnMuYm9yZGVyUmFkaXVzXG5cdFx0XHRcdHNoYWRvd1k6IG9wdGlvbnMuc2hhZG93WVxuXHRcdFx0XHRzaGFkb3dYOiBvcHRpb25zLnNoYWRvd1hcblx0XHRcdFx0c2hhZG93Qmx1cjogb3B0aW9ucy5zaGFkb3dCbHVyXG5cdFx0XHRcdHNoYWRvd0NvbG9yOiBvcHRpb25zLnNoYWRvd0NvbG9yXG5cdFx0XHRcdHNoYWRvd1NwcmVhZDogb3B0aW9ucy5zaGFkb3dTcHJlYWRcblx0XHRcdFx0b3BhY2l0eTogb3B0aW9ucy5vcGFjaXR5XG5cdFx0XHRcdHJvdGF0aW9uOiBvcHRpb25zLnJvdGF0aW9uXG5cdFx0XHRcdHJvdGF0aW9uWDogb3B0aW9ucy5yb3RhdGlvblhcblx0XHRcdFx0cm90YXRpb25ZOiBvcHRpb25zLnJvdGF0aW9uWVxuXHRcdFx0XHRyb3RhdGlvblo6IG9wdGlvbnMucm90YXRpb25aXG5cdFx0XHRcdHk6IGFuaW1hdGVZXG5cdFx0XHRcdGhlaWdodDogYW5pbWF0ZUhlaWdodFxuXHRcdFx0XHRzY2FsZVk6IGFuaW1hdGVTY2FsZVlcblx0XHRcdGN1cnZlOiBvcHRpb25zLmN1cnZlID89IFwiZWFzZS1pbi1vdXRcIlxuXHRcdFx0dGltZTpcblx0XHRcdFx0aWYgbGF5ZXIueSA+IGFuaW1hdGVZXG5cdFx0XHRcdFx0QGFuaW1hdGVUaW1lXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRAYW5pbWF0ZVRpbWUvMS41XG5cblxuXHRcdEBzZWNvbmRBbmltYXRpb24gPSBuZXcgQW5pbWF0aW9uXG5cdFx0XHRsYXllcjogbGF5ZXJcblx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdHg6IGFuaW1hdGVYXG5cdFx0XHRcdHNjYWxlWDogYW5pbWF0ZVNjYWxlWFxuXHRcdFx0XHR3aWR0aDogYW5pbWF0ZVdpZHRoXG5cdFx0XHRjdXJ2ZTogb3B0aW9ucy5jdXJ2ZSA/PSBcImVhc2UtaW4tb3V0XCJcblx0XHRcdHRpbWU6XG5cdFx0XHRcdGlmIGxheWVyLnkgPiBhbmltYXRlWVxuXHRcdFx0XHRcdEBhbmltYXRlVGltZS8xLjVcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdEBhbmltYXRlVGltZVxuXG5cdFx0QHJldmVyc2VGaXJzdEFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb25cblx0XHRcdGxheWVyOiBsYXllclxuXHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0c2NhbGU6IGxheWVyLnNjYWxlXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogbGF5ZXIuYmFja2dyb3VuZENvbG9yXG5cdFx0XHRcdGJvcmRlclJhZGl1czogbGF5ZXIuYm9yZGVyUmFkaXVzXG5cdFx0XHRcdHNoYWRvd1k6IGxheWVyLnNoYWRvd1lcblx0XHRcdFx0c2hhZG93WDogbGF5ZXIuc2hhZG93WFxuXHRcdFx0XHRzaGFkb3dCbHVyOiBsYXllci5zaGFkb3dCbHVyXG5cdFx0XHRcdHNoYWRvd0NvbG9yOiBsYXllci5zaGFkb3dDb2xvclxuXHRcdFx0XHRzaGFkb3dTcHJlYWQ6IGxheWVyLnNoYWRvd1NwcmVhZFxuXHRcdFx0XHRvcGFjaXR5OiBsYXllci5vcGFjaXR5XG5cdFx0XHRcdHJvdGF0aW9uOiBsYXllci5yb3RhdGlvblxuXHRcdFx0XHRyb3RhdGlvblg6IGxheWVyLnJvdGF0aW9uWFxuXHRcdFx0XHRyb3RhdGlvblk6IGxheWVyLnJvdGF0aW9uWVxuXHRcdFx0XHRyb3RhdGlvblo6IGxheWVyLnJvdGF0aW9uWlxuXHRcdFx0XHR5OiBsYXllci55XG5cdFx0XHRcdGhlaWdodDogbGF5ZXIuaGVpZ2h0XG5cdFx0XHRjdXJ2ZTogb3B0aW9ucy5jdXJ2ZSA/PSBcImVhc2UtaW4tb3V0XCJcblx0XHRcdHRpbWU6XG5cdFx0XHRcdGlmIGxheWVyLnkgPCBhbmltYXRlWVxuXHRcdFx0XHRcdEBhbmltYXRlVGltZVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0QGFuaW1hdGVUaW1lLzEuNVxuXG5cdFx0QHJldmVyc2VTZWNvbmRBbmltYXRpb24gPSBuZXcgQW5pbWF0aW9uXG5cdFx0XHRsYXllcjogbGF5ZXJcblx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdHg6IGxheWVyLnhcblx0XHRcdFx0d2lkdGg6IGxheWVyLndpZHRoXG5cdFx0XHRjdXJ2ZTogb3B0aW9ucy5jdXJ2ZSA/PSBcImVhc2UtaW4tb3V0XCJcblx0XHRcdHRpbWU6XG5cdFx0XHRcdGlmIGxheWVyLnkgPCBhbmltYXRlWVxuXHRcdFx0XHRcdEBhbmltYXRlVGltZS8xLjVcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdEBhbmltYXRlVGltZVxuXG5cdHN0YXJ0OiA9PlxuXHRcdEBmaXJzdEFuaW1hdGlvbi5zdGFydCgpXG5cdFx0QHNlY29uZEFuaW1hdGlvbi5zdGFydCgpXG5cblx0cmV2ZXJzZTogPT5cblx0XHRAcmV2ZXJzZUZpcnN0QW5pbWF0aW9uLnN0YXJ0KClcblx0XHRAcmV2ZXJzZVNlY29uZEFuaW1hdGlvbi5zdGFydCgpXG5cblxuZXhwb3J0cy5tYXRlcmlhbE1vID0gbWF0ZXJpYWxNbyJdfQ==
