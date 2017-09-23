/*
* @Author: lenovo
* @Date:   2017-09-22 21:37:08
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-22 22:10:23
*/
window.onload=function(){
	let star=gets('.star-goods')[0];
	let sbtn=gets('.star-btn')[0];
	let sbtnli=gets('a',sbtn);
	let starli=gets('li',star);
	console.log(sbtnli);
	// function sscale(){
	// 	let w=parseInt(getComputedStyle(star,null).left)
		
	// 		animate(star,{left:-1240});
			
		
	// }
	sbtnli[0].onclick=function(){
		animate(star,{left:0});
	}
	sbtnli[1].onclick=function(){
		animate(star,{left:-1240});
	}
	
}