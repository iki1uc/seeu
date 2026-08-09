async function prefetch(url) {
  try {
    const res = await fetch(url, { cache: "force-cache" });
    return await res.text();
  } catch (e) {
    return null;
  }
}
function MASSENFELD(geo, gate, evo){
  return {
    ort_masse: geo.x + geo.y + geo.z + geo.v + geo.u,
    home_masse: gate.home.length * 10,
    gate_masse: gate.boost,
    evo_masse: evo.tick * 2,
    radar_masse: geo.w + geo.v,
    continuum_masse: geo.x + gate.boost + evo.tick
  };
}
