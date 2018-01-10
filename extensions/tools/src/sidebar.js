import React from 'react';
import ReactDOM from 'react-dom';

import L10nToolsPluginManager from 'l10n-tools/manager';

import PluginSidebar from 'web-ext-plugins/sidebar';


ReactDOM.render(
    <PluginSidebar manager={new L10nToolsPluginManager()} />,
    document.getElementById('app'));
