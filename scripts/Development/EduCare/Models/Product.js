(function(ec, ko){
    ec.Models.Product = ec.Models.Product || {};
    var self = this;
    self.ProductId = ko.observable(0);
    self.ProductName = ko.observable("");
    self.UnitPrice = ko.observable("");
    self.UnitsInStock = ko.observable("");
    self.Category = ko.observable({});
    self.Supplier = ko.observable({});
})(EC, ko);