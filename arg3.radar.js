// arg3.radar.js
export function RADAR_SAT_3D_HOLO(geo){
  const radar = document.getElementById("radarCanvas");
  const ctx = radar.getContext("2d");

  ctx.clearRect(0,0,300,300);

  for(let i=0;i<6;i++){
    ctx.beginPath();
    ctx.arc(150,150,40+i*20,0,Math.PI*2);
    ctx.strokeStyle=`rgba(0,255,255,${0.1+i*0.12})`;
    ctx.lineWidth=2+i*0.5;
    ctx.stroke();
  }

  const px = 150 + Math.sin(geo.w/15)*geo.x/6;
  const py = 150 + Math.cos(geo.w/15)*geo.y/6;

  ctx.beginPath();
  ctx.arc(px, py, 12, 0, Math.PI*2);
  ctx.fillStyle="#ff00ff";
  ctx.shadowColor="#ff00ff";
  ctx.shadowBlur=20;
  ctx.fill();
}

export function RADAR_MASSE(geo){
  return geo.w + geo.v;
}

