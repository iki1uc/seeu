import { RA, AU, KI } from "./ra-core.js";

// 1) KI → RA → AU
RA.pullFromKI();
console.log("AU nach pull:", AU.read());

// 2) AU → RA → KI
AU.update({ message: "AU sendet zurück" });
RA.pushToKI();
console.log("KI nach push:", KI.get());
