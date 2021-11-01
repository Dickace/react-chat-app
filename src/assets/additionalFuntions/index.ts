export function sizeConvert(size: number): string {
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
export function catchFileNameFromPath(path: string): string {
  const separatingPath: string[] = path.split('/')
  return separatingPath[separatingPath.length - 1].split('.')[0]
}
