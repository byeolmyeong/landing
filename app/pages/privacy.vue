<script setup lang="ts">
import { privacy } from '~/data/legal'

const url = 'https://byeolmyeong.com/privacy'
useSeoMeta({
  title: '개인정보 처리방침 | 별명',
  description: '별명이 처리하는 개인정보의 항목, 목적, 보유 기간, 위탁, 이용자의 권리를 안내합니다.',
  ogTitle: '개인정보 처리방침 | 별명',
  ogUrl: url,
  ogImage: 'https://byeolmyeong.com/og.png',
})
useHead({ link: [{ rel: 'canonical', href: url }] })
</script>

<template>
  <LegalDoc :doc="privacy" />
</template>
