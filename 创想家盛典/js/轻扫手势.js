var scrollContent = document.getElementById('scrollContent');
var upup = document.getElementById('upup');
var downdown = document.getElementById('downdown');
//		添加移动端轻扫手势事件
touch.on(upup, "touchstart", function(e) {
	//alert("开始触摸");
	//			得到对象
	var event1 = e || window.event;
	//关闭系统默认的触发事件(关闭系统的滚动条)
	event1.preventDefault();
	//			event1.stopPropagation();
	//			event1.cancelable = true;
});

touch.on($('#scrollContent'), "swipeup", function() {
	//	$('#scrollContent').animate({
	//		top: $('#scrollContent').position().top -= 1340
	//	}, 500)
//	console.log($('#scrollContent').position().top);
	if($('#scrollContent').position().top > -6400) {
		$('#scrollContent').animate({
			top: $('#scrollContent').position().top -= 1340
		}, 500)
	}
	if($('#scrollContent').position().top > 0) {
		return;
	}
	if($('#scrollContent').position().top == -2680) {
		$('.clickLeft').click(function() {
			if($('#w4_det').position().left < -4200) {
				$('#w4_det').css({
					left: '0px'
				});
			} else {
				$('#w4_det').animate({
					left: $('#w4_det').position().left -= $('#wrap4').width()
				}, 50)
			}
			//	console.log($('#w4_det').position().left)
		});

		$('.clickRight').click(function() {
			if($('#w4_det').position().left == 0) {
				$('#w4_det').css({
					left: '-4900px'
				});
			} else {
				$('#w4_det').animate({
					left: $('#w4_det').position().left += $('#wrap4').width()
				}, 50)
			}
			//	console.log($('#w4_det').position().right)
		});

		$('#W4_pic div').click(function() {
			//	console.log($(this).index())
			if($(this).index() == 0) {
				$('#w4_det').css({
					left: '0px'
				});
			} else if($(this).index() == 1) {
				$('#w4_det').css({
					left: '-700px'
				});
			} else if($(this).index() == 2) {
				$('#w4_det').css({
					left: '-1400px'
				});
			} else if($(this).index() == 3) {
				$('#w4_det').css({
					left: '-2100px'
				});
			} else if($(this).index() == 4) {
				$('#w4_det').css({
					left: '-2800px'
				});
			} else if($(this).index() == 5) {
				$('#w4_det').css({
					left: '-3500px'
				});
			} else if($(this).index() == 6) {
				$('#w4_det').css({
					left: '-4200px'
				});
			} else if($(this).index() == 7) {
				$('#w4_det').css({
					left: '-4900px'
				});
			} else if($(this).index() == 8) {
				$('#w4_det').css({
					left: '-5600px'
				});
			}
			$('#W4_pic').fadeOut(500);
			$('#w4_word').hide(1000);
			$('#w4_detile').show(1000);
		})

		$('.xxx').click(function() {
			$('#W4_pic').fadeIn(1000);
			$('#w4_word').show(500);
			$('#w4_detile').fadeOut(1000);
		});

		setInterval(function() {
			$('#w4_03').fadeToggle();
			$('.w5tap').fadeToggle();
		}, 100);

		$('#w4_01').fadeIn(2000)
		$('#w4_21').fadeIn(2500)
		$('#w4_22').fadeIn(3000)
		$('#w4_23').fadeIn(3500)
		$('#w4_24').fadeIn(4000)
		$('#w4_25').fadeIn(4500)
		$('#w4_26').fadeIn(5000)
		$('#w4_27').fadeIn(5500)
		$('#w4_28').fadeIn(6000)
	} else if($('#scrollContent').position().top != -2680) {
		$('#w4_detile').css({
			display: 'none'
		});
		$('#W4_pic div').css({
			display: 'none'
		});
		$('#w4_01').css({
			display: 'none'
		});
	}
	if($('#scrollContent').position().top == -4020) {
		$('.w5xxx').click(function() {
			$('#w5_3').hide(500)
			$('#w5_pic img').css({
				opacity: '0'
			});
		});
		$('#w5_1 div').click(function() {
			$('#w5_3').show(500)
		})

		$('#w5_11').fadeIn(function() {
			$('#w5_11').animate({
				left: '335px',
				top: '115px'
			}, 200)
		})
		$('#w5_2 img:nth-child(1)').fadeIn(1000);

		$('#w5_12').fadeIn(function() {
			$('#w5_12').animate({
				left: '555px',
				top: '175px'
			}, 400)
		})
		$('#w5_2 img:nth-child(2)').fadeIn(1500);

		$('#w5_13').fadeIn(function() {
			$('#w5_13').animate({
				left: '55px',
				top: '220px'
			}, 600)
		})
		$('#w5_2 img:nth-child(3)').fadeIn(2000);

		$('#w5_14').fadeIn(function() {
			$('#w5_14').animate({
				left: '255px',
				top: '445px'
			}, 800)
		})
		$('#w5_2 img:nth-child(4)').fadeIn(2500);

		$('#w5_15').fadeIn(function() {
			$('#w5_15').animate({
				left: '480px',
				top: '495px'
			}, 1000)
		})
		$('#w5_2 img:nth-child(5)').fadeIn(3000);

		$('#w5_16').fadeIn(function() {
			$('#w5_16').animate({
				left: '95px',
				top: '570px'
			}, 1200)
		})
		$('#w5_2 img:nth-child(6)').fadeIn(3500);

		$('#w5_17').fadeIn(function() {
			$('#w5_17').animate({
				left: '315px',
				top: '630px'
			}, 1400)
		})
		$('#w5_2 img:nth-child(7)').fadeIn(4000);

		$('#w5_18').fadeIn(function() {
			$('#w5_18').animate({
				left: '505px',
				top: '850px'
			}, 1600)
		})
		$('#w5_2 img:nth-child(8)').fadeIn(4500);

		$('#w5_19').fadeIn(function() {
			$('#w5_19').animate({
				left: '115px',
				top: '920px'
			}, 1800)
		})
		$('#w5_2 img:nth-child(9)').fadeIn(5000);

		$('#w5_110').fadeIn(function() {
			$('#w5_110').animate({
				left: '345px',
				top: '985px'
			}, 2000)
		})
		$('#w5_2 img:nth-child(10)').fadeIn(5500);
	} 
//	else {
//		$('#w5_1 div').css({
//			display: 'none'
//		});
//		$('#w5_2 img').css({
//			display: 'none'
//		});
//		$('#w5_3').css({
//			display: 'none'
//		});
//	}
	var w5Img = document.getElementById('w5_pic');
	var w5Imgs = w5Img.querySelectorAll('img');
	//console.log(w5Imgs)
	$('#w5_1 div').click(function() {
		w5Imgs[$(this).index()].style.opacity = '1';
	});

//	$('#wrap6').click(function() {
	if ($('#scrollContent').position().top == -5360) {
		$('.w6line1').fadeOut(3500);
	} else{
		$('.w6line1').fadeIn(3500);
	}
//	})
	console.log($('#scrollContent').position().top);
});

