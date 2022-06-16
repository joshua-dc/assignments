const todoForm = document["todoForm"]
// GETS THE TODO'S FROM THE DATABASE
function getData(){
    axios.get('https://api.vschool.io/joshuadc/todo/')
        .then(response => listData(response.data))
        .catch(error => error)
}
getData()
// LISTS THE TODO'S FROM THE DATABASE
function listData(arr){
    clearList()
    
    for(let i = 0; i < arr.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = "To Do: " + arr[i].title
        document.getElementById('todoList').appendChild(h1)

        const descriptionh2 = document.createElement('h2')
        descriptionh2.textContent = "Description: " + arr[i].description
        document.getElementById("todoList").appendChild(descriptionh2)

        const img = document.createElement('img')
        img.src = arr[i].imgUrl
        img.style.width = '150px'
        img.style.height = '150px'
        document.getElementById('todoList').appendChild(img)

        const priceh2 = document.createElement('h2')
        priceh2.textContent = "$" + arr[i].price
        document.getElementById('todoList').appendChild(priceh2)


        const dltBtn = document.createElement("button")
        dltBtn.textContent = "Delete"
        priceh2.appendChild(dltBtn)
        dltBtn.addEventListener("click", () => {
            axios.delete('https://api.vschool.io/joshuadc/todo/' + arr[i]._id)
            .then(getData)
        })
        const doneBtn = document.createElement("button")
        doneBtn.textContent = "Done"
        priceh2.appendChild(doneBtn)

        const updates ={
            completed: true
        }
        const otherUpdates = {
            completed: false
        }
        doneBtn.addEventListener("click", () => {
            if (arr[i].completed === false){
                axios.put('https://api.vschool.io/joshuadc/todo/' + arr[i]._id, updates)
                    .then(getData)
                    .catch(error => console.log(error))
            } else if(arr[i].completed === true){
                axios.put('https://api.vschool.io/joshuadc/todo/' + arr[i]._id, otherUpdates)
                    .then(getData)
                    .catch(error => console.log(error))
            }
        })
        if (arr[i].completed === true){
            h1.style.textDecoration = "line-through";
            priceh2.style.textDecoration = "line-through";
        }
    }
}


function clearList(){
    const el = document.getElementById('todoList')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

// FORM FOR POST REQUEST TO THE DATABASE


todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }
    
    todoForm.title.value = ""
    todoForm.price.value = ""
    todoForm.description.value = ""
    todoForm.imgUrl.value = ""
    
    axios.post('https://api.vschool.io/joshuadc/todo/', newTodo)
        .then(getData)
        .catch(error => console.log(error))
})



























