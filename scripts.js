var squares = document.querySelectorAll('.stk-square');
var icons = document.querySelectorAll('.contact-icon');
var buttons = document.querySelectorAll('.nav-button');
(function(){
	for(var el of squares){
		el.addEventListener('mouseenter', function () {
			var color = this.getAttribute('color');
			if (color === "white" || color === "yellow"){
				this.style.color = "darkslategrey";	
			} else {
				this.style.color = 'white';
			}
			this.style.border = 'none';
			this.style.backgroundColor = color;
		})
	}

	for (var el of icons) {
		el.addEventListener('mouseenter', function () {
			var color = this.getAttribute('color');
				this.style.color = color;
		})
		el.addEventListener('mouseleave', function () {
			this.style.color = "#555152";
		})
	}

	for (var el of buttons) {
		el.addEventListener('click', function () {
			var attr = this.getAttribute('to');
			var target = document.querySelector(`#${attr}`);
			target.scrollIntoView({behavior: "smooth", block: "start"});
			// scrollTo('#')
		})
	}
})();
