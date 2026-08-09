// xarg.evo.js
export const EVO = {
  tick: 0,
  act(seeu){
    this.tick++;
    seeu.evoState = "EVO-" + this.tick;
  }
};

export function EVO_MASSE(evo){
  return evo.tick * 2;
}

