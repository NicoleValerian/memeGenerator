const form = document.querySelector('#form')
const displayMeme = document.querySelector('#memeGoesHere')

form.addEventListener("submit", function(event) {
    event.preventDefault()
    memeDiv()
    form.reset()
})

displayMeme.addEventListener("click", function(event) {
    if (event.target.id === "delete") {
        event.target.parentElement.remove()
    }
})

const memeDiv = function() {
    const meme = document.createElement("div")
    const deleteMeme = document.createElement("span")
        deleteMeme.innerText = "\u274C"
        deleteMeme.id = "delete"
        meme.appendChild(deleteMeme)
        displayMeme.appendChild(meme)
        meme.id = "meme"

    const imageURL = document.querySelector("#imageURL").value
    const memeImage = document.createElement("img")
        memeImage.id = "memeImage"
        memeImage.setAttribute("src", imageURL)

    const topTextInput = document.querySelector("#topText").value
    const topText = document.createElement("h2")
        topText.id = "memeTop"
        topText.innerText = topTextInput

    const bottomTextInput = document.querySelector("#bottomText").value
    const bottomText = document.createElement("h2")
        bottomText.id = "memeBottom"
        bottomText.innerText = bottomTextInput

    meme.appendChild(memeImage)
    meme.appendChild(topText)
    meme.appendChild(bottomText)
}