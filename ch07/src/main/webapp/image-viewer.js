var imageViewer = {
	_images : [ {
		name : '국화',
		file : 'Chrysanthemum.jpg'
	}, {
		name : '사막',
		file : 'Desert.jpg'
	}, {
		name : '젤리피쉬',
		file : 'Hydrangeas.jpg'
	}, {
		name : '코알라',
		file : 'Koala.jpg'
	}, {
		name : '등대',
		file : 'Lighthouse.jpg'
	}, {
		name : '펭귄',
		file : 'Penguins.jpg'
	}, {
		name : '튤립',
		file : 'Tulips.jpg'
	} ],
	_consoleImageLog: function(){
		var name =$(this).attr('alt');
		console.log(name);
	},
	_intervalId: null,
	_slideShow: function(){
		if(imageViewer._intervalId){
			// 슬라이드쇼 진행 상태
			clearInterval(imageViewer._intervalId);
			imageViewer._intervalId = null;
			$(this).text('슬라이드 시작');
		}else{
			// 슬라이드쇼 중지 상태
			imageViewer._intervalId = setInterval(imageViewer._changeImage,1000);
			$(this).text('슬라이드 중지');
		}
	},
	_changeImage : function() {
		var index = Math.floor(Math.random() * imageViewer._images.length);
		var info = imageViewer._images[index];
		$('.image-viewer img').attr({
			'src' : 'images/' + info.file,
			'alt' : info.name,
			'title' : info.name
		});
		// var info = _images[index];
		// console.log(info);
	},
	init : function() {
		$(function() {
			$('.image-viewer #btn-change').click(imageViewer._changeImage);
			$('.image-viewer img')
					.dblclick(imageViewer._consoleImageLog)
					.mousedown(imageViewer._changeImage);
			// 첫번째 이미지 선택
			$('.image-viewer #btn-slideshow').click(imageViewer._slideShow);
			imageViewer._changeImage();
		});
	}
}