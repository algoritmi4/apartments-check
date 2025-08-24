export function useScrollable() {
  const isScrollable = ref(false)

  function checkScrollable() {
    isScrollable.value = window.innerHeight < document.documentElement.scrollHeight
  }

  let observer: ResizeObserver | null = null

  onMounted(() => {
    checkScrollable()

    observer = new ResizeObserver(checkScrollable)
    observer.observe(document.documentElement)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { isScrollable, checkScrollable }
}
