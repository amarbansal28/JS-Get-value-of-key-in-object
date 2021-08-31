let employe = {
		address: {
    		city: {
        		pincode: 201305
        }
    }
}
function getValue(obj, prop){
		for(let key in obj){
    		let value = obj[key];
        if(typeof(value) === 'object'){
						getValue(value,prop)        
        } else {
      		  console.log(value);
        }
    }		
}

getValue(employe,'pincode');
