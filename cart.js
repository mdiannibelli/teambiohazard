// Cart 

const items1 = [

    {
        "id": 1,
        "name": "Main Shirt",
        "img": "./imgs/Shirt.jpg",
        "price": 20.00,
        "amount": 1,
        "content": "hiddencontent",
        "hide": `
        <h3>SIZE</h3>
        <h3>H</h3>
        <h3>W</h3>
        <h4>S</h4>
        <h4>64cm</h4>
        <h4>44cm</h4>
        <h4>M</h4>
        <h4>66cm</h4>
        <h4>46cm</h4>
        <h4>L</h4>
        <h4>68cm</h4>
        <h4>49cm</h4>
        <h4>XL</h4>
        <h4>70cm</h4>
        <h4>52cm</h4>
        <h4>XXL</h4>
        <h4>75cm</h4>
        <h4>56cm</h4>
        `
    },
    {
        "id": 2,
        "name": "Face Mask",
        "img": "./imgs/Facemask.jpg",
        "price": 4.00,
        "amount": 1,
        "content": "hiddencontent2",
        "hide": `
        <h4>Stay safe and cool with an BZ face mask.</h4>
        <h4>100% Polyester inlayed with cotton</h4>
        <h4>Adjustable string straps on each size</h4>
        <h4>One size fits all</h4>
        <h4>Stays on while talking</h4>
        `
    },
    {
        "id": 3,
        "name": "Wooden Cap",
        "img": "./imgs/Wooden cap.jpg",
        "price": 7.50,
        "amount": 1,
        "content": "hiddencontent2",
        "hide": `
        <h4>Keep your head warm by this wooden cap in pure sunflower softness!</h4>
        <h4>Everyone deserves its own daily dose of OG love. They’re so comfy!</h4>
        <h4>Made with cotton</h4>
        <h4>Universal size</h4>
        `
    },
    {
        "id": 4,
        "name": "Cap",
        "img": "./imgs/Cap.jpg",
        "price": 8.00,
        "amount": 1,
        "content": "hiddencontent2",
        "hide": `
        <h4>Enjoy our cap that we use to play in summer!</h4>
        <h4>Laser perforations strategically optimize breathability on the front and side panels</h4>
        <h4>Made with recycled polyester fibers</h4>
        <h4>Adjustable size</h4>
        `
    },
    {
        "id": 5,
        "name": "Sport Hoodie",
        "img": "./imgs/SportHoodie.jpg",
        "price": 25.00,
        "amount": 1,
        "content": "hiddencontent",
        "hide": `
        <h3>SIZE</h3>
        <h3>H</h3>
        <h3>W</h3>
        <h4>S</h4>
        <h4>68cm</h4>
        <h4>56cm</h4>
        <h4>M</h4>
        <h4>70cm</h4>
        <h4>58cm</h4>
        <h4>L</h4>
        <h4>73cm</h4>
        <h4>60cm</h4>
        <h4>XL</h4>
        <h4>76cm</h4>
        <h4>62cm</h4>
        <h4>XXL</h4>
        <h4>79cm</h4>
        <h4>64cm</h4>
        `
    },
    {
        "id": 6,
        "name": "Red Hoodie",
        "img": "./imgs/RedHoodie.jpg",
        "price": 21.00,
        "amount": 1,
        "content": "hiddencontent",
        "hide": `
        <h3>SIZE</h3>
        <h3>H</h3>
        <h3>W</h3>
        <h4>S</h4>
        <h4>68cm</h4
        <h4>56cm</h4>
        <h4>M</h4>
        <h4>70cm</h4>
        <h4>58cm</h4>
        <h4>L</h4>
        <h4>73cm</h4>
        <h4>60cm</h4>
        <h4>XL</h4>
        <h4>76cm</h4>
        <h4>62cm</h4>
        <h4>XXL</h4>
        <h4>79cm</h4>
        <h4>64cm</h4>
        `
    }
]

