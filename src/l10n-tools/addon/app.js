
import L10nPlugin from './plugin';


export default class AppPlugin extends L10nPlugin {

    getApp(app) {
        return new this.app(this, app);
    }

    handleGetAltSrc(request, sendResponse) {
        browser.tabs.query({
            currentWindow: true,
            active: true
        }).then(tabs => {
            for (let tab of tabs) {
                browser.tabs.sendMessage(
                    tab.id,
                    request).then(sendResponse);
            }
        });
        return true;
    }

    getInstalledApps() {
        return this.handler.sendMessage({message: 'getApps'});
    }

    getRecommendedApps() {
        this.recommendedApps.map(app => {
            app.icon = browser.extension.getURL(app.icon);
            return app;
        })
        return this.recommendedApps;
    }

    handle(request, sender, sendResponse) {
        if (request.message === 'getRecommended') {
            return sendResponse({recommended: this.getRecommendedApps()});
        }
        if (request.message === 'getAltSrc') {
            return this.handleGetAltSrc(request, sendResponse);
        }
        if (request.app) {
            const app = this.getApp(request.app)
            app.handle(request).then(sendResponse);
            return true;
        }
    }
}
