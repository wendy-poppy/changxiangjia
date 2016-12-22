var index = 0;
var content2 = document.getElementById('content2');
setInterval(function  () {
	index++;
	if (index > 47) {
		index = 1;
	}
	content2.innerHTML = '<img src="img2/diqiu/' + index + '.jpg"/>'
},60);

//音乐开关
var aud = document.getElementById('aud');
$('.music').click(function  () {
	aud.pause();
	$('.music').css({
		display:'none'
	});
	$('.musicOff').css({
		display:'block'
	})
});
$('.musicOff').click(function  () {
	aud.play();
	$('.music').css({
		display:'block'
	});
	$('.musicOff').css({
		display:'none'
	})
})


