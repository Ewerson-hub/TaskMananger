let db_tasks = [];
let count = 0;

$('#save-btn').click(() => {

    let task = $('#input-task').val();

    $('#input-task').val('')
    db_tasks[count] = task;

    $('#table').append(makeHtmlCode({id: count, task:task}))

    count++; 
})

function makeHtmlCode(info){
    return content = `
                    <tr id="${info.id}">
                        <td>${info.id}</td>
                        <td>${info.task}</td>
                        <td>
                            <button onClick="btnEdit(${info.id})">Edit</button>
                            |
                            <button onClick="btnRemove(${info.id})">Remove</button>
                        </td>
                    </tr>
                 `
}

function btnEdit(id){
    $('#input-task').val(db_tasks[id]);

    delete db_tasks[id]
    $(`#${id}`).remove();
}

function btnRemove(id){
    
    delete db_tasks[id]
    $(`#${id}`).remove();
}
