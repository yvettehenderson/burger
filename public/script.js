$(document).ready(function() {
    
  
      var burger_id = $(this).children(".burger_id").val();
      console.log(burger_id);
      $.ajax({
        method: "PUT",
        url: "/burgers/" + burger_id
      });
    });
 