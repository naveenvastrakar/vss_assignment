let userListVal = document.querySelector(".user-list_event");

userListVal.addEventListener("click", function() {
    let sideToggleVal = document.querySelector('.side-bar-wrapper');
    sideToggleVal.classList.toggle("side-bar");
  });