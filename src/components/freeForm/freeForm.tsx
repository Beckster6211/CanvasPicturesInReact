import React, {useState, useEffect, useRef} from 'react';

type Coordinates = {
  x: number;
  y: number;
};


function FreeForm() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    let mouseDown: boolean = false;
    let start: Coordinates = { x: 0, y: 0 };
    let end: Coordinates = { x: 0, y: 0 };
    let canvasOffsetLeft: number = 0;
    let canvasOffsetTop: number = 0;
    
    function handleMouseDown(evt: MouseEvent) {
      mouseDown = true;

      start = {
        x: evt.clientX - canvasOffsetLeft,
        y: evt.clientY - canvasOffsetTop,
      }

      end = {
        x: evt.clientX - canvasOffsetLeft,
        y: evt.clientY - canvasOffsetTop,
      };
    }

    function handleMouseUp(evt: MouseEvent) {
      mouseDown = false;
    }

    function handleMouseMove(evt: MouseEvent) {
      if (mouseDown && context) {
        start = {
          x: end.x,
          y: end.y,
        };

        end = {
          x: evt.clientX - canvasOffsetLeft,
          y: evt.clientY - canvasOffsetTop,
        };

        // Draw our path
        context.beginPath();
        context.moveTo(start.x, start.y);
        context.lineTo(end.x, end.y);
        context.strokeStyle = `#${randomColor()}`;
        context.lineWidth = 3;
        context.stroke();
        context.closePath();
    }

    function randomColor(): string {
      const color = new Array<string>(6);

      for (let i = 0; i < 6; i++) {
        const val = Math.floor(Math.random() * 16);

        if (val < 10) {
          color[i] = val.toString();
        } else {
          color[i] = String.fromCharCode(val + 87);
        }
      }

      return color.join('');
    }


    if (canvasRef.current) {
      const renderCtx = canvasRef.current.getContext('2d');

      if (renderCtx) {
        canvasRef.current.addEventListener('mousedown', handleMouseDown);
        canvasRef.current.addEventListener('mouseup', handleMouseUp);
        canvasRef.current.addEventListener('mousemove', handleMouseMove);

        canvasOffsetLeft = canvasRef.current.offsetLeft;
        canvasOffsetTop = canvasRef.current.offsetTop;
        
        setContext(renderCtx);
      }
    }
  }
  

  return function cleanUp(){
    if (canvasRef.current) {
      canvasRef.current.removeEventListener('mousedown', handleMouseDown);
      canvasRef.current.removeEventListener('mouseup', handleMouseUp);
      canvasRef.current.removeEventListener('mousemove', handleMouseMove);
    }
  }

      }, [context])

  return (
    <div
      style={{
        textAlign: 'center',
      }}>
        <p>Free Form?</p>
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

export default FreeForm;