
type Mods =Record<string, boolean | string>



export function classNames(cls: string, mods: Mods, additional: string[], ) :string {

const filterMods = Object.entries(mods)
    .filter(([_, value])=> Boolean(value))
    .map(([key, _])=> key)

return [cls,...filterMods, ...additional].join(' ');
}