//向下轻扫

touch.on($('#scrollContent'), "swipedown", function() {
	if($('#scrollContent').position().top < 0) {
		$('#scrollContent').animate({
			top: $('#scrollContent').position().top += 1340
		}, 500)
	} else if($('#scrollContent').position().top == -4020) {
		$('#scrollContent').position().top = -4020;
		return;
	}

	if($('#scrollContent').position().top == -5360) {
		$('.clickLeft').click(function() {
			if($('#w4_det').position().left < -4200) {
				$('#w4_det').css({
					left: '0px'
				});
			} else {
				$('#w4_det').animate({
					left: $('#w4_det').position().left -= $('#wrap4').width()
				}, 50)
			}
			//	console.log($('#w4_det').position().left)
		});

		$('.clickRight').click(function() {
			if($('#w4_det').position().left == 0) {
				$('#w4_det').css({
					left: '-4900px'
				});
			} else {
				$('#w4_det').animate({
					left: $('#w4_det').position().left += $('#wrap4').width()
				}, 50)
			}
			//	console.log($('#w4_det').position().right)
		});

		$('#W4_pic div').click(function() {
			//	console.log($(this).index())
			if($(this).index() == 0) {
				$('#w4_det').css({
					left: '0px'
				});
			} else if($(this).index() == 1) {
				$('#w4_det').css({
					left: '-700px'
				});
			} else if($(this).index() == 2) {
				$('#w4_det').css({
					left: '-1400px'
				});
			} else if($(this).index() == 3) {
				$('#w4_det').css({
					left: '-2100px'
				});
			} else if($(this).index() == 4) {
				$('#w4_det').css({
					left: '-2800px'
				});
			} else if($(this).index() == 5) {
				$('#w4_det').css({
					left: '-3500px'
				});
			} else if($(this).index() == 6) {
				$('#w4_det').css({
					left: '-4200px'
				});
			} else if($(this).index() == 7) {
				$('#w4_det').css({
					left: '-4900px'
				});
			} else if($(this).index() == 8) {
				$('#w4_det').css({
					left: '-5600px'
				});
			}
			$('#W4_pic').fadeOut(500);
			$('#w4_word').hide(1000);
			$('#w4_detile').show(1000);
		})

		$('.xxx').click(function() {
			$('#W4_pic').fadeIn(1000);
			$('#w4_word').show(500);
			$('#w4_detile').fadeOut(1000);
		});

		setInterval(function() {
			$('#w4_03').fadeToggle();
			$('.w5tap').fadeToggle();
		}, 100);

		$('#w4_01').fadeIn(2000)
		$('#w4_21').fadeIn(2500)
		$('#w4_22').fadeIn(3000)
		$('#w4_23').fadeIn(3500)
		$('#w4_24').fadeIn(4000)
		$('#w4_25').fadeIn(4500)
		$('#w4_26').fadeIn(5000)
		$('#w4_27').fadeIn(5500)
		$('#w4_28').fadeIn(6000)
	}
	//	else if($('#scrollContent').position().top != -5360) {
	//		$('#w4_detile').css({
	//			display: 'none'
	//		});
	//		$('#W4_pic div').css({
	//			display: 'none'
	//		});
	//		$('#w4_01').css({
	//			display: 'none'
	//		});
	//	}
	var w5Img = document.getElementById('w5_pic');
	var w5Imgs = w5Img.querySelectorAll('img');
	//console.log(w5Imgs)
	$('#w5_1 div').click(function() {
		w5Imgs[$(this).index()].style.opacity = '1';
	});

//	$('#wrap6').click(function() {
			$('.w6line1').fadeOut(3500);
//		})
			console.log($('#scrollContent').position().top);
});

