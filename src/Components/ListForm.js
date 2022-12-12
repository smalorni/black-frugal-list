import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addListItem } from '../Managers/API';

/* Create a form to add a new item to the list */

const ListForm = () => {
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
        <div className="bg-red-500">
            <h1>New Item</h1>
            <form>

                <label>Name of Item</label>
                <input type="text" name="itemName" value={addItem.itemName} onChange={changeEventState}></input>

                <label>Current Price</label>
                <input type="number" name="price" value={addItem.price} onChange={changeEventState}></input>

                <label>Store</label>
                <input type="text" name="store" value={addItem.store} onChange={changeEventState}></input>

                <button className="addButton" onClick={() => {
                    addListItem(addItem)
                    .then(navigate("/frugalList"))
                }}>Add New Item</button>

            </form>
        </div>  

    )
}

export default ListForm;