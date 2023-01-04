import React from "react";
import { getAllListItems, deleteListItem, editListItem } from "../Managers/API";
import { useState, useEffect } from "react"
// import { useNavigate } from "react-router-dom";
import { editItem } from "./EditItem";

/* Create our main list */

const BlackFrugalList = () => {
  
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
            
                <h1 class="text-white center font-bold text-xl text-center">My List</h1>
                
                <section>
                    <ul class="flex flex-row flex-wrap px-20 py-2 mx-auto">
                        {listItems.map((item) => {
                            return (
                                <li key={item.id}>
                                    <div class="h-72 rounded-md bg-slate-100 text-black border m-6 w-96">
                                        <div class="flex flex-wrap m-4">
                                            <div>
                                                <div>
                                                <div class="py-2"><label class="font-bold">Name of Item</label><p>{item.itemName}</p></div>
                                                <div class="py-2"><label class="font-bold">Current Price</label><p>${item.price}</p></div>
                                                <div class="py-2"><label class="font-bold">Store Name</label><p>{item.store}</p></div>
                                                <div><button class="py-1 border border-black rounded px-2 mr-3" onClick={() => deleteItem(item.id)}>Delete</button>
                                                <button class="py-1 border border-black rounded px-2" onClick={() => editItem(item.id)}>Edit</button></div>
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