function person(name, age, job,gender,borough) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.gender = gender;
  this.borough = borough;
  this.greeting = function () {
    return"Hi " + name;
  }
  this.lives = function () {
    return name + " lives in " + borough;
  }
}
function User(fname, lname, email){
  this.fname = fname;
  this.lname = lname;
  this.email = email;
  this.name = function(){
    return this.fname + " " + this.lname;} }
  function Admin(){
    this.admin = true
    User.apply(this, arguments);
  }
// Call parent constructor with admin prototype context.}Admin.prototype = new User();
//Admin now has all of the traits of a User as well as its //own admin boolean flag
