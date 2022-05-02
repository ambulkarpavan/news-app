// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();


import {searchnews,append} from "../scripts/fetch1.js"

//https://masai-mock-api.herokuapp.com/news?q=tesla


let news = (e) =>{
    if(e.key=== "Enter"){
        let query= document.getElementById("search_input").value ;

        searchnews(query).then((data) =>{
            console.log(data);
             //window.location.href="search.html"

            let container=document.getElementById("results")
            container.innerHTML=null;
            append(data,container);
        });
       


    }
}

document.getElementById("search_input").addEventListener("keydown",news);