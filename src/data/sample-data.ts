import { CommentType, LikeType, NotificationType } from "@prisma/client";

const users = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    username: "john_doe",
    password: "hashedpassword1",
    image: "https://example.com/image1.jpg",
    location: "New York",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    username: "jane_smith",
    password: "hashedpassword2",
    image: "https://example.com/image2.jpg",
    location: "California",
  },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    username: "alice_johnson",
    password: "hashedpassword3",
    image: "https://example.com/image3.jpg",
    location: "Texas",
  },
  {
    name: "Bob Brown",
    email: "bob.brown@example.com",
    username: "bob_brown",
    password: "hashedpassword4",
    image: "https://example.com/image4.jpg",
    location: "Florida",
  },
  {
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    username: "charlie_davis",
    password: "hashedpassword5",
    image: "https://example.com/image5.jpg",
    location: "Washington",
  },
];


const posts = [
  {
    authorId: "cm5jdowg70000hswh3ornau2k",
    content: "This is my first post!",
    image: "https://example.com/post1.jpg",
  },
  {
    authorId: "cm5jdowg80001hswh3a0vsfts",
    content: "Hello, world! This is a post from Jane.",
    image: "https://example.com/post2.jpg",
  },
  {
    authorId: "cm5jdowg80002hswhhbn5iaa3",
    content: "A post about technology and innovation.",
    image: "https://example.com/post3.jpg",
  },
  {
    authorId: "cm5jdowg80003hswheokt4u2v",
    content: "Exploring new places and cultures.",
    image: "https://example.com/post4.jpg",
  },
  {
    authorId: "cm5jdowg80004hswhkrcyzxn9",
    content: "How to stay fit and healthy.",
    image: "https://example.com/post5.jpg",
  },
  
];

const comments = [
  {
    content: "Great post!",
    type: CommentType.POST,
    authorId: "user2-id",
    postId: "post1-id",
  },
  {
    content: "Thank you!",
    type: CommentType.COMMENT,
    authorId: "user1-id",
    parentId: "comment1-id",
  },
  {
    content: "I agree with your thoughts.",
    type: CommentType.POST,
    authorId: "user3-id",
    postId: "post2-id",
  },
  {
    content: "Amazing insight!",
    type: CommentType.COMMENT,
    authorId: "user4-id",
    parentId: "comment2-id",
  },
  {
    content: "I learned something new today.",
    type: CommentType.POST,
    authorId: "user5-id",
    postId: "post3-id",
  },
  {
    content: "This is very helpful, thanks!",
    type: CommentType.COMMENT,
    authorId: "user6-id",
    parentId: "comment3-id",
  },
  {
    content: "I love your perspective on this!",
    type: CommentType.POST,
    authorId: "user7-id",
    postId: "post4-id",
  },
  {
    content: "I can relate to this so much.",
    type: CommentType.COMMENT,
    authorId: "user8-id",
    parentId: "comment4-id",
  },
  {
    content: "This resonates with me deeply.",
    type: CommentType.POST,
    authorId: "user9-id",
    postId: "post5-id",
  },
  {
    content: "Such a motivating post!",
    type: CommentType.COMMENT,
    authorId: "user10-id",
    parentId: "comment5-id",
  },
  {
    content: "I’m going to try this out!",
    type: CommentType.POST,
    authorId: "user11-id",
    postId: "post6-id",
  },
  {
    content: "Very informative, thank you!",
    type: CommentType.COMMENT,
    authorId: "user12-id",
    parentId: "comment6-id",
  },
  {
    content: "I completely agree with you.",
    type: CommentType.POST,
    authorId: "user13-id",
    postId: "post7-id",
  },
  {
    content: "Such a great post, keep it up!",
    type: CommentType.COMMENT,
    authorId: "user14-id",
    parentId: "comment7-id",
  },
  {
    content: "This is exactly what I needed to hear.",
    type: CommentType.POST,
    authorId: "user15-id",
    postId: "post8-id",
  },
  {
    content: "Very insightful!",
    type: CommentType.COMMENT,
    authorId: "user16-id",
    parentId: "comment8-id",
  },
  {
    content: "Thanks for sharing this!",
    type: CommentType.POST,
    authorId: "user17-id",
    postId: "post9-id",
  },
  {
    content: "I’ll try to apply this in my life.",
    type: CommentType.COMMENT,
    authorId: "user18-id",
    parentId: "comment9-id",
  },
  {
    content: "Great advice!",
    type: CommentType.POST,
    authorId: "user19-id",
    postId: "post10-id",
  },
  {
    content: "I feel inspired now.",
    type: CommentType.COMMENT,
    authorId: "user20-id",
    parentId: "comment10-id",
  },
];

