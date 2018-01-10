
import RunAmock from 'web-ext-plugins/mock/amock';

import L10nToolsPluginManager from 'l10n-tools/manager';
const plugins = require('web-ext-plugins/manager/plugins');
const handler = require('web-ext-plugins/manager/handler');
const apps = require('web-ext-plugins/manager/apps');
const notifications = require('web-ext-plugins/manager/notifications');


const constructors = {
    plugins: [plugins, 'default', {key: "PLUGINS"}],
    handler: [handler, 'default', {key: "HANDLER"}],
    apps: [apps, 'default', {key: "APPS"}],
    notifications: [notifications, 'default', {key: "NOTIFICATIONS"}]}


test('Plugin manager constructor', () => {
    const amock = new RunAmock();
    amock.withMockedConstructors(Object.values(constructors), () => {
	const manager = new L10nToolsPluginManager();
	expect(plugins.default.mock.calls[0][0]).toBe(manager)
	expect(manager.plugins.key).toBe("PLUGINS")
	expect(handler.default.mock.calls[0][0]).toBe(manager)
	expect(manager.handler.key).toBe("HANDLER")
	expect(apps.default.mock.calls[0][0]).toBe(manager)
	expect(manager.apps.key).toBe("APPS")
	expect(notifications.default.mock.calls[0][0]).toBe(manager)
	expect(manager.notifications.key).toBe("NOTIFICATIONS")
    })
})
