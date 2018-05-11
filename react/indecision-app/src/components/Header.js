import React from 'react';

//Stateless functional component
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
        </div>
    );
}

// default props
Header.defaultProps = {
    title: 'Indecision'
}

export default Header;