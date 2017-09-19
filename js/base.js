/*
* @Author: lenovo
* @Date:   2017-09-19 17:20:28
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-19 17:22:24
*/
function classname(classname,obj){
		obj=obj?obj:document;
		if(document.getElementsByClassName){
			return obj.getElementsByClassName(classname);
		}else{
			let all=obj.getElementsByTagName('*');
			let narr=[];
			for(let i=0;i<all.length;i++){
				if(checkclass(all[i].className,classname)){
					narr.push(arr[i]);
				}
			}
		}
		return narr;
	}
	function checkclass(className,classname){
		let arr=className.split(' ');
		for(let i=0;i<arr.length;i++){
			if(arr[i]==classname){
				return true;
			}
		}
		return false;
	}


	function gets(select,obj){
		obj=obj?obj:document;
		let fir=select.charAt(0);
		if(fir=='.'){
			return classname(select.substring(1),obj);
		}else if(fir=='#'){
			return document.getElementById(select.substring(1));
		}else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
			return obj.getElementsByTagName(select);
		}
	}