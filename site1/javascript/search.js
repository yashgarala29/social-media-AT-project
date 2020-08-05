function search()
{
    
    var textinput=document.getElementById("search_id");
    var filter = textinput.value.toUpperCase();
   
    var ul = document.getElementsByClassName("post");
    
    for (i = 0; i < ul.length; i++) {
        var a = ul[i].getElementsByClassName("username_post");
        console.log(a);
        var textValue =  a[0].innerText.toUpperCase();
        console.log(textValue);
        if (textValue.indexOf(filter)>-1)
        {
            ul[i].style.display = "";
        }
        else
        {
            ul[i].style.display = "none";
        }
       
    }
    
}