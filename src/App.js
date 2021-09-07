import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox.js";
import './App.css';
import Scroll from './Scroll.js';
 

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
            return response.json();
        }).then(user => {
            this.setState({robots: user});

        })
    }


    OnSearchChange = (event) => {
        this.setState({searchfield: event.target.value});

    }
    
    render(){

        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        if (this.state.robots.length === 0) {
            return <h1 className='tc'>Loading....</h1>
        }
        else{

        
            return(
                <div className= 'tc'>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange = {this.OnSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            
                );
            }
        }
}

export default App;