function write(text, onCompletion) {
    let currentIndex = 0;

    function loop() {
        const animatedText = document.querySelector(".animated_text");
        animatedText.innerHTML = text.substring(0, currentIndex);

        if(currentIndex === text.length) {
            onCompletion();
            return;
        }
        
        currentIndex++;
        setTimeout(loop, 100);
    }

    loop();
}

function erase(text, onCompletion) {
    let currentIndex = text.length-1;

    function loop() {
        const animatedText = document.querySelector(".animated_text");
        animatedText.innerHTML = text.substring(0, currentIndex);

        if(currentIndex === 0) {
            onCompletion();
            return;
        }
        
        currentIndex--;
        setTimeout(loop, 100);
    }

    loop();
}

function onLoad() {
    const text = ['Suryansh.', 'a developer.'];

    function run(currentText) {
        write(currentText, () => {
            wait(() => {
                erase(currentText, () => {
                    let changedText;

                    if(currentText === text[0])
                        changedText = text[1];
                    else
                        changedText = text[0];

                    run(changedText);
                });
            });
        });
    }

    run(text[0]);
}

function wait(onCompletion) {
    setTimeout(onCompletion, 2000);
}

window.addEventListener("load", onLoad);