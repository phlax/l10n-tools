
import {NotImplementedError} from 'web-ext-plugins/errors';


export default class L10nWebApp {

    constructor(plugin, app) {
        this.plugin = plugin;
        this.app = app;
    }

    getEndpoint() {
        throw new NotImplementedError();
    }

    getIcon() {
        return browser.extension.getURL(this.app.plugin.icon);
    }

    parseProjects() {
        throw new NotImplementedError();
    }

    repoMatch(project, filePath) {
        return {
            icon: this.getIcon(),
            href: this.getHrefFromRepoPath(project, filePath),
            message: this.translateMessage}
    }

    fetchProjects() {
        return this.plugin.manager.fetch(this.getEndpoint()).then(this.parseProjects);
    }
}
