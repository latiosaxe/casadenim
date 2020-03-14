// const baseUrl = 'https://api.instagram.com/v1/'
 
// function getMostRecentPosts() {
// 	fetch(baseUrl + 'users/self/media/recent/?access_token=ACCESS-TOKEN&COUNT=3',
//         method: 'get'
//     }).then(function(response.json) { 
 
// // Response Spec: https://www.instagram.com/developer/endpoints/users/#get_users_self
 
// // We need to do something with response.json here.. string literals?
// // Data is an array of objects, and there are three resolutions - so
// // pick your preferred size here. lodash has a good method, but we'll
// // do standard JS here.
	
// 	const data = response.json
// 	let imageArray = [];
 
// 	Object.keys(data).forEach(key => {
//     	if (data[key].hasOwnProperty('images')) {
//    			imageArray.push(data[key].images.standard_resolution)
//     	}
// 	})
	
// 	// SAMPLE 
// 	// imageArray: [{
// 	// 		height: 612,
// 	//		width: 612,
// 	//		url:"http://www.example.com/thumbnail/url/here.jpg"
// 	// }] 
// 	//
// 	// Length depends on response, you may request more than 3
// 	// in case there are videos that don't get picked up.
 
// 	.then(function(imageArray) {
// 		let html = ''
		
// 		// I'm tired... you should map this, or something better
// 		// than this, but ES5 will have to do for now :)
		
// 		for (let i = 0; i < imageArray.length; i++) {
// 			html+= `<img src="${imageArray[i]['url']}" height="${imageArray[i].height}" width="${imageArray[i].width}"`
// 		}
		
// 		return html
// 	}).catch(function(err) {
// 		console.log(err);
// 	});	


$("#showSizes").on('click', function(){
    $(".product__sizes").slideDown();
    $("html, body").animate({ scrollTop: $(".product__sizes").offset().top - $(".site-header").height() }, 300);
})