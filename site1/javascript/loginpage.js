function addimage(flag)
{
    var patition=document.getElementsByClassName("flex-container");
        
    if(flag==true)
    {
        var box=patition[0].getElementsByClassName("box");
        var image_class=patition[0].getElementsByClassName("image_class");
        image_class[0].className=" aniamtio_left_to_right1 other"

        var   back_ground= box[0].getElementsByClassName("aline");
        var other=patition[0].getElementsByClassName("other");
        other[0].style.opacity="100%";
        var other_1=other[0].getElementsByClassName("flex-container1");
        var other_2=other_1[0].getElementsByClassName("box");
        var aline1=other_2[0].getElementsByClassName("aline1");
        aline1[0].style.visibility="visible";
        other_2[0].style.opacity="100%";
        back_ground[0].style.display="none";
        box[0].className="aniamtio_right_to_left1 image_class";
    
    }
    else
    {var box=patition[0].getElementsByClassName("image_class");
        
        var   back_ground= box[0].getElementsByClassName("aline");
        box[0].className="aniamtio_right_to_left box";
        back_ground[0].style.display="";
        back_ground[0].style.opacity="100%";
        var other=patition[0].getElementsByClassName("other");
        other[0].style.opacity="60%";
        var other_1=other[0].getElementsByClassName("flex-container1");
        var other_2=other_1[0].getElementsByClassName("box");
        var aline1=other_2[0].getElementsByClassName("aline1");
        aline1[0].style.visibility="hidden";
        other[0].className="aniamtio_left_to_right image_class";
        other_2[0].style.opacity="0";
       

    }    
}
