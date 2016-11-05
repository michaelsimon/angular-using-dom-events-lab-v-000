function Counter() {
	return {
		// transclude: true,
		template: [
			'<div>',
				'<h3>Counter</h3>',
				'<div>Click anywhere to increment the counter!</div>',
				'<div>Current count: {{ counter.count }}</div>',
			'</div>'
		].join(''),
		require: 'counter',
		controllerAs: 'counter',
		controller: function () {
			this.count = 0;
		},
		link: function(scope, element, attrs, ctrl) {
			// debugger;
			element.on('click', function() {
				ctrl.count++;
				scope.$apply();
			});
			scope.$on('$destroy', function() {
        element.off();
      });
		}
	};
}

angular
	.module('app')
	.directive('counter', Counter);
