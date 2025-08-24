import type { PaginatedResponse } from '~/types/api'
import { ref } from 'vue'

interface PaginationOptions<T> {
  onUpdate: (pageSize: number, pageNumber: number) => Promise<PaginatedResponse<T>>
  onError?: () => void
  pageSize?: number
}

export function usePagination<T>(options: PaginationOptions<T>) {
  const { onUpdate, onError, pageSize = 10 } = options

  const items = ref<T[]>([]) as Ref<T[]>
  const page = ref(1)
  const isLoading = ref(false)
  const hasMore = ref(true)
  const isReseted = ref(false)

  async function loadMore() {
    if (isLoading.value || !hasMore.value)
      return

    isLoading.value = true

    try {
      const data = await onUpdate(page.value, pageSize)

      if (data.total <= items.value.length + data.items.length) {
        hasMore.value = false
      }

      items.value.push(...(data.items))
      page.value++
    }
    catch (e) {
      onError?.() ?? console.error(`Error on load more: ${e}`)
    }
    finally {
      isLoading.value = false
    }
  }

  async function reset() {
    items.value = []
    page.value = 1
    hasMore.value = true
    isReseted.value = true

    loadMore()
  }

  return {
    items,
    isLoading,
    isReseted,
    hasMore,
    loadMore,
    reset,
    page,
  }
}
