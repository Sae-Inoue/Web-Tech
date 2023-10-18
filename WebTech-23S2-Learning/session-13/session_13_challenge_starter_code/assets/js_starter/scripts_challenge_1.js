// Challenge 1 Starter
// Event listener for button 1
document.getElementById('button1').addEventListener('click', function(){
    this.textContent = 'Clicked'
})
// Event listener for button 2
document.getElementById('button2').addEventListener('mouseover', function() {
    alert('Hovered over me!')
})
// Event listener for button 3
document.getElementById('button3').addEventListener('dblclick', function (){
    console.log('Double-clicked me!')
})