<template>
  <div class="bigbox">
    <div class="reBox">
      <div class="regulateBox">
        <div class="picture">
          <input ref="fileInput" type="file" style="display: none" @change="handleFileSelected" />
          <div class="picBox" style="width: 100%; height: 350px; line-height: 350px; text-align: center; border-radius: 10px; border: 1px solid rgba($color: #ccc, $alpha: 0.5); box-shadow: inset 0 0px 4px rgba(0, 0, 0, 0.2); padding: 15px; cursor: pointer; margin: 15px 0" @click="openFilePicker">
            <div style="color: #808080" v-if="!selectedImage">
              <span>拖放图片至此处</span>
              <span><font style="color: #808080">- 或 -</font> </span>点击上传
            </div>
            <div>
              <img v-if="selectedImage" style="height: 320px" :src="selectedImage" alt="Selected Image" />
            </div>
            <!-- <img :src="promptWords[this.currentIndex].pic[this.stepsIndex]" style="height: 100%" v-if="this.isPic" alt="" /> -->
          </div>
          <div class="submit" @click="videoClick()">生成</div>
        </div>
        <div class="zoomBox">
          <div class="tipsbox">
            <div class="tips">缩放比例</div>
            <input type="number" v-model="zoomvolume" class="inputNumber" />
          </div>
          <div class="zoomRange">
            <input type="range" class="volume" v-model="zoomvolume" min="0" max="10" @input="updateVolume" />
          </div>
        </div>
        <div class="magnifyBox">
          <div class="magnify">
            <div class="tipsbox">
              <div class="tips">放大算法1</div>
            </div>
            <div style="margin: 4px 0 4px 0">
              <div class="content">
                <el-select class="amplify" v-model="amplifyalgo" :placeholder="amplifyalgo || '请选择内容'" @change="handleSelectChange"> <el-option :label="item.content" :value="item.content" v-for="(item, id) in amplifyalgoData" :key="id"></el-option> </el-select>
              </div>
            </div>
          </div>
        </div>
        <div class="sizeBox">
          <div class="magnifyBox">
            <div class="tipsbox">
              <div class="tips">放大算法2</div>
            </div>
            <div class="content">
              <el-select class="content-box" v-model="amplifyalgo" :placeholder="amplifyalgo || '请选择内容'" @change="handleSelectChange"> <el-option :label="item.content" :value="item.content" v-for="(item, id) in amplifyalgoData" :key="id"></el-option> </el-select>
            </div>
          </div>
          <div class="strengthBox">
            <div class="tipsbox">
              <div class="tips">放大算法2强度</div>
              <input type="number" v-model="zoomvolume2" class="inputNumber" />
            </div>
            <input type="range" class="volume" v-model="zoomvolume2" min="0" max="10" @input="updateVolume" />
          </div>
        </div>
        <div class="gfpganBox">
          <div class="tipsbox">
            <div class="tips">GFPGAN可见程度</div>
            <input type="number" v-model="gfpganvisiblevolume" class="inputNumber" />
          </div>
          <input type="range" class="volume" v-model="gfpganvisiblevolume" min="0" max="100" @input="updateVolume" />
        </div>
        <div class="codeBox">
          <div class="codevisibleBox">
            <div class="tipsbox">
              <div class="tips">CodeFormer程度</div>
              <input type="number" v-model="codevisiblevolume" class="inputNumber" />
            </div>
            <input type="range" class="volume" v-model="codevisiblevolume" min="0" max="100" @input="updateVolume" />
          </div>
          <div class="codeweightBox">
            <div class="tipsbox">
              <div class="tips">CodeFormer权重（0=效果最强，1=效果最弱）</div>
              <input type="number" v-model="weightvolume" class="inputNumber" />
            </div>
            <input type="range" class="volume" v-model="weightvolume" min="0" step="0.01" max="1" @input="updateVolume" />
          </div>
        </div>
        <div class="seedBox">
          <div class="checkboxs">
            <el-checkbox class="checkbox" size="large" label="启用像素化" />
            <el-checkbox class="checkbox" size="large" label="保持分辨率不变" />
          </div>
          <div class="pixel">
            <div class="tipsbox">
              <div class="tips">像素块大小</div>
              <input type="number" v-model="pixelvolume" class="inputNumber" />
            </div>
            <input type="range" class="volume" v-model="pixelvolume" min="0" max="20" @input="updateVolume" />
          </div>
        </div>
      </div>
      <div class="resultBox">
        <div class="picBox" style="width: 100%; height: 350px; line-height: 350px; text-align: center; border-radius: 10px; border: 1px solid rgba($color: #ccc, $alpha: 0.5); box-shadow: inset 0 0px 4px rgba(0, 0, 0, 0.2); padding: 15px; cursor: pointer; margin: 15px 0">
          <div style="color: #808080">
            <span>图片</span>
          </div>
          <video :src="promptWords[this.currentIndex].video[this.stepsIndex]" style="width: 100%" autoplay v-if="this.isVid"></video>
        </div>
        <div class="postpicture">
          <div class="postbox" v-for="(item, id) in postPicture" :key="id">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostProcessPage',

  data() {
    return {
      tipsWords: [],
      amplifyalgo: '',
      selectedImage: null,
      amplifyalgoData: [
        {
          content: '无',
        },
        {
          content: 'Lanczos',
        },
        {
          content: '近邻插值',
        },
        {
          content: 'BSRGAN',
        },
        {
          content: 'ESRGAN_4x',
        },
        {
          content: 'LDSR',
        },
        {
          content: 'R-ESRGAN 4x+',
        },
        {
          content: 'R-ESRGAN 4x+ Anime6B',
        },
        {
          content: 'ScuNET',
        },
        {
          content: 'ScuNET PSNR',
        },
        {
          content: 'SwinIR_4x',
        },
      ],
      zoomvolume: 3.1,
      zoomvolume2: 0,
      gfpganvisiblevolume: 0,
      codevisiblevolume: 0,
      weightvolume: 0.5,
      pixelvolume: 5,
      postPicture: [
        {
          content: '文件',
        },
        {
          content: '发送到图生图',
        },
        {
          content: '发送到重绘',
        },
        {
          content: '发送到后期处理',
        },
        {
          content: '发送到openOutpaint',
        },
      ],
    }
  },
  methods: {
    handleSelectChange(value) {
      this.amplifyalgo = value
    },
    videoClick() {
      this.isPic = false
      this.isVid = true
    },
    openFilePicker() {
      // 触发文件选择框
      this.$refs.fileInput.click()
    },
    handleFileSelected(event) {
      // 处理文件选择事件
      const selectedFile = event.target.files[0]
      // 在这里可以进行上传操作或其他逻辑
      console.log('选择的文件:', selectedFile)

      // 将选定的图片显示出来
      if (selectedFile) {
        this.selectedImage = URL.createObjectURL(selectedFile)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.bigbox {
  height: 920px !important;
  width: 100% !important;
  border: 1px solid rgba($color: #808080, $alpha: 0.3);
  border-radius: 10px;
  padding: 0 15px;
  .reBox {
    display: flex;
    .regulateBox {
      width: 56%;
      .picture {
        .submit {
          width: 100%;
          height: 65px;
          line-height: 65px;
          vertical-align: center;
          text-align: center;
          color: orangered;
          background-color: rgb(253, 207, 121);
          border-radius: 10px;
          margin-bottom: 15px;
          cursor: pointer;
          &:hover {
            background-color: rgb(253, 224, 170);
          }
        }
      }
      //   共有属性
      .tips {
        color: #808080;
        font-size: 16px;
      }
      .tipsbox {
        display: flex;
        justify-content: space-between;
        margin: 5px 0 2px 0;
        .inputNumber {
          height: 30px;
          width: 90px;
          border-radius: 10px;
          text-align: center;
          border: 1px solid rgba($color: #ccc, $alpha: 0.5);
          box-shadow: inset 0 0px 4px rgba(0, 0, 0, 0.2);
        }
      }
      .volume {
        width: 100%;
        height: 20px;
      }
      .manify {
        width: 100%;
        .content {
          width: 600px;
        }
        .amplify {
          width: 600px;
        }
      }
      .sizeBox {
        display: flex;
        .magnifyBox {
          width: 50%;
          padding-right: 10px;
        }
        .strengthBox {
          width: 50%;
        }
      }
      .codeBox {
        display: flex;
        .codevisibleBox {
          width: 50%;
          padding-right: 10px;
        }
        .codeweightBox {
          width: 50%;
        }
      }
      .seedBox {
        display: flex;
        & > div {
          width: 50%;
        }
        .checkboxs {
          .checkbox {
            transform: scale(1.15);
            transform-origin: left;
          }
        }
      }
    }
    .resultBox {
      width: 47.5%;
      margin: 15px;
      padding: 15px;
      .postpicture {
        display: flex;
        justify-content: space-between;
      }
      .postbox {
        width: 150px;
        height: 70px;
        line-height: 25px;
        display: flex;
        flex-direction: column;
        align-items: center; /* 水平居中 */
        justify-content: center; /* 垂直居中 */
        text-align: center;
        vertical-align: center;
        background: #f0f0f0;
        padding: 5px;
        border-radius: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
