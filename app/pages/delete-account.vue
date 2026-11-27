<script setup lang="ts">
import { accountDeletion } from '~/data/legal'

// Google Play 데이터 보안의 "계정 삭제 URL"(앱 설치 없이 삭제를 요청하는 길). 글은 app/data/legal.ts 의 accountDeletion
const url = 'https://byeolmyeong.com/delete-account'
useSeoMeta({
  title: '계정 삭제 안내 | 별명',
  description: '별명 계정을 앱에서 지우는 방법과 앱 없이 이메일로 요청하는 방법, 지우는 데이터와 남는 데이터의 보관 기간을 안내합니다.',
  ogTitle: '계정 삭제 안내 | 별명',
  ogUrl: url,
  ogImage: 'https://byeolmyeong.com/og.png',
})
useHead({ link: [{ rel: 'canonical', href: url }] })
</script>

<template>
  <LegalDoc :doc="accountDeletion" guide />
</template>
