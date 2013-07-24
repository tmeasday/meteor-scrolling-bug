if (Meteor.isClient) {
  Template.hello.items = function () {
    var list = [];
    _.times(500, function(i) {
      list.push({
        text: 'I am item number ' + i + ' so there!', 
        image: images[_.random(0, images.length -1)]
      });
    });
    
    return list;
  };

  Template.hello.events({
    // comment this out to see a noticable difference in performance
    'touchmove .something': function() {
      return;
    }
  });
}