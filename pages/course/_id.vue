<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- /课程详情 开始 -->
    <section class="container">
      <section class="path-wrap txtOf hLh30">
        <a href="#" title class="c-999 fsize14">首页</a>
        \
        <a href="#" title class="c-999 fsize14">{{
          courseWebVo.subjectLevelOne
        }}</a>
        \
        <span class="c-333 fsize14">{{ courseWebVo.subjectLevelTwo }}</span>
      </section>
      <div>
        <article class="c-v-pic-wrap" style="height: 357px">
          <section class="p-h-video-box" id="videoPlay">
            <img
              :src="courseWebVo.cover"
              :alt="courseWebVo.title"
              class="dis c-v-pic"
              height="357px"
            />
          </section>
        </article>
        <aside class="c-attr-wrap">
          <section class="ml20 mr15">
            <h2 class="hLh30 txtOf mt15">
              <span class="c-fff fsize24">{{ courseWebVo.title }}</span>
            </h2>
            <section class="c-attr-jg">
              <span class="c-fff">价格：</span>
              <b class="c-yellow" style="font-size: 24px"
                >￥{{ courseWebVo.price }}</b
              >
            </section>
            <section class="c-attr-mt c-attr-undis">
              <span class="c-fff fsize14"
                >主讲： {{ courseWebVo.teacherName }}&nbsp;&nbsp;&nbsp;</span
              >
            </section>
            <section class="c-attr-mt of">
              <span class="ml10 vam">
                <em class="icon18 scIcon"></em>
                <a class="c-fff vam" title="收藏" href="#">收藏</a>
              </span>
            </section>
            <section  v-if="isbuy || Number(courseWebVo.price) === 0" class="c-attr-mt">
              <a href="#" title="立即观看" class="comm-btn c-btn-3">立即观看</a>
            </section>
            <section  v-else class="c-attr-mt">
              <a @click="createOrders()" href="#" title="立即购买" class="comm-btn c-btn-3">立即购买</a>
            </section>
          </section>
        </aside>
        <aside class="thr-attr-box">
          <ol class="thr-attr-ol clearfix">
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">购买数</span>
                <br />
                <h6 class="c-fff f-fM mt10">{{ courseWebVo.buyCount }}</h6>
              </aside>
            </li>
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">课时数</span>
                <br />
                <h6 class="c-fff f-fM mt10">20</h6>
              </aside>
            </li>
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">浏览数</span>
                <br />
                <h6 class="c-fff f-fM mt10">501</h6>
              </aside>
            </li>
          </ol>
        </aside>
        <div class="clear"></div>
      </div>
      <!-- /课程封面介绍 -->
      <div class="mt20 c-infor-box">
        <article class="fl col-7">
          <section class="mr30">
            <div class="i-box">
              <div>
                <section id="c-i-tabTitle" class="c-infor-tabTitle c-tab-title">
                  <a name="c-i" class="current" title="课程详情">课程详情</a>
                </section>
              </div>
              <article class="ml10 mr10 pt20">
                <div>
                  <h6 class="c-i-content c-infor-title">
                    <span>课程介绍</span>
                  </h6>
                  <div class="course-txt-body-wrap">
                    <section class="course-txt-body">
                      <p v-html="courseWebVo.description">
                        {{ courseWebVo.description }}
                      </p>
                    </section>
                  </div>
                </div>
                <!-- /课程介绍 -->
                <div class="mt50">
                  <h6 class="c-g-content c-infor-title">
                    <span>课程大纲</span>
                  </h6>
                  <section class="mt20">
                    <div class="lh-menu-wrap">
                      <menu id="lh-menu" class="lh-menu mt10 mr10">
                        <ul>
                          <!-- 文件目录 -->
                          <li
                            class="lh-menu-stair"
                            v-for="chapter in chapterVideoList"
                            :key="chapter.id"
                          >
                            <a
                              href="javascript: void(0)"
                              :title="chapter.title"
                              class="current-1"
                            >
                              <em class="lh-menu-i-1 icon18 mr10"></em
                              >{{ chapter.title }}
                            </a>

                            <ol class="lh-menu-ol" style="display: block">
                              <li
                                class="lh-menu-second ml30"
                                v-for="video in chapter.children"
                                :key="video.id"
                              >
                                <a
                                  :href="'/player/' + video.videoSourceId"
                                  target="_blank"
                                >
                                  <span class="fr">
                                    <i class="free-icon vam mr10">免费试听</i>
                                  </span>
                                  <em class="lh-menu-i-2 icon16 mr5">&nbsp;</em
                                  >{{ video.title }}
                                </a>
                              </li>
                            </ol>
                          </li>
                        </ul>
                      </menu>
                    </div>
                  </section>
                </div>
                <!-- /课程大纲 -->
              </article>
            </div>
          </section>
        </article>
        <aside class="fl col-3">
          <div class="i-box">
            <div>
              <section class="c-infor-tabTitle c-tab-title">
                <a title href="javascript:void(0)">主讲讲师</a>
              </section>
              <section class="stud-act-list">
                <ul style="height: auto">
                  <li>
                    <div class="u-face">
                      <a href="#">
                        <img
                          :src="courseWebVo.avatar"
                          width="50"
                          height="50"
                          alt
                        />
                      </a>
                    </div>
                    <section class="hLh30 txtOf">
                      <a class="c-333 fsize16 fl" href="#">{{
                        courseWebVo.teacherName
                      }}</a>
                    </section>
                    <section class="hLh20 txtOf">
                      <span class="c-999">{{ courseWebVo.intro }}</span>
                    </section>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </aside>
        <div class="clear"></div>
      </div>
      <!-- 评论 -->
      <div class="mt20 c-infor-box">
        <article class="fl col-7">
          <section class="mr30">
            <div class="i-box">
              <div>
                <section id="c-i-tabTitle" class="c-infor-tabTitle c-tab-title">
                  <a name="c-i" class="current" title="课程评论">课程评论</a>
                </section>
              </div>
              <article class="ml10 mr10 pt20">
                <!-- 用户输入评论 -->
                <div>
                  <section>
                    <ul style="height: auto">
                      <li>
                        <!-- 用户头像 未登录-默认头像-->
                        <div class="u-face u-face2" v-if="!loginInfo.id">
                          <a href="#">
                            <img
                              src="https://ede-8888.oss-cn-shenzhen.aliyuncs.com/2020/09/11/avatar-boy.gif"
                              alt
                              class="user-img"
                            />
                          </a>
                        </div>
                        <!-- 用户头像 已登陆-用户头像-->
                        <div class="u-face u-face2" v-if="loginInfo.id">
                          <a href="#">
                            <img :src="loginInfo.avatar" alt class="user-img" />
                          </a>
                        </div>
                        <!-- 用户输入评论 -->
                        <div>
                          <section class="hLh50 txtOf text1">
                            <textarea
                              cols="100"
                              name="msg"
                              rows="5"
                              placeholder="发条友善的评论"
                              class="ipt-txt"
                              style="margin-left: 15px"
                              v-model="commentVo.content"
                            ></textarea>
                          </section>
                        </div>
                        <!-- 发布按钮 -->
                        <div>
                          <section class="hLh50 txtOf">
                            <div style="padding-left: 690px; margin-top: 10px">
                              <el-button
                                type="primary"
                                round
                                size="medium"
                                @click="publicComment()"
                                >发表评论</el-button
                              >
                            </div>
                          </section>
                        </div>
                      </li>
                    </ul>
                  </section>
                </div>
                <!-- /评论列表 -->
                <div class="mt50">
                  <section class="mt20">
                    <div class="lh-menu-wrap">
                      <menu id="lh-menu" class="lh-menu mt10 mr10">
                        <ul style="height: auto">
                          <li v-for="comment in data.items" :key="comment.id">
                            <div class="u-face u-face2">
                              <a href="#">
                                <img
                                  :src="comment.avatar"
                                  alt
                                  class="user-img"
                                />
                              </a>
                            </div>
                            <!-- 用户评论列表 -->
                            <div class="comment-list">
                              <section class="hLh50 txtOf">
                                <div>
                                  <p class="name-font">
                                    {{ comment.nickname }}
                                  </p>
                                </div>
                                <div>
                                  <p class="content-font">
                                    {{ comment.content }}
                                  </p>
                                </div>
                                <div style="margin-left: 550px">
                                  <p>{{ comment.gmtCreate }}</p>
                                </div>
                              </section>
                            </div>
                            <hr />
                          </li>
                        </ul>
                      </menu>
                    </div>
                  </section>
                </div>
                <!-- /课程大纲 -->
              </article>
            </div>
          </section>
        </article>
        <div class="clear"></div>
      </div>
      <!-- 公共分页 开始 -->
      <div>
        <div class="paging">
          <!-- undisable这个class是否存在，取决于数据属性hasPrevious -->
          <a
            :class="{ undisable: !data.hasPrevious }"
            href="#"
            title="首页"
            @click.prevent="getCommentList(1)"
            >首页</a
          >

          <a
            :class="{ undisable: !data.hasPrevious }"
            href="#"
            title="前一页"
            @click.prevent="getCommentList(data.current - 1)"
            >&lt;</a
          >

          <a
            v-for="page in data.pages"
            :key="page"
            :class="{
              current: data.current == page,
              undisable: data.current == page,
            }"
            :title="'第' + page + '页'"
            href="#"
            @click.prevent="getCommentList(page)"
            >{{ page }}</a
          >

          <a
            :class="{ undisable: !data.hasNext }"
            href="#"
            title="后一页"
            @click.prevent="getCommentList(data.current + 1)"
            >&gt;</a
          >

          <a
            :class="{ undisable: !data.hasNext }"
            href="#"
            title="末页"
            @click.prevent="getCommentList(data.pages)"
            >末页</a
          >

          <div class="clear" />
        </div>
      </div>
      <!-- 公共分页 结束 -->
    </section>
    <!-- /课程详情 结束 -->
  </div>
