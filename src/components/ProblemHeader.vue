<template>
  <div class="problem-header problem-row">
    <div class="col status">Status</div>
    <div class="col id">ID</div>
    <div class="col title">Title</div>
    <div class="col difficulty">Difficulty</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.problem-row {
  display: grid;
  grid-template-columns: 50px 80px 1fr 100px;
  align-items: center;
}

.problem-header {
  height: 40px;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  font-size: 13px;
  font-weight: 600;
  color: #374151;
}

.col {
  padding: 0 12px;
}

.status,
.id,
.difficulty {
  text-align: center;
}

.title {
  text-align: center;
}
</style>
