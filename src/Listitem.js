import React from 'react';
import './Listitem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ListItem(props) {
    const items = props.items;
    const ListItem = items.map(data => {
        const className = 'p-2 bd-highlight ' + (data.completed === true ? 'completed' : 'pending');

        return <li className="list-group-item d-flex flex-row justify-content-between">
                    <div className="p-2 bd-highlight">
                        <input type="checkbox" checked={data.completed} onChange={(e) => props.completeItem(data.key, e.target.checked)} />
                        <span className={className}>
                            {data.text}
                        </span>
                    </div>
                    <div className='p-2 bd-highlight deleteIcon'>
                        <FontAwesomeIcon className="faicons" icon='trash'
                            Icon='trash'
                            onClick={() => props.deleteItem(data.key)} />
                    </div>
            </li>
    })
    return (
        <ul className="list-group">{ListItem}</ul>
    )
}
export default ListItem;