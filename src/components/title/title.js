import React from 'react';

function Title(props) {
    return (
        <h1>
            {props.world}
            {props.title}
        </h1>
    );
}

export default Title;