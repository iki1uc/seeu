// SEEÜ: Motor Sync

import { startMotor, stopMotor, onMotorStep } from "../shift/motor.js";

export const SEEUE = {
  activeStep: null,

  start() {
    console.log("SEEÜ: Motor wird gestartet…");
    startMotor();
  },

  stop() {
    console.log("SEEÜ: Motor wird gestoppt…");
    stopMotor();
  },

  sync() {
    onMotorStep((step) => {
      this.activeStep = step;
      console.log("SEEÜ Sync:", step);
    });
  }
};

// SEEÜ initialisieren
SEEUE.sync();

