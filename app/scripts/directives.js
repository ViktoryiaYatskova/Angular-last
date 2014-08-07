var app = angular.module('directives', [])
    .directive('blogPost', ['postsBase', function(postsBase) {
        return {
            link: function (scope, element, attrs) {
                scope.posts = postsBase.getPosts();
            },
            restrict: 'E',
            templateUrl: 'views/posts-body.html',
            replace: true,
            transclude: true
        }
    }])
    .directive('newPost', ['postsBase', function(postsBase) {
        return {
            restrict: 'E',
            templateUrl: 'views/new_post.html',
            replace: true,
            transclude: true,
            controller: NewPostCtrl
        }
    }]);
