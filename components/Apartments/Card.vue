<script lang="ts" setup>
import type { Apartment } from '~/dataBase/db'

interface Props {
  apartment: Apartment
}

const { apartment } = defineProps<Props>()
</script>

<template>
  <div>{{ apartment.price }}</div>
</template>
