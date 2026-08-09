start_paths:
  - "/start8/"
  - "/6iy/"
  - "/beu/"
seeu:
  mode: respo
  auto_discover: true
const TOOLATOR = {
  score: 0,
  wette: null,
  slide: 0,
  respo: "OK",
  node: "start8"
};
function TOOL_SCORE(add){
  TOOLATOR.score += add;
  document.getElementById("score_out").innerText = TOOLATOR.score;
}
TOOL_SCORE(B ? 5 : -3);
function TOOL_WETTE(raw){
  TOOLATOR.wette = "Wette RAW=" + raw;
  document.getElementById("wette_out").innerText = TOOLATOR.wette;
}
TOOL_WETTE(RAW);
function TOOL_SLIDE(p){
  TOOLATOR.slide = p * 8;
  document.getElementById("slide_out").innerText =
    "Slide: " + TOOLATOR.slide + "%";
}
TOOL_SLIDE(P);
function SEEu_RESPO(fn){
  try {
    const out = fn();
    TOOLATOR.respo = "OK";
    return out;
  } catch(e){
    TOOLATOR.respo = "FEHLER: " + e.message;
    return null;
  }
}
document.getElementById("os_out").innerText =
  "OS-Output: " + TOOLATOR.respo;
SEEu_RESPO(() => {
  JB_AUTO();
  JB_CHECK();
  JB_RAW();
  JB_OS();
});
