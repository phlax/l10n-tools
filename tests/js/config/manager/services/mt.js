
import React from 'react';

import {shallow} from 'enzyme';

import MTServiceConfig from 'l10n-tools/config/manager/services/mt';
import MTConfig from 'l10n-tools/config/manager/services/mt-config';


test('MTServiceConfig render', () => {
    const mts = [1, 2, 3]
    const config = shallow(<MTServiceConfig mts={mts} />);
    expect(config.text()).toBe("<MTConfig /><MTConfig /><MTConfig />")
})


test('MTConfig render', () => {
    const data = {name: "FOO", plugin: "BAR"}
    const config = shallow(<MTConfig data={data} />);
    expect(config.text()).toBe("<Localized />")
})
