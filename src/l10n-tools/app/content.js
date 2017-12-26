
import WebContent from 'l10n-tools/plugins/content/web';


export default class WebAppContent extends WebContent {

    constructor() {
        super();
        this.setupMT();
        this.provideAltSrc();
        this.setupCheckers();
    }

    getCheckEvent() {
        return new Event(this.checkEventName);
    }

    fetchMT(target) {
        return this.handler.sendMessage(
            {message: 'fetchMT',
             data: this.getMTData(target)})
    }

    runChecks(evt) {
        const $this = this;
        this.handler.sendMessage(
            {message: 'runChecks',
             data: this.getCheckData(evt)}).then($this.handleCheckWarnings);
        return false;
    }

    setupMT () {
        const $this = this;
        document.getElementById('translation').addEventListener('change', evt => {
            $this.fetchMT(evt.target).then(result => {
                if (result) {
                    // got MT result
                    // console.log(result.response);
                }
            })
        })
    }
}
