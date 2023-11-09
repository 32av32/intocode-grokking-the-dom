const tags = [
    {
        name: 'Google',
        url: 'https://google.com'
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com'
    },
    {
        name: 'intocode',
        url: 'https://intocode.ru'
    },
]


function render(arr) {
    const ul = document.createElement('ul')

    arr.forEach(item => {
        let li = document.createElement('li')
        let a = document.createElement('a')
        a.href = item.url
        a.innerText = item.name
        li.append(a)
        ul.append(li)
    })

    document.body.append(ul)
}

render(tags)