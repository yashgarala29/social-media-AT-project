$(document).ready(function(){
    // -----------------------
    $("#first_name_id_a").click(function(){
      $("#first_name_id").removeAttr('disabled')
      $("#first_name_id").removeAttr('disabled')
      
      $("#first_name_id").css("cursor", "text")
      $("#first_name_id_a").remove()
    });
  
    // ----------------------------
    $("#password_id_a").click(function(){
        $("#password_id").removeAttr('disabled')
        
      $("#password_id").css("cursor", "text")
      
      $("#re_password_id").css("cursor", "text")
        $("#re_password_id").removeAttr('disabled')
        $("#password_id_a").remove()
        $("#re_password_id_a").remove()
      });

    //   ------------------------------
      $("#re_password_id_a").click(function(){
        $("#password_id").removeAttr('disabled')
        
      $("#password_id").css("cursor", "text")
      
      $("#re_password_id").css("cursor", "text")
        $("#re_password_id").removeAttr('disabled')
        $("#password_id_a").remove()
        $("#re_password_id_a").remove()
      });
// ------------------------------
      $("#email_id_a").click(function(){
        $("#email_id").removeAttr('disabled')
        $("#email_id_a").remove()
        $("#email_id").css("cursor","text")
      });
    //   --------------------------------------
      $("#date_id_a").click(function(){
          
        // $("date_id").css("cursor","")
        $("#date_id").removeAttr('disabled')
        $("#date_id_a").remove()
      });
// -------------password validation-------------
      $("#re_password_id").on("keyup",function(){
        var x = $("#password_id").val();
        var y = $("#re_password_id").val();
        if(x != y)
        {
          $("#re_password_id").addClass("form-control is-invalid")
        }
        if(x === y)
        {
          // alert("cd")
          $("#re_password_id").removeClass("form-control is-invalid").addClass("form-control is-valid")
        }
       
      });
      $("#password_id").on("keyup",function(){
        var x = $("#password_id").val();
        var y = $("#re_password_id").val();
        if(y=="")
        {

        }
        else
        {

         if(x != y)
          {
            $("#re_password_id").addClass("form-control is-invalid")
          }
          if(x === y)
          {
            // alert("cd")
            $("#re_password_id").removeClass("form-control is-invalid").addClass("form-control is-valid")
          }
        }
      });
        
  });
  

  

  