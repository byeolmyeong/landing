<!-- 약관 · 처리방침 한 편. 글은 app/data/legal.ts 에 있다 -->
<script setup lang="ts">
import type { LegalDocument } from '~/data/legal'

defineProps<{ doc: LegalDocument }>()
</script>

<template>
  <article class="legal">
    <div class="wrap">
      <h1>{{ doc.title }}</h1>
      <p class="legal-intro">{{ doc.intro }}</p>
      <section v-for="section in doc.sections" :key="section.title">
        <h2>{{ section.title }}</h2>
        <template v-for="(block, i) in section.blocks" :key="i">
          <p v-if="'p' in block">{{ block.p }}</p>
          <ul v-else-if="'ul' in block">
            <li v-for="item in block.ul" :key="item">{{ item }}</li>
          </ul>
          <ol v-else-if="'ol' in block">
            <li v-for="item in block.ol" :key="item">{{ item }}</li>
          </ol>
          <div v-else-if="'table' in block" class="legal-table">
            <table>
              <thead>
                <tr><th v-for="h in block.table.head" :key="h" scope="col">{{ h }}</th></tr>
              </thead>
              <tbody>
                <tr v-for="row in block.table.rows" :key="row.join('|')">
                  <td v-for="(cell, c) in row" :key="c">{{ cell }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
      </section>
      <p class="legal-closing">{{ doc.closing }}</p>
    </div>
  </article>
</template>
