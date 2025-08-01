'use strict'

const switcher = document.getElementById('btn');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')

    let className = document.body.className;
    if(className == "light-themes"){
        this.textContent = "Dark"
    }else{
        this.textContent = "light"
    }
    console.log('current class name:' + className)
});