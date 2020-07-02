import React, { Component } from 'react';
import items from './data';

const MenuContext = React.createContext();

class MenuProvider extends Component {
    state={
        menuItems: [],
        loading:true
    };

    //getData

    componentDidMount(){
        //this.getData
        let menuItems = this.formatData(items);
        this.setState({
            menuItems,
            loading: false
        });
    }

    formatData(items){
        let tempItems = items.map(item => {
            let food = {...item};
            return food;
        });
        return tempItems;
    }

    render() {
        return (
            <MenuContext.Provider value={{...this.state}}>
                {this.props.children}
            </MenuContext.Provider>
        )
    }
}

const MenuCustomer = MenuContext.Customer;

export{ MenuProvider, MenuCustomer, MenuContext };