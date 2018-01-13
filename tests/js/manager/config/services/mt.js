
import React from 'react';

import {mount, shallow} from 'enzyme';

import {Container} from 'web-ext-plugins/widgets/split-container'
import MTServiceConfig from 'l10n-tools/manager/config/services/mt';
import MTConfig from 'l10n-tools/manager/config/services/mt/config';
import MTTestFormOverlay from 'l10n-tools/manager/config/services/mt/form';
import MTTestForm from 'l10n-tools/manager/config/services/mt/form/form';


test('MTServiceConfig render', () => {
    const extension = {manager: {services: {get: jest.fn(() => Promise.resolve({foo: []}))}}}
    const config = shallow(<MTServiceConfig extension={extension} type="foo" />);
    expect(config.text()).toBe("")
})


test('MTServiceConfig renderMTs', () => {
    const serviceData = {foo: {mt0: {name: 'MT0'}, mt1: {name: 'MT1'}}}
    const services = Promise.resolve(serviceData)
    const extension = {manager: {services: {get: jest.fn(() => services)}}}
    const config = mount(<MTServiceConfig extension={extension} type="foo" />);
    return services.then(() => {
        expect(config.state()).toEqual({mts: {mt0: {name: 'MT0'}, mt1: {name: 'MT1'}}})
        config.update();
    }).then(() => {
        expect(config.text()).toBe("L10N::MT0::L10NL10N::MT1::L10N")
    })
})


test('MTConfig render', () => {
    const data = {name: "FOO", plugin: "BAR"}
    const config = shallow(<MTConfig data={data} />);
    expect(config.text()).toBe( "<OverlayLink />")
})


test('MTTestFormOverlay render', () => {
    const data = {name: "FOO", plugin: "BAR"}
    const config = shallow(<MTTestFormOverlay data={data} />);
    const container = config.find(Container)
    const sourceColumn = config.instance().renderSourceColumn()
    const resultColumn = config.instance().renderResultColumn()
    expect(container.length).toBe(1)
    expect(container.props().columns).toBe(2)
    expect(container.props().ratios).toEqual([ 2, 2 ])
    expect(shallow(container.props().children[0]).text()).toEqual(
        shallow(sourceColumn).text())
    expect(shallow(sourceColumn).text()).toEqual(
        "<Subheading />Plugin: BAR<MTTestForm />")
    expect(shallow(container.props().children[1]).text()).toEqual(resultColumn)
    expect(config.text()).toBe( "<Container />")
})


test('MTTestForm render', () => {
    const data = {name: "FOO", plugin: "BAR"}
    const config = shallow(<MTTestForm data={data} />);
    expect(config.text()).toBe("<TextInput />Source Language: <Select />Target Language: <Select />")
})
