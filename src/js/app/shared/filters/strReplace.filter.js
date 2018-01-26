(function (){
	'use strict';
	angular
		.module('app.shared')
		.filter('strReplace', strReplace);

	function strReplace() {
		return function (input, from, to) {
			input = input || '';
			from = from || '\n';
			to = to || '<br />';
			//return input.replace(/\n/g, '<br />');
			return input.replace(new RegExp(from, 'g'), to);
		};
	}
})();