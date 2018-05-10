// JSX - JavaScript XML

class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            showDetaisBtn = true
        }
    }

    handleToggle(){
        this.setState((p) => {
            return {
                showDetaisBtn = !p.showDetaisBtn
            }
        });
    }

    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={handleToggle}>{this.state.showDetaisBtn ? 'Show details' : 'Hide details'}</button>
                {!this.state.showDetaisBtn && <h3>Hey. These are some details you can now see</h3>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

/*
let showDetaisBtn = true;

const appRoot = document.getElementById('app');

const onSubmitForm = (e) => {
    e.preventDefault();
    showDetaisBtn = !showDetaisBtn;
    render();
};

const render = () => {
    
    const markup = (
        <div>
            <h1>Visibility Toggle</h1>
            <form onSubmit={onSubmitForm}>
                <button>{showDetaisBtn ? 'Show details' : 'Hide details'}</button>
            </form>
            {!showDetaisBtn && <h3>Hey. These are some details you can now see</h3>}
        </div>
    );

    ReactDOM.render(markup, appRoot);

}

render();
*/
