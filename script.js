
const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=site%3A+'
const site = 'https://ajjack815.github.io/FBLA-GenericCoffe/'

function submitted(event) {
    event.preventDefault();
    const url = google + site + '+' + q.value;
    const win = window.open(url, '_blank');
    win.focus();
}

f.addEventListener('submit', submitted);

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

const coffee = ["Black", "ColdBrew", "Latte"];
const tea =["Sweet", "Black", "Matcha"];
const muffins=["Cinnamon", "Chocolate", "DoubleChoco", "Cranberry", "Blueberry"];
const cookies=["ChocoChip", "Chocolate", "PBBlossom", "OatmealRaisin", "Sugar", "Macarons"];
document.getElementsByClassName("food").innerHTML = muffins.toString();
document.getElementsByClassName("food").innerHTML = cookies.toString();
document.getElementsByClassName("coffee").innerHTML =coffee.toString();
document.getElementsByClassName("tea").innerHTML = tea.toString();



var modal = document.getElementById('id01');


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const loader = document.querySelector('.loader');

// select inputs 
const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number');

submitBtn.addEventListener('click', () => {
  if(name.value.length < 3){
      showAlert('name must be 3 letters long');
  } else if(!email.value.length){
      showAlert('enter your email');
  } else if(password.value.length < 8){
      showAlert('password should be 8 letters long');
  } else if(!number.value.length){
      showAlert('enter your phone number');
  } else if(!Number(number.value) || number.value.length < 10){
      showAlert('invalid number, please enter valid one');
  }
      // submit form
  }
)
if(name.value.length < 3){
  showAlert('name must be 3 letters long');
}