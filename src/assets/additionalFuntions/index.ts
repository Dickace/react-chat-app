import URLS from '../../ApiUrl.json'
import { File } from '../../components/atoms/FileIcon'

const allowedFileTypes = [
  'video/mp4',
  'video/ogg',
  'video/webm',
  'audio/mpeg',
  'audio/ogg',
  'image/jpeg',
  'image/gif',
  'image/png',
  'image/svg+xml',
]

export type Gender = {
  id: string
  gender: string
}

export function isFunction(obj: any) {
  return obj && typeof obj == 'function'
}

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
export const getGenderList = async () => {
  const response = await fetch(`${URLS.API_URL}/api/auth`)
  if (response.ok) {
    return await response.json()
  } else {
    return `Request error: ${response.status}`
  }
}
export function catchFileNameFromPath(path: string): string {
  const separatingPath: string[] = path.split('/')
  return separatingPath[separatingPath.length - 1].split('.')[0]
}

export function AJAX(params: {
  url: string
  method: string
  events?: {
    wait?: () => void
    success?: (response_text: string, xhr: XMLHttpRequest) => void
    error?: (response_text: string, xhr: XMLHttpRequest) => void
    progress?: (event: ProgressEvent) => void
  }
  data?: any
}) {
  if (!params.url) {
    return
  }

  params.method = params.method || 'POST'
  params.events = params.events || {}

  let xhr: XMLHttpRequest

  try {
    // For: chrome, firefox, safari, opera, yandex, ...
    xhr = new XMLHttpRequest()
  } catch (e) {
    console.log('Not completable browser')
    return
  }

  xhr.onreadystatechange = function () {
    // ready states:
    // 0: uninitialized
    // 1: loading
    // 2: loaded
    // 3: interactive
    // 4: complete

    if (xhr.readyState == 4) {
      // when result is ready

      let response_text = xhr.responseText

      try {
        response_text = JSON.parse(response_text)
      } catch (e) {
        console.log(e)
      }

      if (xhr.status === 200) {
        // on success
        if (isFunction(params.events?.success) && params.events?.success) {
          params.events.success(response_text, xhr)
        }
      } else {
        // on error
        if (isFunction(params.events?.error) && params.events?.error) {
          console.log(xhr.status + ': ' + xhr.statusText)
          params.events.error(response_text, xhr)
        }
      }
    } else {
      // waiting for result
      if (isFunction(params.events?.wait) && params.events?.wait) {
        params.events.wait()
      }
    }
  }

  let data = null
  params.data = params.data || {}
  if (params.data.files) {
    params.method = 'POST'

    data = new FormData()
    for (const index_param in params.data) {
      if (typeof params.data[index_param] == 'object') {
        for (const index_file in params.data[index_param]) {
          const item = params.data[index_param][index_file]
          if (typeof item == 'object') {
            data.append(index_file, item, item.name)
          } else {
            data.append(index_file, item)
          }
        }
      } else {
        data.append(index_param, params.data[index_param])
      }
    }
    if (isFunction(params.events?.progress)) {
      xhr.upload.onprogress = function (event) {
        // 'progress: ' + event.loaded + ' / ' + event.total;
        if (params.events?.progress) {
          params.events.progress(event)
        }
      }
    }
  }

  params.method = params.method.toUpperCase()

  if (params.method == 'GET' && data) {
    params.url += '?' + data
  }
  xhr.open(params.method, params.url, true)

  if (!params.data.files) {
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  }

  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
  xhr.withCredentials = true
  xhr.send(data)
}

export function isAllowedDataFile(mimeType: string) {
  return allowedFileTypes.find((value) => {
    return value === mimeType
  })
}
