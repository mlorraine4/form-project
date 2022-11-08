var passwordInput = document.getElementById('password');
var confirmPasswordInput = document.getElementById('confirmPassword');
var passwords = document.querySelectorAll('input[type=password]');
var confirmText = document.getElementById('confirmText');
var check = document.getElementsByClassName('label');

checkPassword = () => {
  var a = passwordInput.value;
  var b = confirmPasswordInput.value;
  if (a === b) {
    check[1].classList.add('check');
    confirmText.innerHTML = "";
    passwords[0].classList.remove('error');
    passwords[1].classList.remove('error');
  } else {
    confirmText.innerHTML = '* Passwords do not match';
    passwords[0].classList.add('error');
    passwords[1].classList.add('error');
    check[1].classList.remove('check');
  }
}

passwords[0].addEventListener('keyup', checkPassword);
passwords[1].addEventListener('keyup', checkPassword);

// valid email address function
