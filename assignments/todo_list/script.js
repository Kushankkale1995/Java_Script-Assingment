const Input_todo = document.querySelector('input');
const add_Button = document.querySelector('button');
const todos_list = document.querySelector('div.todos');

let count = 0;
function add_todo(){
    let input_value = Input_todo.value;
    if(input_value==""){
        return
    }
    let item=document.createElement('p');
    item.innerHTML=input_value;
    item.setAttribute("key",count);
    todos_list.append(item);

    count +=1
    item.addEventListener("click",function(){
        todos_list.removeChild(item);
    })

    Input_todo.value=""
}
add_Button.addEventListener("click",add_todo)