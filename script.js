const list_items = document.querySelectorAll('.list-item')
const lists = document.querySelectorAll('.list')
const addTask = document.querySelector('.button')
const todoTab = document.querySelector('.todo')
const editingTab = document.getElementById('addingTask')
const todoInput = document.querySelector('input')

let dragged_item = null

addTask.addEventListener('click', (event)=>{
    event.preventDefault()
    const newTask = document.createElement('div')
    newTask.innerText = todoInput.value
    todoInput.value = null;
    newTask.setAttribute('class', 'list-item')
    newTask.setAttribute('draggable', 'true')
    todoTab.appendChild(newTask)
})

setInterval(()=>{
    const list_items = document.querySelectorAll('.list-item')
    for(let i = 0; i < list_items.length; i++){
        // const list_items = document.querySelectorAll('.list-item')
        const item = list_items[i]
        item.addEventListener('dragstart', ()=>{
            // console.log('dragstart')
            dragged_item = item
            setTimeout(() => {
                item.style.display = 'none'
            }, 0);        
        })
    
        item.addEventListener('dragend', ()=>{
            // console.log('dragend')
            setTimeout(()=>{
                dragged_item.style.display = 'block'
                dragged_item = null
            }, 0)
        })
    
        for(let j = 0; j < lists.length; j++){
            const list = lists[j]
            list.addEventListener('dragover', (e)=>{
                // console.log('dragover');
                e.preventDefault()
            })
            list.addEventListener('dragenter', (e)=>{
                e.preventDefault()
                // console.log('dragenter');
                // this.style.backgroundColor = 'rgba(169,169,169,1)'
                // this.style.backgroundColor = 'rgba(128,128,128,1)'
            })
            list.addEventListener('dragleave', (e)=>{
                // this.style.backgroundColor = 'rgba(128,128,128,1)'
            })
            list.addEventListener('drop', function(e){
                this.append(dragged_item)
                // this.style.backgroundColor = 'rgba(128,128,128,1)'
                // this.style.backgroundColor = 'rgba(169,169,169,1)'
            })
        }
    }
}, 1000)



