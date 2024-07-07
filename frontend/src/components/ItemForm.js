import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ItemForm.css';


const ItemForm = ({ item, onSuccess }) => {
    const [first_name, setFirstName] = useState('');
    const [middle_name, setMiddleName] = useState('');
    const [last_name, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [employment_status, setEmploymentStatus] = useState('');
    const [name_ext, setNameExt] = useState('');
    const [date_of_birth, setDateOfBirth] = useState('');
    const [place_of_birth, setPlaceOfBirth] = useState('');
    const [sex, setSex] = useState('');
    const [civil_status, setCivilStatus] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [house_no, setHouseNo] = useState('');
    const [street, setStreet] = useState('');
    const [subd, setSubd] = useState('');
    const [brgy, setBrgy] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [father_surname, setFatherSurname] = useState('');
    const [father_first_name, setFatherFirstName] = useState('');
    const [father_middle_name, setFatherMiddleName] = useState('');
    const [father_name_ext, setFatherNameExt] = useState('');
    const [mother_surname, setMotherSurname] = useState('');
    const [mother_first_name, setMotherFirstName] = useState('');
    const [mother_middle_name, setMotherMiddleName] = useState('');
    const [elementary, setElementary] = useState('');
    const [secondary, setSecondary] = useState('');
    const [vocational_tradecourse, setVocationalTradeCourse] = useState('');
    const [college, setCollege] = useState('');

    useEffect(() => {
        if (item) {
            setFirstName(item.first_name);
            setMiddleName(item.middle_name || '');
            setLastName(item.last_name);
            setAddress(item.address);
            setEmail(item.email);
            setPhone(item.phone);
            setEmploymentStatus(item.employment_status);
            setNameExt(item.name_ext);
            setDateOfBirth(item.date_of_birth);
            setPlaceOfBirth(item.place_of_birth);
            setSex(item.sex);
            setCivilStatus(item.civil_status);
            setCitizenship(item.citizenship);
            setHouseNo(item.house_no);
            setStreet(item.street);
            setSubd(item.subd);
            setBrgy(item.brgy);
            setCity(item.city);
            setProvince(item.province);
            setZipcode(item.zipcode);
            setFatherSurname(item.father_surname);
            setFatherFirstName(item.father_first_name);
            setFatherMiddleName(item.father_middle_name);
            setFatherNameExt(item.father_name_ext);
            setMotherSurname(item.mother_surname);
            setMotherFirstName(item.mother_first_name);
            setMotherMiddleName(item.mother_middle_name);
            setElementary(item.elementary);
            setSecondary(item.secondary);
            setVocationalTradeCourse(item.vocational_tradecourse);
            setCollege(item.college);
        }
    }, [item]);
    const handleSubmit = async(event) => {
        event.preventDefault();
        const data = {first_name, middle_name, last_name, address, email, phone, employment_status, name_ext, date_of_birth,
            place_of_birth, sex, civil_status, citizenship, house_no, street, subd, brgy, city, province, zipcode, father_surname,
            father_first_name, father_middle_name, father_name_ext, mother_surname, mother_first_name, mother_middle_name, elementary,
            secondary, vocational_tradecourse, college
        };
        try{
            if (item){
                await
                axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                await
                axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error){
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-grid">
            <div>
                <label>First Name:</label>
                <input type='text' value={first_name} onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div>
                <label>Middle Name:</label>
                <input type='text' value={middle_name} onChange={(e) => setMiddleName(e.target.value)}/>
            </div>
            <div>
                <label>Last Name:</label>
                <input type='text' value={last_name} onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div>
                <label>Address:</label>
                <input type='text' value={address} onChange={(e) => setAddress(e.target.value)}/>
            </div>
            <div>
                <label>Email:</label>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Phone:</label>
                <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </div>
            <div>
                <label>Employment Status:</label>
                <input type='text' value={employment_status} onChange={(e) => setEmploymentStatus(e.target.value)}/>
            </div>
            <div>
                <label>Name extension:</label>
                <input type='text' value={name_ext} onChange={(e) => setNameExt(e.target.value)}/>
            </div>
            <div>
                <label>Date of Birth:</label>
                <input type='date' value={date_of_birth} onChange={(e) => setDateOfBirth(e.target.value)}/>
            </div>
            <div>
                <label>Place of Birth:</label>
                <input type='text' value={place_of_birth} onChange={(e) => setPlaceOfBirth(e.target.value)}/>
            </div>
            <div>
                <label>Sex:</label>
                <input type='text' value={sex} onChange={(e) => setSex(e.target.value)}/>
            </div>
            <div>
                <label>Civil Status:</label>
                <input type='text' value={civil_status} onChange={(e) => setCivilStatus(e.target.value)}/>
            </div>
            <div>
                <label>Citizenship:</label>
                <input type='text' value={citizenship} onChange={(e) => setCitizenship(e.target.value)}/>
            </div>
            <div>
                <label>House Number:</label>
                <input type='text' value={house_no} onChange={(e) => setHouseNo(e.target.value)}/>
            </div><div>
                <label>Street:</label>
                <input type='text' value={street} onChange={(e) => setStreet(e.target.value)}/>
            </div><div>
                <label>Subdivison:</label>
                <input type='text' value={subd} onChange={(e) => setSubd(e.target.value)}/>
            </div><div>
                <label>Barangay:</label>
                <input type='text' value={brgy} onChange={(e) => setBrgy(e.target.value)}/>
            </div><div>
                <label>City:</label>
                <input type='text' value={city} onChange={(e) => setCity(e.target.value)}/>
            </div><div>
                <label>Province:</label>
                <input type='text' value={province} onChange={(e) => setProvince(e.target.value)}/>
            </div><div>
                <label>Zipcode:</label>
                <input type='text' value={zipcode} onChange={(e) => setZipcode(e.target.value)}/>
            </div><div>
                <label>Father's Surname:</label>
                <input type='text' value={father_surname} onChange={(e) => setFatherSurname(e.target.value)}/>
            </div><div>
                <label>Father's First Name:</label>
                <input type='text' value={father_first_name} onChange={(e) => setFatherFirstName(e.target.value)}/>
            </div><div>
                <label>Father's Middle Name:</label>
                <input type='text' value={father_middle_name} onChange={(e) => setFatherMiddleName(e.target.value)}/>
            </div>
            <div>
                <label>Father's Name Extension:</label>
                <input type='text' value={father_name_ext} onChange={(e) => setFatherNameExt(e.target.value)}/>
            </div>
            <div>
                <label>Mother's Surname:</label>
                <input type='text' value={mother_surname} onChange={(e) => setMotherSurname(e.target.value)}/>
            </div>
            <div>
                <label>Mother's First Name:</label>
                <input type='text' value={mother_first_name} onChange={(e) => setMotherFirstName(e.target.value)}/>
            </div>
            <div>
                <label>Mother's Middle Name:</label>
                <input type='text' value={mother_middle_name} onChange={(e) => setMotherMiddleName(e.target.value)}/>
            </div>
            <div>
                <label>Elementary:</label>
                <input type='text' value={elementary} onChange={(e) => setElementary(e.target.value)}/>
            </div>
            <div>
                <label>secondary:</label>
                <input type='text' value={secondary} onChange={(e) => setSecondary(e.target.value)}/>
            </div>
            <div>
                <label>Vocational TradeCourse:</label>
                <input type='text' value={vocational_tradecourse} onChange={(e) => setVocationalTradeCourse(e.target.value)}/>
            </div>
            <div>
                <label>College:</label>
                <input type='text' value={college} onChange={(e) => setCollege(e.target.value)}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    );

};
export default ItemForm;