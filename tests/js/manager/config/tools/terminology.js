
import React from 'react';

import {shallow} from 'enzyme';

import TerminologyToolConfig from 'l10n-tools/manager/config/tools/terminology';
import CustomTerminologyForm from 'l10n-tools/manager/config/tools/terminology/forms';
import TerminologyImportTable from 'l10n-tools/manager/config/tools/terminology/forms/import';


test('TerminologyToolConfig render', () => {
    const extension = {manager: {}}
    const config = shallow(<TerminologyToolConfig extension={extension} />);
    expect(config.text()).toBe("<OverlayButton />")
})


test('CustomTerminologyForm render', () => {
    const extension = {manager: {tools: {get: jest.fn(() => Promise.resolve())}}}
    const config = shallow(<CustomTerminologyForm extension={extension} />);
    expect(config.text()).toBe("<Fieldset />")
})


test('TerminologyImportTable render', () => {
    const extension = {manager: {tools: {get: jest.fn(() => Promise.resolve())}}}
    const config = shallow(<TerminologyImportTable extension={extension} />);
    expect(config.text()).toBe("<Table />")
})
