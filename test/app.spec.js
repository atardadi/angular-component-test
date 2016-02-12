describe('Component: myComponent', function() {
	beforeEach(module('myComponentModule'));

	var element;
	var scope;

	beforeEach(inject(function($rootScope, $compile) {
		scope = $rootScope.$new();
		element = angular.element('<my-component my-binding={{outside}}></my-component>');
		element = $compile(element)(scope);
		scope.outside = '1.5';
		scope.$apply();
	}));

	it('should render the text', function() {
		var h1 = element.find('h1');
		expect(h1.text()).toBe('Unit Test Angular 1.5');
	});

	describe('Component controller', function () {
		var controller;

		beforeEach(inject(function($rootScope, $componentController) {
			controller = $componentController('myComponent',{$scope: scope});
		}));

		it('should expose the title', function() {
			expect(controller.myTitle).toBe('Unit Test Angular');
		});

	});
});
