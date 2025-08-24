let timeout: ReturnType<typeof setTimeout> | null = null

export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  wait = 300,
): (...args: Parameters<T>) => void {
  return (...args: Parameters<T>) => {
    if (timeout)
      clearTimeout(timeout)

    timeout = setTimeout(() => {
      fn(...args)
    }, wait)
  }
}
