(function(ec, ko){
    ec.Models.Product = ec.Models.Product || {};
    var self = this;
    self.CategoryId = ko.observable(0);
    self.CategoryName = ko.observable("");
    self.Description = ko.observable("");
})(EC, ko);