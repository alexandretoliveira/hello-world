import React from 'react';
import Option from './Option';

const Options = (props) =>{
    return (
        <div>
            <button onClick={props.handleDeleteOptions} >Remove All</button>
            {props.options.length === 0 && <p>Add an option</p>}
            {
                props.options
                .map(element => 
                        <Option 
                            key={element} 
                            optionText={element} 
                            handleDeleteOption={props.handleDeleteOption}
                            />)
            }
            
        </div>
    );
}

export default Options;