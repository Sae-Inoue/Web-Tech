// Challenge 2 Starter
// Event listener for the body to handle events bubbling up
// Event listener for button 1
document.body.addEventListener('click', function(event){
    if(event.target.id === 'button1'){
        event.target.textContent = 'Clicked'
    }
    else if(event.target.id === 'button2'){
        alert('Hovered over me!')
    }
    else if(event.target.id === 'button3'){
        console.log('Double-clicked me!')
    }

})


