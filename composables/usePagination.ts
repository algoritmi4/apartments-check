import type { PaginatedResponse } from '~/types/api'
import { ref } from 'vue'

interface PaginationOptions<T> {
  onUpdate: (pageSize: number, pageNumber: number) => Promise<PaginatedResponse<T>>
  onError?: () => void
  pageSize?: number
  offset?: number
}

export function usePagination<T>(options: PaginationOptions<T>) {
  const { onUpdate, onError, pageSize = 10, offset: off = 0 } = options

  const items = ref<T[]>([]) as Ref<T[]>
  const offset = ref(off)
  const isLoading = ref(false)
  const hasMore = ref(true)
  const isReseted = ref(false)
  const isFetching = ref(false)

  async function loadMore() {
    if (isFetching.value || !hasMore.value)
      return

    isFetching.value = true

    try {
      const data = await onUpdate(offset.value, pageSize)

      if (data.total <= items.value.length + data.items.length) {
        hasMore.value = false
      }

      items.value.push(...(data.items))
      offset.value += pageSize
    }
    catch (e) {
      onError?.() ?? console.error(`Error on load more: ${e}`)
    }
    finally {
      isFetching.value = false
      isLoading.value = false
    }
  }

  async function reset() {
    items.value = []
    hasMore.value = true
    offset.value = 0
    isReseted.value = true
    isLoading.value = true

    loadMore()
  }

  return {
    items,
    isLoading,
    isFetching,
    isReseted,
    hasMore,
    loadMore,
    reset,
  }
}
