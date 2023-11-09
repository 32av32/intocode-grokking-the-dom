const arrWords = ["html", "css", "js"]


function render(arr) {
    const ul = document.createElement('ul')

    arr.forEach(item => {
        let li = document.createElement('li')
        li.innerText = item
        ul.append(li)
    })

    document.body.append(ul)
}

render(arrWords)