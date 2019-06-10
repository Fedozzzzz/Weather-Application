import React from 'react';

class Form extends React.Component {
    weatherMethod = this.props.weatherMethod;
    render() {
        return (
            <form onSubmit={this.weatherMethod}>
                <input type="text" name="city" placeholder="City"/>
                <button className="btn-primary">Submit</button>
            </form>
        );
    }
}

export default Form;
