
import React from 'react';

import PluginService from 'web-ext-plugins/manager/services/service'

import MTServicesConfig from 'l10n-tools/config/manager/services/mt';


export default class MTServices extends PluginService {

    get name () {
        return "servicesMTName";
    }

    renderServicesConfig (services) {
        return (
            <MTServicesConfig
               service={this}
               mts={services} />);
    }
}
