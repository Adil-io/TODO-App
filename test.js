var s = document.getElementById('sText')
var addBtn = document.getElementById('addBtn')
var display = document.getElementById('displayArea')

addBtn.addEventListener('click', addList)

function addList() {
    var ul = document.getElementById('ul1')
    var li = document.createElement('li')
    var delBtn = document.createElement('div')
    li.textContent = s.value
    delBtn.textContent = 'Delete'
    delBtn.setAttribute('class', 'delBtn')
    li.setAttribute('class', 'liTask')
    ul.appendChild(li)
    ul.appendChild(delBtn)
}