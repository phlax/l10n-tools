
import {NotImplementedError} from 'web-ext-plugins/errors';

import Plugin from './plugin';


class TMPlugin extends Plugin {

    get tm () {
        throw new NotImplementedError();
    }

    get TM() {
        return new this.tm();
    }

    handle(request, sender, sendResponse) {
        if (request.message === 'fetchTM') {
            const $this = this;
            this.getSource(request).then(source => {
                if (source) {
                    let {response} = source;
                    $this.TM.searchTM(response).then(sendResponse);
                } else {
                    sendResponse('');
                }
            })
            return true;
        }
    }
}

export default TMPlugin;
