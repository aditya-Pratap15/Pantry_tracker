document.getElementById('addItemButton').addEventListener('click', addItem);

function addItem() {
    const itemName = document.getElementById('itemName').value;
    const itemQuantity = document.getElementById('itemQuantity').value;

    if (itemName === '' || itemQuantity === '') {
        alert('Please enter both item name and quantity.');
        return;
    }

    const pantryList = document.getElementById('pantryList');

    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${itemName}</td>
        <td>${itemQuantity}</td>
        <td class="actions">
            <button onclick="deleteItem(this)">Delete</button>
            <button onclick="editItem(this)">Edit</button>
        </td>
    `;

    pantryList.appendChild(row);

    document.getElementById('itemName').value = '';
    document.getElementById('itemQuantity').value = '';
}

function deleteItem(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}

function editItem(button) {
    const row = button.parentElement.parentElement;
    const itemName = row.cells[0].innerText;
    const itemQuantity = row.cells[1].innerText;

    document.getElementById('itemName').value = itemName;
    document.getElementById('itemQuantity').value = itemQuantity;

    deleteItem(button);
}
