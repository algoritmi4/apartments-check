<script lang="ts" setup>
import type { Apartment } from '~/dataBase/db'
import { formatNumberIntl } from '~/utils/formatNumber'

interface Props {
  apartment: Apartment
}

const { apartment } = defineProps<Props>()

const square = computed(() => String(apartment.square).replace('.', ','))
const price = computed(() => formatNumberIntl(apartment.price))
</script>

<template>
  <article class="apartments-card">
    <div class="apartments-card__info">
      <h3 class="apartments-card__title">
        {{ `${apartment.rooms}-комнатная №${apartment.id}` }}
      </h3>
      <ul class="apartments-card__description">
        <li class="apartments-card__description-text">
          {{ square }}<span aria-hidden="true" class="screen-max-l"> м²</span>
        </li>
        <li class="apartments-card__description-text">
          {{ apartment.floors.current }}
          <span class="apartments-card__description-text_gray">
            {{ `из ${apartment.floors.total}` }}<span aria-hidden="true" class="screen-max-l"> этажей</span>
          </span>
        </li>
        <li class="apartments-card__description-text">
          {{ price }}<span aria-hidden="true" class="screen-max-l"> ₽</span>
        </li>
      </ul>
    </div>
    <img
      class="apartments-card__image"
      src="/assets/images/room.png"
      :alt="`Фото ${apartment.rooms}-комнатной квартиры №${apartment.id}`"
    >
  </article>
</template>

<style lang="scss" scoped>
.apartments-card {
  width: 100%;
  border: 1px solid var(--border-primary);
  border-radius: 8px;
  padding: 16px 24px;
  display: flex;
  gap: 20px;

  &__info {
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-size: 14px;
    line-height: 1.5;
    width: 100%;
    max-width: 344px;
  }

  &__description {
    display: flex;
    gap: 20px;
    list-style: none;

    &-text {
      &_gray {
        color: var(--text-gray);
      }
    }
  }

  &__image {
    width: 80px;
    height: 80px;
  }
}

@media screen and (min-width: 1280px) {
  .apartments-card {
    flex-direction: row-reverse;
    padding: 16px 0;
    justify-content: flex-end;
    align-items: flex-start;
    border: unset;
    border-radius: unset;
    box-shadow: var(--shadow-secondary);

    .screen-max-l {
      display: none;
    }

    &__info {
      flex-direction: row;
      gap: 20px;
      max-width: unset;
      font-size: 16px;
    }

    &__title {
      width: 100%;
      max-width: 280px;
    }

    &__description {
      width: 100%;

      &-text {
        width: 100%;
        max-width: 120px;
      }
    }
  }
}
</style>
