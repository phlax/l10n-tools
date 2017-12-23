
import L10nWebApp from 'l10n-tools/app/web';


export default class PontoonApp extends L10nWebApp {

    constructor() {
        super()
        this.translateMessage = 'Translate this file on Pontoon';
    }

    getEndpoint() {
        return this.app.url + '/graphql?query={projects{slug,name,deadline,priority,repositories{url,website},localizations{locale{code,name}}}}';
    }

    getHrefFromRepoPath(project, filePath) {
        const parts = filePath.substring('locales/'.length).split('/');
        return this.app.url + '/' + parts[0] + '/' + project.slug + '/' + parts[1];
    }

    parseProjects(blob) {
        return Promise.resolve(blob.data.projects);
    }

    matchRepo(url) {
        let projects = Array.from(this.app.projects);
        for (let p in projects) {
            for (let r in projects[p].repositories) {
                let repo = projects[p].repositories[r];
                let webRepo = repo.website + '/blob/master/';
                if (url.startsWith(webRepo)) {
                    let filePath = url.substring(webRepo.length);
                    if (filePath.startsWith('locales/')) {
                        return this.repoMatch(projects[p], filePath)
                    }
                }
            }
        }
    }

    handle(request) {
        if (request.message === 'updateApp') {
            return this.fetchProjects();
        }
        if (request.message === 'fetchProjects') {
            return this.fetchProjects()
        }
        if (request.message === 'matchRepo') {
            return new Promise(resolve => {
                let result = this.matchRepo(request.url);
                if (result) {
                    resolve(result);
                }
            })
        }
    }
}
