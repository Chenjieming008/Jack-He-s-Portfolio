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