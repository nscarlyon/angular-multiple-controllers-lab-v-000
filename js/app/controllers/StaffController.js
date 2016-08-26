function StaffController() {
  this.name = 'staff member'
  this.email = 'my staff email'
  this.phone = 'my staff number'

}

angular
  .module('app')
  .controller('StaffController', StaffController)
