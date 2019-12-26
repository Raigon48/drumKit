function playSound(note) {
    var note = note.toLowerCase();
    switch(note) {
        case 'a' : 
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 's' : 
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 'd' :
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'f' :
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j' : 
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'k' :
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'l' :
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default :
            console.log(note);
            break;
    }
}
for(var i = 0 ; i < document.querySelectorAll('.drum').length ; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function (event) {
        var audioKey = this.innerHTML;
        addAnimation(audioKey);
        playSound(audioKey);
    })
}

document.addEventListener('keypress', function(event){
    var audioKey =event.key;
    addAnimation(audioKey);
    playSound(audioKey);
})

//adding Animation
function addAnimation(key) {
    var k = '.drum'+'.'+key;
    document.querySelector(k).classList.add('pressed');
    setTimeout(function(){ document.querySelector(k).classList.remove('pressed');},200);
}