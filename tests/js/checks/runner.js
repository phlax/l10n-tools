
import XRegExp from 'xregexp';

import CheckRunner from 'l10n-checks/runner';


test('Check runner constructor', () => {
    const runner = new CheckRunner();
    expect(runner.sourceRegex).toBe(undefined);
    expect(runner.targetRegex instanceof XRegExp).toBe(true);
    expect(runner.targetRegex.xregexp.source).toBe('');
    expect(runner.captureNames).toEqual([]);
    expect(runner.matchSource()).toBe(undefined)
    expect(runner.matchSource('some source')).toBe(undefined)
})
