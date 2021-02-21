import React, {useState, useEffect, useRef} from 'react';

function Mickey() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {

    if(canvasRef.current){
      const renderCtx = canvasRef.current.getContext("2d");

      if(renderCtx){
        setContext(renderCtx)
      }

      if(context) {
        //left ear 
context.beginPath();
context.arc(200, 150, 130, 0, Math.PI * 2);
context.fillStyle = "black";
context.fill();
context.closePath();
//right ear
context.beginPath();
context.arc(600, 150, 130, 0, Math.PI * 2);
context.fillStyle = "black";
context.fill();
context.closePath();
//head background
context.beginPath();
context.arc(400, 360, 200, 0, Math.PI * 2);
context.fillStyle = "black";
context.fill();
context.closePath();
        //face
        context.beginPath();
context.arc(400, 380, 150, 0, Math.PI * 1, false);
context.fillStyle = "bisque";
context.fill();
context.closePath();
context.beginPath();
context.ellipse(440, 290, 100, 55, Math.PI / 2, 0, 2 * Math.PI);
context.fillStyle = "bisque";
context.fill();
context.closePath();
context.beginPath();
context.ellipse(360, 290, 100, 55, Math.PI / 2, 0, 2 * Math.PI);
context.fillStyle = "bisque";
context.fill();
context.closePath();
context.closePath();
context.beginPath();
context.arc(290, 380, 45, 0, Math.PI * 2, false);
context.fillStyle = "bisque";
context.fill();
context.closePath();
context.beginPath();
context.arc(510, 380, 45, 0, Math.PI * 2, false);
context.fillStyle = "bisque";
context.fill();
context.closePath();
//lefteye
context.beginPath();
context.ellipse(370, 275, 55, 30, Math.PI / 2, 0, 2 * Math.PI);
context.fillStyle = "white";
context.fill();
context.lineWidth = 4;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.ellipse(370, 305, 22, 12, Math.PI / 2, 0, 2 * Math.PI);
context.fillStyle = "black";
context.fill();
context.closePath();
//right eye
context.beginPath();
context.ellipse(430, 275, 55, 30, Math.PI / 2, 0, 2 * Math.PI);
context.fillStyle = "white";
context.fill();
context.lineWidth = 4;
context.strokeStyle = "black";
context.stroke();
context.closePath();
context.beginPath();
context.ellipse(430, 305, 22, 12, Math.PI / 2, 0, 2 * Math.PI);
context.fillStyle = "black";
context.fill();
context.closePath();
//mouth
context.beginPath();
context.arc(400, 420, 85, 0, Math.PI * 2, true);
context.fillStyle = "black";
context.fill();
context.closePath();
context.beginPath();
context.ellipse(400, 380, 55, 120, Math.PI / 2, 0, 2 * Math.PI);
context.fillStyle = "bisque";
context.fill();
context.closePath();
context.beginPath();
// context.line;
context.lineWidth = 4;
context.bezierCurveTo(320, 425, 275, 385, 290, 375);
context.stroke();
context.closePath();
context.beginPath();
// context.line;
context.lineWidth = 4;
context.bezierCurveTo(270, 395, 275, 370, 305, 375);
context.stroke();
context.moveTo(490, 375);
context.bezierCurveTo(490, 375, 520, 370, 525, 395);
context.stroke();
context.closePath();
context.beginPath();
// context.line;
context.lineWidth = 4;
context.bezierCurveTo(480, 425, 525, 385, 510, 378);
context.stroke();
context.closePath();
//eye line
context.beginPath();
// context.line;
context.lineWidth = 4;
context.bezierCurveTo(470, 338, 390, 310, 335, 340);
context.stroke();
context.moveTo(490, 375);
context.stroke();
context.closePath();
//nose
context.beginPath();
context.ellipse(400, 375, 20, 40, Math.PI / 2, 0, 2 * Math.PI);
context.fillStyle = "black";
context.fill();
context.closePath();
//tongue
context.beginPath();
context.ellipse(390, 485, 15, 35, Math.PI / -2.1, 1, 3 * Math.PI);
context.fillStyle = "pink";
context.fill();
context.closePath();
context.beginPath();
context.ellipse(410, 485, 15, 35, Math.PI / 2.1, 1, 3 * Math.PI);
context.fillStyle = "pink";
context.fill();
context.closePath();
context.beginPath();
// context.line;
context.lineWidth = 4;
context.bezierCurveTo(385, 465, 405, 465, 405, 490);
context.strokeStyle = "black";
context.stroke();
context.closePath();
//b of blj
context.beginPath();
context.moveTo(530, 550);
context.lineTo(555, 645);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(530, 550);
context.lineTo(565, 570);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(545, 600);
context.lineTo(565, 570);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(545, 600);
context.lineTo(575, 610);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(555, 645);
context.lineTo(575, 610);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();
context.closePath();
//l of blj
context.beginPath();
context.moveTo(563, 550);
context.lineTo(584, 635);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(600, 600);
context.lineTo(584, 635);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(600, 600);
context.lineTo(625, 628);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();
context.closePath();
//j of blj
context.beginPath();
context.moveTo(600, 600);
context.lineTo(625, 628);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(620, 545);
context.lineTo(627, 630);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(528, 550);
context.lineTo(680, 545);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();
context.closePath();

      }
      
    }
  }, [context]);

  return (
    <div
      style={{
        textAlign: 'center',
      }}>
        <p> Mickey Mouse Canvas</p>
      <canvas
        id="canvas"
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        style={{
          border: '2px solid #000',
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 10,
        }}
      ></canvas>
    </div>
  );
}

export default Mickey;