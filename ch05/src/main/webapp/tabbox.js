var TabBox = {
		init : function() {
			window.addEventListener('load', this._onWindowLoad)
			
			},
			_onWindowLoad: function() {
				var divTabBox = document.getElementsByClassName('tab-box')[0];
				var ulTabBox = divTabBox.childNodes[1];
				var liTabs = ulTabBox.getElementsByTagName('li');

				for (var i = 0; i < liTabs.length; i++) {
					liTabs[i].addEventListener('click', TabBox._onTabClicked.bind(liTabs[i]));
				}
			},
			_onTabClicked: function() {
				
				var liSelecteds = document.getElementsByClassName('selected');
				(liSelecteds.length == 1) && (liSelecteds[0].className = '');
				
				this.className = 'selected';
		}

	}