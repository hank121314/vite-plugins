function ensureArray(thing: string | string[]) {
  if (Array.isArray(thing)) return thing;
  if (thing == null) return [];
  return [thing];
}

export { ensureArray };
