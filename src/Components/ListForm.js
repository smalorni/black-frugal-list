import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* Create a form to add a new item to the list and navigates back to the Frugal List */

const AddItemToList = () => {
  /* Set up state */
    const [item, addItem] = useState({
    "userId" : userId,
    "itemName" : "",
    "price" : "",
    "store" : ""
    });

    const navigate = useNavigate();

    /* Need access to localStorage */
    const localFrugalUser = localStorage.getItem('localFrugalUser');
    const localFrugalUserObject =JSON.parse(localFrugalUser);

    const userId = localFrugalUserObject.userId;

    /* Need a submit button to save data */
    const handleSubmitButtonClick = (event) => {
      event.preventDefault();
      addItem(item);
      navigate("/");
    }
}

export default AddItemToList;