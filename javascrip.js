
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// ຟັງຊັນເພີ່ມວຽກ
addBtn.addEventListener("click", () => {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("ກະລຸນາປ້ອນວຽກກ່ອນ!");
        taskInput.focus();
        return;
    }

    // ສ້າງລາຍການ
    const li = document.createElement("li");
    li.className = "task-item";

    // ສ້າງຂໍ້ຄວາມ
    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = taskText;

    // ສ້າງກຸ່ມປຸ່ມ
    const actions = document.createElement("div");
    actions.className = "task-actions";

    // ປຸ່ມແກ້ໄຂ
    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "ແກ້ໄຂ";

    editBtn.addEventListener("click", () => {

        // ນຳຂໍ້ຄວາມເກົ່າມາແກ້ໄຂ
        const oldText = span.textContent;

        const newText = prompt(
            "ກະລຸນາແກ້ໄຂວຽກ:",
            oldText
        );

        // ຖ້າກົດ Cancel
        if (newText === null) {
            return;
        }

        // ກວດສອບຂໍ້ຄວາມໃໝ່
        if (newText.trim() === "") {
            alert("ກະລຸນາປ້ອນຂໍ້ຄວາມ!");
            return;
        }

        // ປ່ຽນຂໍ້ຄວາມເກົ່າ
        span.textContent = newText.trim();

    });

    // ປຸ່ມລຶບ
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "ລຶບ";

    deleteBtn.addEventListener("click", () => {

        if (confirm("ທ່ານຕ້ອງການລຶບວຽກນີ້ບໍ?")) {
            li.remove();
        }

    });

    // ນຳປຸ່ມມາລວມກັນ
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);

    taskList.appendChild(li);

    // ລ້າງຊ່ອງປ້ອນ
    taskInput.value = "";
    taskInput.focus();

});
