<template>
  <template v-if="!item.children || item.children.length === 0">
    <el-menu-item :index="item.path">
      <template #title>
        <span>{{ item.title }}</span>
      </template>
    </el-menu-item>
  </template>

  <el-sub-menu v-else :index="item.path || item.title">
    <template #title>
      <span>{{ item.title }}</span>
    </template>
    <sidebar-item
      v-for="child in item.children"
      :key="child.path"
      :item="child"
    />
  </el-sub-menu>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
