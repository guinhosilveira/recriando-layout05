export function Sound () {
    const treeAudio = new Audio('./assets/Floresta.wav');
    const rainAudio = new Audio('./assets/Chuva.wav');
    const shopAudio = new Audio('./assets/Cafeteria.wav');
    const fireAudio = new Audio('./assets/Lareira.wav');
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");

    treeAudio.loop = true;
    rainAudio.loop = true;
    shopAudio.loop = true;
    fireAudio.loop = true;

    function pressButton () {
        buttonPressAudio.play();
    }

    function timeEnd() {
        kitchenTimer.play();
    }

    return {
        treeAudio,
        rainAudio,
        shopAudio,
        fireAudio,
        pressButton,
        timeEnd
    }
}