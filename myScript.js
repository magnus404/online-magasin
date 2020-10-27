jQuery(document).ready(function () {
    function openFancybox() {
        setTimeout(function () {
            jQuery('#popuplink').trigger('click');
        }, 5000); /* betemmer hvor mange sek. der går inden pop up */
    } ;
   
    var visited = jQuery.cookie('visited');
    if (visited == 'no') {
         // second page load, cookie active
    } else {
        openFancybox(); // first page load, launch fancybox
    }
    jQuery.cookie('visited', 'yes', {
        expires: 365 // the number of days cookie  will be effective
    });
    

    jQuery("#popuplink").fancybox({modal:true, maxWidth: 350, overlay : {closeClick : true}});
});





var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 5 seconds
}