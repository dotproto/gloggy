// Adapted from kfis on SO
// http://stackoverflow.com/questions/12592472/how-to-highlight-a-current-menu-item-in-angularjs
gloggy.directive('activeClass', ['$location',
  function(location) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs, controller) {
        var classString = attrs.activeClass;
        scope.location = location;
        var path = attrs.href;

        // debugger;

        scope.$watch('location.path()', function( newPath ) {
          if ( path === newPath ) {
            element.addClass( classString );
          } else {
            element.removeClass( classString );
          }
        });
      } // end link
    };
  } // end 'activeClass'
]);