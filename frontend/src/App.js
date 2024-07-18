import React, { useState } from 'react'; // Removed useEffect as it is not used
import axios from 'axios';
import ItemForm from './components/ItemForm'; // Adjust path as necessary
import ItemList from './components/ItemList'; // Adjust path as necessary

const App = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleEdit = (item) => {
        setSelectedItem(item);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/items/${id}/`); // Corrected template string syntax
            // Refresh the item list after deletion
            window.location.reload();
        } catch (error) {
            console.error('There was an error deleting the item!', error);
        }
    };

    const handleSuccess = () => {
        // Handle form submission success
        setSelectedItem(null);
        window.location.reload(); // Refresh the page or re-fetch the items
    };

    return (
        <div>
            <ItemForm item={selectedItem} onSuccess={handleSuccess} />
            <ItemList onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default App;
