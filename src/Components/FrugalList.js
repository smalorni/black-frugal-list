import "./index.css";
import { getAllListItems, editListItem, deleteListItem } from "../API Managers/API";
import { useState, useEffect }from "react"


/* Create our main list */

const BlackFrugalList = () => {

    /* Local storage location */
    const localFrugalUser = localStorage.getItem('localFrugalUser');
    const localFrugalUserObject = JSON.parse(localFrugalUser);


    /* Set State */
    const [listItems, setListItems] = useState([]);

    /* Set useEffect to get all list items from API */
    useEffect(() => {
        getAllListItems()
            .then(setListItems)
        }, 
            []
        );

        /* return JSX */
    return <>
            <div className="container mx-auto bg bg-gray-600 rounded-md shadow-md flex items-center justify-center">
                <div>
                    <h2 className="text-5xl text-white font-sans">Black Frugal</h2>
                        <p>Is a deal or not a deal?</p>
                </div>

                <div>
                    <ul>
                        {
                            listItems.map(listItem => {
                                return <li key={`listItem--${listItem.id}`}>{listItem.name}</li>

                        })}
                    </ul>
                </div>
            </div>
        </>
}

//export default BlackFrugalList
export default BlackFrugalList

