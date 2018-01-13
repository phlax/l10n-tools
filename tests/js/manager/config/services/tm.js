
import React from 'react';

import {shallow} from 'enzyme';

import TMServiceConfig from 'l10n-tools/manager/config/services/tm';
import TMConfig from 'l10n-tools/manager/config/services/tm-config';


test('TMServiceConfig render', () => {
    const extension = {manager: {services: {get: jest.fn(() => Promise.resolve())}}}
    const config = shallow(<TMServiceConfig extension={extension} type="foo" />);
    expect(config.text()).toBe("")
})


test('TMConfig render', () => {
    const data = {name: "FOO", plugin: "BAR"}
    const config = shallow(<TMConfig data={data} />);
    expect(config.text()).toBe("<Localized />")
})
