(function(ec, ko){
    ec.Models.Product = ec.Models.Product || {};
    var self = this;
    self.SupplierId = ko.observable(0);
    self.CompanyName = ko.observable("");
    self.ContactName = ko.observable("");
    self.Phone = ko.observable("");
})(EC, ko);