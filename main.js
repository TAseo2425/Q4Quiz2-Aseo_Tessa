function getAverage() {
	let a = document.getElementById("mathgrade").value * 1;
	let b = document.getElementById("sciencegrade").value * 1;
	let c = document.getElementById("englishgrade").value * 1;

	//computing for average of grades	 
	var score = (a + b + c) / 3;
	var average = Number((score.toFixed(2)));

				if (average >= 70 && average <= 74.99){
	  				window.alert("Poor");
	  			} else if (average >= 75 && average <= 79.99) {
	  				window.alert("Needs Improvement");
				} else if (average >= 80 && average <= 86.99) {
	  				window.alert("Satisfactory");
	  			} else if (average >= 87 && average <= 93.99) {
	  				window.alert("Above Satisfactory");
	  			} else if (average >= 94 && average <= 100) {
	  				window.alert("Excellent");
	  			} else {
	  				window.alert("Error. Fail.");
	  			}
	}