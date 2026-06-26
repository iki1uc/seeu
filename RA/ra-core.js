// RA – Core für SEEÜ

// AU = Cache (wird später von dir ausgebaut)
export const AU = {
  data: {},
  update(content) {
    this.data = content;
  },
  read() {
    return this.data;
  }
};

// KI = Quelle (nur Dummy, bis du sie füllst)
export const KI = {
  data: { message: "SEEÜ: Kern bereit." },
  get() {
    return this.data;
  },
  set(newData) {
    this.data = newData;
  }
};

// RA = Controller / Router
export const RA = {
  // KI → RA → AU
  pullFromKI() {
    const content = KI.get();
    AU.update(content);
  },

  // AU → RA → KI
  pushToKI() {
    const content = AU.read();
    KI.set(content);
  }
};
