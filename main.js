function playSound(idAudio) {
    const element = document.querySelector(idAudio);

    if (element && element.localName == 'audio') element.play();
    else console.log('Elemento não encontrado ou seletor inválido!');
}

const keyList = document.querySelectorAll('.tecla');

count = 0

for (let count = 0; count < keyList.length; count++) {
    const key = keyList[count];
    const keyName = key.classList[1];
    const idAudio = `#som_${keyName}`;
    
    key.onclick = () => playSound(idAudio);
    
    key.onkeydown = (event) => {
        if(event.code === 'Space' || event.code === 'Enter')
            key.classList.add('ativa');
    }
    
    key.onkeyup = () => key.classList.remove('ativa');
}
