import React from 'react';

const EditExpensePage = (props) => (
    <div>
        This is my EditExpensePage component {props.match.params.id}
    </div>
);

export default EditExpensePage;