function CustomerView(data) {
    this.customers = data;
};

CustomerView.prototype.render = function () {
    var renderedMarkup = "";
    var customerTable =
        "<table border='1'>" +
        "<thead>" +
            "<tr>" +
                "<th> Customer Id </th>" +
                "<th> Name </th>" +
                "<th> Status </th>" +
            "</tr>" +
        "</thead>";

    customerTable += "<tbody>";

    if (this.customers) {
        for (var customerIndex in this.customers) {
            var customer = this.customers[customerIndex];

            customerTable +=
                "<tr>" +
                    "<td>" + customer.id + "</td>" +
                    "<td>" + customer.name + "</td>" +
                    "<td>" + customer.status + "</td>" +
                "</tr>";
        }
    }

    customerTable += "</tbody>";
    customerTable += "</table>";

    return customerTable;
};