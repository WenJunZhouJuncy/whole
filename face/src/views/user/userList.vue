<template>
  <div class='my_table_wrap'>
    <MyTable :tableData="tableData" :tableColumn="tableColumn">
      <template #statusSlot="statusSlot">
        <el-switch
          class="switch"
          v-model="statusSlot.data.status"
          :active-value="1"
          :inactive-value="0"
          active-color="#13ce66"
          inactive-color="#ff4949"
          @change="changeStatus(statusSlot.data)">
        </el-switch>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from '@/components/myTable/myTable'
export default {
  components: {MyTable},
  data() {
    return {
      tableData: [],
      tableColumn: [
        { prop: '_id', label: '用户编号', width: '', slot: '' },
        { prop: 'username', label: '用户昵称', width: '', slot: '' },
        { prop: 'email', label: '用户邮箱', width: '', slot: '' },
        { prop: 'rold', label: '用户权限', width: '', slot: '', formatter: this.roldFormatter },
        { prop: 'status', label: '用户状态', width: '', slot: 'statusSlot' },
      ] 
    };
  },
  computed: {},
  watch: {},
  methods: {
    roldFormatter(row, column, cellValue, index) {
      return row.rold === 0 ? '普通用户' : '管理员'
    },
    async getUser() {
      try {
        const res = await this.$api.getUser()
        if (res.code == 0) {
          this.tableData = res.data
        }
      } catch (err) {
        
      }
    },
    async changeStatus(row) {
      try {
        let params = {
          id: row._id,
          status: row.status
        }
        const res = await this.$api.setUserStatus(params)
        if (res.code == 0) {
          this.$message({
            type: 'success',
            message: row.status === 0 ? '已关闭' : '已开启'
          })
        }
      } catch (err) {
        
      }
    }
  },
  created() {
    this.getUser()
  },
  mounted() {
    
  },
}
</script>
<style lang='less'>
//@import url(); 引入公共css类
.my_table_wrap{
  
}
</style>