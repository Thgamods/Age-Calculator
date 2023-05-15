function animate_Text(selectOutput, textToAnimate) {
    const text = document.querySelector(selectOutput);
    text.textContent = '';
    const strText = "" + textToAnimate;
    const splitText = strText.split('');
    for (let i = 0; i < splitText.length; i++) {
        text.innerHTML += "<span>" + splitText[i] + "</span>";
    }

    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick() {
        let span = text.querySelectorAll('span')[char];
        span.classList.add('fade');
        char++
        if (char == splitText.length) {
            clearInterval(timer);
            timer = null;
            return;
        }
    }
}
