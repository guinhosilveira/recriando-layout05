export function Events({
    playButton,
    stopButton,
    moreButton,
    lessButton,
    treeButton,
    rainButton,
    shopButton,
    fireButton,
    timer,
    sound
}) {
    
    playButton.addEventListener('click', function () {
        timer.countDown(); 
        sound.pressButton();
    });
     
    stopButton.addEventListener('click', function () {
        timer.stopTimer();
        sound.pressButton();
    });
     
    moreButton.addEventListener('click', function () {
        timer.moreOrLessMinutes('+');
        sound.pressButton();
    });
     
    lessButton.addEventListener('click', function () {
        timer.moreOrLessMinutes('-');
        sound.pressButton();
    });
     
    treeButton.addEventListener('click', function () {
        treeButton.classList.add('selected');
        rainButton.classList.remove('selected');
        shopButton.classList.remove('selected');
        fireButton.classList.remove('selected');
        sound.pressButton();
        sound.treeAudio.play();
        sound.rainAudio.pause();
        sound.shopAudio.pause();
        sound.fireAudio.pause();
    });
     
    rainButton.addEventListener('click', function () {
        treeButton.classList.remove('selected');
        rainButton.classList.add('selected');    
        shopButton.classList.remove('selected');
        fireButton.classList.remove('selected');
        sound.pressButton();
        sound.treeAudio.pause();
        sound.rainAudio.play();
        sound.shopAudio.pause();
        sound.fireAudio.pause();
    });
     
    shopButton.addEventListener('click', function () {
        treeButton.classList.remove('selected');
        rainButton.classList.remove('selected');
        shopButton.classList.add('selected');
        fireButton.classList.remove('selected');
        sound.pressButton();
        sound.treeAudio.pause();
        sound.rainAudio.pause();
        sound.shopAudio.play();
        sound.fireAudio.pause();
    });
     
    fireButton.addEventListener('click', function () {
        treeButton.classList.remove('selected');
        rainButton.classList.remove('selected');
        shopButton.classList.remove('selected');
        fireButton.classList.add('selected');
        sound.pressButton();
        sound.treeAudio.pause();
        sound.rainAudio.pause();
        sound.shopAudio.pause();
        sound.fireAudio.play();
    });

}