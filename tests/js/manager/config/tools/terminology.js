
import React from 'react';

import {shallow} from 'enzyme';

import Fieldset from 'web-ext-plugins/widgets/fieldset'
import TerminologyToolConfig from 'l10n-tools/manager/config/tools/terminology';
import CustomTerminologyForm from 'l10n-tools/manager/config/tools/terminology/forms';
import TerminologyImportTable from 'l10n-tools/manager/config/tools/terminology/forms/import';
import columns from 'l10n-tools/manager/config/tools/terminology/forms/columns';


test('TerminologyToolConfig render', () => {
    const extension = {manager: {}}
    const config = shallow(<TerminologyToolConfig extension={extension} />);
    expect(config.text()).toBe("<OverlayButton />")
})


test('CustomTerminologyForm render', () => {
    const extension = {manager: {tools: {get: jest.fn(() => Promise.resolve())}}}
    const config = shallow(<CustomTerminologyForm extension={extension} />);
    const fieldset = config.find(Fieldset)
    expect(fieldset.length).toBe(1)
    expect(fieldset.props().legend).toBe('')
    const fileInput = fieldset.find('input')
    expect(fileInput.props().type).toBe('file')
    expect(fileInput.props().onChange).toBe(config.instance().uploadFile)

    expect(config.text()).toBe("<Fieldset />")
})


test('CustomTerminologyForm uploadFile', () => {
    const extension = {manager: {tools: {get: jest.fn(() => Promise.resolve())}}}
    const config = shallow(<CustomTerminologyForm extension={extension} />);
    const instance = config.instance()
    instance.setState = jest.fn()
    instance.parser = {parseFile: jest.fn((result, cb) => {cb(23)})}
    instance.uploadFile({target: {files: [1]}})
    expect(instance.setState.mock.calls).toEqual([[{termEntries: 23}]])
    expect(instance.parser.parseFile.mock.calls[0][0]).toBe(1)
})


test('TerminologyImportTable render', () => {
    const extension = {manager: {tools: {get: jest.fn(() => Promise.resolve())}}}
    const config = shallow(<TerminologyImportTable extension={extension} />);
    expect(config.text()).toBe("<Table />")
    expect(config.instance().columns).toBe(columns)
})
