var x,y;
var flag=true;
function search()
{
    
    var textinput=document.getElementById("search_id");
    var filter = textinput.value.toUpperCase();
   
    var ul = document.getElementsByClassName("post");
    
    for (i = 0; i < ul.length; i++) {
        var a = ul[i].getElementsByClassName("username_post");
        // console.log(a);
        var textValue =  a[0].innerText.toUpperCase();
        // console.log(textValue);
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

function dropdown(event)
{
    var action;
    action=document.getElementsByClassName("droupdown");
    if(event.button==2)
    {
        window.oncontextmenu = (e) => {e.preventDefault();  }
        // console.log(action);
        action[0].style.display="table";
        // console.log(x);
        // console.log(y);
        action[0].style.left= x;
        action[0].style.top= y;
        
        // event.preventDefault();
    }
    if(event.button==0)
    {
        var _indropdown=document.getElementById("droupdown_id");
        
        _indropdown.addEventListener('mousedown',e=>{
            action[0].style.display="table";
            flag=false;
        })
        
        if (flag)
        {
            action[0].style.display="none"; 
            flag=true;
        }

            
    }       
      
}

function coordinate(event)
{
    x = event.clientX; 
    y = event.clientY;

}