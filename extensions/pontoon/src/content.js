
import WebAppContent from 'l10n-tools/app/content';


export default class PontoonAppContent extends WebAppContent {
    get checkEventName() {
        return 'pontoon.checker';
    }

    getCheckData(evt) {
        return evt.wrappedJSObject.data;
    }

    getMTData(target) {
	return {
            lang: target.lang,
            source: document.getElementById('original').innerHTML}
    }

    provideAltSrc() {
        browser.runtime.onMessage.addListener(request => {
            if (request.message) {
                if (request.message === 'getAltSrc') {
                    let altSrc = document.querySelector('section.other-locales li p.translation[lang="' + request.lang +'"]')
                    if (altSrc) {
                        return Promise.resolve({response: altSrc.innerHTML});
                    }
                }
            }
        });
    }

    handleCheckWarnings(evt, result) {
        for (let warning in result) {
            evt.wrappedJSObject.data.warnings.push(result[warning]);
        }
        document.dispatchEvent(evt.wrappedJSObject.response);
    }

    setupCheckers() {
        const event = this.getCheckEvent();
        document.addEventListener(event.type, this.runChecks, true)
        window.wrappedJSObject.Pontoon.checkers.push(event);
    }
}

new PontoonAppContent();
