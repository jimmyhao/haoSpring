'use strict';

/* Services */
/* AngularJS application. AngularJS services are singletons, means each service is instantiated only once, so each part of our application gets access to the same instance of the AngularJS service. AngularJS services are lazily instantiated, means Angular only instantiates a service when an application component who depends on it [another service, controller or directive e.g.], gets loaded.
Do note that AngularJS services are different than AngularJS controllers. Controllers are created and destroyed several times while navigating to different views, but services are instantiated only once and then reused everywhere in application.
$log, $window, $location, $http are few examples of built-in services. A built-in AngularJS service name starts with $. For complete list, check out the AngularJS documentation.
*/
/*
When you’re using Service, it’s instantiated with the ‘new’ keyword.
Because of that, you’ll add properties to ‘this’ and the service will
return ‘this’. When you pass the service into your controller,
those properties on ‘this’ will now be available on that controller
through your service
*/

angular.module('myApp.services', []).
  value('version', '0.1');
