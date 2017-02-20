app.controller('c1', ['$scope','$timeout','$rootScope','datacontext', function($scope, $timeout, $rootScope, datacontext){
	var vm = this;
    vm.request = {
        tenantId: '44dbcd-dsdfw3-dsfa-adfe23',
        personId: 10433,
        entityId: 1
    }
	vm.student = {
		name: 'Rishabh Sharma',
		age: 25,
		father: 'Sunil Kumar Sharma',
		mother: 'Sunita Sharma',
		grandFather: 'Ram Adhar Sharma',
		grandMother: 'Prabhavati Devi',
		sisterCount: 2,
		youngerSister1: 'Dipali Sharma',
		youngerSister2: 'Divya Sharma',	
		school: 'St. John\'s School'	
	}
}]);