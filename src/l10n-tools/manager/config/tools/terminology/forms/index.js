
import React from 'react';

import Fieldset from 'web-ext-plugins/widgets/fieldset'


export default class CustomTerminologyForm extends React.Component {

    addCustomTerminology(evt) {
        evt.preventDefault();
        const $this = this;
        let {name, source, target} = this.state;
        return this.props.manager.terminology.addCustomTerminology(name, source, target).then(terminology => {
            $this.props.parent.setState({terminology: Object.values(terminology)});
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
              <Fieldset legend="">
                upload term file placeholder
                <button onClick={this.addCustomTerminology.bind(this)}>Add custom terminology</button>
              </Fieldset>
            </form>);
    }
}
