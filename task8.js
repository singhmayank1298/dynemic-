// GET REQUEST
// function getTodos() {
//     axios({
//         method:'get',
//         url:'https://jsonplaceholder.typicode.com/todos',
//         params:{
//             _limit:5
//         }
//     }).then(showOutput)
//     .catch(err=>console.log(err))
//   }






// this is globel token  by this we dont want to send request again again , i recive token by login  and put it in to the globel and then if i make request in (config) i see token
// i make here for visible  you can make any where
axios.defaults.headers.common['x-Auth-Token']=
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'





function  getTodos() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')  // it alwasys return promise
        
 .then(showOutput)
 .catch(err=>console.log(err))
  }
  
  // POST REQUEST
  function addTodo() {
    axios.post('https://jsonplaceholder.typicode.com/todos',{
                   title:'mayank',
                   completed:false
                })
            .then(showOutput)
            .catch(err=>console.log(err))
  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
    axios.patch('https://jsonplaceholder.typicode.com/todos/1',{  // add (/1) in (put ) we will get what we have write new object
        title:'mayank',                                            // add (/1) in (patch) we will add existing object
        completed:false
     })
 .then(showOutput)
 .catch(err=>console.log(err))
  }
  
  // DELETE REQUEST
  function removeTodo() {
    axios.delete('https://jsonplaceholder.typicode.com/todos/1',{    // it will delete data
    title:'mayank',                                            
    completed:false
 })
.then(showOutput)
.catch(err=>console.log(err))
  }
  
  // SIMULTANEOUS DATA
  function getData() {
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),  // if we want to get more then one url request // axios.all will return resut in arr immportent
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    ])
    .then((res)=>{
        console.log(res[0])
        console.log(res[1])
        showOutput(res[0])
    })
    .catch((err)=>{
        console.log(err)
    });
  }
  
  // CUSTOM HEADERS
  function customHeaders() {    //send to backend  see in config headers
    const  config={
        headers:{
            'Content-Type':'application/json',
            Authorization:'sometoken'
        }
    }
    axios.post('https://jsonplaceholder.typicode.com/todos',
    {  
        title:'new mayank',                                            
        completed:false
     },config
     )
 .then((res)=>showOutput(res))
 .catch(err=>console.error(err))
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    const option ={
        method:'post',
        url:'https://jsonplaceholder.typicode.com/todos',
        data:{
            title:"hello world"
        },
        transformResponse: axios.defaults.transformResponse.concat((data)=>{
            data.title=data.title.toUpperCase()
            return data
        })
    }
    axios(option).then((res)=>showOutput(res))
  }
  
  // ERROR HANDLING
  function errorHandling() {   //hendling error in diffirent sistutions
    axios.get('https://jsonplaceholder.typicode.com/todo77ss')  // chenge i this line
    .then((res)=>{return showOutput(res)})
    .catch((err)=>{
        if(err.response){
            //Server responded whit a status other then 200 range
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
            
        
        if(err.response.status===404){
         alert('error :page note find')
        }
    }else if(err.request){
//  Request was made but no response
  console.error(err.request);
    }else{
        console.log(err.message)
    }
        
    })
  }
  
  // CANCEL TOKEN
  function cancelToken() {
   const source= axios.CancelToken.source()   // if i want to cancel token in middele


    axios.get('https://jsonplaceholder.typicode.com/todos',{
        cancelToken:source.token
    })
    .then((res)=>{return showOutput(res)})
    .catch((thrown=>{
        if(axios.isCancel(thrown)){
            console.log('Request canceled',thrown.massage)
        }
    }))
    if(true){
        source.cancel("request canceled")  /// if we want to cancel request 
    }
  }
  
  // INTERCEPTING REQUESTS & RESPONSES

      axios.interceptors.request.use(
        (config)=>{
            console.log(`${config.method.toUpperCase()} request sent to ${
                config.url
            } at ${new Date().getTime()}`)

           return config
        },
         (error)=>{
            return Promise.reject(error)
        }
      );
  
  // AXIOS INSTANCES

  const axiosInstance=axios.create({            // make instance like a Classes
    baseURL:'https://jsonplaceholder.typicode.com'
  });

  axiosInstance.get('/comments').then(res=>showOutput(res));
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);