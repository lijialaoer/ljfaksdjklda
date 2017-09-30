/*
* @Author: lenovo
* @Date:   2017-09-22 22:25:27
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-30 17:17:25
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
		circle[next].style.background='#5c5c5f';
		circle[now].style.background='rgba(0,0,0,0)';
		animate(blis[now],{left:w});
		animate(blis[next],{left:0},function(){
			flag=1;
		});
		now=next;

	}



	//平移1

	let star=gets('.star-goods')[0];
	let sbtn=gets('.star-btn')[0];
	let sbtnli=gets('a',sbtn);
	let starli=gets('li',star);
	let lefts=(starli[0].offsetWidth+parseInt(getComputedStyle(starli[0],null).marginRight))*5
	let i=0;
	sbtnli[0].onclick=function(){
		if(i==1){
			return;
		}
		i++;

		animate(star,{left:-(i*w)});
		// star.style.transform=`translateX(-${i*lefts}px)`;//平移
	}
	sbtnli[1].onclick=function(){
		if(i==0){
			return;
		}
		i--;
		animate(star,{left:0});
		// star.style.transform=`translateX(0px)`;
	}
	setInterval(function(){
		animate(star,{left:-1240});
	},2000)
	setInterval(function(){
		animate(star,{left:0});
	},4000)
	

	// 按需加载 
	//scrollTop(滚动的高)+innerHeight(浏览器的高) > = offsetTop(元素到文档的高)+任意数(目的只是时间延长点而已的，最小为0)
	let bro=innerHeight;//获取浏览器高
	let floor=document.querySelectorAll('#floor');//获取主元素模块
	console.log(floor)
	let arr=[];
	let cflag=1;
	floor.forEach(element => {
		arr.push(element.offsetTop);
	})//获取元素到文档（body）的高
	window.onscroll=function(){
		if(!cflag){
			return;
		}
		let scrolltop=document.documentElement.scrollTop;//获取滚动高
		arr.forEach((value,index) => {
			if(bro+scrolltop>=value+50){
				let imgs=floor[index].getElementsByTagName('img');
				for(let i=0;i<imgs.length;i++){
					imgs[i].src=imgs[i].alt;
				}
			}
		})
	}
	//侧面
	let cav=document.querySelector('.cenav');
	let lis=cav.querySelectorAll('li');
	// let it=document.querySelector('.cenav>li>.item');
	for(let i=0;i<lis.length;i++){
		let it=lis[i].querySelector('.item');
		if(it!=null){
			lis[i].onmouseover=function(){
			it.style.display='block';
		}
		lis[i].onmouseout=function(){
			it.style.display='none';
		}
		
		}
	}

	//上面
	let nav=document.getElementsByClassName('nav-body')[0];
	let nlis=nav.querySelectorAll('.nav-body>li');
	for(let i=0;i<nlis.length-2;i++){
		let nit=nlis[i].querySelector('.itmi');
		nlis[i].onmouseover=function(){
			nit.style.height='200px';
			
		}
		nlis[i].onmouseout=function(){
			nit.style.height=0;
			
		}
	}

	//购物车
	let gouwuche=document.getElementsByClassName('shoppingche')[0];
	let gotext=gouwuche.getElementsByClassName('quick')[0];
	gouwuche.onmouseover=function(){
		gotext.style.display='block';
	}
	gouwuche.onmouseout=function(){
		gotext.style.display='none';
	}

	//选项卡1
	
	let homeelec=document.querySelector('.homeelec-nav');
	let homeli=homeelec.querySelectorAll('li');
	console.log(homeli)
	let hbody=document.querySelector('.homeelec-body');
	let hli=hbody.querySelectorAll('.homeelec-right');
	let ha=homeelec.querySelectorAll('a');
	hli[0].style.display='block';
	for(let i=0;i<homeli.length;i++){
		homeli[i].onmouseover=function(){
			for(let j=0;j<hli.length;j++){
				hli[j].style.display='none';
				ha[j].style.color='#424242';
				homeli[j].style.borderBottom='none';

			}
			hli[i].style.display='block';
			ha[i].style.color='#ff6700';
			homeli[i].style.borderBottom='2px solid #ff6700';
		}
		
	}
	
	//选项卡2
	let zhineng=document.querySelector('.zhineng-nav');
	let zhinengli=zhineng.querySelectorAll('li');
	console.log(zhinengli)
	let za=zhineng.querySelectorAll('a');
	let zbody=document.querySelector('.zhineng-body');
	let zli=zbody.querySelectorAll('.zhineng-right');
	zli[0].style.display='block';
	for(let i=0;i<zhinengli.length;i++){
		zhinengli[i].onmouseover=function(){
			for(let j=0;j<zli.length;j++){
				za[j].style.color='#424242';
				zhinengli[j].style.borderBottom='none';
				zli[j].style.display='none';
			}
			zli[i].style.display='block';
			za[i].style.color='#ff6700';
			zhinengli[i].style.borderBottom='2px solid #ff6700';
		}
		
	}
	//选项卡3
	let dapei=document.querySelector('.dapei-nav');
	let dapeili=dapei.querySelectorAll('li');
	console.log(dapeili)
	let da=dapei.querySelectorAll('a');
	let dbody=document.querySelector('.dapei-body');
	let dli=dbody.querySelectorAll('.dapei-right');
	dli[0].style.display='block';
	for(let i=0;i<dapeili.length;i++){
		dapeili[i].onmouseover=function(){
			for(let j=0;j<zli.length;j++){
				da[j].style.color='#424242';
				dapeili[j].style.borderBottom='none';
				dli[j].style.display='none';
			}
			dli[i].style.display='block';
			da[i].style.color='#ff6700';
			dapeili[i].style.borderBottom='2px solid #ff6700';
		}
		
	}
	//
	//
	//
	let conpicture=document.querySelectorAll('.content>li');
	conpicture.forEach(element =>{
		let conleft=element.querySelector('.content-left');
	let conright=element.querySelector('.content-right');
	let conbottom=element.querySelector('.content>li>.content-bottom');
	let conli=conbottom.querySelectorAll('div');	
	let conpli=element.querySelectorAll('.trap');
	console.log(conpli)
	console.log(conpli.length)
	conpli[0].style.left=0;
	conli[0].style.background='#ff6700';
	let cnext=0,cnow=0;
	conright.onclick=function(){
		crun();
	}
	conleft.onclick=function(){
		crun1();
	}
	function crun(){
		cnext++;
		if(cnext>=conpli.length){
			cnext-=1;
			return;
		}
		conli[cnext].style.background='#ff6700';
		conli[cnow].style.background='#b0b0b0';
		conpli[cnext].style.left='296px';
		animate(conpli[cnow],{left:-296});
		animate(conpli[cnext],{left:0});
		cnow=cnext;
	
	}

	function crun1(){
		console.log(cnext)
		cnext--;
		if(cnext<0){
			return;
		}
		conpli[cnext].style.left='-296px';
		conli[cnext].style.background='#ff6700';
		conli[cnow].style.background='#b0b0b0';
		animate(conpli[cnow],{left:296});
		animate(conpli[cnext],{left:0});
		cnow=cnext;
	}
	})
	


}