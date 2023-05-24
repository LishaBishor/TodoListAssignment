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
    //.......experement....
    const oxi = document.querySelectorAll('.ox');
    var count1=0;
    console.log(oxi)
    function counting(cbox){
        let promise=new Promise((resolve,reject)=>{
        if(cbox.checked==true){
            count1=count1+1
            console.log(count1)
            resolve(count1)

                    
        }
        else{
            count1=count1-1

              console.log(count1)
              reject=("count not>5")
        }
    })
    promise.then((val)=>{
        console.log(`promise${count1}`)
        if(val>=2){alert("congratulations");
            
        }
    
    })
        
        
    
}
   // console.log(oxi)
    oxi.forEach(boxi => {
        boxi.addEventListener('click', function disp(){
            counting(boxi);
        })})


//.....experement ends here......

//const cboxs = document.querySelectorAll('.checking');

var cboxs=document.getElementsByClassName('checking')
var count2=0;
console.log(cboxs)
console.log(cboxs.length)
// Array.from(document.getElementsByClassName("checking")).forEach(function(item) {
//     console.log(item.id);
//  });

function countings(cboxs){
    let promis=new Promise((resolve,reject)=>{
    if(cboxs.checked==true){
        count2=count2+1
        console.log(count2)
        resolve(count2)

                
    }
    else{
        count2=count2-1

          console.log(count2)
          reject=("count not>5")
    }
})
promise.then((val)=>{
    console.log(`promise${count2}`)
    if(val>=2){alert("congratulations completing 5 jobs");
        
    }

})
    
    

}
//console.log(cboxs.length)
// cboxs.forEach(boxi => {
//     boxi.addEventListener('click', function disp(){
//         counting(boxi);
//     })})

document.addEventListener("DOMContentLoaded", function(e) {
    for(let i=0;i<200;i++)
    {console.log(cboxs[i])}
})
       
  

