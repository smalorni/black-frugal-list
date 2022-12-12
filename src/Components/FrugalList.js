import React from "react";
import { getAllListItems, deleteListItem, editListItem } from "../Managers/API";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

/* Create our main list */

const BlackFrugalList = () => {
    const navigate = useNavigate();

    //set state for list items
    const [listItems, setListItems] = useState([]);
    

    //get all list items from API
    const getListItems = () => { 
        getAllListItems()
            .then(setListItems);
    }

    //delete list item from API
    const deleteItem = (id) => {
        deleteListItem(id)
            .then(getListItems);
    }

    //edit list item from API
    const editItem = (id) => {
        editListItem(id)
            .then(getListItems);
    }

  
    //use effect to get list items
    useEffect(() => {
        getListItems();
    }
    , []);

    //render the list of items into JSX
    return (
        <div className="bg-red-500">
                <h1 className="text-white">My Black Frugal List</h1>
                <button onClick={() => navigate('/lists/add')}>Add New Item</button>
                <section>
                    <ul>
                        {listItems.map((item) => {
                            return (
                                <li key={item.id}>
                                    <div className="listItem">
                                        
                                        <label>Name of Item</label><p>{item.itemName}</p>
                                        <label>Current Price</label><p>${item.price}</p>
                                        <label>Store</label><p>{item.store}</p>

                                        <button className="deleteButton" onClick={() => deleteItem(item.id)}>Delete</button>
                                        <button className="editButton" onClick={() => editItem(item.id)}>Edit</button>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>                       
                </section>
        </div>
    )
};          

export default BlackFrugalList;