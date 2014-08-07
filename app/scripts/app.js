'use strict';

var app = angular.module('angularTrainingApp', ['directives'])
   .factory('postsBase', ['$http', function($http){
        var posts, postsFileAddr = 'posts.json';

        function getPostsBase() {
            $http.get(postsFileAddr).success(function (data) {
                if (data instanceof Object && data.hasOwnProperty('posts')) {
                posts = data.posts;
                }
            });
        }

        function changeFileUrl(url){
            postsFileAddr = url;
        }

        function addPost(newPost){
            if(posts) {
                posts.push(newPost);
            }
        }

        function getPosts(){
            if(!posts){
                getPostsBase();
            }
            return posts;
        }

        getPostsBase();
        return {
            getPosts: getPosts,
            changeFileUrl: changeFileUrl,
            addPost: addPost
        }
    }]);