<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>School Inventory System</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
        button { margin: 5px; padding: 5px 10px; }
        .add-btn { background-color: #4CAF50; color: white; }
        .delete-btn { background-color: #f44336; color: white; }
    </style>
</head>
<body>
    <h1>School Inventory System</h1>
    <p>Click on any cell to edit. Use the buttons to add or delete rows.</p>
    <button class="add-btn" onclick="addRow()">Add New Item</button>
    
    <table id="inventoryTable">
        <thead>
            <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Category</th>
                <th>Location</th>
                <th>Notes</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <!-- Sample row -->
            <tr>
                <td contenteditable="true">Math Books</td>
                <td contenteditable="true">50</td>
                <td contenteditable="true">Books</td>
                <td contenteditable="true">Library Shelf A</td>
                <td contenteditable="true">For Grade 10</td>
                <td><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>
            </tr>
        </tbody>
    </table>

    <script>
        function addRow() {
            const table = document.getElementById('inventoryTable').getElementsByTagName('tbody')[0];
            const newRow = table.insertRow();
            newRow.innerHTML = `
                <td contenteditable="true">New Item</td>
                <td contenteditable="true">0</td>
                <td contenteditable="true">Category</td>
                <td contenteditable="true">Location</td>
                <td contenteditable="true">Notes</td>
                <td><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>
            `;
        }

        function deleteRow(button) {
            const row = button.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }
    </script>
</body>
</html>