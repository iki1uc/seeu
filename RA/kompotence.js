// SEEÜ – Kompetenzmodul (KOMPOTENCE)

// Kompetenz = kleinste funktionale Einheit
export const KOMPOTENCE = {
  state: {},

  // Kompetenz setzen
  set(name, value) {
    this.state[name] = value;
  },

  // Kompetenz abrufen
  get(name) {
    return this.state[name] || null;
  },

  // Kompetenz prüfen
  has(name) {
    return this.state[name] !== undefined;
  }
};

