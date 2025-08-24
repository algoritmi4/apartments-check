<script lang="ts" setup>
import { defineExpose, useId } from 'vue'

interface Props {
  title: string
  range: number[]
  step?: number
}

const { title, range, step = 1 } = defineProps<Props>()
const emit = defineEmits<{ 'update:model': [value: number[]] }>()

const [from, to] = range

const fromId = useId()
const toId = useId()

const model = ref([from, to])
const isReseted = ref(false)

function reset() {
  model.value = [from, to]
  isReseted.value = true
}

defineExpose({ reset })

watch(model, (newVal) => {
  if (isReseted.value) {
    return isReseted.value = false
  }
  emit('update:model', newVal)
}, { deep: true })
</script>

<template>
  <div class="titled-range">
    <h2 class="titled-range__title">
      {{ title }}
    </h2>
    <div class="titled-range__inputs">
      <div class="titled-range__input-box">
        <label :for="fromId" class="titled-range__input">
          <div class="titled-range__input-pre">
            от
          </div>
          <input
            :id="fromId"
            v-model="model[0]"
            :placeholder="String(from)"
            type="number"
            class="titled-range__input-input"
          >
        </label>
      </div>
      <div class="titled-range__input-box">
        <label :for="toId" class="titled-range__input">
          <div class="titled-range__input-pre">
            до
          </div>
          <input
            :id="toId"
            v-model="model[1]"
            :placeholder="String(to)"
            type="number"
            class="titled-range__input-input"
          >
        </label>
      </div>
    </div>
    <v-range-slider
      v-model="model"
      thumb-color="var(--dark-green)"
      track-color="var(--border-primary)"
      track-fill-color="var(--dark-green)"
      :step="step"
      :max="to"
      :min="from"
      strict
    />
  </div>
</template>

<style lang="scss" scoped>
.slider {
  color: green;
}
</style>
