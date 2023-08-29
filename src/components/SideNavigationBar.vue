<template>
  <div id="sidenav" style="position: relative">
    <!-- 蒙版 -->
    <!-- 侧边栏按钮 -->
    <div
      class="sidebar-button"
      :style="{
        left: sidebarVisible ? '1920px' : '',
        transform: sidebarVisible ? 'translateX(-100%)' : 'translateX(0%)',
      }"
      @click="toggleSidebar"
    >
      <!-- 箭头 -->
      <div class="arrow" :class="{ left: isArrowLeft }"></div>
    </div>

    <!-- 侧边栏页面 -->

    <div
      class="sidebar"
      :style="{
        left: sidebarVisible ? '0' : '-1920px',
      }"
    >
      <!-- 线条 -->
      <img :src="theme.branchImg" alt="" class="theme-img" v-for="(theme, id) in navigations" :key="id" :style="{ left: theme.branchImgLeft, top: theme.branchImgTop, display: theme.branchShow ? 'block' : 'none' }" style="position: absolute" />
      <!-- 大标题 -->
      <div class="theme-button" v-for="(theme, id) in navigations" :key="id" :style="{ left: theme.left, top: theme.top }" :class="{ 'sm-size': theme.isSmall, display: theme.branchShow ? 'block' : 'none' }" @click="themeClick(id)">{{ theme.theme }}</div>
      <!-- 小标题 -->
      <div class="theme" v-for="(item, id) in navigations" :key="id">
        <div
          class="theme-button"
          v-for="(branch, key) in item.branch"
          :key="key"
          :style="{ left: branch.left, top: branch.top, display: item.branchShow ? 'block' : 'none', zIndex: item.branchShow ? '10' : '0' }"
          @click="this.$router.push({ name: branch.routeName, query: { title: item.theme, subnav: branch.subnav } })"
        >
          {{ branch.title }}
        </div>
        <div class="smtitle-button" v-for="(leaves, key) in item.leaves" :key="key" :style="{ left: leaves.left, top: leaves.top, opacity: item.branchShow ? '1' : '0' }" @click="this.$router.push({ name: leaves.routeName, query: { title: item.theme, subnav: leaves.subnav } })">
          {{ leaves.title }}
        </div>
      </div>
      <!-- 知识点目录 -->
      <div class="tips" style="position: absolute; right: -300px; top: 10px" v-if="this.sidebarVisible">
        <ArtWord :text="'知识点目录'"></ArtWord>
      </div>
    </div>
  </div>
</template>

