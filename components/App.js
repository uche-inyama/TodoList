import React from 'react';
import {CardList} from './CardList';
import {Form} from './Form';


 export class App extends React.Component{
     constructor(props){
         super(props);
         this.state = {
             cards: [

             ]
         };
     }
    
     addNewCard =(cardInfo) => {
         this.setState(prevState => ({
            cards: prevState.cards.concat(cardInfo)
         }));
     }
   

    render(){
        return(
            <div>
                <h2>My Todo List</h2>
                <CardList list = {this.state.cards}/>
                <Form onSubmit = {this.addNewCard}/>
            </div>
        )
    }
}
