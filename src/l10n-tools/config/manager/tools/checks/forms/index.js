import React from 'react';


export default class CustomCheckForm extends React.Component {

    addCustomCheck(evt) {
        evt.preventDefault();
        const $this = this;
        let {name, source, target} = this.state;
        return this.props.manager.checks.addCustomCheck(name, source, target).then(checks => {
            $this.props.parent.setState({checks: Object.values(checks)});
        });
    }

    updateField(evt) {
        const state = {};
        state[evt.target.name] = evt.target.value;
        this.setState(state);
    }

    render() {
        return (
            <form>
              <fieldset>
                <legend>Add a custom check</legend>
                <p>
                  Name:
                  <input
                     onChange={this.updateField.bind(this)}
                     name="name"
                     type="text"/>
                </p>
                <p>
                  Source regex:
                  <input
                     onChange={this.updateField.bind(this)}
                     name="source"
                     type="text"/>
                </p>
                <p>
                  Translation regex:
                  <input
                     onChange={this.updateField.bind(this)}
                     name="target"
                     type="text"/>
                </p>
                <button onClick={this.addCustomCheck.bind(this)}>Add custom check</button>
              </fieldset>
            </form>);
    }
}
