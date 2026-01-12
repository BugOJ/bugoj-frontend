<template>
  <div class="detail-page">
    <div class="split-container">
      <!-- 左侧题面 -->
      <div class="left" :style="{ width: leftWidth + '%' }">
        <div
          class="markdown-body"
          v-html="renderedContent"
        />
      </div>

      <!-- 拖动条 -->
      <div class="divider" @mousedown="startDrag" />

      <!-- 右侧编辑器 -->
      <div class="right">
        <div ref="editorRef" class="editor-container"></div>
      </div>
    </div>
  </div>
</template>




<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import * as monaco from 'monaco-editor'
import md from '@/utils/markdown'

const route = useRoute()
const pid = route.params.pid as string

/* ===== 示例题面（以后换接口） ===== */
const markdownContent = ref(`
# ${pid} A + B Problem

给定两个整数 $a, b$，计算： $a + b$
`)

const renderedContent = computed(() =>
  md.render(markdownContent.value)
)

/* ===== 分栏拖动 ===== */
const leftWidth = ref(50)
let dragging = false

function startDrag() {
  dragging = true
  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', stopDrag)
}

function onDrag(e: MouseEvent) {
  if (!dragging) return
  const percent = (e.clientX / window.innerWidth) * 100
  leftWidth.value = Math.min(70, Math.max(30, percent))
}

function stopDrag() {
  dragging = false
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
}

/* ===== Monaco ===== */
const editorRef = ref<HTMLDivElement | null>(null)
let editor: monaco.editor.IStandaloneCodeEditor | null = null

onMounted(() => {
  editor = monaco.editor.create(editorRef.value!, {
    value: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    cout << a + b;
    return 0;
}`,
    language: 'cpp',
    theme: 'vs-dark',
    automaticLayout: true,
    minimap: { enabled: false },
  })
})

onUnmounted(() => {
  editor?.dispose()
  stopDrag()
})
</script>



<style scoped>
.detail-page {
  height: calc(100vh - 56px);
}

.split-container {
  display: flex;
  height: 100%;
}

/* 左侧题面 */
.left {
  overflow-y: auto;
  padding: 24px;
  background: #ffffff;
  border-right: 1px solid #e5e7eb;
}

/* Markdown 样式（类似 GitHub / LeetCode） */
.markdown-body {
  line-height: 1.7;
  color: #111827;
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3 {
  margin-top: 24px;
  margin-bottom: 12px;
}

.markdown-body pre {
  background: #f6f8fa;
  padding: 12px;
  border-radius: 6px;
  overflow-x: auto;
}

.markdown-body code {
  background: #f3f4f6;
  padding: 2px 4px;
  border-radius: 4px;
}

/* 拖动条 */
.divider {
  width: 6px;
  cursor: col-resize;
  background: #f3f4f6;
}

.divider:hover {
  background: #e5e7eb;
}

/* 右侧编辑器 */
.right {
  flex: 1;
  background: #0f172a;
}

.editor-container {
  width: 100%;
  height: 100%;
}
</style>
