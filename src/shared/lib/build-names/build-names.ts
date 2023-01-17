type Mods = Record<string, boolean | string>

export const buildNames = (names: string[] = [], mods: Mods = {}): string => [
  ...names.filter(Boolean),
  ...Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([className]) => className),
].join(' ');
