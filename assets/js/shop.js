let id =document.location.search.slice(4)
let loading = document.querySelector("#loader");
let row=document.querySelector(".row")
console.log(id)

fetch(`https://fakestoreapi.com/products/${id}`)
.then(res => res.json())
.then(data => {
    loading.style.display = "none";
    data
       row.innerHTML +=


       ` <h1 class="card-title text-center mt-5 mb-5 text-success">${data.title}</h1>
       <div class="col-3 mb-3 red ">
          <div class="card mt-5 ">
               <img src="${data.image}"   alt="...  style="width:500px;height:500px">
               
          </div>
      </div>  
      <div class="col-9 mt-5 ">
      <p >${data.description} </p>
      <li style="list-style:square" class=mt-5>Category: ${data.category}</li> 
      
      <div  style="width:300px; height:50px;display:flex; justify-content:space-between; align-items:center ">
      <li style="list-style:square">Rate: ${data.rating.rate}</li>
      <li style="list-style:square">Count: ${data.rating.count}</li>

      </div>
     <li style="list-style:square">${data.price}</li>
      
      </div>
      <div class="images" onclick="this.style.display='none';"></div>

 
      
     
        

       `
       let h=document.getElementsByTagName("h1")
       let p=document.getElementsByTagName("p")
       let li=document.getElementsByTagName("li")
       let imgs = document.querySelectorAll('.card img');
       let images = document.querySelector('.images');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    images.style.backgroundImage = 'url(' + img.src + ')';
    images.style.display = 'block';
  });
});
  
})
let goBack = document.querySelector("#go-back");

goBack.addEventListener("click",()=>{
    window.history.back();
})



