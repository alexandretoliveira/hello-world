class Counter extends React.Component{
    constructor(props){
        super(props);
        this.add = this.add.bind(this);
        this.minus = this.minus.bind(this);
        this.reset = this.reset.bind(this);

        this.state = {
            count: 0
        };
    }
    
    add(){
        this.setState((prevState) => {
            return {
                count: prevState.count+1
            };
        });
    }

    minus(){
        this.setState((prevState) => {
            return {
                count: prevState.count-1
            };
        });
    }

    reset(){
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.add}>+1</button>
                <button onClick={this.minus}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

/*
let count = 0;
const someId = 'myidhere';

const addOne = () => {
    count++;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    
    const templateTwo = (
        <div> 
            <h1>Count: {count}</h1>
            <button id={someId} className="button" onClick={addOne}>+1</button>
        </div>
    
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
*/

/*
const user = {
    name: 'Alexandre',
    age: 36,
    location: 'Brasilia'
};

function getLocation(location) {
    if(location)
        return <p>Location: {location}</p>;
    
}

const templateTwo = (
    <div> 
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age > 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>    
);

*/