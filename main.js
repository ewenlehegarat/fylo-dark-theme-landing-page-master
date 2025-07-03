const myInput = document.querySelector('input');
const myButton = document.querySelector('.get_started button');
const myh4 = document.querySelector('.get_started h4');

myButton.addEventListener('click', function(){
    myh4.style.display = 'block';
    if(myInput.value === ''){
        myh4.style.display = 'none';
    }
})

myInput.addEventListener('keyup', function(event){
    if(event.key === 'Enter'){
        myh4.style.display = 'block';
    }if(myInput.value === ''){
        myh4.style.display = 'none';
    }
})