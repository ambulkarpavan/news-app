

let searchnews1=  async(id) =>{


    try{

        let res= await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${id}`);

        let data= await res.json();

        return data.articles;

    }catch(err){
        console.log(err)
    }
};

let append1 =(data,container)=>{

    data.forEach(({urlToImage,title,description}) =>{


        let div = document.createElement("div");
        div.setAttribute("class","news")
        div.addEventListener("click",function(){
        display()
        });

        let image= document.createElement("img");
        image.src=urlToImage;

        let div1 = document.createElement("div");

        let title1=document.createElement("h3");
        title1.innerText=title

        let desc=document.createElement("p");
        desc.innerText=description;
         
        div1.append(title1,description);
        div.append(image,div1);
        div.addEventListener("click",function(){
            display()
            });
        container.append(div)

    })
}
function display(){
    // let div = document.createElement("div");
    // let image= document.createElement("img");
    //     image.src=urlToImage;

    //     let div1 = document.createElement("div");

    //     let title1=document.createElement("h4");
    //     title1.innerText=title

    //     let desc=document.createElement("p");
    //     desc.innerText=description;
         
    //     div1.append(title1,description);
    //     div.append(image,div1);
window.location.href="news.html"

}


export {searchnews1,append1};
