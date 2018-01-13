
import React from 'react';

import {shallow} from 'enzyme';

import MTServiceConfig from 'l10n-tools/manager/config/services/mt';
import MTConfig from 'l10n-tools/manager/config/services/mt/config';


test('MTServiceConfig render', () => {
    const extension = {manager: {services: {get: jest.fn(() => Promise.resolve())}}}
    const config = shallow(<MTServiceConfig extension={extension} type="foo" />);
    expect(config.text()).toBe("")
})


test('MTConfig render', () => {
    const data = {name: "FOO", plugin: "BAR"}
    const config = shallow(<MTConfig data={data} />);
    expect(config.text()).toBe( "<OverlayLink />")
})
