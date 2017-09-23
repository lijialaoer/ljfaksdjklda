/*
* @Author: lenovo
* @Date:   2017-09-22 22:25:27
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-22 22:34:32
*/
window.onload=function(){
	let box=document.getElementsByClassName('bannerbody')[0];
	let blis=box.getElementsByTagName('li');
	let cirbox=document.getElementsByClassName('banner-circlebox')[0];
	let circle=cirbox.getElementsByTagName('div');
	let bleft=document.getElementsByClassName('banner-left')[0];
	let brigth=document.getElementsByClassName('banner-right')[0];
	///平移轮播
	let now=0;
	let next=0;
	let flag=1;
	let w=parseInt(getComputedStyle(box,null).width);
	blis[0].style.left=0;

	t=setInterval(run1, 1000);
	box.onmouseover=function(){
		clearInterval(t);
	}
	box.onmouseout=function(){
		t=setInterval(run1, 1000);
	}
	brigth.onmouseover=function(){
		clearInterval(t);
	}
	brigth.onmouseout=function(){
		t=setInterval(run1, 1000);
	}
	bleft.onmouseover=function(){
		clearInterval(t);
	}
	bleft.onmouseout=function(){
		t=setInterval(run1, 1000);
	}
	brigth.onclick=function(){
		if(!flag){
			return;
		}
	 	run1();
	 	flag=0;
	}

	bleft.onclick=function(){
		if(!flag){
			return;
		}
	 	rrun1();
	 	flag=0;
	}

	for(let i=0;i<circle.length;i++){
		circle[i].onmouseover=function(){
			clearInterval(t);
		}
		circle[i].onclick=function(){
			if(now==i){return;}
			circle[now].style.background='rgba(0,0,0,0)';
			circle[i].style.background='#5c5c5f';
			blis[i].style.left=`${w}px`;
			animate(blis[now],{left:-w});
			animate(blis[i],{left:0});
			now=next=i;
		}
			
		}
		






	function run1(){
		next++;
		if(next==blis.length){
			next=0;
		}
		
		blis[next].style.left=`${w}px`;
		circle[next].style.background='#5c5c5f';
		circle[now].style.background='rgba(0,0,0,0)';
		animate(blis[now],{left:-w});
		animate(blis[next],{left:0},function(){
			flag=1;
		});
		now=next;
	}

	function rrun1(){
		next--;
		if(next<0){
			next=blis.length-1;
			
		}
		let w=parseInt(getComputedStyle(box,null).width);
		blis[next].style.left=`${-w}px`;
		animate(blis[now],{left:w});
		animate(blis[next],{left:0},function(){
			flag=1;
		});
		now=next;

	}





	let star=gets('.star-goods')[0];
	let sbtn=gets('.star-btn')[0];
	let sbtnli=gets('a',sbtn);
	let starli=gets('li',star);
	console.log(sbtnli);
	sbtnli[0].onclick=function(){
		animate(star,{left:0});
	}
	sbtnli[1].onclick=function(){
		animate(star,{left:-1240});
	}
	
}