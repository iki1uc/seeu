// AU – Cache für SEEÜ
// AU speichert nur Daten. Keine Logik, keine KI, kein Routing.

export const AU = {
  data: {},

  // Daten setzen
  update(content) {
    this.data = content;
  },

  // Daten auslesen
  read() {
    return this.data;
  },

  // AU komplett leeren
  clear() {
    this.data = {};
  }
};