<script>
import ArtWord from './ArtWord.vue'
export default {
  name: 'SideNavigationBar',
  components: { ArtWord },
  data() {
    return {
      sidebarVisible: false, // 侧边栏是否可见
      isArrowLeft: false, // 箭头方向是否向左
      navigations: [
        {
          id: 0,
          theme: '人工智能',
          left: '145px',
          top: '185px',
          branchImg: require('../assets/pictures/SideNavLine/1.png'),
          branchImgLeft: '330px',
          branchImgTop: '225px',
          branchShow: false,
          branch: [
            {
              title: '发展过程',
              left: '440px',
              top: '405px',
              routeName: 'AIdevelopPage',
              subnav: '发展过程',
            },
            {
              title: '拓展介绍',
              left: '440px',
              top: '615px',
              routeName: 'AIdevelopPage',
              subnav: '拓展介绍',
            },
            {
              title: '如何训练AI',
              left: '730px',
              top: '510px',
              routeName: 'AIdevelopPage',
              subnav: '拓展介绍',
            },
            {
              title: 'ChatGPT',
              left: '730px',
              top: '720px',
              routeName: 'AIdevelopPage',
              subnav: '拓展介绍',
            },
          ],
        },
        {
          id: 1,
          theme: 'AI绘画',
          left: '145px',
          top: '400px',
          branchShow: false,
          branchImg: require('../assets/pictures/SideNavLine/2.png'),
          branchImgLeft: '325px',
          branchImgTop: '105px',
          branch: [
            {
              title: '入门原理',
              left: '435px',
              top: '180px',
              routeName: 'APIntroPage',
              subnav: '绘制过程',
            },
            {
              title: '进阶原理',
              left: '435px',
              top: '675px',
              routeName: 'APUpgradePage',
              subnav: '绘制过程',
            },
            {
              title: '绘制过程',
              left: '730px',
              top: '75px',
              routeName: 'APIntroPage',
              subnav: '绘制过程',
            },
            {
              title: '使用原理',
              left: '730px',
              top: '285px',
              routeName: 'APIntroPage',
              subnav: '使用原理',
            },
            {
              title: '图像特征',
              left: '1040px',
              top: '125px',
              routeName: 'APIntroPage',
              subnav: '使用原理',
            },
            {
              title: '噪声图',
              left: '1040px',
              top: '235px',
              routeName: 'APIntroPage',
              subnav: '使用原理',
            },
            {
              title: '生成新图',
              left: '1040px',
              top: '340px',
              routeName: 'APIntroPage',
              subnav: '使用原理',
            },
            {
              title: '训练模型',
              left: '1040px',
              top: '445px',
              routeName: 'APIntroPage',
              subnav: '使用原理',
            },
            {
              title: '提示词',
              left: '730px',
              top: '425px',
              routeName: 'APUpgradePage',
              subnav: '提示词',
            },
            {
              title: '噪声图',
              left: '730px',
              top: '535px',
              routeName: 'APUpgradePage',
              subnav: '噪声图',
            },
            {
              title: '前向扩散',
              left: '730px',
              top: '640px',
              routeName: 'APUpgradePage',
              subnav: '前向扩散',
            },
            {
              title: '后向扩散',
              left: '730px',
              top: '750px',
              routeName: 'APUpgradePage',
              subnav: '后向扩散',
            },
            {
              title: '采样图',
              left: '730px',
              top: '855px',
              routeName: 'APUpgradePage',
              subnav: '采样图',
            },
            {
              title: 'U-Net模型',
              left: '730px',
              top: '965px',
              routeName: 'APUpgradePage',
              subnav: 'U-Net模型',
            },
          ],
        },
        {
          id: 2,
          theme: 'stable diffusion',
          left: '145px',
          top: '630px',
          isSmall: true,
          branchShow: false,
          branchImg: require('../assets/pictures/SideNavLine/3.png'),
          branchImgLeft: '375px',
          branchImgTop: '160px',
          branch: [
            {
              title: '入门原理',
              left: '485px',
              top: '280px',
              routeName: 'SDIntroPage',
              subnav: '基本介绍',
            },
            {
              title: '进阶原理',
              left: '485px',
              top: '775px',
              routeName: 'SDUpgradePage',
              subnav: '基本介绍',
            },
            {
              title: '基本介绍',
              left: '775px',
              top: '175px',
              routeName: 'SDIntroPage',
              subnav: '基本介绍',
            },
            {
              title: '本地搭建',
              left: '775px',
              top: '280px',
              routeName: 'SDIntroPage',
              subnav: '本地搭建',
            },
            {
              title: '交互拟真',
              left: '775px',
              top: '385px',
              routeName: 'SDIntroPage',
              subnav: '交互拟真',
            },
            {
              title: '基本介绍',
              left: '775px',
              top: '635px',
              routeName: 'SDUpgradePage',
              subnav: '基本介绍',
            },
            {
              title: '本地搭建',
              left: '775px',
              top: '770px',
              routeName: 'SDUpgradePage',
              subnav: '本地搭建',
            },
            {
              title: '交互拟真',
              left: '775px',
              top: '910px',
              routeName: 'SDUpgradePage',
              subnav: '交互拟真',
            },
          ],
          leaves: [
            {
              title: 'stable diffusion',
              left: '1070px',
              top: '140px',
              routeName: 'SDIntroPage',
              subnav: '基本介绍',
            },
            {
              title: 'stable diffusion-webui',
              left: '1070px',
              top: '230px',
              routeName: 'SDIntroPage',
              subnav: '基本介绍',
            },
            {
              title: '文生图',
              left: '1070px',
              top: '310px',
              routeName: 'SDRealismPage',
              subnav: '文生图',
            },
            {
              title: '图生图',
              left: '1070px',
              top: '395px',
              routeName: 'SDRealismPage',
              subnav: '图生图',
            },
            {
              title: '图片后期',
              left: '1070px',
              top: '475px',
              routeName: 'SDRealismPage',
              subnav: '图片后期',
            },
            {
              title: 'stable diffusion',
              left: '1070px',
              top: '600px',
              routeName: 'SDUpgradePage',
              subnav: '基本介绍',
            },
            {
              title: 'stable diffusion-webui',
              left: '1070px',
              top: '690px',
              routeName: 'SDUpgradePage',
              subnav: '基本介绍',
            },
            {
              title: '文生图',
              left: '1070px',
              top: '830px',
              routeName: '',
              subnav: '文生图',
            },
            {
              title: '图生图',
              left: '1070px',
              top: '920px',
              routeName: '',
              subnav: '图生图',
            },
            {
              title: '图片后期',
              left: '1070px',
              top: '1000px',
              routeName: '',
              subnav: '图片后期',
            },
            {
              title: '安装Git',
              left: '1465px',
              top: '390px',
              routeName: 'SDInstallPage',
              subnav: '安装Git',
            },
            {
              title: '安装python3.10版',
              left: '1465px',
              top: '480px',
              routeName: 'SDInstallPage',
              subnav: '安装python3.10版',
            },
            {
              title: '安装stable diffusion-webui',
              left: '1465px',
              top: '560px',
              routeName: 'SDInstallPage',
              subnav: '安装stable diffusion-webui',
            },
            {
              title: '下载model',
              left: '1465px',
              top: '640px',
              routeName: 'SDInstallPage',
              subnav: '下载model',
            },
            {
              title: '修改webui-user.bat',
              left: '1465px',
              top: '730px',
              routeName: 'SDInstallPage',
              subnav: '修改webui-user.bat',
            },
            {
              title: '下载依赖，修改launch.py',
              left: '1465px',
              top: '810px',
              routeName: 'SDInstallPage',
              subnav: '下载依赖，修改launch.py',
            },
            {
              title: '运行',
              left: '1465px',
              top: '890px',
              routeName: 'SDInstallPage',
              subnav: '运行',
            },
          ],
        },
        {
          id: 3,
          theme: '实际运用',
          left: '160px',
          top: '920px',
          branchShow: false,
          branchImg: require('../assets/pictures/SideNavLine/4.png'),
          branchImgLeft: '350px',
          branchImgTop: '500px',
          branch: [
            {
              title: '绘画辅助',
              left: '460px',
              top: '470px',
              routeName: 'PAPaintingPage',
              subnav: '绘画辅助',
            },
            {
              title: '辅助建筑设计',
              left: '460px',
              top: '605px',
              routeName: 'PAPaintingPage',
              subnav: '辅助建筑设计',
            },
            {
              title: '绘画2D转3D',
              left: '460px',
              top: '740px',
              routeName: 'PAPaintingPage',
              subnav: '绘画2D转3D',
            },
          ],
        },
      ],
    }
  },
  methods: {
    toggleSidebar() {
      // 切换侧边栏的可见状态
      this.sidebarVisible = !this.sidebarVisible
      // 切换箭头朝向
      this.isArrowLeft = !this.isArrowLeft
    },
    themeClick(id) {
      for (var i = 0; i < this.navigations.length; i++) {
        this.navigations[i].branchShow = false
      }
      this.navigations[id].branchShow = true
    },
  },
}
</script>

