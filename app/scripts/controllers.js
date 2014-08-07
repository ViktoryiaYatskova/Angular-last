function NewPostCtrl($scope, postsBase){
    $scope.post = {};
    $scope.submit = function(){
        this.post.date = new Date();
        postsBase.addPost(this.post);
        this.post = {};
        this.postForm.$setPristine();
        angular.element('#modal').modal('hide');
    };
    $scope.showNewPostForm = function(){
        angular.element('#modal').modal('show');
    }
}