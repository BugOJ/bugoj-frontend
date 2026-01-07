<template>
  <div
    class="problem-card problem-row"
    @click="goDetail"
  >
    <!-- Status -->
    <div class="col status">
      <span class="status-dot" :class="problem.status?.toLowerCase()" />
    </div>

    <!-- ID -->
    <div class="col id">{{ problem.pid }}</div>

    <!-- Title -->
    <div class="col title">
      <div class="name">{{ problem.title }}</div>
      <div class="desc">{{ problem.description }}</div>
    </div>

    <!-- Difficulty -->
    <div class="col difficulty">
      <span class="tag" :class="problem.difficulty?.toLowerCase()">
        {{ problem.difficulty }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Problem } from '@/types/problem'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const props = defineProps<{
  problem: Problem
}>()

const router = useRouter()

function goDetail() {
  router.push(`/problems/${props.problem.pid}`)
}

const statusText = computed(() => {
  switch (props.problem.status) {
    case 'AC':
      return 'Accepted'
    case 'WA':
      return 'Wrong Answer'
    default:
      return 'Not Submitted'
  }
})
</script>

<style scoped>
.problem-row {
  display: grid;
  cursor: pointer;
  grid-template-columns: 50px 80px 1fr 100px;
  align-items: center;
}

.problem-card {
  padding: 10px 0;
  border-bottom: 1px solid #f1f5f9;
}

.problem-card:hover {
  background: #f9fafb;
}

.col {
  padding: 0 12px;
}

/* ===== 状态点 ===== */
.status {
  text-align: center;
}

.status-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #d1d5db; /* TODO */
}

.status-dot.ac {
  background: #10b981;
}

.status-dot.wa {
  background: #ef4444;
}

/* ===== 其他列 ===== */
.id {
  text-align: center;
  color: #6b7280;
}

.title {
  text-align: left;
}

.name {
  font-weight: 500;
}

.desc {
  font-size: 12px;
  color: #6b7280;
}

.difficulty {
  text-align: center;
}

.tag {
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  color: #fff;
}

.tag.easy {
  background: #10b981;
}

.tag.medium {
  background: #f59e0b;
}

.tag.hard {
  background: #ef4444;
}
</style>