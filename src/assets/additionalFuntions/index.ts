export function sizeConvert(size: number) {
  let newSize = size / 1024
  if (newSize > 512) {
    newSize = newSize / 1024
    if (newSize > 512) {
      newSize = newSize / 1024
      return `${newSize.toFixed(2)} GB`
    } else {
      return `${newSize.toFixed(2)} MB`
    }
  } else {
    return `${newSize.toFixed(2)} KB`
  }
}
