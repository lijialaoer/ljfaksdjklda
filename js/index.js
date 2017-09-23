/*
* @Author: lenovo
* @Date:   2017-09-18 21:53:05
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-22 22:21:38
*/

window.onload=function(){
	let cav=document.getElementsByClassName('cenav')[0];
	let lis=cav.getElementsByTagName('li');
	let it=document.getElementsByClassName('item');
	// for(let i=0;i<lis.length;i++){
	// 	lis[i].onmouseover=function(){
	// 		it[i].style.display='block';
	// 	}
	// 	lis[i].onmouseout=function(){
	// 		it[i].style.display='none';
	// 	}
	// }


	// let nav=document.getElementsByClassName('nav-body')[0];
	// let nlis=nav.getElementsByTagName('li');
	// let nit=document.getElementsByClassName('itmi');
	// console.log(nit)
	// for(let i=0;i<nlis.length;i++){
	// 	nlis[i].onmouseover=function(){
	// 		nit[i].style.display='block';
	// 		// nit[i].style.height='150px';
			
	// 	}
	// 	nlis[i].onmouseout=function(){
	// 		nit[i].style.display='none';
	// 		// nit[i].style.height=0;
			
	// 	}
	// }


	// let gouwuche=document.getElementsByClassName('shoppingche')[0];
	// let gotext=gouwuche.getElementsByClassName('quick')[0];
	// gouwuche.onmouseover=function(){
	// 	gotext.style.display='block';
	// }
	// gouwuche.onmouseout=function(){
	// 	gotext.style.display='none';
	// }
	// console.log(gotext)




	let box=document.getElementsByClassName('bannerbody')[0];
	let blis=box.getElementsByTagName('li');
	let cirbox=document.getElementsByClassName('banner-circlebox')[0];
	let circle=cirbox.getElementsByTagName('div');
	// let n=0;
	// blis[0].style.opacity=1;
	// for(let i=0;i<circle.length;i++){
	// 	circle[i].onclick=function(){
	// 		for(let j=0;j<blis.length;j++){
	// 			animate(blis[j],{opacity:0});
	// 			// blis[j].style.zIndex=5;
	// 			circle[j].style.background='rgba(0,0,0,0)';
	// 		}
	// 		animate(blis[i],{opacity:1});
	// 		// blis[i].style.zIndex=9;
	// 		circle[i].style.background='#5c5c5f';
	// 		n=i;
	// 	}	
		
	// }
	


	// 	// 用增加一个属性来存var声明变量的值
	// // for(var i=0;i<circle.length;i++){
	// // 	circle[i].index=i;
	// // 	circle[i].onclick=function(){
	// // 		for(let j=0;j<blis.length;j++){
	// // 			// blis[j].index1=j;
	// // 			blis[j].style.zIndex=5;
	// // 		}
		 
	// // 		blis[this.index].style.zIndex=9;	
	// // 	}
		


	// 	//用闭包函数来存var声明变量的值
	// 	// var n=0;
	// 	// for(var i=0;i<circle.length;i++){
	// 	// circle[i].onclick=(function(j){
	// 	// 	return function(){
	// 	// 		blis[n].style.zIndex=5;
	// 	// 		blis[j].style.zIndex=9;
	// 	// 		n=j;
	// 	// 	}
	// 	// })(i);
			
	// 	// }	
		
		

	// let n=0;
	// let t=setInterval(run, 2000);

	// box.onmouseenter=function(){
	// 	clearInterval(t);
	// }
	// box.onmouseleave=function(){
}	// 	t=setInterval(run, 2000);
	// }


	let bleft=document.getElementsByClassName('banner-left')[0];
	let brigth=document.getElementsByClassName('banner-right')[0];
	// // console.log(brigth)
	// brigth.onclick=function(){
	// 	run();
	// }
	// bleft.onclick=function(){
	// 	n--;
	// 	if(n<0){
	// 		n=blis.length-1;
	// 	}
	// 	for(let i=0;i<blis.length;i++){
	// 		animate(blis[i],{opacity:0});
	// 		// blis[i].style.zIndex=5;
	// 		circle[i].style.background='rgba(0,0,0,0)';
	// 	}
	// 	animate(blis[n],{opacity:1});
	// 	// blis[n].style.zIndex=9;
	// 	circle[n].style.background='#5c5c5f';
	// }



	// function run(){
	// 	n++;
	// 	if(n==blis.length){
	// 		n=0;
	// 	}
		
	// 	for(let i=0;i<blis.length;i++){
	// 		animate(blis[i],{opacity:0});
	// 		// blis[i].style.zIndex=5;
	// 		circle[i].style.background='rgba(0,0,0,0)';
	// 	}
	// 	animate(blis[n],{opacity:1});
	// 	// blis[n].style.zIndex=9;
	// 	circle[n].style.background='#5c5c5f';
		
	// }

///////////////////////////////////
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


