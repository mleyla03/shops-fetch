let loading = document.querySelector("#loader");
let row=document.querySelector(".row")
let navbar=document.querySelector(".navbar")

fetch("https://fakestoreapi.com/products")
.then(response=>response.json())
.then(data=>{
  loading.style.display = "none";
    data.forEach(element => {
        row.innerHTML+=
        `
        <div class="col-4  mt-5 mb-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 ">
        <div class="card" style="width:300px; height:420px">
        <div style="width:300px; height:400px ;display:flex; justify-content:center; align-items:center "><img src="${element.image}"  alt="..."style="width:200px; height:200px;"></div>
        
        <div class="card-body">
          <p class="card-title">${element.title}</p>
          <div  style="display:flex; justify-content:space-between; align-items:center">
            <p>${element.price}</p>
            <p>${element.rating.rate}</p>
          </div>
         <a style=" font-style:italic;text-decoration:none; color:red ;" href="./shop.html?id=${element.id}">Ad to cart</a>
        </div>
      </div>
        
        
        
        </div>
        `
        let a=document.getElementsByTagName("a")
        let p= document.getElementsByTagName("p")
    });
})


