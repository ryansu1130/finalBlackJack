(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['nav'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"other-buttons\">\n    <a href="
    + alias4(((helper = (helper = lookupProperty(helpers,"rulesURL") || (depth0 != null ? lookupProperty(depth0,"rulesURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rulesURL","hash":{},"data":data,"loc":{"start":{"line":6,"column":12},"end":{"line":6,"column":24}}}) : helper)))
    + " target=_blank><button type=\"button\" class=\"btn btn-light\" id=\"nav-button-rules\">How to Play</button></a>\n    <a href=\"#\"><button type=\"button\" class=\"btn btn-light\" id=\"nav-button-settings\">Settings</button>\n    <a href=\"#\"><button type=\"button\" class=\"btn btn-light\" id=\"nav-button-about\">About Us</button></a>\n    <button type=\"button\" class=\"btn btn-light\" id=\"nav-button2\">Balance: <span id=\"balance\"> $"
    + alias4(((helper = (helper = lookupProperty(helpers,"balance") || (depth0 != null ? lookupProperty(depth0,"balance") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"balance","hash":{},"data":data,"loc":{"start":{"line":9,"column":95},"end":{"line":9,"column":106}}}) : helper)))
    + " </span></button></a>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<header>\n  <div class=\"about-div\">\n    <a href = \"/\"> <img src="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"logoURL") || (depth0 != null ? lookupProperty(depth0,"logoURL") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"logoURL","hash":{},"data":data,"loc":{"start":{"line":3,"column":28},"end":{"line":3,"column":39}}}) : helper)))
    + " id=\"logo\" alt=\"\" id=\"logo\"></a>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"something") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":11,"column":11}}})) != null ? stack1 : "")
    + "  </div>\n</header>\n<div class=\"black-bar\">\n  <h5> For a limited time, all deposits made to Kaami Co. will be matched and donated to charity! </h5>\n</div>\n";
},"useData":true});
})();