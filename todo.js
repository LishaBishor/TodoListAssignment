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
    //const oxi = document.querySelectorAll('.ox');
    //console.log(oxi)
    var count1=0
    function count(checkbos){
        let promise=new promise((resolve,rejecct)=>{
        checkbos.forEach(boxi => {
       boxi.addEventListener('click', function displu() {
        if(boxi.checked==true){
            count1=count1+1
            resolve(count1)
        }
        else{
            count1=count1-1
            rejecct()
        }
        //if (count1==2){console.log("congratulations"+2+"jobs completed")}
        }); 
       });
   })
    promise.then((val)=>{if(val>=2){alert("congratulations completed 2 jobs")}}
    )}
    const oxi = document.querySelectorAll('.ox');
    console.log(oxi)
    oxi.forEach(boxi => {
        boxi.addEventListener('click',function disp() {
            const oxi = document.querySelectorAll('.ox');
            count(oxi)
        })
    })
    //....experements end

    const cboxes= document.getElementsByClassName('checking')
    console.log(cboxes)
    //  cboxes.forEach(checku =>{
    //      checku.addEventListener('click',function disp(){
    //          console.log("hai")
    //     })
    //  })


     for (let i = 0; i < 199; i++) {
        cboxes.item(i).addEventListener('click',function disp(){
            console.log("hai")}
     )}

     
       
 


    // const checkb=Array.from(document.querySelectorAll('.checking'));
    // console.log (checkb)
    // checkb.forEach(checku =>{
    //     checku.addEventListener('click',function disp(){
    //         console.log("hai")
    //     })
    // })


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



// const boxes = document.getElementsByClassName('checking');
//  console.log(boxes);
//   console.log(boxes.length)
// const boxArray = [];

//  for (let i = 0; i < boxes.length; i++) {
//    console.log(boxes[i]);

// //     // At this point we could also push the elements to an array
//     boxArray.push(boxes[i]);
//  }
//  boxArray.forEach(box=>{
//             box.addEventListener('click',function disp(){
//                  console.log("correct")})
//             })
 
            


// console.log(boxArray)
