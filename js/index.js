/*
* @Author: lenovo
* @Date:   2017-09-18 21:53:05
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-19 20:54:12
*/

window.onload=function(){
	// document.write(”<script language=javascript src='base.js'><\/script>”);

	let cav=document.getElementsByClassName('cenav')[0];
	let lis=cav.getElementsByTagName('li');
	let it=document.getElementsByClassName('item');
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			it[i].style.display='block';
		}
		lis[i].onmouseout=function(){
			it[i].style.display='none';
		}
	}


	let nav=document.getElementsByClassName('nav-body')[0];
	let nlis=nav.getElementsByTagName('li');
	let nit=document.getElementsByClassName('itmi');
	for(let i=0;i<nlis.length-2;i++){
		nlis[i].onmouseover=function(){
			nit[i].style.display='block';
		}
		nlis[i].onmouseout=function(){
			nit[i].style.display='none';
		}
	}


	let gouwuche=document.getElementsByClassName('shoppingche')[0];
	let gotext=gouwuche.getElementsByClassName('quick')[0];
	gouwuche.onmouseover=function(){
		gotext.style.display='block';
	}
	gouwuche.onmouseout=function(){
		gotext.style.display='none';
	}
	console.log(gotext)




	let box=document.getElementsByClassName('bannerbody')[0];
	let blis=box.getElementsByTagName('li');
	let cirbox=document.getElementsByClassName('banner-circlebox')[0];
	let circle=cirbox.getElementsByTagName('div');
	let n=0;
	blis[0].style.zIndex=9;
	for(let i=0;i<circle.length;i++){
		circle[i].onclick=function(){
			for(let j=0;j<blis.length;j++){
				blis[j].style.zIndex=5;
				circle[j].style.background='rgba(0,0,0,0)';
			}
		
			blis[i].style.zIndex=9;
			circle[i].style.background='#5c5c5f';
			n=i;
		}	
		
	}
	


		// 用增加一个属性来存var声明变量的值
	// for(var i=0;i<circle.length;i++){
	// 	circle[i].index=i;
	// 	circle[i].onclick=function(){
	// 		for(let j=0;j<blis.length;j++){
	// 			// blis[j].index1=j;
	// 			blis[j].style.zIndex=5;
	// 		}
		 
	// 		blis[this.index].style.zIndex=9;	
	// 	}
		


		//用闭包函数来存var声明变量的值
		// var n=0;
		// for(var i=0;i<circle.length;i++){
		// circle[i].onclick=(function(j){
		// 	return function(){
		// 		blis[n].style.zIndex=5;
		// 		blis[j].style.zIndex=9;
		// 		n=j;
		// 	}
		// })(i);
			
		// }	
		
		

	// let n=0;
	let t=setInterval(run, 2000);

	box.onmouseenter=function(){
		clearInterval(t);
	}
	box.onmouseleave=function(){
		t=setInterval(run, 2000);
	}


	let bleft=document.getElementsByClassName('banner-left')[0];
	let brigth=document.getElementsByClassName('banner-right')[0];
	// console.log(brigth)
	brigth.onclick=function(){
		run();
	}
	bleft.onclick=function(){
		n--;
		if(n<0){
			n=blis.length-1;
		}
		for(let i=0;i<blis.length;i++){
			blis[i].style.zIndex=5;
			circle[i].style.background='rgba(0,0,0,0)';
		}
		blis[n].style.zIndex=9;
		circle[n].style.background='#5c5c5f';
	}



	function run(){
		n++;
		if(n==blis.length){
			n=0;
		}
		
		for(let i=0;i<blis.length;i++){
			blis[i].style.zIndex=5;
			circle[i].style.background='rgba(0,0,0,0)';
		}
		blis[n].style.zIndex=9;
		circle[n].style.background='#5c5c5f';
		
	}






}