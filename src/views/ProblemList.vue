<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getProblemList } from '@/services/problem'
import ProblemHeader from '@/components/ProblemHeader.vue'
import ProblemCard from '@/components/ProblemCard.vue'
import type { Problem } from '@/types/problem'

const problems = ref<Problem[]>([
    {pid: 'P1001', title: 'A + B Problem', description: 'Calculate the sum of two integers.', difficulty: 'Easy', status: 'AC'},
    {pid: 'P1002', title: 'A + B + C Problem', description: 'Calculate the sum of three integers.', difficulty: 'Medium', status: 'WA'},
    {pid: 'P1003', title: 'A + B + C + D Problem', description: 'Calculate the sum of four integers.', difficulty: 'Hard', status: 'TODO'},
])

onMounted(async () => {
  problems.value = await getProblemList()
})
</script>

<template>
  <div class="page">
    <h1>题目列表</h1>

    <div class="list">
      <ProblemHeader />
      <ProblemCard
        v-for="p in problems"
        :key="p.pid"
        :problem="p"
      />
    </div>
  </div>
</template>

<style scoped>
.page {
  max-width: 1200px;
  margin: 0 auto;
}

.list {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
}
</style>
