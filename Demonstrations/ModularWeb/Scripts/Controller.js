function CustomerController() {
    this.customers = [];
};

CustomerController.prototype.generateId = function () {
    return Math.floor(
        Math.random() * (10000 - 1) + 1);
};

CustomerController.prototype.load = function () {
    var names = ["Raj", "Ram", "Rakesh", "Peter", "Ismail"];

    for (var index = 0; index < 5; index++) {
        var customer = new Customer(
            this.generateId(), names[index], true);

        this.customers.push(customer);
    }
};

CustomerController.prototype.render = function (callback) {
    var view = new CustomerView(this.customers);
    var renderedMarkup = view.render();

    if (callback && typeof (callback) == 'function')
        callback(renderedMarkup);
};