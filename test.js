var s = document.getElementById('sText')
var addBtn = document.getElementById('addBtn')
var display = document.getElementById('displayArea')

addBtn.addEventListener('click', addList)
var i = 0
function addList() {
    if (s.value !== '') {
        var list = document.createElement('div')
        var delBtn = document.createElement('button')
        // var trash = document.createElement('i')
        list.textContent = s.value
        s.value = ''
        delBtn.textContent = 'Delete'
        delBtn.addEventListener('click', gList)
        delBtn.setAttribute('class', 'delBtn')
        // trash.setAttribute('class', 'fas fa-trash')
        list.setAttribute('class', 'liTask')
        list.appendChild(delBtn)
        // list.appendChild(trash)
        display.appendChild(list)
    }

}

function gList() {
    document.getElementsByClassName('liTask')[i].style.cssText = 'color:grey; text-decoration:line-through';
    document.getElementsByClassName('delBtn')[i].style.cssText = 'display:none'
    i++
}
