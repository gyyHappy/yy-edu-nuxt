import request from '@/utils/request'

export default {
  //条件分页课程评论的方法
  getCommentList(page,limit,courseId) {
    return request({
      url: `/eduservice/comment/pageCommentList/${page}/${limit}/${courseId}`,
      method: 'post',
    })
  },

  //添加评论
  saveComment(commentVo){
    return request({
      url: `/eduservice/comment/saveComment/`,
      method: 'post',
      data: commentVo
    })
  }

}