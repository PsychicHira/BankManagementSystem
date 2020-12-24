<template>
  <div class="KnowledgeBase">
    <el-card class="box-card">

      <h3>知识库</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form" label-width="80px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="主题">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="解决方法">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="权限">
              <el-select v-model="form.authority" placeholder="请选择" class="w100">
                <el-option label="共享" value="1"></el-option>
                <el-option label="本机构" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="类别">
              <el-select v-model="form.category" placeholder="请选择" class="w100">
                <el-option label="运行" value="1"></el-option>
                <el-option label="网络" value="2"></el-option>
                <el-option label="办公" value="3"></el-option>
                <el-option label="硬件" value="4"></el-option>
                <el-option label="其他" value="5"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

        </el-row>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="tableData" stripe>
        <el-table-column prop="id" label="运行">
        </el-table-column>
        <el-table-column prop="date" label="网络">
        </el-table-column>
        <el-table-column prop="title" label="办公">
        </el-table-column>
        <el-table-column prop="name" label="硬件">
        </el-table-column>
        <el-table-column prop="address" label="其他">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'NewEvent',
  data() {
    return {
      form: {
        name: '',
        phone: '',
        start: '',
        end: '',
        status: '',
      },
      tableData:{

      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      console.log(this.form);
    },


    //文件上传
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
