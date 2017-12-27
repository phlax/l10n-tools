
import TMPlugin from 'l10n-tools/plugins/addon/tm';


class AmagamaTM {
}


class AmagamaPlugin extends TMPlugin {

    constructor() {
        super()
        this.icon = 'images/tm.svg';
        this.name = 'Amagama TM'
        this.provides = ['l10n.services.tm'];
        this.services = {
            'l10n.services.tm': {
                amagamaTM: {
                    name: "servicesTMAmagama",
                    targetLanguage: []}}}
    }

    get tm () {
        return AmagamaTM;
    }
}

let amagama = new AmagamaPlugin();
amagama.setup();
