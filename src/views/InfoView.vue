<template>
  <!-- 个人信息 -->
  <div class="info-body">
    <div class="info-avatar">
      <img src="../assets/img/touxiang.jpg" alt="" />
      <br />
      <h1>Ahlose</h1>
      <hr />
    </div>
    <div class="info-text">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          🐻码农🐻
        </div>
        <div class="text">
          <div class="web">
            <p style="float: left">前端历程：</p>
            <br />
            <p>
              第一次接触到前端是专升本后的那一个月，从B站的pink老师开始学到后面的vue全家桶，步步艰辛，都靠自学。
            </p>
            <br />
            <p>
              但是学这玩意儿还是挺有意思的，所见即所得，做什么东西就出现什么页面，见效快
            </p>
          </div>
          <div>目前在从事node全栈及开发人工智能</div>
          <hr />
          <div class="blog">
            <p style="float: left">博客介绍：</p>
            <br />
            <p>
              自从21年自学完Vue之后就想做一个小项目练练手，思来想去就准备做一个自己的博客。但是随即就遇到了第一个问题——————我不会后端啊，项目接口咋办啊。当然只能自己解决了，后面就想到了Node.js，然后就去学；学的时候发现了还有express这框架，然后又去看了Mongoose，又在B站和百度上看了很多的参考，终于能写自己的接口了。
            </p>
            <br />
            <p>
              整个博客前后端开发加起来用了一个多星期(本来能更快的，工作了之后就忙着工作的事了，前后跨度用了一年。。。哈哈哈哈哈)。前端采用了<b>Vue2 + VueX + VueRouter + ElementUi</b>,后端使用的是<b>Express + Mongoose</b>📃。
            </p>
            <br />
            <!-- <p>
              源码我已全部上传至Github，欢迎使用这个项目进行学习，如有不明白的地方可以联系我，我会抽空给大家解惑
            </p> -->
          </div>
          <hr />
          <div class="info">
            <p style="float: left">联系我：</p>
            <br />
            <LinkIcon></LinkIcon>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import LinkIcon from '@/components/LinkIcon.vue'
export default {
  created () {
    window.scrollTo(0, 0)
  },
  components: { LinkIcon }
}
</script>

<style scoped>
.info-body {
  width: 100%;
  height: 100%;
}
.info-avatar {
  background-image: url('../assets/img/Nabaci3.jpeg');
  overflow: hidden;
  background-size: cover;
}
.info-avatar > img {
  margin-top: 100px;
  width: 180px;
  border-radius: 180px;
  border: 2px solid rgb(65, 226, 247);
  position: relative;
  left: 50%;
  transform: translate(-50%);
}
.info-avatar > h1 {
  text-align: center;
}
.info-text {
  text-align: center;
  margin-top: 50px;
}
.box-card {
  z-index: 1 !important;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin-top: 30px;
  margin-bottom: -150px;
  width: 1000px;
  height: 800px;
}
.clearfix {
  font-size: 25px;
}
.text {
  font-size: 18px;
  font-family: 'Courier New', Courier, monospace;
}
.web {
  margin-bottom: 10px;
}
.blog {
  margin-top: 10px;
  margin-bottom: 30px;
}
.info {
  margin-top: 30px;
}
</style>
