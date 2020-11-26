function sett(){
    setTimeout(showBody, 3000)
}

function showBody(){
    document.getElementsByClassName('loader-container')[0].style.display="none"
    document.getElementsByClassName('main')[0].style.display="block"
}

function swipeLeft(){
    var card = document.getElementsByClassName('the-why-card');
    var cardWidth = window.getComputedStyle(card[0]).getPropertyValue('width')
    var container = document.getElementsByClassName('the-why-cards-container')[0]
    cardWidth = parseInt(cardWidth) + 32
    
    container.scroll({
        top: 0,
        left: container.scrollLeft - cardWidth,
        behavior: 'smooth'
    });

    document.getElementsByClassName('right-arrow-container')[0].style.display="block"
    if(container.scrollLeft < cardWidth){
        document.getElementsByClassName('left-arrow-container')[0].style.display="none"
    }
}

function swipeRight(){
    var card = document.getElementsByClassName('the-why-card');
    var cardWidth = window.getComputedStyle(card[0]).getPropertyValue('width')
    var container = document.getElementsByClassName('the-why-cards-container')[0]
    cardWidth = parseInt(cardWidth) + 32

    container.scroll({
        top: 0,
        left: container.scrollLeft + cardWidth,
        behavior: 'smooth'
    });

    document.getElementsByClassName('left-arrow-container')[0].style.display="block"

    var diff = container.scrollWidth - container.clientWidth
    if(container.scrollLeft + cardWidth >= diff){
        document.getElementsByClassName('right-arrow-container')[0].style.display="none"
    }
}

function setControl(){
    var card = document.getElementsByClassName('the-why-card');
    var cardWidth = window.getComputedStyle(card[0]).getPropertyValue('width')
    var container = document.getElementsByClassName('the-why-cards-container')[0]
    var diff = container.scrollWidth - container.clientWidth
    cardWidth = parseInt(cardWidth)
    
    if(container.scrollLeft < 10){
        document.getElementsByClassName('left-arrow-container')[0].style.display="none"
    }
    else{
        document.getElementsByClassName('left-arrow-container')[0].style.display="block"
    }
    if(container.scrollLeft+10 >= diff){
        document.getElementsByClassName('right-arrow-container')[0].style.display="none"
    }
    else{
        document.getElementsByClassName('right-arrow-container')[0].style.display="block"
    }
}