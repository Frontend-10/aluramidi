function playSound(idAudio) {
    document.querySelector(idAudio).play();
}

const keyList = document.querySelectorAll('.tecla');

count = 0

for (let count = 0; count < keyList.length; count++) {
    const key = keyList[count];
    const keyName = key.classList[1];
    const idAudio = `#som_${keyName}`;
    
    key.onclick = () => playSound(idAudio);
}
