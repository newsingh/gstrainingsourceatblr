function Customer(id, name, status) {
    this.id = id;
    this.name = name;
    this.status = status;
};

Customer.prototype.format = function () {
    var message = this.id + ", " +
        this.name + ", " + this.status;

    return message;
};