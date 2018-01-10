
import {NotImplementedError} from 'web-ext-plugins/errors';

import Plugin from './plugin';


class MTPlugin extends Plugin {

    get mt () {
        throw new NotImplementedError();
    }

    get MT() {
        return new this.mt();
    }

    getAltSource(sender, lang) {
        return browser.runtime.sendMessage(
            sender.id,
            {message: 'getAltSrc', lang: lang})
    }

    getSource(request) {
        return Promise.resolve({response: request.data.source});
    }

    handle(request, sender, sendResponse) {
        if (request.message === 'fetchMT') {
            const $this = this;
            this.getSource(request).then(source => {
                if (source) {
                    let {response} = source;
                    $this.MT.translate(response).then(sendResponse);
                } else {
                    sendResponse('');
                }
            })
            return true;
        }
    }
}

export default MTPlugin;
