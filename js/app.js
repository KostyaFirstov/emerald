const anchors = document.querySelectorAll('.anchor__links')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

new Swiper('.blog-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    simulateTouch: true,
    speed: 800,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 25,
    // autoplay: {
    //   delay: 1500,
    //   disableOnInteraction: false
    // },
    breakpoints: {
      100: {
        slidesPerView: 1.26,
        spaceBetween: 20,
      },
      400: {
        slidesPerView: 1.5,
      },
      510: {
        slidesPerView: 1.8,
      },
      610: {
        slidesPerView: 2.2,
        spaceBetween: 25,  
      },
      1023: {
        slidesPerView: 3,
      },
    },
  });

  new Swiper('.message-slider', {
    spaceBetween: 25, 
    slidesPerView: 3,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    breakpoints: {
      100: {
        slidesPerView: 1.26,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 1.5,
      },
      510: {
        slidesPerView: 1.8,
      },
      610: {
        slidesPerView: 2.5,
        spaceBetween: 25,  
      },
      1023: {
        slidesPerView: 3,
      },
    }
  });

  Fancybox.bind('[data-fancybox="gallery"]', {
    autoFocus: true,
  });
  

const menuBtn = document.querySelector('.navigation__menu');
const menuBtnClose = document.querySelector('.menu-close');
const menuLinks = document.querySelector('.menu__wrapper');
const logo = document.querySelector('.navigation__logo')


menuBtn.addEventListener('click', function(){
  menuLinks.classList.add('active');
  setTimeout(function(){menuLinks.classList.add('anim')}, 0);
  logo.classList.add('active');
  document.body.style.overflow = 'hidden';
});

menuBtnClose.addEventListener('click', function(){
  menuLinks.classList.remove('anim');
  setTimeout(function(){menuLinks.classList.remove('active')}, 350);
  logo.classList.remove('active');
  document.body.style.overflow = 'auto';
});

const modalBtnsOpen = document.querySelectorAll('.navigation__request');
const modalBtnClose = document.querySelector('.modal__btn-close');
const modal = document.querySelector('.modal__window');
const modalContainer = document.querySelector('.modal__container');

modalBtnsOpen.forEach(function(btn){
  btn.addEventListener('click', function(){
    modal.classList.add('active');
    setTimeout(function(){modal.classList.add('anim')}, 100)
    document.body.style.overflow = 'hidden';
  })
});

modalBtnClose.addEventListener('click', function(){
    modal.classList.remove('anim');
    setTimeout(function(){modal.classList.remove('active')}, 400);
    if(!menuLinks.classList.contains('active')){
      document.body.style.overflow = 'auto';
    }
});

modal.addEventListener('click', function(event){
	if(!event.composedPath().includes(modalContainer)){
    modal.classList.remove('anim');
    setTimeout(function(){modal.classList.remove('active')}, 400);
    if(!menuLinks.classList.contains('active')){
      document.body.style.overflow = 'auto';
    }
	}
})


function chooseGoods(){

const filterBtn = document.querySelectorAll('.portfolio-page__filter');
const filterTable = document.querySelectorAll('.portfolio-page__table');
      
function findTable(items, category){
    items.forEach(function(card){
    const isItemFiltered = card.classList.contains(category);
    if(!isItemFiltered){
        card.classList.add('none');
        card.classList.add('hide');
    }
    else{
        card.classList.remove('none');
        setTimeout(function(){card.classList.remove('hide')}, 0);
    }
  })
}
    
filterBtn.forEach(function(button){
    button.addEventListener('click', function(){
    isActive()
    button.classList.add('active')
    const btnData = button.dataset.filter;
    findTable(filterTable, btnData);
    })
})
  
  
function isActive(){
    filterBtn.forEach(function(button){
    const haveActive = button.classList.contains('active');
    if(haveActive){
        button.classList.remove('active');
    }
    })
  } 
}
      
chooseGoods();


const portfolioConteiners = document.querySelectorAll('.portfolio-page__table');
const btnsLoadmore = document.querySelectorAll('.page-more__btn');

btnsLoadmore.forEach(function(btn){
  btn.addEventListener('click', function(){

    let whatContainer = btn.parentNode.parentNode;

    let allContainerItems = whatContainer.querySelectorAll('.portfolio__wrapper');

    allContainerItems.forEach(function(item){
      if(item.classList.contains('none')){
        item.classList.remove('none');
        setTimeout(function(){item.classList.remove('hide')}, 100);
      }
    });

  });
});


const columnBtns = document.querySelectorAll('.column__name');

columnBtns.forEach(function(btn){
  btn.addEventListener('click', function(){

  let columnPanel = btn.nextElementSibling;

  if (columnPanel.style.maxHeight) {
    columnPanel.style.maxHeight = null;
  } else {
    columnPanel.style.maxHeight = columnPanel.scrollHeight + "px";
  }
  });
});



