

import MTServices from 'l10n-tools/manager/services/mt';
import TMServices from 'l10n-tools/manager/services/tm';


test('TMServices constructor', () => {
    const tmservices = new TMServices('foo')
    expect(tmservices.manager).toBe('foo');
    expect(tmservices.name).toBe("servicesTMName")
})


test('MTServices constructor', () => {
    const mtservices = new MTServices('foo')
    expect(mtservices.manager).toBe('foo');
    expect(mtservices.name).toBe("servicesMTName")
})
