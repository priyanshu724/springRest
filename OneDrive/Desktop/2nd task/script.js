let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");

btn[0].onclick = function(){
    productImg.src = "img/dairy.jpeg";
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}


btn[1].onclick = function () {
  productImg.src = "img/temp.jpeg";
     for (bt of btn) {
       bt.classList.remove("active");
     }
     this.classList.add("active");
}


btn[2].onclick = function () {
  productImg.src = "img/kit1.jpg";
     for (bt of btn) {
       bt.classList.remove("active");
     }
     this.classList.add("active");
}