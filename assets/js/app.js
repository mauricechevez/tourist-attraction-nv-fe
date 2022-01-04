function showSpan(){
    const pinterestSpan = document.querySelectorAll('span');
    console.log(pinterestSpan[1])
    pinterestSpan[1].style.maxWidth='1400px';
}

setTimeout(showSpan, 500)
