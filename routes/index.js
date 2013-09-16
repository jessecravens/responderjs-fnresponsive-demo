
/*
 * GET template based on the Device profile
 */

exports.index = function(req, res){	
  console.log("res.profile: " + res.profile);

    switch (res.profile) {

       case "smartPhone":
          res.render('index', { title: 'ResponderJS - Smart Phone', desc: 'Node.js Adaptive/Responsive Utility Framework' });
          break;

       case "tablet":
          res.render('tablet', { title: 'ResponderJS - Tablet', desc: 'Node.js Adaptive/Responsive Utility Framework' });
          break;

       case "desktop":
          res.render('desktop', { title: 'ResponderJS - Desktop', desc: 'Node.js Adaptive/Responsive Utility Framework' });
          break;

       case "largeScreen":
          res.render('largescreen', { title: 'ResponderJS - Large Screen', desc: 'Node.js Adaptive/Responsive Utility Framework' });
          break;

       default:
          //
    }
};