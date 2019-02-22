var require = meteorInstall({"client":{"main.html":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// client/main.html                                                  //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
module.watch(require("./template.main.js"), {
  "*": module.makeNsSetter(true)
});

///////////////////////////////////////////////////////////////////////

},"template.main.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// client/template.main.js                                           //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //

Template.body.addContent((function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("header")), "\n\t", Spacebars.include(view.lookupTemplate("content")), "\n\t", Spacebars.include(view.lookupTemplate("footer")) ];
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
  return "";
}));

Template.__checkName("footer");
Template["footer"] = new Template("Template.footer", (function() {
  var view = this;
  return "";
}));

///////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// client/main.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);
var ReactiveVar;
module.watch(require("meteor/reactive-var"), {
  ReactiveVar: function (v) {
    ReactiveVar = v;
  }
}, 1);
module.watch(require("./main.html"));
Template.hello.onCreated(function () {
  function helloOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
  }

  return helloOnCreated;
}());
Template.hello.helpers({
  counter: function () {
    return Template.instance().counter.get();
  }
});
Template.hello.events({
  'click button': function (event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  }
});
///////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css"
  ]
});
var exports = require("/client/main.js");