
import React from 'react';

import CustomChecksRegistry from './registry'
import ChecksRunner from './runner'
import ChecksToolConfig from 'l10n-tools/config/manager/tools/checks';
import PluginExtension from 'web-ext-plugins/manager/extension';
import schema from 'l10n-tools/schema/checks.json'


export default class ChecksTool extends PluginExtension {

    constructor (manager) {
        super(manager)
        this.custom = new CustomChecksRegistry(this);
    }

    get name () {
        return "toolsChecksName";
    }

    get runner () {
        return new ChecksRunner();
    }

    get schema () {
        return schema;
    }

    renderConfig (manager, type) {
        return (
            <ChecksToolConfig
               manager={manager}
               type={type} />);
    }

    testCustomCheck(name, source, target) {
        const $this = this
        return this.getCustomChecks().then(checks => {
            for (let c in checks) {
                if (checks[c].name === name) {
                    return $this.checksRunner.runCheck(checks[c].source, checks[c].target, source, target)
                }
            }
        });
    }

    testCheck(name, source, target) {
        const $this = this
        return this.getChecks().then(checks => {
            for (let c in checks) {
                if (checks[c].name === name) {
                    return $this.checksRunner.runCheck(checks[c].source, checks[c].target, source, target)
                }
            }
        });
    }
}
