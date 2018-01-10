import React from 'react';


export default class CheckTestForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    updateField(evt) {
        const state = {};
        state[evt.target.name] = evt.target.value;
        this.setState(state);
    }

    render() {
        const {testResult} = this.props;
        return (
            <form>
              <fieldset>
                <legend>Test check (<a href='#'>hide</a>)</legend>
                <p>
                  Source:
                  <input
                     onChange={this.updateField.bind(this)}
                     name="source"
                     type="text"/>
                </p>
                <p>
                  Translation:
                  <input
                     onChange={this.updateField.bind(this)}
                     name="target"
                     type="text"/>
                </p>
                {testResult && <p>{testResult}</p>}
                <button
                   name={this.props.check.name}
                   onClick={evt => {this.props.parent.testCheck.bind(this.props.parent)(evt, this.state)}}>Test this check</button>
              </fieldset>
            </form>);
    }
}
