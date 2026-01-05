<script setup lang="ts">
import type { Problem } from '@/types/problem'

defineProps<{
  problem: Problem
}>()
</script>

<template>
  <div class="problem-card problem-row">
    <!-- ID -->
    <div class="col id">
      {{ problem.id }}
    </div>

    <!-- Title -->
    <div class="col title">
      <h3 class="name">{{ problem.title }}</h3>
      <p class="desc">{{ problem.description }}</p>
    </div>

    <!-- Difficulty -->
    <div class="col difficulty">
      <span
        class="difficulty-tag"
        :class="problem.difficulty.toLowerCase()"
      >
        {{ problem.difficulty }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.problem-card {
  height: 56px;
  border-bottom: 1px solid #f3f4f6;
  background: #ffffff;
  cursor: pointer;
}

.problem-card:hover {
  background: #f9fafb;
}

.col {
  padding: 0 12px;
  overflow: hidden;
}

.id {
  text-align: center;
  font-weight: 500;
  color: #374151;
}

.title {
  overflow: hidden;
}

.name {
  margin: 0;
  font-size: 15px;
  color: #111827;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.desc {
  margin: 2px 0 0;
  font-size: 12px;
  color: #6b7280;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.difficulty {
  text-align: center;
}

.difficulty-tag {
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 12px;
  color: #fff;
}

.easy {
  background: #10b981;
}

.medium {
  background: #f59e0b;
}

.hard {
  background: #ef4444;
}
</style>
