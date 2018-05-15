import React from 'react';

//Stateless functional component
const Header = (props) => {
    return (
        <div className="header">
            <div className="container">
                <h1 className="header__title">{props.title}</h1>
                <h2 className="header__subtitle">{props.subTitle}</h2>
            </div>
        </div>
    );
}

// default props
Header.defaultProps = {
    title: 'Indecision'
}

export default Header;