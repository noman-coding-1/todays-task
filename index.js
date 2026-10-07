
// ===============================
// HTML ELEMENT ধরছি
// ===============================

let input = document.getElementById('input');

let add_btn = document.getElementById('add-btn');

let task_list = document.getElementById('task-list');

let complete_task = document.getElementById('task-complete');

let history_btn = document.getElementById('history-btn');

let history_page = document.getElementById('history-page');

let history_list = document.getElementById('history-list');

let back_btn = document.getElementById('back-btn');


// ===============================
// COMPLETE TASK COUNT
// ===============================

let count = 0;


// ===============================
// ADD TASK
// ===============================

add_btn.addEventListener('click', function () {

    // Input থেকে task নিচ্ছি
    let task = input.value.trim();


    // Input খালি হলে কিছু করবে না
    if (task === "") {
        return;
    }


    // ===============================
    // নতুন RESULT DIV তৈরি
    // ===============================

    let result = document.createElement('div');

    result.className = 'result';


    // ===============================
    // CHECKBOX তৈরি
    // ===============================

    let checkbox = document.createElement('input');

    checkbox.type = 'checkbox';


    // ===============================
    // LABEL তৈরি
    // ===============================

    let label = document.createElement('label');

    label.textContent = task;


    // ===============================
    // CHECKBOX CHANGE
    // ===============================

    checkbox.addEventListener('change', function () {

        // Checkbox tick করা হয়েছে কিনা
        if (checkbox.checked) {

            // ===============================
            // TASK-এর উপর LINE
            // ===============================

            label.style.textDecoration = 'line-through';


            // ===============================
            // COMPLETE COUNT বাড়ানো
            // ===============================

            count++;

            complete_task.textContent =
                `Complete : ${count} task`;


            // ===============================
            // HISTORY ITEM তৈরি
            // ===============================

            let history_item = document.createElement('div');

            history_item.className = 'history-item';


            // ===============================
            // HISTORY TEXT
            // ===============================

            let history_text = document.createElement('span');

            history_text.textContent = task;


            // ===============================
            // DELETE BUTTON
            // ===============================

            let delete_btn = document.createElement('button');

            delete_btn.textContent = 'Delete';


            // ===============================
            // DELETE BUTTON CLICK
            // ===============================

            delete_btn.addEventListener('click', function () {

                // History থেকে task delete
                history_item.remove();


                // Count 1 কমানো
                count--;

                complete_task.textContent =
                    `Complete : ${count} task`;

            });


            // ===============================
            // HISTORY ITEM-এর মধ্যে
            // TEXT + DELETE BUTTON
            // ===============================

            history_item.appendChild(history_text);

            history_item.appendChild(delete_btn);


            // ===============================
            // HISTORY LIST-এ যোগ
            // ===============================

            history_list.prepend(history_item);


            // ===============================
            // MAIN TASK HIDE
            // ===============================

            result.style.display = 'none';

        }

    });


    // ===============================
    // RESULT-এর মধ্যে
    // CHECKBOX + LABEL
    // ===============================

    result.appendChild(checkbox);

    result.appendChild(label);


    // ===============================
    // TASK LIST-এ যোগ
    // ===============================

    task_list.prepend(result);


    // ===============================
    // INPUT খালি করা
    // ===============================

    input.value = "";

});


// ===============================
// HISTORY BUTTON
// ===============================

history_btn.addEventListener('click', function () {

    // Main page hide
    document.getElementById('main-page').style.display = 'none';

    // History page show
    history_page.style.display = 'block';

});


// ===============================
// BACK BUTTON
// ===============================

back_btn.addEventListener('click', function () {

    // History page hide
    history_page.style.display = 'none';

    // Main page show
    document.getElementById('main-page').style.display = 'block';

});