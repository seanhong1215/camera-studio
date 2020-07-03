
// navbar toggle
function toggleMenu() {
    console.log('toggleMenu')
    var navMenu = document.querySelector('#responsive');
    navMenu.classList.toggle('hidden');
}

// drowdown menu
var dropdownItem = document.getElementsByClassName('dropdown');
var arr = Array.prototype.slice.call(dropdownItem);
arr.forEach(function (el) {
    console.log(el)
    el.addEventListener('click', function (event) {
        // console.log('dropdown clicked', event.target.nextSibling);
        // event.target.nextSibling.nextSibling.classList.toggle('hidden');
        // event.target.nextElementSibling.classList.toggle('hidden');
        // console.log(event.target.childNodes[1]);
        event.target.childNodes[1].classList.toggle('rot-90');
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

// Modal 
var ModalBtn = document.querySelectorAll('#myBtn');
var closeBtn = document.querySelectorAll('.close');
var Modalarr = Array.prototype.slice.call(ModalBtn);
var closeBtnarr = Array.prototype.slice.call(closeBtn);

Modalarr.forEach(function (ModalBtn) {
    ModalBtn.onclick = function () {
        ModalBtn.nextElementSibling.style.display = 'block';
    }

    closeBtnarr.forEach(function (closeBtn) {
        closeBtn.onclick = function (event) {
            event.target.parentElement.parentElement.style.display = '';
        }

    })
})

window.onclick = function (event){
    if(event.target.id === 'myModal' && event.target.style.display === 'block'){
        event.target.style.display ='';
    }
}


// Form Validation

function checkForm(event) {
    // console.log('event')
    event.preventDefault();

    var nameField = document.querySelector('#name');
    var emailField = document.querySelector('#email');
    var msgField = document.querySelector('#message');

    if (nameField.lastElementChild.value === ''){
        // nameField.lastElementChild.value.length >= 10
        nameField.appendChild(createErrorMessage('請輸入名字'))   
    }else {
        if (nameField.lastElementChild.tagName === 'P') {
            nameField.lastElementChild.remove(nameField.lastElementChild);
        }
    }

    if (emailField.lastElementChild.value === ''){
        emailField.appendChild(createErrorMessage('請輸入Eamil'))   
    }else {
        if (emailField.lastElementChild.tagName === 'P') {
            emailField.lastElementChild.remove(emailField.lastElementChild);
        }
    }

    if (msgField.lastElementChild.value === ''){
        msgField.appendChild(createErrorMessage('請輸入訊息'))   
    }else {
        if (msgField.lastElementChild.tagName === 'P') {
            msgField.lastElementChild.remove(msgField.lastElementChild);
        }
    }

}

function createErrorMessage() {
    var createError = document.createElement('p');
    createError.innerText = 'Please input text';
    createError.classList.add('text-red-500', 'text-xs', 'italic');
    return createError;
}


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})