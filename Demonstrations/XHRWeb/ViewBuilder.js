function ViewBuilder(data) {
    this.data = data;
}

ViewBuilder.prototype.build = function (callback) {
    var customerTable =
                "<table border='1'>" +
                    "<thead>" +
                        "<tr>" +
                            "<td> Customer Id </td>" +
                            "<td> Customer Name </td>" +
                            "<td> Customer Address </td>" +
                        "</tr>" +
                    "</thead>";

    customerTable += "<tbody>";

    var parsedCustomers = this.data;

    for (var customerIndex in parsedCustomers) {
        var customer = parsedCustomers[customerIndex];

        customerTable +=
            "<tr>" +
                "<td>" + customer.Id + "</td>" +
                "<td>" + customer.Name + "</td>" +
                "<td>" + customer.Address + "</td>" +
            "</tr>";
    }

    customerTable += "</tbody>";
    customerTable += "</table>";

    if (callback && typeof (callback) == 'function')
        callback(customerTable);
};