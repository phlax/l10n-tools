
import React from 'react';

import {shallow} from 'enzyme';

import SERVICEServiceConfig from 'l10n-tools/config/manager/services/tm';
import TMConfig from 'l10n-tools/config/manager/services/tm-config';


test('SERVICEServiceConfig render', () => {
    const services = [1, 2, 3]
    const config = shallow(<SERVICEServiceConfig services={services} />);
    expect(config.text()).toBe("<TMConfig /><TMConfig /><TMConfig />")
})


test('TMConfig render', () => {
    const data = {name: "FOO", plugin: "BAR"}
    const config = shallow(<TMConfig data={data} />);
    expect(config.text()).toBe("<Localized />")
})
