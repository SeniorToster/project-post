
type Mods = Record<string, boolean | string>

interface IClassNames {
    cls: string
    mods?: Mods
    additional?: any[]
}

export function classNames ({ cls, mods = {}, additional = [] }: IClassNames): string {
    const filterAdditional = additional?.filter(Boolean)
    const filterMods = Object.entries(mods)
        .filter(([key, value]) => Boolean(key) && Boolean(value))
        .map(([key, _]) => key)

    return [cls, ...filterMods, ...filterAdditional].join(' ')
}
