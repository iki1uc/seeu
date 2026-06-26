// RA – Chiplet Loader

export const ChipletLoader = {
  chiplets: {},

  // Chiplet registrieren
  register(name, content) {
    this.chiplets[name] = content;
  },

  // Chiplet abrufen
  get(name) {
    return this.chiplets[name] || null;
  }
};
