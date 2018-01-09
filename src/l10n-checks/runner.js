
import XRegExp from 'xregexp';


export default class BaseCheckRunner {

    constructor(sourceRegex, targetRegex) {
        this.sourceRegex = sourceRegex;
        if (sourceRegex) {
            this.sourceRegex = new XRegExp(sourceRegex);
        }
        this.targetRegex = new XRegExp(targetRegex);
    }

    get captureNames() {
        if (this.sourceRegex) {
            return this.sourceRegex.xregexp.captureNames;
        }
        return [];
    }

    matchSource(source) {
        if (this.sourceRegex) {
            return XRegExp.exec(source, this.sourceRegex);
        }
    }

    matchTarget(target) {
        return XRegExp.exec(target, this.targetRegex);
    }

    runCheck(source, target) {
        const sourceMatch = this.sourceMatch(source)
        const targetMatch = this.targetMatch(target)
        const captureNames = this.captureNames;

        if (!this.sourceRegex) {
            if (targetMatch) {
                return false;
            }
            return true;
        }

        if (sourceMatch || targetMatch) {
            if (!(sourceMatch && targetMatch)) {
                return false;
            }

            for (let n in captureNames) {
                if (sourceMatch[captureNames[n]] != targetMatch[captureNames[n]]) {
                    return false;
                }
            }
        }
        return true;
    }
}
