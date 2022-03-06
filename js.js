var todos=[];

function init()
{
  var ldiv=document.createElement("div");
  var rdiv=document.createElement("div");
  ldiv.setAttribute("id","leftdiv");
  rdiv.setAttribute("id","rightdiv");


  document.body.appendChild(ldiv);
  document.body.appendChild(rdiv);

  var div=document.createElement("div");
    var heading=document.createElement("h1");
    var subhead=document.createElement("h4");
    heading.innerHTML="TASK LIST";
    subhead.innerHTML="Add task to your list by typing to the right and pressing enter. You may view the pending tasks below";

    div.appendChild(heading);
    div.appendChild(subhead);
    ldiv.appendChild(div);

  var tarea= document.createElement("textarea");
  tarea.setAttribute("placeholder","Enter something");
  tarea.setAttribute("id","todobox");
  
  rdiv.appendChild(tarea);

  tarea.addEventListener("keyup",textfunction);

  
};



function main()
{
var todocontainer=document.getElementsByClassName('container');

//delete

  for(var i=0;i<todocontainer.length;i++)
  {
    var list=[]
    list[i]=todocontainer[i];
    var deletebutton= list[i].childNodes[2];
    deletebutton.addEventListener("click",function(event)
    {
      var parent=event.target.parentNode;
      let del=parent.childNodes[0].innerHTML;
   
      parent.remove();
     todos=JSON.parse(stored);
      var myIndex = todos.indexOf(del);
      todos.splice(myIndex, 1);
    localStorage.setItem("todos",JSON.stringify(todos));
      
    }
    )
  }

  //edit

  for(var i=0;i<todocontainer.length;i++)
  {
    var list=[]
    list[i]=todocontainer[i];
    var editbutton= list[i].childNodes[1];
    editbutton.addEventListener("click",function(event)
    {
      var parent=event.target.parentNode;
      let text=parent.childNodes[0].innerHTML;
      var todobox=document.getElementById("todobox");
      todobox.value=text;
      parent.remove();
      
    }
    )
  }


//mark
   for(var i=0;i<todocontainer.length;i++)
  {
    var list=[]
    list[i]=todocontainer[i];
    var markbutton= list[i].childNodes[3];
    markbutton.addEventListener("click",function(event)
    {
      var parent=event.target.parentNode;
      parent.childNodes[0].setAttribute("style","text-decoration: line-through");
      parent.childNodes[1].remove();
      parent.childNodes[2].remove();
       todos=JSON.parse(stored);
       let text=parent.childNodes[0].innerHTML;
      var myIndex = todos.indexOf(text);
      todos.splice(myIndex, 1);
      localStorage.setItem("todos",JSON.stringify(todos));
      
    }
    )
  }

};

function textfunction(event)
{
  var key=event.code;
  var todobox=document.getElementById("todobox");
   
  if(key==="Enter"&&todobox.value!="")
  {
    
    
    
   event.preventDefault();
    var container=document.createElement("div");
    var task =document.createElement("h4");
    var mark=document.createElement("button");
    var deleteb=document.createElement("button");
    var edit=document.createElement("button");

     task.innerHTML=todobox.value;

    container.setAttribute("class","container");

    mark.textContent="Edit";
    deleteb.textContent="Delete";
    edit.textContent="Mark";

    
    container.appendChild(task);
    container.appendChild(mark);
    container.appendChild(deleteb);
    container.appendChild(edit);
     
     todos.push(todobox.value);
   
     localStorage.setItem("todos",JSON.stringify(todos));
    
    var ldiv=document.getElementById("leftdiv");
    ldiv.appendChild(container);

    todobox.value="";
    main();
  }
};



init();
let stored=localStorage.getItem("todos");
if(stored!==null)
{
  todos=JSON.parse(stored);
}

todos.forEach(function(value)
{
   var container=document.createElement("div");
    var task =document.createElement("h4");
    task.setAttribute("class","text");
    var mark=document.createElement("button");
    var deleteb=document.createElement("button");
    var edit=document.createElement("button");
  var todobox=document.getElementById("todobox");
     task.innerHTML=value;

    container.setAttribute("class","container");

    mark.textContent="Edit";
    deleteb.textContent="Delete";
    edit.textContent="Mark";
    
    container.appendChild(task);
    container.appendChild(mark);
    container.appendChild(deleteb);
    container.appendChild(edit);
     
    
    
    var ldiv=document.getElementById("leftdiv");
    ldiv.appendChild(container);
    main();

})

