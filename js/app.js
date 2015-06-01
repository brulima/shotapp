(function (document) {
	var iframe;
	var radioOn = "";
	var radioDiv = document.getElementById('radio-div');
	var method = (document.addEventListener) ? 'click' : 'onclick';
	var methodListener = (document.addEventListener) ? 'addEventListener' : 'attachEvent';

	var createRadioIframe = function (link, name) {
		iframe = document.createElement('iframe');
		iframe.src = link;
		iframe.setAttribute('width', '100%');
		iframe.setAttribute('height', '31');
		radioOn = name;

		radioDiv.appendChild(iframe);
	};

	var radioButtons = document.getElementsByClassName("radio");
	for (var i = 0; i < radioButtons.length; i++) {
		radioButtons[i][methodListener](method, function() {
			var name = this.getAttribute('data-name');
			var link = this.getAttribute('data-link');
			if (radioOn === name) {
				radioDiv.removeChild(iframe);
				radioOn = "";
			} else if (radioOn === "") {
				createRadioIframe(link, name);
			} else {
				iframe.src = link;
				radioOn = name;
			}
		});
	};
})(document);
