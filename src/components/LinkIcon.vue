<template>
  <div class="link-icon">
    <li>
      <el-tooltip effect="light" class="item" content="我的Githubヾ(≧▽≦*)o" placement="bottom">
        <a href="https://github.com/836300452" target="_blank"><img src="../assets/img/github.png" alt="" /></a>
      </el-tooltip>
    </li>

    <li>
      <el-tooltip effect="light" class="item" content="我的B站ヾ(≧▽≦*)o" placement="bottom">
        <a href="https://space.bilibili.com/480252913?spm_id_from=333.999.0.0" target="_blank"><img src="../assets/img/Bili.png" alt="" /></a>
      </el-tooltip>
    </li>
    <li>
      <el-tooltip effect="light" class="item" content="我的微博ヾ(≧▽≦*)o" placement="bottom">
        <a href="https://weibo.com/u/5384729992" target="_blank"><img src="../assets/img/weibo.png" alt="" /></a>
      </el-tooltip>
    </li>
  </div>
</template>

<script>
export default {
  name: 'LinkIcon',
  data () {
    return {

    }
  },
  mounted () { },
  methods: {}
}
</script>

<style   scoped>
.link-icon {
  position: absolute;
  left: 50%;
  top: 78%;
  transform: translate(-50%);
}
.link-icon > li {
  float: left;
  list-style-type: none;
}
.link-icon > li > a > img {
  padding-top: 10px;
  margin-left: 30px;
  margin-top: 20px;
  width: 50px;
  height: 50px;
}
</style>
