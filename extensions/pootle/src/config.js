import React from 'react';
import ReactDOM from 'react-dom';

import PootlePlugin from "./plugin"

import AddonConfig from 'web-ext-plugins/config/addon';


class PootleConfig extends AddonConfig {

    get pluginClass() {
	return PootlePlugin;
    }
}

ReactDOM.render(<PootleConfig/>, document.getElementById('config'));
