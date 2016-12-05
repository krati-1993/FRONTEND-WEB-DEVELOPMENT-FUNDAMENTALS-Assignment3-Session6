//sum upto 1000 using while loop 
		var sum = 0;
		var i = 1;
		while(i<=1000){
			if(i==1001){break;}
			var sum = sum + i;	
				i++;
		}
		console.log(sum);