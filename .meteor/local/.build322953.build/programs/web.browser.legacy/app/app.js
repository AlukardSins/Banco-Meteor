var require = meteorInstall({"client":{"main.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// client/main.html                                                            //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
module.watch(require("./template.main.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////

},"template.main.js":function(){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// client/template.main.js                                                     //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //

Template.body.addContent((function() {
  var view = this;
  return [ HTML.Raw("<div>\n\t\t<h1>Test</h1>\n\t</div>\n\t"), Spacebars.include(view.lookupTemplate("header")), "\n\t", Spacebars.include(view.lookupTemplate("content")), "\n\t", Spacebars.include(view.lookupTemplate("footer")) ];
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("header");
Template["header"] = new Template("Template.header", (function() {
  var view = this;
  return "";
}));

Template.__checkName("content");
Template["content"] = new Template("Template.content", (function() {
  var view = this;
  return Spacebars.include(view.lookupTemplate("transactions"));
}));

Template.__checkName("transactions");
Template["transactions"] = new Template("Template.transactions", (function() {
  var view = this;
  return HTML.Raw('<li class="collection-items">Prueba</li>');
}));

Template.__checkName("footer");
Template["footer"] = new Template("Template.footer", (function() {
  var view = this;
  return "";
}));

/////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// client/main.js                                                              //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);
module.watch(require("./main.html"));
/////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css"
  ]
});
var exports = require("/client/main.js");