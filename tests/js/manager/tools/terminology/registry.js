
import {BaseTerminologyRegistry, TerminologyFileRegistry, TerminologyRegistry} from 'l10n-tools/manager/tools/terminology/registry';
import schema from 'l10n-tools/schema/tools/terminology.json'
import fileSchema from 'web-ext-plugins/schema/file.json'


test('TerminologyRegistry constructor', () => {
    const termtool = new TerminologyRegistry({manager: 'foo'})
    expect(termtool.tool).toEqual({"manager": "foo"});
    expect(termtool.manager).toBe('foo');
    expect(termtool.schema).toEqual(schema);

})


test('TerminologyFileRegistry constructor', () => {
    const termtool = new TerminologyFileRegistry({manager: 'foo'})
    expect(termtool.tool).toEqual({"manager": "foo"});
    expect(termtool.manager).toBe('foo');
    expect(termtool.schema).toEqual(fileSchema);

})



test('BaseTerminologyRegistry register', () => {
    const termtool = new BaseTerminologyRegistry({manager: 'foo'})
    expect(termtool.tool).toEqual({"manager": "foo"});
    expect(termtool.manager).toBe('foo');
    termtool.get = jest.fn(() => Promise.resolve([]))
    termtool.set = jest.fn((x) => x)
    return termtool.register([]).then(result => {
        expect(termtool.get.mock.calls).toEqual([[]])
        expect(termtool.set.mock.calls).toEqual([[[]]])
        expect(result).toEqual([])

        termtool.get = jest.fn(() => Promise.resolve([]))
        termtool.set = jest.fn((x) => x)
        return termtool.register([1, 2, 3]).then(result => {
            expect(termtool.get.mock.calls).toEqual([[]])
            expect(termtool.set.mock.calls).toEqual([[[1, 2, 3]]])
            expect(result).toEqual([1, 2, 3])

            termtool.get = jest.fn(() => Promise.resolve([{filename: 4}, {filename: 5}, {filename: 6}]))
            termtool.set = jest.fn((x) => x)
            return termtool.register([{filename: 1}]).then(result => {
                expect(termtool.get.mock.calls).toEqual([[]])
                expect(termtool.set.mock.calls).toEqual([[[{"filename": 4}, {"filename": 5}, {"filename": 6}, {"filename": 1}]]])
                expect(result).toEqual([{"filename": 4}, {"filename": 5}, {"filename": 6}, {"filename": 1}])

                termtool.get = jest.fn(() => Promise.resolve([{filename: 4}, {filename: 5}, {filename: 6}]))
                termtool.set = jest.fn((x) => x)
                return termtool.register([{filename: 4}]).then(result => {
                    expect(termtool.get.mock.calls).toEqual([[]])
                    expect(termtool.set.mock.calls).toEqual([[[{"filename": 5}, {"filename": 6}, {"filename": 4}]]])
                    expect(result).toEqual([{"filename": 5}, {"filename": 6}, {"filename": 4}])
                })
            })
        })
    })
})


test('TerminologyRegistry get', () => {
    const termtool = new TerminologyRegistry({manager: 'foo'})

    browser.storage.local.get = jest.fn(() => Promise.resolve({}))

    termtool.get().then(result => {
        expect(result).toEqual([])

    })

})
