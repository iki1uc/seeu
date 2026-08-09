<link rel="prefetch" href="https://iki1uc.github.io/AQUA/AQUA.static.yml">
<link rel="prefetch" href="https://iki1uc.github.io/EDIT/EDIT.static.yml">
<link rel="prefetch" href="https://iki1uc.github.io/CLOU/CLOU.static.yml">
<link rel="prefetch" href="https://iki1uc.github.io/WETTEN/WETTEN.static.yml">

<link rel="prefetch" href="https://iki1uc.github.io/6iy/6iy.static.yml">
<link rel="prefetch" href="https://iki1uc.github.io/beu/beu.static.yml">
<link rel="prefetch" href="https://iki1uc.github.io/xyz/xyz.static.yml">

  function ACHS_ANALYSE(m){
  return {
    dominant: Math.max(m.ort, m.home, m.gate, m.evo, m.radar),
    mismatch: Math.abs(m.ort - m.home),
    continuum: m.continuum
  };
}
