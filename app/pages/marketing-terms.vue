<script setup lang="ts">
import { marketing } from '~/data/legal'

const url = 'https://byeolmyeong.com/marketing-terms'
useSeoMeta({
  title: '마케팅 정보 수신 동의 약관 — 별명',
  description: '별명이 광고성 정보를 보낼 때 이용하는 항목, 보내는 방법과 시간, 보유 기간, 동의 철회 방법을 안내합니다.',
  ogTitle: '마케팅 정보 수신 동의 약관 — 별명',
  ogUrl: url,
  ogImage: 'https://byeolmyeong.com/og.png',
})
useHead({ link: [{ rel: 'canonical', href: url }] })
</script>

<template>
  <LegalDoc :doc="marketing" />
</template>
