
import ChecksTool from 'l10n-tools/manager/tools/checks';
import CustomChecksRegistry from 'l10n-tools/manager/tools/checks/registry';
import ChecksRunner from 'l10n-tools/manager/tools/checks/runner';


test('ChecksTool constructor', () => {
    const checkstool = new ChecksTool('foo')
    expect(checkstool.manager).toBe('foo');
    expect(checkstool.custom instanceof CustomChecksRegistry).toBe(true)
    expect(checkstool.custom.manager).toBe('foo')
    expect(checkstool.custom.tool).toBe(checkstool)
    expect(checkstool.runner instanceof ChecksRunner).toBe(true)
    expect(checkstool.name).toBe("toolsChecksName")
})
