import throttle from 'lodash.throttle';
import Player from '@vimeo/player';



const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localStorageKey = 'videoplayer-current-time';
console.log(localStorageKey);






function onTimeUpdate(event) {
    localStorage.setItem(localStorageKey, event.seconds);
}



const saveTime = localStorage.getItem(localStorageKey);
console.log(saveTime);

if (saveTime) {
    player.setCurrentTime(saveTime);
}
player.on('timeupdate', throttle(onTimeUpdate, 1000));

