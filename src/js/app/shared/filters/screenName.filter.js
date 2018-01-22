(function () {
	'use strict';
	angular
		.module('app.shared')
		.filter('screenName', screenName);

	function screenName() {
		return function (input) {
			input = input || '';
			if (input === '')
				return '';
			var item = JSON.parse(input);
			return item.Name;
		}
	}
})();