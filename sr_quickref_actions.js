function fill_modal(data, id) {
    const actionName = id;
    const cachedAction = data.find(action => action.action_id === actionName);
    const modalTitle = cachedAction.title;
    const modalBook_src = cachedAction.book_src;
    const modalAction_type = cachedAction.action_type;
    const modalAction_detail1 = cachedAction.action_detail1;
    const modalAction_detail2 = cachedAction.action_detail2;
    const modalDescription = cachedAction.description;

    document.getElementById('title').innerHTML=modalTitle;
    document.getElementById('book_src').innerHTML=modalBook_src;
    document.getElementById('action_type').innerHTML=modalAction_type;
    document.getElementById('action_detail1').innerHTML=modalAction_detail1;
    document.getElementById('action_detail2').innerHTML=modalAction_detail2;
    document.getElementById('description').innerHTML=modalDescription;
    
    window.action_template.showModal();
};

function spawn_button(data, parent){
    const actionGroup = document.getElementById(parent);
    data.forEach(function (item) {
        //console.log(item)
        const buttonAction = item.action_id || "action_default";
        const buttonClass = item.action_class || "button button_action";
        const buttonIcon = item.icon || "images/action_callashot.png";
        const buttonDesc = item.btn_desc || "<b>SR5 Action</b><br><br><i>Unknown Action</i>"
        const Action = document.createElement("button");
        Action.type = "button";
        Action.className = buttonClass;
        Action.id = buttonAction;
        //Action.className += "free_action";
        Action.innerHTML = '<img src="'+buttonIcon+'">'+buttonDesc;
        Action.onclick = function () {
            console.log(this.id)
            fill_modal(data, this.id)
        }
        actionGroup.appendChild(Action);
    });
};

window.addEventListener('load', function(){
    spawn_button(sr_action_free, "action_free");
    spawn_button(sr_action_simple, "action_simple");
    spawn_button(sr_action_complex, "action_complex");
    spawn_button(sr_action_interrupt, "action_interrupt");
    spawn_button(sr_action_special, "action_special");

    const dialog = document.getElementById('action_template');
    dialog.addEventListener('click', (event) => {
        if (event.target === dialog){
            dialog.close();
        }
    })
})