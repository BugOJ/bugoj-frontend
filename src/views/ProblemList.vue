<template>
  <div class="problem-list">
    <a-table
      :columns="columns"
      :data="problems"
      row-key="id"
      :pagination="false"
      hoverable
      @row-click="goDetail"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref,h} from 'vue'
import { Tag } from '@arco-design/web-vue'
import { useRouter } from 'vue-router'

import { getProblemList } from '@/services/problem'
import type { Problem } from '@/types/problem'
import type { TableColumnData } from '@arco-design/web-vue'

const router = useRouter()

const problems = ref<Problem[]>([
    {pid: 'P1001', title: 'A + B Problem', difficulty: 'Easy'},
    {pid: 'P1002', title: 'A + B + C Problem', difficulty: 'Medium'},
    {pid: 'P1003', title: 'A + B + C + D Problem', difficulty: 'Hard'},
])

onMounted(async () => {
  problems.value = await getProblemList()
})

const columns: TableColumnData[] = [
  {
    title: 'ID',
    dataIndex: 'pid',
    width: 80,
    align: 'center',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    render: ({ record }: { record: Problem }) =>
      h(
        'span',
        { style: { color: '#165dff', cursor: 'pointer' } },
        record.title
      ),
  },
  {
  title: 'Difficulty',
  dataIndex: 'difficulty',
  width: 120,
  align: 'center',
  render: ({ record }: any) => {
    const colorMap: any = {
      Easy: '#52c41a',
      Medium: 'gold',
      Hard: 'orangered',
    }

    return h(
      Tag,
      { color: colorMap[record.difficulty] },
      () => record.difficulty
    )
  },
}
]

function goDetail(record: Problem) {
  router.push(`/problem/${record.pid}`)
}

</script>

<style scoped>
.problem-list {
  max-width: 900px;
  margin: 24px auto;
}
</style>