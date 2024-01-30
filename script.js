// Events
var popupViews = document.querySelectorAll('.popup-view');
var popupBtns = document.querySelectorAll('.popup-btn');
var closeBtns = document.querySelectorAll('.close-btn');

//javascript for quick view button
var popup = function (popupClick) {
  popupViews[popupClick].classList.add('active');
}

popupBtns.forEach((popupBtn, i) => {
  popupBtn.addEventListener("click", () => {
	popup(i);
  });
});

//javascript for close button
closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
	popupViews.forEach((popupView) => {
	  popupView.classList.remove('active');
	});
  });
});


//filter
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



// contact us

	
       
