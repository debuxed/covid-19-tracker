import React from 'react'

import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api'; // the api just has index.js so we can just specify the ./api to call index.js
import styles from './App.module.css'
class App extends React.Component {
    // create the state to track the data
    // we can even use constructor to initialize the data
    state = {
        data: {},
    }
    async componentDidMount() {
        // populating the fetcheData element which is called using api
        const fetchedData = await fetchData();

        // set the state and pass the fetchedData as the data which is then passed to the prop
        this.setState({data: fetchedData});
    }

    render() {
        const { data } = this.state;
            
        return(
            // destructure the value of data from state 
            
            <div className={styles.container}>
                <Cards data={ data }/>
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}


export default App; 