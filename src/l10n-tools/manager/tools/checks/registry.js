
import Registry from 'web-ext-plugins/registry'


export default class CustomChecksRegistry extends Registry {

    constructor(tool) {
        super()
        this.tool = tool
        this.manager = tool.manager;
    }

    getCustomChecks() {
        return browser.storage.local.get('checks').then(result => {
            const {checks} = result;
            return checks
        });
    }

    addCustomCheck(name, source, target) {
        return browser.storage.local.get('checks').then(result => {
            let {checks} = result;
            const check = {};
            checks = checks || {};
            check.name = name;
            check.source = source;
            check.target = target;
            checks[name] = check;
            return browser.storage.local.set({checks: checks}).then(() => {
                browser.runtime.sendMessage({
                    message: 'checkAdded'});
                return checks;
            });
        })
    }

    deleteCustomCheck(name) {
        return browser.storage.local.get('checks').then(result => {
            const {checks} = result;
            delete checks[name];
            return browser.storage.local.set({checks: checks}).then(() => {
                browser.runtime.sendMessage({
                    message: 'checkDeleted'});
                return checks;
            });
        })
    }
}
