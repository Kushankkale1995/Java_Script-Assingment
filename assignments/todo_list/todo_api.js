let divcontainer= document.getElementById('container');
let select = document.getElementById('todo');
let completedtodo =[];
let pendingtodo = [];

fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(data => {
    for (let i=0;i<data.length;i++){
        if(data[i].completed==false){
            pendingtodo.push(data[i].title);
        }else{
            completedtodo.push(data[i].title);
        }
    }
})


select.addEventListener('change',function(){
    let value1 = select.value;
    if(value1==="completed"){
        divcontainer.innerHTML="SHOW COMPLETED TODO";
        for(let i =0;i<completedtodo.length;i++){
            let tag1=document.createElement('li');
            tag1.innerHTML=completedtodo[i];
            divcontainer.appendChild(tag1)
        }
    }else if(value1==="pending"){
        divcontainer.innerHTML="SHOW PENDING TODO";
        for(let i=0;i<pendingtodo.length;i++){
            let tag1=document.createElement('li');
            tag1.innerHTML=pendingtodo[i];
            divcontainer.appendChild(tag1);
        }
    }
    
})