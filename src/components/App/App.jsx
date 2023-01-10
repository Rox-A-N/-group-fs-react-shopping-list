import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Header from '../Header/Header.jsx'
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
// import ShoppingListMap from '../App/ShoppingList/ShoppingList.jsx';
import './App.css';


function App() {
    const [shoppingList, setShoppingList] = useState([]); // default array from the db
    const [newListName, setNewListName] =useState('');
    const [newListQuantity, setNewListQuantity] = useState('');
    const [newListUnit, setNewListUnit] = useState('');

    useEffect(() => {
        fetchShoppingList();
    }, []); // this array is detting up where fetchShoppingList should fire off
    
    const fetchShoppingList = () => {
        axios.get('/shopping')
        .then((response) => {
            console.log('response from the GET', response.data);
            setShoppingList(response.data);
        })
        .catch((error) => {
            console.log("error getting shopping list", error);
        })
    }

    const addShoppingItem = (event) => {
        event.preventDefault();
        console.log('add shopping clicked!', newListName, newListQuantity, newListUnit);
        axios({
            method: 'POST',
            url: '/shopping',
            data: {
                name: newListName,
                quantity: newListQuantity,
                unit: newListUnit
            }
        })
        .then((response) => {
            console.log(response);
            setNewListName('');
            setNewListQuantity('');
            setNewListUnit('')
            fetchShoppingList();
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
    return (
        <div className="App">
            <Header />
            <main>
                {/* <p>Under Construction...</p> */}
                <form onSubmit={addShoppingItem}>
                    <label htmlFor="name">Name</label>
                    <input id="name" value={newListName} onChange={(event) => setNewListName(event.target.value)}/>
                    <label htmlFor="quantity">Quantity</label>
                    <input id="quantity" value={newListQuantity} onChange={(event) => setNewListQuantity(event.target.value)}/>
                    <label htmlFor="unit">Unit</label>
                    <input id="unit" value={newListUnit} onChange={(event) => setNewListUnit(event.target.value)}/>
                    <button type="submit">test</button>
                </form>
            </main>
            {/* <ShoppingListMap /> */}
                {/* <ul>
                    {shoppingList.map(item => (
                        <li key={item.id}>
                            {item.name}, {item.quantity}, {item.unit}
                        </li>
                    ))}
                </ul> */}

                <ul>
                    {shoppingList.map(item => (
                    <ShoppingList key = {item.id} item={item} />
                    ))}
                </ul>
        </div>
    );
};
    
/// ADDD MAPPINGGGGGGG  Should I save?
// not yet. gotta import our shopping list


export default App
