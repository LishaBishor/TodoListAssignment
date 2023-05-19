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
       { var check="<input type=checkbox class='checking' checked=true disabled=true>";
       
       
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
    ajreq();
    // var sub1=document.getElementById('sub');
    // sub1.addEventListener('click',function dis(){console.log("nice");})
    //.....2 checkboxes experemented here....
    const oxi = document.querySelectorAll('.ox');
    console.log(oxi)
    oxi.forEach(boxi => {
        boxi.addEventListener('click', function displu() {
        console.log('2 clicked');
        }); 
        });
    //....experements end
   // var boxi=document.querySelectorAll('.checking');
//    const boxArray = [...document.getElementsByClassName('box')];
//    const boxes = Array.from(document.getElementsByClassName('box'));


//    const boxi=[...document.getElementsByClassName('checking')];
//     console.log(boxi)
//     const boxes=Array.from(document.getElementsByClassName('checking'));
//     console.log(boxes)
//     boxes.forEach(box=>{
//         box.addEventListener('click',function disp(){
//             console.log("correct")
//         })
//     })

const boxes = document.getElementsByClassName('checking');
 console.log(boxes);
  console.log(boxes.length)
const boxArray = [];

 for (let i = 0; i < boxes.length; i++) {
   console.log(boxes[i]);

//     // At this point we could also push the elements to an array
    boxArray.push(boxes[i]);
 }
 boxArray.forEach(box=>{
            box.addEventListener('click',function disp(){
                 console.log("correct")})
            })
    
// console.log(boxArray)
