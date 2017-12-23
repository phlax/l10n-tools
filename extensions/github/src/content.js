
import WebRepoContent from 'l10n-tools/repo/content';


export default class GithubRepoContent extends WebRepoContent {

    matchRepo() {
        this.handler.sendMessage({message: 'matchRepo', url: window.location.href}).then(result => {
            if (!result) {
                return;
            }
            let divNode = document.createElement('div');
            let aNode = document.createElement('a');
            let imgNode = document.createElement('img');
            imgNode.src = result.icon;
            imgNode.setAttribute('width', '22px');
            imgNode.setAttribute('height', '22px');
            aNode.setAttribute('href', result.href);
            let textnode = document.createTextNode(result.message);
            aNode.appendChild(textnode);
            divNode.appendChild(imgNode);
            divNode.appendChild(aNode);
            divNode.setAttribute('style', 'border: solid green 1px; background: #eee')
            let fileNode = document.getElementsByClassName('file')[0];
            fileNode.parentNode.insertBefore(divNode, fileNode);
        })
    }
}

new GithubRepoContent();
