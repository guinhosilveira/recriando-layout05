import { Sound } from "./sounds.js";
import { Elements } from "./elements.js";
import { Timer } from "./timer.js";
import { Events } from "./events.js";

const sound = Sound();

const {
    timerMinutes,
    timerSeconds,
    treeButton,
    rainButton,
    shopButton,
    fireButton,
    playButton,
    stopButton,
    moreButton,
    lessButton
} = Elements;

const configTimer = {
    timerMinutes,
    timerSeconds
};
const timer = Timer(configTimer);

const configEvents = {
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
};
const events = Events(configEvents);
