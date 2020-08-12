//***YOU DONT NEED THIS IN YOUR CODE *** helper function: getting siblings (for animation toggling with btn)
function _siblings(elem) {
	var siblings = [],
		node = elem;

	while (node) {
		node = node.previousElementSibling;

		if (node) {
			siblings.push(node);
		}
	}

	return siblings;
}

//toggle animation on button click
document.addEventListener('click', function (item) {

	if (item.target.matches('.play-animation')) {

		var siblingsArray = [];

		siblingsArray = _siblings(item.target);

		siblingsArray.forEach(function (item) {

			var self = item;

			animationToggle(self, 500);

		});

	}

});

//***YOU NEED THIS IN YOUR CODE *** 
//function for adding <span> elements for value and skill name
function additionalElems(progressElement, value, skillName) {

	//adding value
	var valueChild = document.createElement('span');
	valueChild.className = 'progress-bar__value';
	valueChild.innerHTML = value + '%';
	progressElement.appendChild(valueChild);

	//adding bar area
	var barChild = document.createElement('div');
	barChild.className = 'progress-bar__bar';
	progressElement.appendChild(barChild);

	//adding inner area with the width of value
	var barInnerChild = document.createElement('div');
	barInnerChild.className = 'progress-bar__bar-inner';
	barInnerChild.style.width = value + '%';
	barChild.appendChild(barInnerChild);


	//adding skillName
	var skillChild = document.createElement('span');
	skillChild.className = 'progress-bar__skill';
	skillChild.innerHTML = skillName;
	progressElement.appendChild(skillChild);
}

//adding <span> elements for value and skill name
var progressBar = document.querySelectorAll('.progress-bar');

progressBar.forEach(function (item) {

	var self = item,
		barValue = self.getAttribute('data-value'),
		skillValue = self.getAttribute('data-skill'),
		effectNum = self.getAttribute('data-effect');

	additionalElems(self, barValue, skillValue);

	//adding special BEM classes to every progress bar element (to set classes for effects)
	self.className += ' progress-bar--' + effectNum;

	var valueElem = self.querySelector('.progress-bar__value');

	valueElem.className += ' progress-bar__value--' + effectNum;

	var barElem = self.querySelector('.progress-bar__bar');

	barElem.className += ' progress-bar__bar--' + effectNum;

	var barInnerElem = self.querySelector('.progress-bar__bar-inner');

	barInnerElem.className += ' progress-bar__bar-inner--' + effectNum;

	var skillElem = self.querySelector('.progress-bar__skill');

	skillElem.className += ' progress-bar__skill--' + effectNum;

	//adding alignment for values
	if (self.classList.contains('progress-bar--aligned-values')) {
		valueElem.style.left = barValue + '%';
		valueElem.classList.add('progress-bar__value--aligned-value');
	}

	//adding additional class for no overflow hidden
	if (self.classList.contains('progress-bar--no-overflow')) {
		barElem.classList.add('progress-bar__bar--no-overflow');
	}

})

//function for animation toggling
function animationToggle(progressElement, delay) {

	var skillElem = progressElement.querySelector('.progress-bar__skill'),
		valueElem = progressElement.querySelector('.progress-bar__value'),
		skillBar = progressElement.querySelector('.progress-bar__bar-inner');

	//removing animated classes, returning to start position
	skillElem.classList.remove('js-animated');
	valueElem.classList.remove('js-animated');
	skillBar.classList.remove('js-animated');

	//adding animated classes to start animation
	setTimeout(function () {
		skillElem.classList.add('js-animated');
		valueElem.classList.add('js-animated');
		skillBar.classList.add('js-animated');
	}, delay);
}

//add animation onload
function onloadAnimation() {

	progressBar.forEach(function (item) {
		animationToggle(item, 500)
	});

}

document.addEventListener("DOMContentLoaded", onloadAnimation());


$(function () { function c() { p(); var e = h(); var r = 0; var u = false; l.empty(); while (!u) { if (s[r] == e[0].weekday) { u = true } else { l.append('<div class="blank"></div>'); r++ } } for (var c = 0; c < 42 - r; c++) { if (c >= e.length) { l.append('<div class="blank"></div>') } else { var v = e[c].day; var m = g(new Date(t, n - 1, v)) ? '<div class="today">' : "<div>"; l.append(m + "" + v + "</div>") } } var y = o[n - 1]; a.css("background-color", y).find("h1").text(i[n - 1] + " " + t); f.find("div").css("color", y); l.find(".today").css("background-color", y); d() } function h() { var e = []; for (var r = 1; r < v(t, n) + 1; r++) { e.push({ day: r, weekday: s[m(t, n, r)] }) } return e } function p() { f.empty(); for (var e = 0; e < 7; e++) { f.append("<div>" + s[e].substring(0, 3) + "</div>") } } function d() { var t; var n = $("#calendar").css("width", e + "px"); n.find(t = "#calendar_weekdays, #calendar_content").css("width", e + "px").find("div").css({ width: e / 7 + "px", height: e / 7 + "px", "line-height": e / 7 + "px" }); n.find("#calendar_header").css({ height: e * (1 / 7) + "px" }).find('i[class^="icon-chevron"]').css("line-height", e * (1 / 7) + "px") } function v(e, t) { return (new Date(e, t, 0)).getDate() } function m(e, t, n) { return (new Date(e, t - 1, n)).getDay() } function g(e) { return y(new Date) == y(e) } function y(e) { return e.getFullYear() + "/" + (e.getMonth() + 1) + "/" + e.getDate() } function b() { var e = new Date; t = e.getFullYear(); n = e.getMonth() + 1 } var e = 480; var t = 2013; var n = 9; var r = []; var i = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]; var s = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; var o = ["#16a085", "#1abc9c", "#c0392b", "#27ae60", "#FF6860", "#f39c12", "#f1c40f", "#e67e22", "#2ecc71", "#e74c3c", "#d35400", "#2c3e50"]; var u = $("#calendar"); var a = u.find("#calendar_header"); var f = u.find("#calendar_weekdays"); var l = u.find("#calendar_content"); b(); c(); a.find('i[class^="icon-chevron"]').on("click", function () { var e = $(this); var r = function (e) { n = e == "next" ? n + 1 : n - 1; if (n < 1) { n = 12; t-- } else if (n > 12) { n = 1; t++ } c() }; if (e.attr("class").indexOf("left") != -1) { r("previous") } else { r("next") } }) })