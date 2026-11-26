<script setup lang="ts">
import { privacyConsent } from '~/data/legal'

const url = 'https://byeolmyeong.com/privacy-consent'
useSeoMeta({
  title: '개인정보 수집 · 이용 동의 | 별명',
  description: '별명이 회원가입과 서비스 제공을 위해 수집 · 이용하는 개인정보의 목적, 항목, 보유 기간, 동의를 거부할 권리를 안내합니다.',
  ogTitle: '개인정보 수집 · 이용 동의 | 별명',
  ogUrl: url,
  ogImage: 'https://byeolmyeong.com/og.png',
})
useHead({ link: [{ rel: 'canonical', href: url }] })
</script>

<template>
  <LegalDoc :doc="privacyConsent" />
</template>
