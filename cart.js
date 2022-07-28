// Cart 
const API = "./data.json";
const getData = async () => {
        const response = await fetch(API)
        const data = await response.json();
   return data;
}
let cart = [];
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    if (localStorage.getItem("cart")) {
        const storageCart = obtainStorageCart();
    }
})

const renderProducts = async () => {
    const shop = document.getElementById("shop");

    const items = await getData();
    items.forEach((p) => {
        const productHTML = document.createElement("li");
        productHTML.classList.add("prodductimg");
      productHTML.innerHTML += `
            <div class=${p.content}>
                ${p.hide}
            </div>
       <img src="${p.img}">
       <div class="tittleproduct">
           <h2>${p.name}</h2>
           <hr class="hrshop">
           <div class="price">
           <h4>$${p.price}</h4>
           <button id=boton${p.id} type="button" class="btn btn-dark"><i class="bi bi-cart-plus"></i></button>
           </div>
       </div>
       `
       shop.appendChild(productHTML);

       const btnaddproduct = document.getElementById(`boton${p.id}`)
       btnaddproduct.addEventListener("click", () => {
        addProductstoCart(p.id);
        Toastify({
            text: "You have added the product to the cart",
            duration: 3000,
            gravity: "bottom",
            stopOnFocus: false,
            destination: "./cart.html",
            avatar: "./imgs/anadir-a-la-cesta.png",
            style: {
                background: "#2f0404",
              }
        }).showToast();
    
        
    });
    });
}



const  addProductstoCart = async (id) => {
    const items = await getData();
    let product = items.find(items => items.id === id);
    let productInCart = cart.find(items => items.id === id);

    if(productInCart) {
        productInCart.amount++;

        console.log(cart);
    } else {
        product.amount = 1;
        cart.push(product);

        console.log(cart);
    }

    renderCart(cart);
    totalPrice();
}

const cartHTML = document.querySelector(".h3cart");

const renderCart = () => {
    cartHTML.innerText = cart.reduce((acc, item) => acc + item.amount, 0    );
    localStorage.setItem("cart", JSON.stringify(cart));

    const maincart = document.getElementById("cartwproducts");
    let cartProduct = ``;
    cart.forEach((p, id)=> {
        cartProduct += `
        <li class="prodductimg2">
   <img src="${p.img}" class="pimg">
   <div class="tittleproduct2">
       <h2>${p.name}</h2>
       <div class="price2">
       <h4>$${p.price}</h4>
       <h4>(${p.amount})</h4>
       <button  type="button" class="btn btn-dark" onclick="deleteProductCart(${id})"><i class="bi bi-x-circle"></i></button>
       </div>
   </div>
   </li>
   `
}) 
 maincart.innerHTML = cartProduct;
}

// eliminar producto
function deleteProductCart(id) {
    cart[id].amount--;

    if(cart[id].amount === 0) {
        cart.splice (id, 1)
    }
    renderCart(cart);
}
// calcular total
function totalPrice() {
    let total = 0;

    cart.forEach((p)=> {
        total += p.price * p.amount;
    });

    const t = document.getElementById("precioTotal");

    t.innerHTML = `<h5>$${total}</h5>`;
}


// obtener carrito storage
const obtainStorageCart = () => {
    const storageCart = JSON.parse(localStorage.getItem("cart"));

    return storageCart;
}


