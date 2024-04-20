let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carruselDom = document.querySelector('.carrusel'); 
let listItemDom = document.querySelector('.carrusel .lista');
let thumbnailDom = document.querySelector('.carrusel .thumbnail');

nextDom.onclick = function(){
     showSlider('next');
}
prevDom.onclick = function(){
    showSlider('prev');
}
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut; 

function showSlider(type){
    let itemSlider = document.querySelectorAll('.carrusel .lista .item ')
    let itemThumbnail = document.querySelectorAll('.carrusel .thumbnail .item')
    
    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carruselDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carruselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        carruselDom.classList.remove('next');
        carruselDom.classList.remove('prev');
    }, timeRunning)

}