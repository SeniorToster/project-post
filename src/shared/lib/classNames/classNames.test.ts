import { classNames } from './classNames'

describe('classNames', () => {
    test('работа с одним ключём cls объекта', () => {
        expect(classNames({ cls: 'someClass' })).toBe('someClass')
    })

    test('работа с одним ключём cls объекта', () => {
        const expected: string = 'someClass modsClass1 modsClass2'
        expect(classNames({ cls: 'someClass', mods: { modsClass1: true, modsClass2: true } })).toBe(expected)
    })

    test('работа с ключами cls и additional объекта', () => {
        const expected: string = 'someClass additionalClass1 additionalClass2'
        expect(classNames({ cls: 'someClass', additional: ['additionalClass1', 'additionalClass2'] })).toBe(expected)
    })

    test('работа с ключами cls, mods, additional объекта', () => {
        const expected: string = 'someClass modsClass1 modsClass2 additionalClass1 additionalClass2'
        expect(classNames({ cls: 'someClass', mods: { modsClass1: true, modsClass2: true }, additional: ['additionalClass1', 'additionalClass2'] })).toBe(expected)
    })

    test('один из ключей mods является false', () => {
        const expected: string = 'someClass modsClass2 additionalClass1 additionalClass2'
        expect(classNames({ cls: 'someClass', mods: { modsClass1: false, modsClass2: true }, additional: ['additionalClass1', 'additionalClass2'] })).toBe(expected)
    })

    test('один из ключей additional является undefined', () => {
        const expected: string = 'someClass modsClass1 modsClass2 additionalClass2'
        expect(classNames({ cls: 'someClass', mods: { modsClass1: true, modsClass2: true }, additional: [undefined, 'additionalClass2'] })).toBe(expected)
    })
})
