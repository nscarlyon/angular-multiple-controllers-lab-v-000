function ContactController() {
  this.name = 'natasha'
  this.email = 'my contact email'
  this.phone = 'my contact number'

  var vm = this;

  this.changeName = function () {
    vm.name = 'Something else!'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)
