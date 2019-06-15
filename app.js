function myFunction() {
  window.print();
}

function run()
	{

	
	const canvas = document.getElementById('canvas');

          canvas.width  = 750;
          canvas.height = 150;


	const ctx    = canvas.getContext('2d');
	img = new Image();
	img.src ='./cars.png';
	img.width='1000px';
         setTimeout(()=> ctx.drawImage(img , 20, 20, 600,120), 1000);

	let   on     = false;

	function onStart(e) {
		 on     = true;
		 draw(e);
		
	}
	function onEnd() {
		 on     = false;
		 ctx.beginPath();
     
	}
    function draw(e){

    	if (!on) return;

    	ctx.lineWidth = 2;
    	ctx.lineCap   = "round";

    	ctx.lineTo( e.clientX , e.clientY);
    	ctx.stroke();
    	ctx.beginPath();
    	ctx.moveTo( e.clientX , e.clientY);


    }
    window.addEventListener('mousedown',onStart);
    window.addEventListener('mouseup',onEnd);
    window.addEventListener('mousemove',draw);

	}
