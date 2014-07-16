function showCustomers() {
    var controller = new CustomerController();

    controller.load();
    controller.render(
        function (markup) {
            var resultElement = document.getElementById("result-element");

            resultElement.innerHTML = markup;
        });
}