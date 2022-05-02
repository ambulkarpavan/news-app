// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();


import {searchnews,append} from "../scripts/fetch1.js"
import {searchnews1,append1} from "../scripts/fetch2.js"

//https://masai-mock-api.herokuapp.com/news?q=tesla


let news = (e) =>{
    if(e.key=== "Enter"){

        // window.location.href="search.html"
        let query= document.getElementById("search_input").value ;

        searchnews(query).then((data) =>{
            console.log(data);
          

            let container=document.getElementById("results")
            container.innerHTML=null;
            append(data,container);
        });
       


    }
}

  document.getElementById("search_input").addEventListener("keydown",news);



 let country=document.getElementById("sidebar").children;

for( let el of country){
    el.addEventListener("click",nsearch);
}

function nsearch(){
   // console.log(this.id)

   searchnews1(this.id).then((data)=>{
  console.log(data);
  let container=document.getElementById("results")
  container.innerHTML=null;
  append(data,container);
  
   })



}

