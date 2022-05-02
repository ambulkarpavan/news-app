

let searchnews=  async(query) =>{


    try{

        let res= await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);

        let data= await res.json();

        return data.articles;

    }catch(err){
        console.log(err)
    }
};

let append =(data,container)=>{

    data.forEach(({urlToImage,title,description}) =>{


        let div = document.createElement("div");
        div.setAttribute("class","news")

        let image= document.createElement("img");
        image.src=urlToImage;

        let div1 = document.createElement("div");

        let title1=document.createElement("h3");
        title1.innerText=title

        let desc=document.createElement("p");
        desc.innerText=description;
         
        div1.append(title1,description);
        div.append(image,div1);

        container.append(div)

    })
}


export {searchnews,append};
