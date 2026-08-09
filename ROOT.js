const PREFETCH_LIST = [
  "https://iki1uc.github.io/AQUA/AQUA.static.yml",
  "https://iki1uc.github.io/EDIT/EDIT.static.yml",
  "https://iki1uc.github.io/CLOU/CLOU.static.yml",
  "https://iki1uc.github.io/WETTEN/WETTEN.static.yml",
  "https://iki1uc.github.io/6iy/6iy.static.yml",
  "https://iki1uc.github.io/beu/beu.static.yml",
  "https://iki1uc.github.io/xyz/xyz.static.yml"
];

async function PREFETCH_ALL() {
  const out = {};
  for (const url of PREFETCH_LIST) {
    out[url] = await prefetch(url);
  }
  return out;
}
