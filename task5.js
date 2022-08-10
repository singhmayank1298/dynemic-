let post2=[{title:"post one",body:"this is post one",createdat:new Date().getTime()},
 {title:"post two",body:"this is post one" ,createdat:new Date().getTime()}]




// function getpost(){
//   setTimeout(()=>{
//     let output=""
//    for(let i=0;i<post2.length;i++){
//       output+=`<li>${post2[i].title}-${(new Date().getTime()-post2[i].createdat)/1000}</li> `
//    }
//    document.body.innerHTML=output
//   })
// }
let interval;
function getpost(){
  clearInterval(interval)  // this is because when new invocation of  function is done the new setinterval will run //in the clearinterval arugment is setinterval in nesseary
  interval=setInterval(()=>{
    let output=""
   for(let i=0;i<post2.length;i++){
      output+=`<li>${post2[i].title}- created ${(new Date().getTime()-post2[i].createdat)/1000} second ago</li> `
   }
   document.body.innerHTML=output
  },5000)
  
}




function creatpost(post ,callback){
  setTimeout(()=>{
    post2.push({...post,createdat:new Date().getTime()})
    callback()
  },1000)

}

//getpost()



// function creat4post(post,callback){
//   setTimeout(()=>{
//     post2.push(post)
//     callback()
//   },1000)
// }
function creat4post(post){
 return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    post2.push(post)
    let error=false
    if(!error){
      resolve()
    }
    else{
      reject("jdnjd")
    }
  },1000)

 }) 
  
}

creatpost({title:"post three",body:"this is post three"},getpost)


// creat4post({title:"post four",body :"this is forth post",createdat:new Date().getTime() },getpost) // we can do like this insted of ...post{...post,createdat:new Date().getTime()}

creat4post({title:"post four",body :"this is forth post",createdat:new Date().getTime() }).then(getpost) //






