</template>

<script>
import courseApi from "@/api/course";
import commentApi from "@/api/comment";
import ordersApi from '@/api/orders'
import cookie from "js-cookie";
export default {
  data() {
    return {
      page: 1, //当前页
      courseWebVo: {},
      chapterVideoList: [],
      courseId: "",
      data: {},
      token: "",
      commentVo: {},
      loginInfo: {
        id: "",
        age: "",
        avatar: "",
        mobile: "",
        nickname: "",
        sex: "",
      },
      isbuy: false,
    };
  },
  created() {
    if (this.$route.params && this.$route.params.id) {
      this.courseId = this.$route.params.id;
      //根据课程id查询章节和小节
      this.getCourseInfo();
      //查看课程评论
      this.getCommentList(1);
      //展示头像名称数据
      this.showInfo();
    }
  },
  methods: {
    //获取课程详细信息
    getCourseInfo() {
      courseApi.getCourseInfo(this.courseId).then((response) => {
        this.courseWebVo = response.data.data.courseWebVo;
        this.chapterVideoList = response.data.data.chapterVideoList;
        this.isbuy=response.data.data.isBuy
      });
    },
    //获取课程评论信息
    getCommentList(page) {
      commentApi.getCommentList(page, 4, this.courseId).then((response) => {
        this.data = response.data.data;
      });
    },
    //展示头像名称数据
    showInfo() {
      //debugger
      var jsonStr = cookie.get("yy_ucenter");
      //alert(jsonStr)
      if (jsonStr) {
        this.loginInfo = JSON.parse(jsonStr);
        console.log(this.loginInfo.id);
      }
    },
    //发表评论
    publicComment() {
      //未登录不允许发表评论
      if (!this.loginInfo.id) {
        this.$message({
          type: "error",
          message: "操作失败，请先登录",
        });
      } else {
        this.commentVo.courseId = this.courseWebVo.id;
        this.commentVo.teacherId = this.courseWebVo.teacherId;
        commentApi.saveComment(this.commentVo).then((response) => {
          this.$message({
            type: "success",
            message: "评论成功",
          });
        });
        //刷新页面
        window.location.reload();
      }
    },
    //生成订单
    createOrders() {
      ordersApi.createOrders(this.courseId).then((response) => {
        //获取返回订单号
        //生成订单之后，跳转订单显示页面
        this.$router.push({ path: "/orders/" + response.data.data.orderId });
      });
    },
  },
};
</script>

<style scoped>
.u-face2 {
  float: left;
  position: relative;
  margin-left: 10px;
}
.user-img {
  height: 40px;
  width: 40px;
}
.comment-style {
  /* float: left; */
  margin-top: 20px;
  position: relative;
}
.comment-list {
  margin-left: 60px;
  height: auto;
  padding-top: 20px;
}
.name-font {
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  color: #c0c0c0;
  margin-bottom: 10px;
}
.content-font {
  line-height: 20px;
  padding: 2px 0;
  font-size: 14px;
  text-shadow: none;
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-word;
  color: #000;
}
.paging {
  padding-right: 370px;
}
</style>
