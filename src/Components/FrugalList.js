import React from "react";
import { getAllListItems, deleteListItem, editListItem } from "../Managers/API";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import {BiAddToQueue } from "react-icons/bi";

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
        <div>
            
                <h1 class="text-white center font-bold text-xl text-center mb-2">My List</h1>
                <button onClick={() => navigate('/lists/add')}><BiAddToQueue size={40}/></button>
                <section>
                    <ul>
                        {listItems.map((item) => {
                            return (
                                <li key={item.id}>
                                    <div class="container flex-direction:row px-8 py-2 mx-auto rounded-md bg-slate-100 text-black border m-6 w-96">
                                        <div class="flex flex-wrap m-3">
                                            <div>
                                                <div>
                                                <div class="py-2"><label class="font-bold">Name of Item</label><p>{item.itemName}</p></div>
                                                <div class="py-2"><label class="font-bold">Current Price</label><p>${item.price}</p></div>
                                                <div class="py-2"><label class="font-bold">Store Name</label><p>{item.store}</p></div>
                                                <div class="text-center"><button class="py-3" onClick={() => deleteItem(item.id)}>Delete</button>
                                                <button class="px-2" onClick={() => editItem(item.id)}>Edit</button></div>
                                                </div>
                                            </div>
                                        </div>  
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