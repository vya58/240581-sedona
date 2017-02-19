var link = document.querySelector(".start-search")
var fieldset = document.querySelector(".search-hotels");

link.addEventListener("click", function(event) {
        event.preventDefault();
        fieldset.classList.toggle("search-hotels-show");
      });