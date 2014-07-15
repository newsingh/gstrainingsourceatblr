function DataLoader(dataUrl) {
    this.dataUrl = dataUrl;
};

DataLoader.prototype.load = function (callback) {
    var request = new XMLHttpRequest();

    request.open("GET", this.dataUrl, true);
    request.send();

    request.onreadystatechange = function () {
        if (request.status == 200 && request.readyState == 4) {
            var parsedCustomers = JSON.parse(request.responseText);
            var viewBuilder = new ViewBuilder(parsedCustomers);

            viewBuilder.build(callback);
        }
    };
};