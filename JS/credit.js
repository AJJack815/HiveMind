
		var imgArray = new Array(
			'akhilesh-sharma-6xtK1Pn-PTI-unsplash.jpg',
			'alina-karpenko-d8GDJalt_BE-unsplash.jpg',
			'ann-74NChp1cn5I-unsplash.jpg',
			'ari-spada-RCYrA-AiFSo-unsplash.jpg',
			'fallon-michael-0-xIKrdFj4I-unsplash.jpg',
		
		);


		var titleArray = new Array(
			'Akhilesh Sharma',
			'Alina Karpenko',
			'Ann',
			'Ari Spada',
			'Fallon Micheal',
		);
			
		var imgPath = "img/Product/";
		
		function swapImage(imgID) {

			var theImage = document.getElementById('theImage');
			var textDiv = document.getElementById('bottomText');

			var newImg;
			var textTitle;

			newImg = imgArray[imgID];
			theImage.src = imgPath + newImg;

			textTitle=titleArray[imgID];

      			textDiv.innerHTML = textTitle;
		}
			
		function preloadImages() {		
			for(var i = 0; i < imgArray.length; i++) {
				var tmpImg = new Image;
				tmpImg.src = imgPath + imgArray[i];
			}
				