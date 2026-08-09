// arg3.gate.js
export const GATE_MATRIX = {
  start8:{gate:"GATE",math:"0",home:"HOME-0"},
  AQUA:{gate:"wLOCH",math:"1",home:"HOME-1"},
  EDIT:{gate:"HY",math:"√2",home:"HOME-2"},
  CLOU:{gate:"PE",math:"π",home:"HOME-3"},
  WETTEN:{gate:"PER",math:"e",home:"HOME-4"},
  "6iy":{gate:"WARB",math:"φ",home:"HOME-5"},
  beu:{gate:"TRANS",math:"∞",home:"HOME-6"},
  xyz:{gate:"KANAL",math:"∴",home:"HOME-7"}
};

export function GATE_NEURAL_BOOST(name, evo){
  const base = GATE_MATRIX[name] || GATE_MATRIX["start8"];
  return {
    ...base,
    boost: (base.math.length * 2) + (base.home.length * 3) + evo.tick
  };
}

export function GATE_MASSE(gate){
  return gate.boost;
}

