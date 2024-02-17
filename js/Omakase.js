window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("back-to-top").style.display = "block";
    } else {
      document.getElementById("back-to-top").style.display = "none";
    }
  }
  
  //-------- When the user clicks on the button, scroll to the top of the document--------
  
  document.getElementById('back-to-top').addEventListener('click', function(event){
    event.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
  });






  document.querySelectorAll('.zoom-img').forEach(image => {
    image.addEventListener('click', function() {
      const modalId = this.dataset.modal;
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'flex'; // Use 'flex' to apply the flexbox centering from CSS
      }
    });
  });
  
  document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.addEventListener('click', function() {
      this.closest('.modal').style.display = 'none';
    });
  });
  
  // Optional: Close the modal if the user clicks outside the image
  window.onclick = function(event) {
    if (event.target.className === 'modal') {
      event.target.style.display = 'none';
    }
  };
  