// arg3.geo.js
export function GEO_VECTOR_6D(gate, evo){
  return {
    x: gate.math.length * 10,
    y: gate.home.length * 5,
    z: gate.gate.length * 3,
    w: evo.tick,
    v: gate.boost,
    u: (gate.boost % 9) * 7,
    sat: gate.gate
  };
}

export function GEO_MASSE(geo){
  return geo.x + geo.y + geo.z + geo.v + geo.u;
}

