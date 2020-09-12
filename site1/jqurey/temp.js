$(document).ready(function(){
    $("#first_name_id_a").click(function(){
      $("#first_name_id").removeAttr('disabled')
    });
  
    $("#btn2").click(function(){
      $("#test2").html(function(i, origText){
        return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")"; 
      });
    });
  });
  