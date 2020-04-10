var TabBox = {
		_onTabClicked: function(){
			if($('.selected').length == 1){
				$('.selected')[0].className = "";
			}
			$('.tab-box div')[0].innerText=this.innerText.substring(3,4)+"번 탭뷰 입니다.";
			this.className = "selected";
			
		},
		init : function() {
			$(function(){
				$('.tab-box ul li:nth-child(5)')[0].className="selected";
				$('.tab-box div')[0].innerText=$('.selected')[0].innerText.substring(3,4)+"번 탭뷰 입니다.";
				$('.tab-box ul li').click(TabBox._onTabClicked);
			})
			
		}
}