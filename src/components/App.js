import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component {
    state = {
        value: 'day',
    };
    handleChange = e => {
        this.setState({
            value: e.target.value
        });
    };
    render() {
        return (
            <div>
                <div className="header">
                    <div className="container">
                        <h1 className="header-title">Weather Application</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="input-field col s12 m6 l3">
                            <h4>Available trackers</h4>
                            <select onChange={this.handleChange} value={this.state.value}>
                                <option value="day">Day</option>
                                <option value="night">Night</option>
                                <option value="humidity">Humidity</option>
                            </select>
                        </div>
                        <div className="col s12 m12 l12">
                            <p>Minimum Temperature - {this.props[this.state.value].minTemp}</p>
                            <p>Maximum Temperature - {this.props[this.state.value].maxTemp}</p>
                            <p>Mean - {this.props[this.state.value].mean}</p>
                            <p>Mode - {this.props[this.state.value].mode}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

App.propTypes = {
    day: PropTypes.object.isRequired,
    night: PropTypes.object.isRequired,
    humidity: PropTypes.object.isRequired
};

export default App;