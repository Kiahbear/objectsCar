
 function Car(modelYear, make, speed){
	this.modelYear = modelYear;
	this.make = make;
	this.speed = 0;
	
	this.getModelYear = function() {return this.modelYear;};
	this.getMake = function() {return this.make;};
	this.getSpeed = function() {return this.speed;};

	this.accerlerate = function() {return this.speed + 5;};
	this.brake = function() {return this.speed - 5;};
}

let test = new Car('2000', 'Toyota');
document.write("Initial speed: " + test.getSpeed() + '<br>');
document.write('Accerlerate 1st time: ' + test.accerlerate() + '<br>');
document.write('Accerlerate 2nd time: ' + test.accerlerate() + '<br>');

