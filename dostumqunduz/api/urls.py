from .views import PostView, ProfileApiView, SendFriendRequestApiView, SentFriendRequestApiView, AcceptFriendRequestView, CommentView, IncomingFriendRequestsView, IncomingFriendRequestsViewTest, TestMix, ProfileGetApiView, FriendsPostApiView, GetCommentView, LikeView, LikeViewSet, UnlikeView, UpdateDeleteCommentView, SearchView, TimelineView, TextPost
from rest_framework.routers import DefaultRouter
from django.urls import path, include, re_path

router = DefaultRouter()
router.register(r'accept', AcceptFriendRequestView, basename='accept')
router.register(r'testpost', TextPost, basename='testpost')



urlpatterns=[
    path('register/', ProfileApiView.as_view()),
    path('send_request/', SendFriendRequestApiView.as_view()),
    path('sent_request/', SentFriendRequestApiView.as_view()),
    path('like/', LikeView.as_view()),
    path('unlike/<int:pk>/', UnlikeView.as_view()),
    path('comment/', CommentView.as_view()),
    path('post/', PostView.as_view()),
    path('search/<str:name>-<str:last_name>/', SearchView.as_view()),
    path('search/<str:name>/', SearchView.as_view()),
    path('update_delete_comment/<int:pk>/', UpdateDeleteCommentView.as_view()),
    path('friend_requests/', IncomingFriendRequestsView.as_view()),
    path('testmix/', TestMix.as_view()),
    path('get_profile/', ProfileGetApiView.as_view()),
    path('timeline/<int:pk>/', TimelineView.as_view()),
    path('friends_posts/', FriendsPostApiView.as_view()),
    path('get_comment/<int:id>/', GetCommentView.as_view()),
    path('auth/', include('dj_rest_auth.urls')),
]

urlpatterns += router.urls



