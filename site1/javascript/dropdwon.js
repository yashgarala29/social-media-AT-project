var   temp;
var x,y;
var flag=true;
function dropdown(event)
{
    var action;
    action=document.getElementsByClassName("droupdown");
    if(event.button==2)
    {
        window.oncontextmenu = (e) => {e.preventDefault();  }
        // console.log(action);
        action[0].style.display="table";
        console.log(x);
       
        console.log(y);
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
   
    temp=document.body.scrollTop
    // window.onscroll = function (e) {
    //   temp=  window.scrollY; // Value of scroll Y in px
   
    // // var _indropdown=document.getElementById("droupdown_id");
   
    // // console.log(temp);
    // }
    x = event.clientX; 
    y = temp+event.clientY;
    // x = event.clientX + 'px'; 
    // y = event.clientY + 'px';

}