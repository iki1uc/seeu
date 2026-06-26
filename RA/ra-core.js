// RA – Core für SEEÜ

// AU = Cache
export const AU = {
  data: {},
  update(content) {
    this.data = content;
  },
  read() {
    return this.data;
  }
};

// KI = Quelle
export const KI = {
  data: { message: "SEEÜ: Kern bereit." },
  get() {
    return this.data;
  },
  set(newData) {
    this.data = newData;
  }
};

// Chiplet Loader
export const ChipletLoader = {
  chiplets: {},

  register(name, content) {
    this.chiplets[name] = content;
  },

  get(name) {
    return this.chiplets[name] || null;
  }
};

// RA = Controller / Router / Loader
export const RA = {
  loader: ChipletLoader,

  // Chiplets
  loadChiplet(name, content) {
    this.loader.register(name, content);
  },

  getChiplet(name) {
    return this.loader.get(name);
  },

  // Flow: KI → RA → AU
  pullFromKI() {
    const content = KI.get();
    AU.update(content);
  },

  // Flow: AU → RA → KI
  pushToKI() {
    const content = AU.read();
    KI.set(content);
  }
};
