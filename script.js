const textInput = document.querySelector('#textInput')
const dateInput = document.querySelector('#dateInput')
const addNew = document.querySelector('#addNew')
const list = document.querySelector('.list')
const listContainer = document.querySelector('.list-container')

const emptyMessage = document.createElement('div')
emptyMessage.innerHTML = '<p>Add Items to Your List!</p>'

document.addEventListener('dragstart', event => {
    event.preventDefault();
});

document.addEventListener('drop', event => {
    event.preventDefault();
});



if (!list.hasChildNodes()) {
    listContainer.style.overflow = 'unset'
    list.appendChild(emptyMessage)
}

addNew.addEventListener('click', () => {
    if (textInput.value != '' && dateInput.value != '') {
        const newItem = document.createElement('div')
        const delBtn = document.createElement('button')
        const itemCb = document.createElement('input')

        itemCb.type = 'checkbox'

        delBtn.textContent = 'Delete'
        delBtn.classList.add('deleteBtn')
        newItem.classList.add('list-item')

        newItem.innerHTML = `<p class="text">${textInput.value}</p>
        <p class="date">${dateInput.value}</p>`

        const text = newItem.querySelector('.text')

        textInput.value = ''
        dateInput.value = ''

        delBtn.addEventListener('click', () => {
            newItem.remove()

            if (!list.hasChildNodes()) {
                listContainer.style.overflow = 'unset'
                list.appendChild(emptyMessage)
            }
        })

        itemCb.addEventListener('change', () => {
            text.classList.toggle('checked')
        })
        newItem.appendChild(itemCb)

        newItem.appendChild(delBtn)
        list.appendChild(newItem)

        listContainer.style.overflow = 'auto'
        list.removeChild(emptyMessage)

    } else {
        alert("Can't add without input text & date!")
    }

})