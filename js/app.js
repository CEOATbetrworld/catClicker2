let Cat = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/cat1.jpg');
    this.nickNames = ko.observableArray(["hey", "hi", "hello"]);

}


let ViewModel = function() {
    let self = this;
    this.currentCat = ko.observable(new Cat());
    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);

        if (self.currentCat().clickCount() === 5) {
            self.currentCat().name("woo hoo upgrade");
        }
    };
}

ko.applyBindings(new ViewModel());