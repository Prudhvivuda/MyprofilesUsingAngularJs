
angular.module("profileSearch", [])

	.filter('searchFor', function(){

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});


function SearchController($scope){

	$scope.items = [
		{
			url: 'https://github.com/Prudhvivuda',
			title: 'GitHub',
			image: 'https://github.githubassets.com/images/modules/open_graph/github-mark.png'
		},
		{
			url: 'https://www.linkedin.com/in/prudhvi-vuda-650221191/',
			title: 'LinkedIn',
			image: 'https://shieldapp.ai/wp-content/uploads/2019/10/LinkedIn.jpg'
		},
		{
			url: 'https://medium.com/@prudhvi12042001',
			title: 'Medium',
			image: 'https://cdn-static-1.medium.com/_/fp/icons/monogram-mask.KPLCSFEZviQN0jQ7veN2RQ.svg'
		},
		{
			url: 'https://www.hackerearth.com/@PrudhviVuda',
			title: 'Hacker Earth',
			image: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/HackerEarth_logo.png'
		},
		{
			url: 'https://twitter.com/VudaPrudhvi',
			title: 'Twitter',
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoW0OEFYF09T9HwQzirXzvAy1pBZg8s3La1A&usqp=CAU'
		},
		{
			url: 'https://www.instagram.com/prudhvivuda/',
			title: 'Instagram',
			image: 'https://pbs.twimg.com/profile_images/1306051401236099072/nuSA8oqW_400x400.jpg'
		},
		{
			url: 'https://www.facebook.com/profile.php?id=100009614312031',
			title: 'Facebook',
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbpMfOhOPxZutLbmRyJLUbXHB3S6xUnPOuzQ&usqp=CAU'
		}
	];


}
