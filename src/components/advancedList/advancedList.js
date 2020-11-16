import React from 'react';
import ListItem from "../listItem/listItem";

function AdvancedList(props) {
    return props.list.map(item => (
        <div key={item.id}>
            <div>{item.name}</div>
            <div>{item.age}</div>
            <div>{item.type}</div>
            <h1>User hobbies:</h1>
            {item.hobby.map(i => (
                <ListItem item={i} />
            ))}
        </div>
    ));
}

export default AdvancedList;