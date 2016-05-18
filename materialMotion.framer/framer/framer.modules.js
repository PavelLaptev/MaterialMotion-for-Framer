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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdXNlci9Ecm9wYm94L2ZyYW1lci9tYXRlcmlhbE1vdGlvbi5mcmFtZXIvbW9kdWxlcy9tYXRlcmlhbE1vLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUEsVUFBQTtFQUFBOztBQUFNO0VBRVEsb0JBQUMsT0FBRDtBQUNaLFFBQUE7O01BRGEsVUFBVTs7OztJQUN2QixLQUFBLEdBQVEsT0FBTyxDQUFDO0lBQ2hCLFFBQUEsR0FBVyxPQUFPLENBQUM7SUFDbkIsUUFBQSxHQUFXLE9BQU8sQ0FBQztJQUNuQixZQUFBLEdBQWUsT0FBTyxDQUFDO0lBQ3ZCLGFBQUEsR0FBZ0IsT0FBTyxDQUFDO0lBQ3hCLFlBQUEsR0FBZSxPQUFPLENBQUM7SUFDdkIsYUFBQSxHQUFnQixPQUFPLENBQUM7SUFDeEIsYUFBQSxHQUFnQixPQUFPLENBQUM7SUFDeEIsSUFBQyxDQUFBLFdBQUQsMEJBQWUsT0FBTyxDQUFDLE9BQVIsT0FBTyxDQUFDLE9BQVE7SUFDL0IsVUFBQSxnQ0FBYSxPQUFPLENBQUMsYUFBUixPQUFPLENBQUMsYUFBYztJQUNuQyxXQUFBLGlDQUFjLE9BQU8sQ0FBQyxjQUFSLE9BQU8sQ0FBQyxjQUFlO0lBRXJDLElBQUMsQ0FBQSxjQUFELEdBQXNCLElBQUEsU0FBQSxDQUNyQjtNQUFBLEtBQUEsRUFBTyxLQUFQO01BQ0EsVUFBQSxFQUNDO1FBQUEsS0FBQSxFQUFPLFlBQVA7UUFDQSxlQUFBLEVBQWlCLE9BQU8sQ0FBQyxlQUR6QjtRQUVBLFlBQUEsRUFBYyxPQUFPLENBQUMsWUFGdEI7UUFHQSxPQUFBLEVBQVMsT0FBTyxDQUFDLE9BSGpCO1FBSUEsT0FBQSxFQUFTLE9BQU8sQ0FBQyxPQUpqQjtRQUtBLFVBQUEsRUFBWSxPQUFPLENBQUMsVUFMcEI7UUFNQSxXQUFBLEVBQWEsT0FBTyxDQUFD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QkFJUCxPQUFBLEdBQVMsU0FBQTtJQUNSLElBQUMsQ0FBQSxxQkFBcUIsQ0FBQyxLQUF2QixDQUFBO1dBQ0EsSUFBQyxDQUFBLHNCQUFzQixDQUFDLEtBQXhCLENBQUE7RUFGUTs7Ozs7O0FBS1YsT0FBTyxDQUFDLFVBQVIsR0FBcUIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgbWF0ZXJpYWxNb1xuXG5cdGNvbnN0cnVjdG9yOiAob3B0aW9ucyA9IHt9KSAtPlxuXHRcdGxheWVyID0gb3B0aW9ucy5sYXllclxuXHRcdGFuaW1hdGVZID0gb3B0aW9ucy55XG5cdFx0YW5pbWF0ZVggPSBvcHRpb25zLnhcblx0XHRhbmltYXRlV2lkdGggPSBvcHRpb25zLndpZHRoXG5cdFx0YW5pbWF0ZUhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0XG5cdFx0YW5pbWF0ZVNjYWxlID0gb3B0aW9ucy5zY2FsZVxuXHRcdGFuaW1hdGVTY2FsZVggPSBvcHRpb25zLnNjYWxlWFxuXHRcdGFuaW1hdGVTY2FsZVkgPSBvcHRpb25zLnNjYWxlWVxuXHRcdEBhbmltYXRlVGltZSA9IG9wdGlvbnMudGltZSA/PSAwLjRcblx0XHRub3JtYWxNb3ZlID0gb3B0aW9ucy5ub3JtYWxNb3ZlID89IHRydWVcblx0XHRyZXZlcnNlTW92ZSA9IG9wdGlvbnMucmV2ZXJzZU1vdmUgPz0gdHJ1ZVxuXG5cdFx0QGZpcnN0QW5pbWF0aW9uID0gbmV3IEFuaW1hdGlvblxuXHRcdFx0bGF5ZXI6IGxheWVyXG5cdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHRzY2FsZTogYW5pbWF0ZVNjYWxlXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3Jcblx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBvcHRpb25zLmJvcmRlclJhZGl1c1xuXHRcdFx0XHRzaGFkb3dZOiBvcHRpb25zLnNoYWRvd1lcblx0XHRcdFx0c2hhZG93WDogb3B0aW9ucy5zaGFkb3dYXG5cdFx0XHRcdHNoYWRvd0JsdXI6IG9wdGlvbnMuc2hhZG93Qmx1clxuXHRcdFx0XHRzaGFkb3dDb2xvcjogb3B0aW9ucy5zaGFkb3dDb2xvclxuXHRcdFx0XHRzaGFkb3dTcHJlYWQ6IG9wdGlvbnMuc2hhZG93U3ByZWFkXG5cdFx0XHRcdG9wYWNpdHk6IG9wdGlvbnMub3BhY2l0eVxuXHRcdFx0XHRyb3RhdGlvbjogb3B0aW9ucy5yb3RhdGlvblxuXHRcdFx0XHRyb3RhdGlvblg6IG9wdGlvbnMucm90YXRpb25YXG5cdFx0XHRcdHJvdGF0aW9uWTogb3B0aW9ucy5yb3RhdGlvbllcblx0XHRcdFx0cm90YXRpb25aOiBvcHRpb25zLnJvdGF0aW9uWlxuXHRcdFx0XHR5OiBhbmltYXRlWVxuXHRcdFx0XHRoZWlnaHQ6IGFuaW1hdGVIZWlnaHRcblx0XHRcdFx0c2NhbGVZOiBhbmltYXRlU2NhbGVZXG5cdFx0XHRjdXJ2ZTogb3B0aW9ucy5jdXJ2ZSA/PSBcImVhc2UtaW4tb3V0XCJcblx0XHRcdHRpbWU6XG5cdFx0XHRcdGlmIGxheWVyLnkgPiBhbmltYXRlWVxuXHRcdFx0XHRcdEBhbmltYXRlVGltZVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0QGFuaW1hdGVUaW1lLzEuNVxuXG5cblx0XHRAc2Vjb25kQW5pbWF0aW9uID0gbmV3IEFuaW1hdGlvblxuXHRcdFx0bGF5ZXI6IGxheWVyXG5cdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHR4OiBhbmltYXRlWFxuXHRcdFx0XHRzY2FsZVg6IGFuaW1hdGVTY2FsZVhcblx0XHRcdFx0d2lkdGg6IGFuaW1hdGVXaWR0aFxuXHRcdFx0Y3VydmU6IG9wdGlvbnMuY3VydmUgPz0gXCJlYXNlLWluLW91dFwiXG5cdFx0XHR0aW1lOlxuXHRcdFx0XHRpZiBsYXllci55ID4gYW5pbWF0ZVlcblx0XHRcdFx0XHRAYW5pbWF0ZVRpbWUvMS41XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRAYW5pbWF0ZVRpbWVcblxuXHRcdEByZXZlcnNlRmlyc3RBbmltYXRpb24gPSBuZXcgQW5pbWF0aW9uXG5cdFx0XHRsYXllcjogbGF5ZXJcblx0XHRcdHByb3BlcnRpZXM6XG5cdFx0XHRcdHNjYWxlOiBsYXllci5zY2FsZVxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGxheWVyLmJhY2tncm91bmRDb2xvclxuXHRcdFx0XHRib3JkZXJSYWRpdXM6IGxheWVyLmJvcmRlclJhZGl1c1xuXHRcdFx0XHRzaGFkb3dZOiBsYXllci5zaGFkb3dZXG5cdFx0XHRcdHNoYWRvd1g6IGxheWVyLnNoYWRvd1hcblx0XHRcdFx0c2hhZG93Qmx1cjogbGF5ZXIuc2hhZG93Qmx1clxuXHRcdFx0XHRzaGFkb3dDb2xvcjogbGF5ZXIuc2hhZG93Q29sb3Jcblx0XHRcdFx0c2hhZG93U3ByZWFkOiBsYXllci5zaGFkb3dTcHJlYWRcblx0XHRcdFx0b3BhY2l0eTogbGF5ZXIub3BhY2l0eVxuXHRcdFx0XHRyb3RhdGlvbjogbGF5ZXIucm90YXRpb25cblx0XHRcdFx0cm90YXRpb25YOiBsYXllci5yb3RhdGlvblhcblx0XHRcdFx0cm90YXRpb25ZOiBsYXllci5yb3RhdGlvbllcblx0XHRcdFx0cm90YXRpb25aOiBsYXllci5yb3RhdGlvblpcblx0XHRcdFx0eTogbGF5ZXIueVxuXHRcdFx0XHRoZWlnaHQ6IGxheWVyLmhlaWdodFxuXHRcdFx0Y3VydmU6IG9wdGlvbnMuY3VydmUgPz0gXCJlYXNlLWluLW91dFwiXG5cdFx0XHR0aW1lOlxuXHRcdFx0XHRpZiBsYXllci55IDwgYW5pbWF0ZVlcblx0XHRcdFx0XHRAYW5pbWF0ZVRpbWVcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdEBhbmltYXRlVGltZS8xLjVcblxuXHRcdEByZXZlcnNlU2Vjb25kQW5pbWF0aW9uID0gbmV3IEFuaW1hdGlvblxuXHRcdFx0bGF5ZXI6IGxheWVyXG5cdFx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0XHR4OiBsYXllci54XG5cdFx0XHRcdHdpZHRoOiBsYXllci53aWR0aFxuXHRcdFx0Y3VydmU6IG9wdGlvbnMuY3VydmUgPz0gXCJlYXNlLWluLW91dFwiXG5cdFx0XHR0aW1lOlxuXHRcdFx0XHRpZiBsYXllci55IDwgYW5pbWF0ZVlcblx0XHRcdFx0XHRAYW5pbWF0ZVRpbWUvMS41XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRAYW5pbWF0ZVRpbWVcblxuXHRzdGFydDogPT5cblx0XHRAZmlyc3RBbmltYXRpb24uc3RhcnQoKVxuXHRcdEBzZWNvbmRBbmltYXRpb24uc3RhcnQoKVxuXG5cdHJldmVyc2U6ID0+XG5cdFx0QHJldmVyc2VGaXJzdEFuaW1hdGlvbi5zdGFydCgpXG5cdFx0QHJldmVyc2VTZWNvbmRBbmltYXRpb24uc3RhcnQoKVxuXG5cbmV4cG9ydHMubWF0ZXJpYWxNbyA9IG1hdGVyaWFsTW8iXX0=
