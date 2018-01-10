
import BaseChecksRunner from 'l10n-checks/runner'


export default class ChecksRunner extends BaseChecksRunner {

    get checks () {
        return {}
    }

    runCheck(sourceRegex, targetRegex, source, target) {
        return new this.runner(sourceRegex, targetRegex).runCheck(source, target)
    }

    runChecks(source, target, plural) {
        let warnings = []
        for (let check in this.checks) {
            const warning = this.checks[check](source, target, plural);
            if (warning) {
                warnings.push(warning);
            }
        }
        return warnings;
    }
}
