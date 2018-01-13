
import Plugin from 'l10n-tools/addon/plugin';
import AddonPluginManager from 'web-ext-plugins/addon/manager'
import AddonPluginHandler from 'web-ext-plugins/addon/handler'


test('Plugin constructor', () => {
    const plugin = new Plugin();
    expect(plugin.manager instanceof AddonPluginManager).toBe(true);
    expect(plugin.handler instanceof AddonPluginHandler).toBe(true);
    expect(plugin.icon).toBe('');
    expect(plugin.checks).toEqual({});
    expect(plugin.description).toBe('');
    expect(plugin.pluginIcon).toBe("URL::::URL");
    expect(plugin.managerId).toBe("l10n@mozilla.com");
})
