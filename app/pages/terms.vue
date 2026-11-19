<script setup lang="ts">
import { terms } from '~/data/legal'

const url = 'https://byeolmyeong.com/terms'
useSeoMeta({
  title: '이용약관 — 별명',
  description: '별명 서비스의 이용 조건과 절차, 운영자와 이용자의 권리와 의무를 정한 약관입니다.',
  ogTitle: '이용약관 — 별명',
  ogUrl: url,
  ogImage: 'https://byeolmyeong.com/og.png',
})
useHead({ link: [{ rel: 'canonical', href: url }] })
</script>

<template>
  <LegalDoc :doc="terms" />
</template>
