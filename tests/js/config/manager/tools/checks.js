
import React from 'react';

import {shallow} from 'enzyme';

import ChecksToolConfig from 'l10n-tools/manager/config/tools/checks';
import PackagedCheck from 'l10n-tools/manager/config/tools/checks/packaged';
import CheckInfo from 'l10n-tools/manager/config/tools/checks/info';


test('ChecksToolConfig render', () => {
    const extension = {manager: {tools: {get: jest.fn(() => Promise.resolve())}}}
    const config = shallow(<ChecksToolConfig extension={extension} />);
    expect(config.text()).toBe("<CustomCheckForm />")
})


test('PackagedCheck render', () => {
    const check = {plugin: {icon: 'PLUGINICON'}}
    const config = shallow(<PackagedCheck check={check} />);
    expect(config.text()).toBe("")
})


test('CheckInfo render', () => {
    const check = {plugin: {icon: 'PLUGINICON'}}
    const config = shallow(<CheckInfo check={check} />);
    expect(config.text()).toBe("Source regex: Target regex: Test")
})
