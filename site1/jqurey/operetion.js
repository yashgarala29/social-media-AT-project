// $(document).read(function(){
//     $("#comment_photo").click(function()
//     {
//         $(".input-group").toggle();
//     });
// });

$(document).ready(function(){
    $("#comment_photo").click(function(){
      $(".comment_photo_div_id").toggle();
    });
    $("#comment_video").click(function(){
        $(".comment_video_div_id").toggle();
      });
      $("#comment_text").click(function(){
        $(".comment_text_div_id").toggle();
      });
      $("#comment_audio").click(function(){
        $(".comment_audio_div_id").toggle();
      });

  });