
import AddonPluginHandler from 'web-ext-plugins/addon/handler';


export default class L10nAddonPluginHandler extends AddonPluginHandler {

    handleGetRecommended() {
        return {recommended: this.plugin.getRecommendedApps()};
    }

    handleGetApp (request) {
        if (request.app) {
            return this.getApp(request.app).handle(request)
        }
    }
}
