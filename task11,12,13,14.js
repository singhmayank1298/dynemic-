let form=document.querySelector('.form')
let name1=document.querySelector('#expense')
let email1=document.querySelector('#ChoosesDescription')




form.addEventListener("submit",add)

 async function add  (e){
    e.preventDefault() 
   let a= JSON.stringify({"name":name1.value ,"email":email1.value})
   
   let b=JSON.parse(a)  // we are making here object to pass in get request
  // localStorage.setItem(ex.value,a)
   let reponse1= await axios.post("https://crudcrud.com/api/659f1817ccce4b8ebe8ff1106bf5ae18/adduser",b)
   .then((response)=>showonscreen(response.data))      //IMMO   return whole node so we do response.data it will grap the main object   // the response from promise is only is only use in .then
   //console.log("reponse1")   // this line only run when promise retutn
   
    

}


function showonscreen(obj){
    console.log(obj)
    let node=document.createTextNode(`${obj.name} ${obj.email} `)         //`${ex.value} ${cd.value} ${cc.value}`
    let newli=document.createElement("li")
    let delet=document.createElement("button")
    let edit=document.createElement("button")
    delet.innerText="Delete"
    edit.innerText="Edit"
    delet.className="det"
    edit.className="edt"
    newli.id=obj._id            //// immportent    making id of node which we receive object from backend it have id automatic
    newli.appendChild(node)
    newli.appendChild(delet)
    newli.appendChild(edit)
    let ul=document.querySelector("#ul")
    ul.appendChild(newli)

}

document.addEventListener("DOMContentLoaded",relode)
function relode(e){
    axios.get("https://crudcrud.com/api/659f1817ccce4b8ebe8ff1106bf5ae18/adduser").then((r)=>{
        let arr=r.data
    for (let i=0;i<arr.length;i++){
            // let a=JSON.parse(valuearr[i])
            showonscreen(arr[i])
            console.log(arr[i])
        }
    })
    

}




let ul=document.querySelector("#ul")

ul.addEventListener("click",delete1)

function delete1(e){
   
   if(e.target.classList.contains("det")){
    let ul=document.querySelector("#ul")
    let a= e.target.parentElement
     console.log(a)
    ul.removeChild(a)

   
    axios.delete(`https://crudcrud.com/api/659f1817ccce4b8ebe8ff1106bf5ae18/adduser/${a.id}`)
    .then((r)=>console.log(r))
  // localStorage.removeItem(b)
   
   
   }
}
 

ul.addEventListener("click",edi)
function edi(e){
    e.preventDefault()
    if(e.target.classList.contains("edt")){
        let a= e.target.parentElement
         axios.get(`https://crudcrud.com/api/659f1817ccce4b8ebe8ff1106bf5ae18/adduser/${a.id}`).then((r)=>{
            console.log(r.data)
         name1.value=r.data.name
         email1.value=r.data.email
         
         ul.removeChild(a)
         axios.delete(`https://crudcrud.com/api/659f1817ccce4b8ebe8ff1106bf5ae18/adduser/${a.id}`).then(()=>console.log("done"))
         })

         
        
    //let s=localStorage.getItem( e.target.parentElement.id)
    //console.log("f")
    //let obj = JSON.parse(s)
    
   // ex.value=obj.expense
   // cd.value=obj.cd
  // cc.value=obj.cc
   

   
   // console.log(a.id)
   // localStorage.removeItem(a.id)
   //    ul.removeChild(a)
   
     
     }
    }
    
    //// submit ALGO

// 1= MAKE object of user 
// 2= then post request
// 3= then show on screen add newli in ul list
   

    
    // RELODE ALGO
//     1= when lode make get request grap full File
// 2= reponse give full node 
// 3= for use for loop for showonscreen all details


// DELETE ALGO


// 1= when click grap parentElement
//  2= use delete request to backend using parentElement id
//  3= the also delete from ul list



// EDIT ALGO

// 1= when click grap parent 
//          2= make get request using parent id
//          3= then set name and email value using reponse object
//          4= then delete requet and then remove from screen