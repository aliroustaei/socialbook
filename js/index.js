let settingsmenulist = document.querySelector('.settings-menu');

function settingsmenu() {
    settingsmenulist.classList.toggle('settings-menu-open')
};

//---------------- dark theme

let darkbtn = document.querySelector('.dark-btn');
let nav = document.querySelectorAll('.container');

darkbtn.addEventListener('click', () =>{
    darkbtn.classList.toggle('dark-btn-on');
    document.body.classList.toggle('dark-Theme');
})

//--------------- lazy load

const imgPerload = document.getElementsByTagName('img');

(function () {
  for(i=0 ; i < imgPerload.length ; i++ ){
      imgPerload[i].loading="lazy";
  }
})();