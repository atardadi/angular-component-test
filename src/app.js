angular.module('myComponentModule', [])
.component('myComponent', {
	bindings: {
		myBinding: '@'
	},
	controller: function() {
		this.myTitle = 'Unit Test Angular';
	},
	template: '<h1>{{$ctrl.myTitle}} {{$ctrl.myBinding}}</h1>'
});
