import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    state = { lat: null , errorMessage: '', time: new Date().toLocaleTimeString()};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            
            (err) => this.setState({errorMessage: err.message})
             
        );

        setInterval(() => {
            this.setState({ time : new Date().toLocaleTimeString()})
        }, 1000);
    }

    componentDidUpdate(){
        
    }

    componentWillUnmount(){

    }

    renderContent() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <Spinner text='Please allow you location.'/>
    }
    // MUST
    render() {

       return (
        // <div className='border red'>
        //      {/* {this.renderContent()} */}
             
        // </div>

        <div className="time">
            The time is : {this.state.time}
        </div>
       );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));