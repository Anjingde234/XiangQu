		
		var sele = document.querySelector('.selectionuls');
		var square = Array.from(sele.children);
		var act = document.querySelector('#activejs');
		var actli = Array.from(act.children);
		var squareli =  document.querySelector('.square');
		
		function even(arr){
			return arr.filter((val,index)=>{
				if(index%2==0){
					return true;
				}
			})
		}
		var sarr =even(square);
		sarr.forEach((v,k) =>{
			v.onmouseover = function(){
				actli.forEach(n => n.style.display ='none');
				actli[k].style.display = 'block';
				// this.lastChild.classList.add('bank');
				// var banks = document.querySelector('.bank');
				// squareli.lastChild.classList.remove('bank');
				// var banks = this.parentNode.children.lastChild;
				// banks.classList.remove('bank');

			};
			
		});
		
			


		// 右下角
		var canceldiv = document.querySelector('.canceldiv');
		var rightbtm = document.querySelector('.rightbtm');
		canceldiv.onclick = function(){
			rightbtm.style.display='none';
		}
		// 返回顶部
		var maodians = document.querySelector('.maodians');
		window.onscroll = function(){
			var t = document.documentElement.scrollTop || document.body.scrollTop;
			if(t>=45){
				maodians.style.display = 'block'
			}else{
				maodians.style.display = 'none'
			}
		}
