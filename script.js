document.addEventListener('DOMContentLoaded', function() {
	// Events
	var popupViews = document.querySelectorAll('.popup-view');
	var popupBtns = document.querySelectorAll('.popup-btn');
	var closeBtns = document.querySelectorAll('.close-btn');
  
	// JavaScript for quick view button
	var popup = function (popupClick) {
	  popupViews[popupClick].classList.add('active');
	}
  
	popupBtns.forEach((popupBtn, i) => {
	  popupBtn.addEventListener("click", () => {
		popup(i);
	  });
	});
  
	// JavaScript for close button
	closeBtns.forEach((closeBtn) => {
	  closeBtn.addEventListener("click", () => {
		popupViews.forEach((popupView) => {
		  popupView.classList.remove('active');
		});
	  });
	});
  
	// Filter
	document.getElementById("eventSearch").addEventListener("input", function () {
	  var searchTerm = this.value.toLowerCase();
	  var eventNames = document.querySelectorAll('.name');
  
	  eventNames.forEach(function (eventName) {
		var eventNameText = eventName.innerText.toLowerCase();
		var card = eventName.closest('.product');
  
		if (eventNameText.includes(searchTerm)) {
		  card.style.display = "block";
		} else {
		  card.style.display = "none";
		}
	  });
	});
  
	// Home page
	const button = document.querySelector(".button");
	const mobileMenu = document.querySelector(".mobile-menu");
	var elements = document.querySelectorAll(".mobile_nav_elements");
	let isMenuOpen = false;  // Flag to track menu state
  
	function toggleMenu() {
	  if (isMenuOpen) {
		// If menu is open, hide it with a delay
		mobileMenu.classList.remove("show");
		setTimeout(() => {
		  mobileMenu.style.opacity = "0";
		}, 250); // 300 milliseconds (0.3 seconds) delay
		isMenuOpen = false;
	  } else {
		// If menu is closed, toggle the "show" class for animation
		mobileMenu.classList.add("show");
		mobileMenu.style.opacity = "1"; // Reset opacity if previously hidden
		isMenuOpen = true;
	  }
	}
  
	button.addEventListener("click", toggleMenu);
	elements.forEach(element => {
	  element.addEventListener("click", toggleMenu);
	});
  });
  


//Sort code events
$(document).ready(function(){
      $('.list').click(function(){
        const value=$(this).attr('data-filter');
        if (value=='all') {
          $('.product-card').show('1000');
        }else{
          $('.product-card').not('.'+value).hide('1000');
          $('.product-card').filter('.'+value).show('1000');
        }
      })
    })
