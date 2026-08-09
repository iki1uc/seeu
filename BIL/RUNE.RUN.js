import { RUNE_LIST } from "./RUNE.LIST.js";

export function RUNE_RUN(code, ctx){

  switch(code){

    case RUNE_LIST.SET:
      return ctx.setUp();

    case RUNE_LIST.IO:
      return ctx.ioIn();

    case RUNE_LIST.EXE:
      return ctx.exeRun();

    case RUNE_LIST.WETTE:
      return ctx.wetteBonus();

    case RUNE_LIST.SCORE:
      return ctx.scoreCalc();

    case RUNE_LIST.SLIDE:
      return ctx.slideMove();

    case RUNE_LIST.XI:
      return ctx.jump2();

    case RUNE_LIST.IX:
      return ctx.diag2();

    case RUNE_LIST.XS:
      return ctx.overJump();

    case RUNE_LIST.SHOGUN1:
      return ctx.shogun1();

    case RUNE_LIST.SHOGUN2:
      return ctx.shogun2();

    case RUNE_LIST.SHOGUN3:
      return ctx.shogun3();

    case RUNE_LIST.MOVE_NOTSELF:
      return ctx.moveNotSelf();

    case RUNE_LIST.MOVE_VALID:
      return ctx.moveValid();

    case RUNE_LIST.MOVE_INVALID:
      return ctx.moveInvalid();

    case RUNE_LIST.COLOR:
      return ctx.applyColor();

    case RUNE_LIST.TONE:
      return ctx.playTone();

    case RUNE_LIST.DIR:
      return ctx.rotateDir();

    case RUNE_LIST.AXIOM:
      return ctx.cycleAxiom();
  }
}
