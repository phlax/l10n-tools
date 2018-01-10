
import PluginHandler from 'web-ext-plugins/addon/handler';
import PluginManager from 'web-ext-plugins/addon/manager';


export default class WebContent {
    constructor () {
	this.manager = new PluginManager(this);
	this.handler = new PluginHandler(this);
    }
}
