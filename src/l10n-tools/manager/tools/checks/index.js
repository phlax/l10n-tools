
import CustomChecksRegistry from './registry'
import ChecksRunner from './runner'
import ChecksToolConfig from 'l10n-tools/manager/config/tools/checks';
import PluginExtension from 'web-ext-plugins/manager/extension';
import schema from 'l10n-tools/schema/checks.json'


export default class ChecksTool extends PluginExtension {

    constructor (manager) {
        super(manager)
        this.custom = new CustomChecksRegistry(this);
        this.runner = new ChecksRunner();
    }

    get name () {
        return "toolsChecksName";
    }

    get schema () {
        return schema;
    }

    get configComponent () {
        return ChecksToolConfig
    }

    testCustomCheck(name, source, target) {
        return this.getCustomChecks().then(checks => {
            for (let c in checks) {
                if (checks[c].name === name) {
                    return this.checksRunner.runCheck(checks[c].source, checks[c].target, source, target)
                }
            }
        });
    }

    testCheck(name, source, target) {
        return this.getChecks().then(checks => {
            for (let c in checks) {
                if (checks[c].name === name) {
                    return this.checksRunner.runCheck(checks[c].source, checks[c].target, source, target)
                }
            }
        });
    }
}
