	
	var arrow = document.querySelector('.arrow');
	// console.log(arrow);
	var swipers = document.querySelector('.swiper-slide');
	var mySwiper = new Swiper('.swiper-container', {
		// autoplay: 5000,//可选选项，自动滑动
		direction : 'vertical',  // 滑动方向
		// pagination : '.swiper-pagination',  // 分页器
		onSlideChangeEnd: active,
	});
	var len = mySwiper.slidesGrid.length;
	// console.log(len);
	function active(){
		var index = mySwiper.activeIndex + 1;
		// console.log(index);
		if(index === len){
			// console.log('最后一张');
			arrow.style.display = 'none';
		}else {
			arrow.style.display = 'block';
		}
	}
	// console.log(mySwiper);