$(function () {

	$('body').scrollspy({
		target: '#bool-nav'
	})

	window.onscroll = function () {
		scrollFunction()
	};

	function scrollFunction() {
		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
			$("#bool-nav")[0].style.paddingTop = "0px";
			$("#bool-nav")[0].style.paddingBottom = "0px";

		} else {
			$("#bool-nav")[0].style.paddingTop = "20px";
			$("#bool-nav")[0].style.paddingBottom = "20px";
		}
	}


});