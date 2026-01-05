<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getProblemList } from '@/services/problem'
import ProblemHeader from '@/components/ProblemHeader.vue'
import ProblemCard from '@/components/ProblemCard.vue'
import type { Problem } from '@/types/problem'

const problems = ref<Problem[]>([
    {id: 'P1001', title: 'A + B Problem', description: 'Calculate the sum of two integers.', difficulty: 'Easy'},
])

onMounted(async () => {
  problems.value = await getProblemList()
})
</script>

<template>
  <h1 class="page-title">题目列表</h1>
  <div class="page">
    
    <div class="list-container">
      <ProblemHeader />

      <ProblemCard
        v-for="p in problems"
        :key="p.id"
        :problem="p"
      />
    </div>
  </div>
</template>

<style scoped>
.page {
  max-width: 1600px;
  margin: 0 auto;
  padding: 24px 0;
}

.page-title {
  margin-bottom: 12px;
  font-size: 22px;
}

.list-container {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
}

</style>
