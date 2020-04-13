var TabBox = {
		_onTabClicked: function(){
			$('.selected').removeClass('selected');
			$('.tab-box div')[0].innerText=$(this).text().substring(3,4)+"번 탭뷰 입니다.";
			var a = $(this).text();
			console.log(a);
			$(this).addClass('selected');
			
		},
		init : function() {
			$(function(){
				$('.tab-box ul li:nth-child(5)').addClass("selected");
				$('.tab-box div')[0].innerText=$('.selected').text().substring(3,4)+"번 탭뷰 입니다.";
				$('.tab-box ul li').click(TabBox._onTabClicked);
			})
			
		}
}