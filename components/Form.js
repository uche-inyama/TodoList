import React from 'react';


export class Form extends React.Component {
    constructor(props){
        super(props);

        this.state = { content: ''}
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.content);
        this.setState({content: ' '});
    }
    
    render(){
        return (
            <form onSubmit = {this.handleSubmit}>
                <input type = "text"
                    value = {this.state.content}
                    onChange = {(event) => this.setState({content: event.target.value})}
                    placeholder = "Enter a TodoList" required/>
                <button type = "submit"> Add Content </button>
            </form>
        )
    }
}