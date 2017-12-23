import React from 'react';
import ReactDOM from 'react-dom';

import AddonConfig from 'web-ext-plugins/config/addon';

import PontoonPlugin from "./plugin"


class PontoonConfig extends AddonConfig {

    get pluginClass() {
	return PontoonPlugin;
    }
}


ReactDOM.render(<PontoonConfig />, document.getElementById('config'));
