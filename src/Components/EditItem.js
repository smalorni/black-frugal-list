import { editListItem } from "../Managers/API";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

/* Create a form to edit an item on the list */
const EditItem = () => {
    const navigate = useNavigate();

    //set state to edit item on the list
    const [editItem, setEditItem] = useState({
        id: 0,
        userId: 0,
        itemName: "",
        price: 0,
        store: ""
        });

    const changeEventState = (evt) => {
        const copyNewState = {...editItem};
        copyNewState[evt.target.name] = evt.target.value;
        setEditItem(copyNewState);
    }

    //return the form to edit an item on the list - JSX
    return(
        <div className=" text-black" >
            <div class=" py-6">
            <h1 class="text-center mb-6 text-xl">Edit Item</h1>
            <form class="text-center">
                <label class="mr-4 text-white">Name of Item</label>
                <input type="text" name="itemName" value={editItem.itemName} onChange={changeEventState}></input>
                <label class="ml-4 mr-4 text-white">Current Price</label>
                <input type="number" name="price" value={editItem.price} onChange={changeEventState}></input>
                <label class="ml-4 mr-4 text-white">Store</label>
                <input type="text" name="store" value={editItem.store} onChange={changeEventState}></input>
                <div>
                <button className="text-center mt-6 border rounded bg-white text-black px-4 p-2" onClick={() => {
                    editListItem(editItem)
                    .then(navigate("/frugalList"))
                }}>✏️ Edit Item</button>
                </div>
            </form>
            </div>
        </div>

    )



}

export default EditItem;