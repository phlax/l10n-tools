
import {NotImplementedError} from 'web-ext-plugins/errors';

import L10nWebApp from 'l10n-tools/app/web';


test('Web app constructor', () => {
    const app = new L10nWebApp('foo', 'bar');
    expect(app.plugin).toBe('foo');
    expect(app.app).toBe('bar');
})


test('Web app getIcon', () => {
    const app = new L10nWebApp('foo', {plugin: {icon: 'foo/icon.svg'}});
    expect(app.getIcon()).toBe("URL::foo/icon.svg::URL");

})


test('Web app getEndpoint', () => {
    const app = new L10nWebApp('foo', {plugin: {icon: 'foo/icon.svg'}});
    expect(() => {
        app.getEndpoint();
    }).toThrow(NotImplementedError);
})


test('Web app parseProjects', () => {
    const app = new L10nWebApp('foo', {plugin: {icon: 'foo/icon.svg'}});
    expect(() => {
        app.parseProjects();
    }).toThrow(NotImplementedError);
})
