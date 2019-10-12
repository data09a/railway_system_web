var currentUser = window.localStorage.getItem('currentUser');

if (currentUser == null){
window.location = "login.html";
}