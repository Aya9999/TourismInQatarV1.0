import 'regenerator-runtime/runtime'

let i = 0

const typingAnimation = (id, place) => {
    if (i < place.placeName.length) {
        document.getElementById(id).innerHTML += place.placeName.charAt(i);
        i += 1
        setTimeout(typingAnimation(id, place), 50);
    }
    else if (i === place.placeName.length) {
        typingAnimation2(id, place)
    }
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

const typingAnimation2 = (id, place) => {
    const element = document.getElementById(id)
    element.innerHTML = ""
    for (let d = 0; d < place.placeName.length; d += 1) {
        element.innerHTML += `<Text id="text${d}">${place.placeName.charAt(d)}</Text>`
    }
    setInterval(() => {
        for (let d = 0; d < place.placeName.length; d += 1) {
            const letter = document.getElementById(`text${d}`)
            delay(10000).then(letter.style.color = `${Math.floor(Math.random() * 16777215).toString(16)}`);
        }
    }, 100)
}

const shakeElement = (event) => {
    setInterval(() => {
        if (event.srcElement.style.width === "150px") {
            event.srcElement.style.width = "100px"
        }
        else {
            event.srcElement.style.width = "150px"
        }
    }, 500)
}

export { typingAnimation, typingAnimation2, shakeElement }
