/* Json database */

/* Get all items for the list */
export const getAllListItems = () => {
    return fetch(`http://localhost:8088/lists`)
    .then(res => res.json())
}

/* Edit a list item */
export const editListItem = (listId) => {
    return fetch(`http://localhost:8088/lists/${listId}`)
    .then(res => res.json())
}

/* Delete a list item */
export const deleteListItem = (listId) => {
    return fetch(`http://localhost:8088/lists/${listId}`, {
        method: 'DELETE'
    })
   .then(res => res.json())
}
