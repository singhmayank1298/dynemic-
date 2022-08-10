/// example for pormise

// console.log('persone1:shows tickets')
// console.log('persone2:shows tickets')



// const promiseWifeBRingtickets=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('ticket')
//     },3000)
// })

//  const popcorn =promiseWifeBRingtickets.then((t)=>{
//     console.log('whife:i have a tickets')
//     console.log('husband:we should go now')
//     console.log('wife:no i am hungry')
// return new Promise((resolve,reject)=>{
//     resolve(`${t}popcorn`)
// })
// });

// const getbutter =popcorn.then((t)=>{
//     console.log('husband:i got some popcorn')
// console.log('husband:we should go now')
// console.log('wife:no i need butter on my popcorn')
// return new Promise ((resolve,reject)=>{
//     resolve(`${t}butter`)
// })
// })



// let getcoldrink = getbutter.then((t)=>{
//    console.log('husband:i got some butter')
//     console.log('husband:we should go now')
//     console.log('wife:no i need col drink also')
//     return new Promise ((resolve,reject)=>{
//         resolve(`${t}coldrink`)
//     })
// })
//     getcoldrink.then((t)=>{
//         console.log(` hasband: i buy this ${t } thing for you`)
//     })


// console.log('persone4:shows tickets')
// console.log('persone5:shows tickets')

////////////////// example for async await


// console.log('persone1:shows tickets')
// console.log('persone2:shows tickets')


// const premovies=async()=>{

// const promiseWifeBRingtickets=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//              resolve('ticket')
//       },3000)
//      })

//      let ticket=  await promiseWifeBRingtickets;

//      let  getpopcorn=new Promise((resolve,reject)=> resolve('popcorn'))

     

//             console.log('whife:i have a tickets')
//             console.log('husband:we should go now')
//             console.log('wife:no i am hungry')

//         let popcorn =await getpopcorn
//         console.log('husband:i got some popcorn')
//         console.log('husband:we should go now')
//         console.log('wife:no i need butter on my popcorn')

//        let getbutter= new Promise ((resolve,reject)=>{
//             resolve("butter")})

//            let butter=await getbutter

//            console.log(`husband : i got popcone whit ${butter}`)
//            console.log('husband:we should go now')
//            console.log('wife:no i need cold drink also')


//            let getcoldrink= new Promise ((resolve,reject)=>{
//             resolve("coldrink")})

//             let coldrink= await getcoldrink

//            console.log(`husband:i got ${coldrink} for you`)
//            console.log(`husband:anythin for you darling`)
//            console.log(`wife:lets go we are geting late`)
//            console.log(`husband:thank you for the reminder *grins*`)

// return ticket
//        }


//        premovies().then((m)=>{
//         console.log(m)
//        })
// console.log('persone4:shows tickets')
// console.log('persone5:shows tickets')



/////////////////////////////  example for promise.all async await



// console.log('persone1:shows tickets')
// console.log('persone2:shows tickets')


// const premovies=async()=>{

// const promiseWifeBRingtickets=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//              resolve('ticket')
//       },3000)
//      })
//      let  getpopcorn=new Promise((resolve,reject)=> resolve('popcorn'))
     
//      let getbutter= new Promise ((resolve,reject)=>{
//             resolve("butter")})

//      let getcoldrink= new Promise ((resolve,reject)=>{
//             resolve("coldrink")})

           
//        let tickets =   await promiseWifeBRingtickets
       
//      let [popcorn,butter,coldrink] =  await Promise.all([getpopcorn,getbutter,getcoldrink])
      
//      console.log(`${popcorn} ${butter} ${coldrink}`)
// return tickets
//        }
//        premovies().then((m)=>{
//         console.log(m)
//        })
// console.log('persone4:shows tickets')
// console.log('persone5:shows tickets')

  

////// 
//answer 3

let post2=[{title:"post one",body:"this is post one",createdat:new Date().getTime()},
 {title:"post two",body:"this is post one" ,createdat:new Date().getTime()}]

let  creatpost= async  (post)=> { 
    
let interval=0
    let getpost=()=>{
        clearInterval(interval)  // this is because when new invocation of  function is done the new setinterval will run //in the clearinterval arugment is setinterval in nesseary
        interval=setInterval(()=>{
          let output=""
         for(let i=0;i<post2.length;i++){
            output+=`<li>${post2[i].title}- created ${(new Date().getTime()-post2[i].createdat)/1000} second ago</li> `
         }
         document.body.innerHTML=output
        },1000)
        
      }



    let create=   new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(post)
             post2.push({...post,createdat:new Date().getTime()})
                resolve()
              },1000)
            
        
      })
      await create
       getpost()
    

    let delete1=  new Promise((resolve,reject)=>{      // it is a promise it does not requred call
            setTimeout(()=>{
        
                post2.pop()
                if(post2.length===0){
                    reject()
                 }
                 else{
                  resolve()   /// you can also return anything in it
                 }
                 },6000)
          }) 
        

          await delete1
          getpost()
    
   
   
    //await delete1
    //getpost()
    
    return create
}

creatpost({title:"post three",body:"this is post three"}).then((t)=>{
    console.log(t)
})

creatpost({title:"post 4",body:"this is post three"})
creatpost({title:"post 5",body:"this is post three"})
creatpost({title:"post 6",body:"this is post three"})