<style lang="scss" scoped>
.sidebar-button {
  position: relative;
  width: 40px;
  height: 1080px;
  background-color: rgb(166, 166, 166);
  position: fixed;

  transition: all 0.65s;
  z-index: 999;
  /* 箭头 */
  .arrow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-top: 30px solid transparent;
    border-bottom: 30px solid transparent;
    border-right: 0;
    border-left: 20px solid #4a4a4a;
    cursor: pointer;
    transition: all 0.3s;
  }

  .arrow.left {
    border-left: 0;
    border-right: 20px solid #4a4a4a;
    // transform: rotate(180deg);
  }
}

.sidebar {
  position: relative;
  width: 1920px;
  height: 1080px;
  background: url('https://img.js.design/assets/img/64b3bbdcb60a989527c839c7.png#20fa3f70b4e8577805d4bb8798f167a9');
  position: fixed;
  left: 30px;
  top: 0;
  transition: all 0.65s;
  z-index: 998;
  .theme-button {
    position: absolute;
    min-width: 180px;
    height: 65px;
    border-radius: 30px;
    padding: 0 27px;
    background: rgba(92, 92, 92, 0.5);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 1), 0 0 0 5px rgba(105, 255, 246, 1);
    font-size: 30px;
    line-height: 65px;
    text-align: center;

    color: rgba(105, 255, 246, 1);
    cursor: pointer;
    transition: all 0.25s;
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
  .smtitle-button {
    position: absolute;
    min-width: 145px;
    height: 45px;
    border-radius: 30px;
    padding: 0 20px;
    background: rgba(92, 92, 92, 0.5);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 1), 0 0 0 5px rgba(105, 255, 246, 1);
    font-size: 24px;
    line-height: 45px;
    text-align: center;

    color: rgba(105, 255, 246, 1);
    cursor: pointer;
    transition: all 0.25s;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
}

.sm-size {
  font-size: 24px !important;
}
</style>
