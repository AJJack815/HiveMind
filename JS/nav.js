const createNav= () =>{
    let nav = document.querySelector('.navbar');


    nav.innerHTML = `
    <div class="nav">
    <div class="items">
        <div class="search">
            <input type="text" class="search-box" placeholder="Search Product">
            <button class="search-btn"> search</button>
        </div>
        <a href="#"> <img src="../Images/buttons/user.png" alt=""></a>
        <a href="#"> <img src="../Images/buttons/cart.png" alt=""></a>
    </div>
</div>
 <ul class="link-container">
 <li class="link-item"> <a href="index.html" class="link"> Home</a></li>
<li class="link-item"> <a href="#" class="link">Coffee</a></li>
<li class="link-item"> <a href="#" class="link"> Tea</a></li>
<li class="link-item"> <a href="product.html" class="link"> Food</a></li>
<li class="link-item"> <a href="#" class="link"> Merch</a></li>
</ul>
`;
}

createNav();