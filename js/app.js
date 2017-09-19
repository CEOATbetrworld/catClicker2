let ViewModel = function(){
 this.clickCount =  ko.observable(0);
 this.name = ko.observable('Tabby');
 this.imgSrc = ko.observable('img/cat1.jpg');

 this.incrementCounter  = function(){
 	this.clickCount(this.clickCount() + 1);
 	if(this.clickCount() === 10){
     this.name('Woo hoo level up :)');   
 	}
 };
}

ko.applyBindings(new ViewModel());