		var sele = document.querySelector('.selectionuls');
		var square = Array.from(sele.children);
		var act = document.querySelector('#activejs');
		var actli = Array.from(act.children);
		
		function even(arr){
			return arr.filter((val,index)=>{
				if(index%2==0){
					return true;
				}
			})
		}
		var sarr =even(square)
		sarr.forEach((v,k) =>{
			v.onmouseover = function(){
				actli.forEach(n => n.style.display ='none');
				actli[k].style.display = 'block';
			};
			
		});
		