import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ItemList = ({ onEdit, onDelete }) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await
            axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error);
        }
    };

    return(
        <div>
            <h1>Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <div>
                            <strong>Name:</strong> {item.first_name} {item.middle_name} {item.last_name} {item.name_ext}
                        </div>
                        <div>
                            <strong>Address:</strong> {item.house_no} {item.street} {item.subd} {item.brgy} {item.city} {item.province} {item.zipcode}
                        </div>
                        <div>
                            <strong>Email:</strong> {item.email}
                        </div>
                        <div>
                            <strong>Phone:</strong> {item.phone}
                        </div>
                        <div>
                            <strong>Address:</strong> {item.address}
                        </div>
                        <div>
                            <strong>Sex:</strong> {item.sex}
                        </div>
                        <div>
                            <strong>Date of Birth:</strong> {item.date_of_birth}
                        </div>
                        <div>
                            <strong>Place of Birth:</strong> {item.place_of_birth}
                        </div>
                        <div>
                            <strong>Civil Status:</strong> {item.civil_status}
                        </div>
                        <div>
                            <strong>Citizenship:</strong> {item.citizenship}
                        </div>
                        <div>
                            <strong>Father's Full Name:</strong> {item.father_first_name} {item.father_middle_name} {item.father_surname} {item.father_name_ext}
                        </div>
                        <div>
                            <strong>Mother's Full Name:</strong> {item.mother_first_name} {item.mother_middle_name} {item.mother_surname}
                        </div>
                        <div>
                            <strong>Education:</strong> {item.elementary}, {item.secondary}, {item.vocational_tradecourse}, {item.college}
                        </div>
                        <button onClick={()=> onEdit(item)}>Edit</button>
                        <button onClick={() => onDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default ItemList;