const items2 = [
    {
        "id": 7,
        "name": "Black Hoodie",
        "img": "../imgs/BlackHoodie.jpg",
        "price": 21.00,
        "amount": 1,
        "content": "hiddencontent",
        "hide": `
        <h3>SIZE</h3>
        <h3>H</h3>
        <h3>W</h3>
        <h4>S</h4>
        <h4>68cm</h4>
        <h4>56cm</h4>
        <h4>M</h4>
        <h4>70cm</h4>
        <h4>58cm</h4>
        <h4>L</h4>
        <h4>73cm</h4>
        <h4>60cm</h4>
        <h4>XL</h4>
        <h4>76cm</h4>
        <h4>62cm</h4>
        <h4>XXL</h4>
        <h4>79cm</h4>
        <h4>64cm</h4>
        `
    },
    {
        "id": 8,
        "name": "White Hoodie",
        "img": "../imgs/WhiteHoodie.jpg",
        "price": 21.00,
        "amount": 1,
        "content": "hiddencontent",
        "hide": `
        <h3>SIZE</h3>
        <h3>H</h3>
        <h3>W</h3>
        <h4>S</h4>
        <h4>68cm</h4>
        <h4>56cm</h4>
        <h4>M</h4>
        <h4>70cm</h4>
        <h4>58cm</h4>
        <h4>L</h4>
        <h4>73cm</h4>
        <h4>60cm</h4>
        <h4>XL</h4>
        <h4>76cm</h4>
        <h4>62cm</h4>
        <h4>XXL</h4>
        <h4>79cm</h4>
        <h4>64cm</h4>
        `
    },
    {
        "id": 9,
        "name": "Jacket",
        "img": "../imgs/Jacket.jpg",
        "price": 46.00,
        "amount": 1,
        "content": "hiddencontent",
        "hide": `
        <h3>SIZE</h3>
        <h3>H</h3>
        <h3>W</h3>
        <h4>S</h4>
        <h4>68cm</h4>
        <h4>56cm</h4>
        <h4>M</h4>
        <h4>70cm</h4>
        <h4>58cm</h4>
        <h4>L</h4>
        <h4>73cm</h4>
        <h4>60cm</h4>
        <h4>XL</h4>
        <h4>76cm</h4>
        <h4>62cm</h4>
        <h4>XXL</h4>
        <h4>79cm</h4>
        <h4>64cm</h4>
        `
    },
    {
        "id": 10,
        "name": "Drink Ware",
        "img": "../imgs/Drinkware.jpg",
        "price": 5.50,
        "amount": 1,
        "content": "hiddencontent2",
        "hide": `
        <h4>High quality drinkware.</h4>
        <h4>Include BZ Esports logo</h4>
        <h4>Metal and soft PVC</h4>
        <h4>Customizable color</h4>
        `
    },
    {
        "id": 11,
        "name": "Keychain",
        "img": "../imgs/Keychain.jpg",
        "price": 2.00,
        "amount": 1,
        "content": "hiddencontent2",
        "hide": `
        <h4>High quality keychain.</h4>
        <h4>Include BZ Esports logo</h4>
        <h4>Metal and soft PVC</h4>
        <h4>Customizable color</h4>
        `
    },
    {
        "id": 12,
        "name": "Pin",
        "img": "../imgs/Pin.jpg",
        "price": 1.50,
        "amount": 1,
        "content": "hiddencontent2",
        "hide": `
        <h4>High quality pin.</h4>
        <h4>Include BZ Esports logo</h4>
        <h4>Metal and soft PVC</h4>
        <h4>Customizable color</h4>
        `
    }
]

const cart = [];

let total = 0;

function renderProducts1() {
    const shop = document.getElementById("shop");
    
    items1.forEach((p) =>{
       let productHTML = `
       <li class="prodductimg">
            <div class=${p.content}>
                ${p.hide}
            </div>
       <img src="${p.img}">
       <div class="tittleproduct">
           <h2>${p.name}</h2>
           <hr class="hrshop">
           <div class="price">
           <h4>$${p.price}</h4>
           <button type="button" class="btn btn-dark" onClick="addProductstoCart(${p.id})"><i class="bi bi-cart-plus"></i></button>
           </div>
       </div>
       </li>
       `
        shop.innerHTML += productHTML;
    })
}

function renderProducts2() {
    const shop2 = document.getElementById("shop2");
    
    items2.forEach((p) =>{
       let productHTML2 = `
       <li class="prodductimg">
            <div class=${p.content}>
                ${p.hide}
            </div>
       <img src="${p.img}">
       <div class="tittleproduct">
           <h2>${p.name}</h2>
           <hr class="hrshop">
           <div class="price">
           <h4>$${p.price}</h4>
           <button type="button" class="btn btn-dark" onClick="addProductstoCart(${p.id})"><i class="bi bi-cart-plus"></i></button>
           </div>
       </div>
       </li>
       `
        shop2.innerHTML += productHTML2;
    })
}






function addProductstoCart(id) {
    let product = items1.find(product => product.id === id);

    let productInCart = cart.find(product => product.id === id);

    if(productInCart) {
        productInCart.amount++;

        console.log(cart);
    } else {
        product.amount = 1;
        cart.push(product);

        console.log(cart);
    }

    renderCart();
}

function renderCart() {
    let cartHTML = document.getElementById("cart");
    console.log(cartHTML);

    let cartHTML2 = document.getElementById("cartprodducts");
    console.log(cartHTML2);

    let htmlCart = '';
    let htmlCart2 = '';

    cart.forEach((p, id) => {
        htmlCart += `
        <div class="minicart" id="cart">
        <buton type="button"><a href="./cart.html"><i class="bi bi-cart3"><h4>USD</h4></i></a></buton>
                <h3>+${p.amount}</h3>
            </div>
        `
        htmlCart2 += `
        <li class="prodductimg">
       <img src="${p.img}">
       <div class="tittleproduct">
           <h2>${p.name}</h2>
           <hr class="hrshop">
           <div class="price">
           <h4>$${p.price}</h4>
           </div>
       </div>
       </li>
        `
    })

    cartHTML.innerHTML = htmlCart;
    cartHTML2.innerHTML += htmlCart2;
}

setTimeout (() => {
    renderProducts2();
}, 100)
renderProducts1();