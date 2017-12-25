
import React from 'react';
import ReactDOM from 'react-dom';

import PluginManagerConfig from 'web-ext-plugins/config/manager';
import L10nToolsPluginManager from 'l10n-tools/plugins/manager';


ReactDOM.render(
    <PluginManagerConfig manager={new L10nToolsPluginManager()} />,
    document.getElementById('config'));
