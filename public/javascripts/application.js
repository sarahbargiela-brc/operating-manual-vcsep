/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

// Current date for when people print web page
$(document).ready(function(){

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  today = dd + ' ' + months[mm-1] + ' ' + yyyy;
  console.log(today);
  $('#currentdate').html(today);
});

// Copy test
var copyEmailBtn = document.querySelector('.js-emailcopybtn');  
copyEmailBtn.addEventListener('click', function(event) {  
  // Select the email link anchor text  
  var emailLink = document.querySelector('.CopyThisText');  
  var range = document.createRange();  
  range.selectNode(emailLink);  
  window.getSelection().addRange(range);  

  try {  
    // Now that we've selected the anchor text, execute the copy command  
    var successful = document.execCommand('copy');  
    var msg = successful ? 'successful' : 'unsuccessful';  
    console.log('Copy email command was ' + msg);  
  } catch(err) {  
    console.log('Oops, unable to copy');  
  }  

  // Remove the selections - NOTE: Should use
  // removeRange(range) when it is supported  
  window.getSelection().removeAllRanges();  
});


// Change 'Copy template' text to 'Template copied'
  $('.js-emailcopybtn').click(function(){
    var $this = $(this);
    $this.toggleClass('js-emailcopybtn');
    if($this.hasClass('js-emailcopybtn')){
      $this.text('Copy template');     
    } 
    else {
      $this.text('Template copied');
    }
  });

// Change 'Copy phone number' text to 'Phone number copied'
  $('.CopyPhoneNumber').click(function(){
    var $this = $(this);
    $this.toggleClass('CopyPhoneNumber');
    if($this.hasClass('CopyPhoneNumber')){
      $this.text('Copy phone number');     
    } 
    else {
      $this.text('Phone number copied');
    }
  });

// change 'copy template' styling on click
$(".copy-button").click(function () { 
     if($(this).hasClass("black-button"))
          $(".copy-button").removeClass("black-button").addClass("yellow-button-clicked");               
     $(this).addClass("black-button");        
});

// filter signposting //
function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}