import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    
    //class properties
    state = {
        options: [],
        selectedOption: undefined
    };

    // EventListeners
    handleDeleteOptions = () => {
        this.setState(()=> ({options: []})); // () for return an object {}
    };

    handleDeleteOption = (option) => {
        this.setState((p) => ({
            options: p.options.filter((el)=> option !== el)
        }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption: option }) );
    };

    handleAddOption = (option) => {

        if(!option){
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }

        this.setState((p) => ({
                options: p.options.concat(option)
        }));
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }) );
    };

    // Component Lifecycle
    // on mount in the DOM
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options)
                this.setState(() => ({options}));

        }catch(e){

        }
    }

    // after component values update: state, props
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    // when component goes away
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    render(){
        const title = 'Indecision';
        const subTitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options} 
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}