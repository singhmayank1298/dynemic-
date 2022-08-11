let form=document.querySelector('.form')
let expanse1=document.querySelector('#expense')
let description1=document.querySelector('#ChoosesDescription')
let cetegory1= document.querySelector('#CATEGORY')

console.log(cetegory1)

form.addEventListener("submit",add)

 async function add  (e){
    e.preventDefault() 
   let a= JSON.stringify({"expanse":expanse1.value,"description":description1.value,"cetegory":cetegory1.value})
   
   let b=JSON.parse(a)  // we are making here object to pass in get request
  // localStorage.setItem(ex.value,a)
   let reponse1= await axios.post("https://crudcrud.com/api/659f1817ccce4b8ebe8ff1106bf5ae18/adduser",b)
   .then((response)=>showonscreen(response.data))      //IMMO   return whole node so we do response.data it will grap the main object   // the response from promise is only is only use in .then
   //console.log("reponse1")   // this line only run when promise retutn
   .catch((response)=>console.log(response))
    

}


function showonscreen(obj){
    console.log(obj)
    let node=document.createTextNode(`${obj.expanse} ${obj.description} ${obj.cetegory} `)         //`${ex.value} ${cd.value} ${cc.value}`
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
  
   
   
   }
}
 

ul.addEventListener("click",edi)
function edi(e){
    e.preventDefault()
    if(e.target.classList.contains("edt")){
        let a= e.target.parentElement
         axios.get(`https://crudcrud.com/api/659f1817ccce4b8ebe8ff1106bf5ae18/adduser/${a.id}`).then((r)=>{
            console.log(r.data)
         expanse1.value=r.data.expanse
         description1.value=r.data.description
         cetegory1.value=r.data.cetegory
         ul.removeChild(a)
         axios.delete(`https://crudcrud.com/api/659f1817ccce4b8ebe8ff1106bf5ae18/adduser/${a.id}`).then(()=>console.log("done"))
         })
    }
}