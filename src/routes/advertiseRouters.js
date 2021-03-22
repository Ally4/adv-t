import express from 'express';

// import uploading from '../middleware/multer';

import advertiseController from '../controllers/post.controller';
// import { advertiseValidationError } from '../validators/advertiseValidation';
// import advertiseMiddleware from '../middleware/protectRoutes';
// import { advertiseValidationError } from '../validators/advertiseValidation';

const router = express();

router.post('/post',
  // advertiseValidationError,
  // uploading,
  // advertiseMiddleware.protect,
  // advertiseValidationError,
  advertiseController.postAdvert);

// router.get('/get-posts',
//   // advertiseValidationError,
//   // uploading,
//   // advertiseMiddleware.protect,
//   advertiseController.getPosts);

// router.get('/get-post/:id',
//   // advertiseValidationError,
//   // uploading,
//   // advertiseMiddleware.protect,
//   advertiseController.getPost);

// router.delete('/delete-post/:id',
//   // advertiseValidationError,
//   // uploading,
//   // advertiseMiddleware.protect,
//   advertiseController.deletePost);

export default router;

// import express from 'express';
// import PostController from '../controllers/post.controller';
// // import { allowAssessRoute } from '../middleware/user.middleware';
// import {
//   validateUserPost,
//   validatePostUrlParam,
//   validateUserEditPost,
// } from '../validators/post.validation';
// import {
//   checkPostOwner,
//   checkLiked,
//   checkUnliked,
// } from '../middleware/post.middleware';
// import CommentController from '../controllers/comment.controller';
// import {
//   checkPostExists,
//   checkComment,
// } from '../middleware/comment.middleware';
// import {
//   validatePostComment,
//   validateUrlIds,
// } from '../validators/comment.validation';

// const router = express.Router();

// router.post('/',
// // allowAssessRoute,
//   validateUserPost, PostController.postStatus);
// router.get('/',
// // allowAssessRoute,
//   PostController.viewPosts);
// router.get('/view/:userId',
// // allowAssessRoute,
//   PostController.viewOwnPosts);
// router.get('/count/:userId',
// // allowAssessRoute,
//   PostController.countOwnPosts);
// router.get(
//   '/:postId/post',
//   // allowAssessRoute,
//   validatePostUrlParam,
//   checkPostExists,
//   PostController.getSinglePost,
// );
// router.patch(
//   '/:postId/edit',
//   // allowAssessRoute,
//   validatePostUrlParam,
//   checkPostOwner,
//   validateUserEditPost,
//   PostController.editPost,
// );
// router.delete(
//   '/:postId/delete',
//   // allowAssessRoute,
//   validatePostUrlParam,
//   checkPostOwner,
//   PostController.deletePost,
// );
// router.post(
//   '/:postId/comments',
//   // allowAssessRoute,
//   validatePostUrlParam,
//   checkPostExists,
//   validatePostComment,
//   CommentController.postComment,
// );
// router.get(
//   '/:postId/comments',
//   // allowAssessRoute,
//   validatePostUrlParam,
//   checkPostExists,
//   CommentController.viewComments,
// );
// router.get('/comments',
// // allowAssessRoute,
//   CommentController.viewAllComments);
// router.patch(
//   '/:postId/comments/:commentId/edit',
//   // allowAssessRoute,
//   validateUrlIds,
//   checkPostExists,
//   checkComment,
//   validatePostComment,
//   CommentController.editComment,
// );
// router.delete(
//   '/:postId/comments/:commentId/delete',
//   // allowAssessRoute,
//   validateUrlIds,
//   checkPostExists,
//   checkComment,
//   CommentController.deleteComment,
// );
// router.patch(
//   '/:postId/like',
//   // allowAssessRoute,
//   validatePostUrlParam,
//   checkPostExists,
//   checkLiked,
//   PostController.likePost,
// );
// router.get('/likes',
// // allowAssessRoute,
//   PostController.getCountedLikes);
// router.patch(
//   '/:postId/unlike',
//   // allowAssessRoute,
//   validatePostUrlParam,
//   checkPostExists,
//   checkUnliked,
//   PostController.unlikePost,
// );
// router.get(
//   '/unlikes',
//   // allowAssessRoute,
//   validatePostUrlParam,
//   PostController.getCountedUnlikes,
// );

// export default router;
