


window.addEventListener('click',function(e){
	const ele=	e.path[0].getAttribute('data-key');
	console.log(ele);
	const audio=document.querySelector(`audio[data-key="${ele}"]`)
	audio.currentTime=0;///rewind to start
	audio.play();
	

			
})