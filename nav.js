(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['nav'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<header>\n  <div class=\"about-div\">\n    <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"localURL") || (depth0 != null ? lookupProperty(depth0,"localURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"localURL","hash":{},"data":data,"loc":{"start":{"line":3,"column":14},"end":{"line":3,"column":26}}}) : helper)))
    + "\" id=\"logo\" alt=\"\" id=\"logo\">\n    <div class=\"other-buttons\">\n    <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"rulesURL") || (depth0 != null ? lookupProperty(depth0,"rulesURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rulesURL","hash":{},"data":data,"loc":{"start":{"line":5,"column":13},"end":{"line":5,"column":25}}}) : helper)))
    + "\"><button type=\"button\" class=\"btn btn-light\" id=\"nav-button-rules\">How to Play</button></a>\n    <button type=\"button\" class=\"btn btn-light\" id=\"nav-button-settings\">Settings</button>\n    <a href=\"#\"><button type=\"button\" class=\"btn btn-light\" id=\"nav-button-about\">About Us</button></a>\n    <button type=\"button\" class=\"btn btn-light\" id=\"nav-button2\">Balance: <span> $5000 </span></button></a>\n    </div>\n  </div>\n</header>\n<div class=\"black-bar\">\n  <h5> For a limited time, all deposits made to Kaami Co. will be matched and donated to charity! </h5>\n</div>\n";
},"useData":true});
})();