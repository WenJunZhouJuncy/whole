<template>
  <div class="">
    <el-table
      :data="tableData"
      style="width: 100%">
      <template v-for="(item, index) in tableColumn">
        <template v-if="item.slot">
          <el-table-column :prop="item.prop" :formatter="item.formatter" align="center" :label="item.label" :width="item.width" :key="index">
            <template v-slot="scope">
              <slot :name="item.slot" :data="scope.row"></slot>
            </template>
          </el-table-column>
        </template>
        <template v-else-if="item.formatter">
          <el-table-column :prop="item.prop" :formatter="item.formatter" align="center" :label="item.label" :width="item.width" :key="index"></el-table-column>
        </template>
        <template v-else>
          <el-table-column :prop="item.prop" align="center" :label="item.label" :width="item.width" :key="index"></el-table-column>
        </template>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    tableColumn: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      
    };
  },
  computed: {},
  watch: {},
  methods: {
    // roldFormatter(row, column, cellValue, index) {
    //   console.log(row, column, cellValue, index);
    // }
  },
  created() {
    
  },
  mounted() {
    
  },
}
</script>
<style lang='less'>
//@import url(); 引入公共css类
</style>