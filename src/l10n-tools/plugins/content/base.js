
import L10nPluginHandler from './handler'
import L10nPluginManager from './manager'


export default class WebContent {
    constructor () {
	this.manager = new L10nPluginManager(this);
	this.handler = new L10nPluginHandler(this);
    }
}
