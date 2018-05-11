import React from 'react';

const Option = (props) => {
    return (
        <div>
            <p key={props.key}>{props.optionText}
                <button onClick={(e) => {
                        props.handleDeleteOption(props.optionText);}}>
                    remove
                </button>
            </p>
        </div> 
    );
}

export default Option;