<template>
  <div class="problem-header problem-row">
    <div class="col id">ID</div>
    <div class="col title">Title</div>
    <div class="col difficulty">Difficulty</div>
  </div>
</template>

<script setup lang="ts">
/* 表头不需要任何逻辑，留空即可 */
</script>

<style scoped>
/* 和 ProblemCard 共用的列布局 */
.problem-row {
  display: grid;
  grid-template-columns: 80px 1fr 100px;
  align-items: center;
}

/* 表头样式 */
.problem-header {
  height: 40px;
  font-size: 13px;
  font-weight: 600;
  color: #374151;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
}

.col {
  padding: 0 12px;
}

.id {
  text-align: center;
}

.difficulty {
  text-align: center;
}
</style>
