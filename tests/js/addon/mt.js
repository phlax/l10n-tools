
import {NotImplementedError} from 'web-ext-plugins/errors';

import Plugin from 'l10n-tools/addon/plugin';
import MTPlugin from 'l10n-tools/addon/mt';


test('MTPlugin constructor', () => {
    const mtPlugin = new MTPlugin();
    expect(mtPlugin instanceof Plugin).toBe(true);
    expect(() => {
        mtPlugin.mt;
    }).toThrow(NotImplementedError);
})
