
import React from 'react';

import PluginService from 'web-ext-plugins/manager/services/service'

import TMServicesConfig from 'l10n-tools/config/manager/services/tm';


export default class TMServices extends PluginService {

    get name () {
        return "servicesTMName";
    }

    renderServicesConfig (services) {
        return (
            <TMServicesConfig
               service={this}
               tms={services} />);
    }
}
