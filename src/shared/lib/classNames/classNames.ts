
type Mods =Record<string, boolean | string>

interface IClassNames {
    cls: string,
    mods?: Mods,
    additional?: string[]
}

export function classNames({cls, mods={}, additional = []}: IClassNames) :string {

const filterMods = Object.entries(mods)
    .filter(([key, value])=> Boolean(key) && Boolean(value))
    .map(([key, _])=> key)

return [cls,...filterMods, ...additional].join(' ');
}

