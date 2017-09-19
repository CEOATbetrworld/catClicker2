let Cat = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/cat1.jpg');
    this.nickNames = ko.observableArray(["hey", "hi", "hello"]);

}


let ViewModel = function() {
    this.currentCat = ko.observable(new Cat());
    this.incrementCounter = function() {
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);

        if (this.currentCat().clickCount() === 5) {
            this.currentCat().name("woo hoo upgrade");
        }
    };
}

ko.applyBindings(new ViewModel());