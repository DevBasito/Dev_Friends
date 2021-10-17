import React, {Component} from 'react';
import Cardlist from '../Components/Cardlist.js';
import { devs } from '../Devs.js';
import Scroll from '../Components/Scroll.js';
import SearchBox from '../Components/SearchBox.js';
import Footer from '../Components/Footer.js';
import './App.css';


class App extends Component {
    constructor(){
        super();
        this.state= {
            devs: devs,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
       
        
        
    }
    render(){
        const filteredDevs = this.state.devs.filter(dev=>{
            return dev.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            
        })
        return (
            <div className="tc">
                <h1 className='f1'>DevFriends</h1>
                <SearchBox searchchange={this.onSearchChange}/>
                <Scroll>
                <Cardlist />
                </Scroll>
                <Footer/>
            </div>
        );
    }
    
} 
    

export default App;