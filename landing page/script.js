let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let registrationFormClose = document.querySelector('#registration_form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');
let iframeBox = document.getElementsByClassName("packageMoreInfo")[0];
let registerForm = document.querySelector('.registration-form-container');
let userNameText = document.getElementById("userNameHeader");

// Get the modal added *
var modal = document.getElementById("myModal");

// Get the button that opens the modal added *
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal added *
var span = document.getElementsByClassName("close")[0];

if (window) {
  window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
  }
}

if (menu) {
  menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  });
}

if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
  });
}

if (formBtn) {
  formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
  });
}

if (formClose) {
  formClose.addEventListener('click', () => {
    let loginErrorText = document.getElementById("loginError");
    loginForm.classList.remove('active');
    loginErrorText.style.display = 'none';
    document.getElementById("password_id").value = "";
    document.getElementById("email_id").value = "";
  });
}

if (registrationFormClose) {
  registrationFormClose.addEventListener('click', () => {
    let loginErrorText = document.getElementById("loginError");
    registerForm.classList.remove('active');
    loginErrorText.style.display = 'none';
    document.getElementById("password_id").value = "";
    document.getElementById("email_id").value = "";
    document.getElementById("userName").value = "";
  });
}

videoBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active');
    let src = btn.getAttribute('data-src');
    document.querySelector('#video-slider').src = src;
  });
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".brand-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});



// When the user clicks the button, open the modal added *
handleFinalBooking = () => {
  let bookingNameUpdate = document.getElementById("booking-confirmation")
  let placeNameVariable = sessionStorage.getItem("PlaceName").toUpperCase().bold()
  bookingNameUpdate.innerHTML = `We are pleased to inform you your booking request for ${placeNameVariable} has been received and confirmed`;
  modal.style.display = "block";
  iframeBox.style.display = "none";
}

// When the user clicks on <span> (x), close the modal added *
if (span) {
  span.onclick = function () {
    modal.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it added *
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// booking actions added *
handleShowMore = (placename) => {
  iframeBox.style.display = "flex";
  document.getElementById("iframe_place_id").src = `./place/${placename}.html`;
  document.location.href = `${document.location.origin}/#iframe_id`;
}

handlePlace = (placename) => {
  document.querySelector("*booking_place_name").value = placename;
  sessionStorage.setItem("PlaceName", placename);
  document.location.href = `${document.location.origin}/#book`;
}

handlePlaceName = (e) => {
  sessionStorage.setItem("PlaceName", e.value);
}

// login events addeed * 
handleEmail = (e) => {
  sessionStorage.setItem("email", e.value);
}

handlePassword = (e) => {
  sessionStorage.setItem("password", e.value);
}

handleLogin = () => {
  let name = sessionStorage.getItem("userName");
  let email = sessionStorage.getItem("email");
  let pass = sessionStorage.getItem("password");
  let loginErrorText = document.getElementById("loginError");
  if (email !== '' && pass !== '') {
    if (name) {
      // loginForm.classList.remove('active');
      loginForm.classList.remove('active');
      userNameText.innerHTML = `Welcome ${name}`;
    } else {
      loginErrorText.innerHTML = "No User with this id please register before login";
      sessionStorage.removeItem("email");
      sessionStorage.removeItem("password");
    }
  } else {
    loginErrorText.innerHTML = "Please make sure to enter both email and password before login";
  }
  document.getElementById("password_id").value = "";
  document.getElementById("email_id").value = "";
}

// register name
handleRegisterName = (e) => {
  sessionStorage.setItem("userName", e.value);
}

// search logic added *
handleSearch = (e) => {
  iframeBox.style.display = "flex";
  document.getElementById("iframe_place_id").src = `./place/${e.value}.html`;
}

// registration button added *
handleRegister = () => {
  loginForm.classList.remove('active');
  registerForm.classList.add('active');
}

handleRegistration = () => {
  registerForm.classList.remove('active');
  let name = sessionStorage.getItem("userName");
  userNameText.innerHTML = `${name} registered successfully`;
}