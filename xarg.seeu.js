<div id="output"></div>

<script type="module">
  import { RA, AU, KI } from "./RA/ra-core.js";

  RA.pullFromKI();

  document.getElementById("output").innerText =
    "SEEÜ Sicht: " + JSON.stringify(AU.read());
</script>

function GEO_VECTOR_6D(gate, evo){
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
