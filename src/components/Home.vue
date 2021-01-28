<template>
  <el-container class="home_container">
    <el-header>
      <div class="home_title">xiaoBlog</div>
      <div class="home_userInfoContainer">
        <el-dropdown @command="handleCommand">
                    <span class="el_dropdown_link home_userInfo">
                        {{ currentUserName }}<i class="el-icon-arrow-down el-icon--right home_userInfo"></i>
                    </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="sysMsg">系统消息</el-dropdown-item>
            <el-dropdown-item command="myArticle">我的文章</el-dropdown-item>
            <el-dropdown-item command="myHome">个人主页</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
            default-active="0"
            class="el-menu-vertical-demo" style="background-color: #ECECEC" router>
          <template v-for="(item,index) in this.$router.options.routes" v-if="!item.hidden">
            <el-submenu :index="index+''" v-if="item.children.length>1" :key="index">
              <template slot="title">
                <i :class="item.iconCls"></i>
                <span>{{ item.name }}</span>
              </template>
              <el-menu-item v-for="child in item.children" v-if="!child.hidden" :index="child.path" :key="child.path">
                {{ child.name }}
              </el-menu-item>
            </el-submenu>
            <template v-else>
              <el-menu-item :index="item.children[0].path">
                <i :class="item.children[0].iconCls"></i>
                <span slot="title">{{ item.children[0].name }}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <!--面包屑-->
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{path: '/home'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-text="this.$router.currentRoute.name"></el-breadcrumb-item>
          </el-breadcrumb>
          <keep-alive>
            <router-view v-if="this.$route.meta.keepAlive"></router-view>
          </keep-alive>
          <router-view v-if="!this.$route.meta.keepAlive"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import {getRequest} from "../utils/api";

export default {
  name: "Home",
  methods: {
    handleCommand(command) {
      let _this = this;
      if (command == 'logout') {
        this.$confirm('注销登录吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(function () {
          getRequest("/logout")
          _this.currentUserName = '游客';
          _this.$router.replace({path: '/'});
        }), function () {
          //取消

        }
      }
    }
  },
  mounted: function () {
    this.$alert('You are welcome!', '友情提示',
        {
          confirmButtonText: '确定',
          callback: action => {
          }
        });
    let _this = this;
    /*
    1. then 函数的两个参数都是function，前一个是成功getRequest执行成功时是调用，
    后一个则是执行失败时调用。
    2. msg是getRequest执行成功是的返回值。
     */
    getRequest("/currentUserName").then(function (msg) {
          _this.currentUserName = msg.data;

        }, function (msg) {
          _this.currentUserName = '游客';

        }
    );
  },
  data() {
    return {
      currentUserName: ''
    }
  }

}
</script>

<style scoped>
.home_container {
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
}

.el-header {
  background-color: #20a0ff;
  color: #333;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.el-aside {
  background-color: #ECECEC;
}

.el-main {
  background-color: #fff;
  color: #000;
  text-align: center;
}

.home_title {
  color: #fff;
  font-size: 22px;
  display: inline;
}

.home_userInfo {
  color: #fff;
  cursor: pointer;
}

.home_userInfoContainer {
  display: inline;
  margin-right: 20px;
}


</style>



























