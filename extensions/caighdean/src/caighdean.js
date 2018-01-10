
import MTPlugin from 'l10n-tools/addon/mt';


class CaighdeanMT {

    translate(source) {
        // make call to caighdean MT here...
        return Promise.resolve({response: source});
    }
}

const longDescription = [
    'More info [here](https://www.google.com)'
].join('\n');


class CaighdeanPlugin extends MTPlugin {

    constructor() {
        super()
        this.icon = 'images/mt.svg';
        this.name = 'Caighdean MT';
        this.provides = ['l10n.services.mt'];
        this.longDescription = longDescription;
        this.services = {
            'l10n.services.mt': {
                caighdeanMT: {
                    name: "servicesMTCaighdean",
                    targetLanguage: ['ga-IE']},
                caighdeanMT2: {
                    name: "servicesMTCaighdean2",
                    targetLanguage: ['ga-IE']}}}
    }

    get mt () {
        return CaighdeanMT;
    }

    getSource(request) {
        if (request.data.lang !== 'ga-IE') {
            // if source is not ga-IE try getting the alt-src
            return this.getAltSource(request.sender, 'ga-IE');
        }
        return super.getSource(request);
    }
}

let caighdean = new CaighdeanPlugin();
caighdean.setup();
