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

/*function NewPostCtrl($scope, $rootScope){
    this.post = {};
    this.submit = function(){
        this.post.date = new Date();
        $rootScope.posts.push(this.post);
        this.post = {};
        this.postForm.$setPristine();
        angular.element('#modal').modal('hide');
    };
    this.showNewPostForm = function(){
        angular.element('#modal').modal('show');
    }
}*/