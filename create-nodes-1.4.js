const ul = document.createElement('ul')
const li = document.createElement('li')
li.innerHTML = 'li'
ul.classList.add('list')
ul.append(li)
document.body.append(ul)