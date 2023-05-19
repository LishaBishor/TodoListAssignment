var output="";
function ajreq(){
    var xhttp=new XMLHttpRequest();
    
    xhttp.onreadystatechange=function(){
        if(xhttp.readyState==4 && xhttp.status==200){
     // document.getElementById('htext').innerHTML=this.responseText;
     var data=JSON.parse(this.responseText);
     
      for(let i=0;i<data.length;i++){
       //  output +=`<li>${data[i].id}</li>`;
       
       if(data[i].completed==true)
       { var check="<input type=checkbox class='checking' checked=true>";
       
       
    }
       else{
        var check="<input type=checkbox   class='checking'>";
       
       }
      
       
       output +="<li>"+ data[i].id +"    "+ data[i].title+"   "+check+"</li>";
    }  
      document.getElementById('htext').innerHTML=output;
        }
    }
    xhttp.open("GET",'data.json',true)
    xhttp.open("GET",'https://jsonplaceholder.typicode.com/todos',true);
    xhttp.send();
    }
   let count=0;
   var box=document.getElementsByClassName("checking");

   function counting(){
     
         console.log(box);
    //     console.log(box.checked);
         if(box.checked==true){
       count=count+1;
       console.log("hello"+ count)}
       else{
        count=count-1;
        console.log("hello"+ count)
       }
   
    // return c
   //}
   
}
ajreq();
function display(){
    console.log("hello");
}
function disp(){
    console.log("correct")
}
//    function check(count){
//     c=counting();
//     if(c>5){
//         alert(" Congrats. 5 Tasks have been Successfully Completed ");
//     }
//    }
     function checks(){
        var box=document.getElementsByClassName("checking");
         console.log(box)

          if(box.checked==true){
          count=count+1
          }
            
         }
         checks();
    var sub1=document.getElementById('sub');
    sub1.addEventListener('click',function dis(){console.log("nice");})
    var boxes = document.querySelectorAll('.checking');
    console.log("here");
    for (item of boxes) {
        console.log(item);
      }
    console.log(Array(boxes));
    //  Array.from(plantsArray).forEach((plant) => {
    //      console.log(plant.name)
    //  })

Array.from(boxes).forEach(box => {
  box.addEventListener('click', function handleClick() {
    console.log('box clicked');
});
});
const oxi = document.querySelectorAll('.ox');
console.log(oxi)

oxi.forEach(boxi => {
boxi.addEventListener('click', function displu() {
console.log('2 clicked');
});
});
    // var oxi=document.getElementsByClassName('ox');
    // console.log(oxi)
    // oxi.forEach(element => {element.addEventListener('click',function distu(){console.log("element");})
        
    // });
    
   // document.getElementById("sub").onclick=disp();
//    var cbox= document. getElementsByClassName('checking');
//    console.log(cbox)
//    cbox[0].addEventListener('change',function displu(){console.log("checked");})
    

    
    // box.onchange = counting(),display();
    // document.getElementById("sub").onclick=disp();
    //document. getElementsByClassName("sub")= addEventListener("click", disp);
  //  object.onclick = function(){myScript};
 // object.addEventListener("click", myScript);
//  box.forEach(boxi => {
//     boxi.addEventListener('click',function dispu() {console.log("hello");
      
//     });
//   });
   
    console.log(count)
    // boxes.forEach(box => {
    //     box.addEventListener('click', function disp() {
    //         console.log("welcome")
          
    //     });
    //   });
    // function preparePage() {
    //     document.getElementsByClassName("highlight").onclick = function() {
    //       if (document.getElementsByClassName("highlight").checked) {
    //         // use CSS style to show it
    //         document.getElementsByClassName("box").style.border = "thick solid #0000FF";
    //       } else {
    //         // hide the div
    //         document.getElementsByClassName("box").style.border = "none";
    //       }
    //     };
    //     // now hide it on the initial page load.
    //     document.getElementsByClassName("box").style.border = "none";
    //   }
      
    //   window.onload = function() {
    //     preparePage();
    //   };
