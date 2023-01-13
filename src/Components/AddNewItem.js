import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addListItem } from '../Managers/API';

/* Create a form to add a new item to the list */

const AddItem = () => {
    const navigate = useNavigate();

//set state to add item to the list
    const [addItem, setAddItem] = useState({
        id: 0,
        userId: 0,
        itemName: "",
        price: 0,
        store: ""
        });

    const changeEventState = (evt) => {
        const copyNewState = {...addItem};
        copyNewState[evt.target.name] = evt.target.value;
        setAddItem(copyNewState);
    }

    //return the form to add a new item to the list - JSX
    return (
        <div className=" text-black" >
            <div class=" py-6">
            <h1 class="text-center mb-6 text-xl text-white">Add A New Item To List</h1>
            <form class="text-center">
                <label class="mr-4 text-white">Name of Item</label>
                <input type="text" name="itemName" value={addItem.itemName} onChange={changeEventState}></input>

                <label class="ml-4 mr-4 text-white">Current Price</label>
                <input type="number" name="price" value={addItem.price} onChange={changeEventState}></input>

                <label class="ml-4 mr-4 text-white">Store</label>
                <input type="text" name="store" value={addItem.store} onChange={changeEventState}></input>
                <div>
                <button className="text-center mt-6 border rounded bg-white text-black px-4 p-2" onClick={() => {
                    addListItem(addItem)
                    .then(navigate("/frugalList"))
                }}>➕ New Item</button>
                </div>
            </form>
            </div>
        </div>  

    )
}

export default AddItem;