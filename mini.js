let api = "https://fakestoreapi.com/products";

let apiDiv = document.querySelector(".api");
let productDiv = document.querySelector(".products");

fetch(api)
.then((success) => {
    if (!success.ok){
        apiDiv.innerHTML="Failed to load Products";
        apiDiv.style.color="red";
        return [];
    }
    return success.json();
})
.then((response) => {

    response.forEach((cur) => {

        let div = document.createElement("div")
        div.className="card";

        div.innerHTML=
            `<img src="${cur.image}"/>
            <h4>Price: $ ${cur.price}</h4>
            <h3>id:${cur.id}</h3>
            <h2>${cur.title.slice(0,50)}</h2>
            <p>${cur.description.slice(0,100)}...</p>`;
        productDiv.append(div);
    });
    
    if (response.length > 0) {
        apiDiv.innerHTML = "Products loaded successfully!";
        apiDiv.style.color = "green";
    }

})
.catch((error) => {

    apiDiv.innerHTML = "Error: " + error.message;
    apiDiv.style.color = "red";

})
.finally(() => {

    let message = document.createElement("p");

    message.innerHTML = "API request completed";

    apiDiv.append(message);

});