const likes = [
  { userId: "user1-id", postId: "post2-id", type: LikeType.POST },
  { userId: "user2-id", commentId: "comment1-id", type: LikeType.COMMENT },
  { userId: "user3-id", postId: "post3-id", type: LikeType.POST },
  { userId: "user4-id", commentId: "comment2-id", type: LikeType.COMMENT },
  { userId: "user5-id", postId: "post4-id", type: LikeType.POST },
  { userId: "user6-id", commentId: "comment3-id", type: LikeType.COMMENT },
  { userId: "user7-id", postId: "post5-id", type: LikeType.POST },
  { userId: "user8-id", commentId: "comment4-id", type: LikeType.COMMENT },
  { userId: "user9-id", postId: "post6-id", type: LikeType.POST },
  { userId: "user10-id", commentId: "comment5-id", type: LikeType.COMMENT },
  { userId: "user11-id", postId: "post7-id", type: LikeType.POST },
  { userId: "user12-id", commentId: "comment6-id", type: LikeType.COMMENT },
  { userId: "user13-id", postId: "post8-id", type: LikeType.POST },
  { userId: "user14-id", commentId: "comment7-id", type: LikeType.COMMENT },
  { userId: "user15-id", postId: "post9-id", type: LikeType.POST },
  { userId: "user16-id", commentId: "comment8-id", type: LikeType.COMMENT },
  { userId: "user17-id", postId: "post10-id", type: LikeType.POST },
  { userId: "user18-id", commentId: "comment9-id", type: LikeType.COMMENT },
  { userId: "user19-id", postId: "post11-id", type: LikeType.POST },
  { userId: "user20-id", commentId: "comment10-id", type: LikeType.COMMENT },
];

const follows = [
  { followerId: "user1-id", followingId: "user2-id" },
  { followerId: "user2-id", followingId: "user3-id" },
  { followerId: "user3-id", followingId: "user4-id" },
  { followerId: "user4-id", followingId: "user5-id" },
  { followerId: "user5-id", followingId: "user6-id" },
  { followerId: "user6-id", followingId: "user7-id" },
  { followerId: "user7-id", followingId: "user8-id" },
  { followerId: "user8-id", followingId: "user9-id" },
  { followerId: "user9-id", followingId: "user10-id" },
  { followerId: "user10-id", followingId: "user11-id" },
  { followerId: "user11-id", followingId: "user12-id" },
  { followerId: "user12-id", followingId: "user13-id" },
  { followerId: "user13-id", followingId: "user14-id" },
  { followerId: "user14-id", followingId: "user15-id" },
  { followerId: "user15-id", followingId: "user16-id" },
  { followerId: "user16-id", followingId: "user17-id" },
  { followerId: "user17-id", followingId: "user18-id" },
  { followerId: "user18-id", followingId: "user19-id" },
  { followerId: "user19-id", followingId: "user20-id" },
];

const notifications = [
  {
    userId: "user2-id",
    triggererId: "user1-id",
    type: NotificationType.LIKE,
    postId: "post2-id",
  },
  {
    userId: "user1-id",
    triggererId: "user2-id",
    type: NotificationType.COMMENT,
    commentId: "comment1-id",
  },
  {
    userId: "user3-id",
    triggererId: "user4-id",
    type: NotificationType.LIKE,
    postId: "post3-id",
  },
  {
    userId: "user4-id",
    triggererId: "user5-id",
    type: NotificationType.COMMENT,
    commentId: "comment2-id",
  },
  {
    userId: "user5-id",
    triggererId: "user1-id",
    type: NotificationType.LIKE,
    postId: "post4-id",
  },
  {
    userId: "user6-id",
    triggererId: "user2-id",
    type: NotificationType.COMMENT,
    commentId: "comment3-id",
  },
  {
    userId: "user7-id",
    triggererId: "user3-id",
    type: NotificationType.LIKE,
    postId: "post5-id",
  },
  {
    userId: "user8-id",
    triggererId: "user4-id",
    type: NotificationType.COMMENT,
    commentId: "comment4-id",
  },
  {
    userId: "user9-id",
    triggererId: "user5-id",
    type: NotificationType.LIKE,
    postId: "post6-id",
  },
  {
    userId: "user10-id",
    triggererId: "user6-id",
    type: NotificationType.COMMENT,
    commentId: "comment5-id",
  },
  {
    userId: "user11-id",
    triggererId: "user7-id",
    type: NotificationType.LIKE,
    postId: "post7-id",
  },
  {
    userId: "user12-id",
    triggererId: "user8-id",
    type: NotificationType.COMMENT,
    commentId: "comment6-id",
  },
  {
    userId: "user13-id",
    triggererId: "user9-id",
    type: NotificationType.LIKE,
    postId: "post8-id",
  },
  {
    userId: "user14-id",
    triggererId: "user10-id",
    type: NotificationType.COMMENT,
    commentId: "comment7-id",
  },
  {
    userId: "user15-id",
    triggererId: "user11-id",
    type: NotificationType.LIKE,
    postId: "post9-id",
  },
  {
    userId: "user16-id",
    triggererId: "user12-id",
    type: NotificationType.COMMENT,
    commentId: "comment8-id",
  },
  {
    userId: "user17-id",
    triggererId: "user13-id",
    type: NotificationType.LIKE,
    postId: "post10-id",
  },
  {
    userId: "user18-id",
    triggererId: "user14-id",
    type: NotificationType.COMMENT,
    commentId: "comment9-id",
  },
  {
    userId: "user19-id",
    triggererId: "user15-id",
    type: NotificationType.LIKE,
    postId: "post11-id",
  },
  {
    userId: "user20-id",
    triggererId: "user16-id",
    type: NotificationType.COMMENT,
    commentId: "comment10-id",
  },
];

export { users, posts, comments, likes, follows, notifications };
