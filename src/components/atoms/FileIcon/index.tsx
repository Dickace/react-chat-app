import React, { useEffect, useState } from 'react'
import DocIcon from '../../../assets/img/fileIcon.svg'
import './style.scss'
import Text from '../Text'
import Image from '../Image'
import {
  catchFileNameFromPath,
  sizeConvert,
} from '../../../assets/additionalFuntions'

export type File = {
  filename: string
  fileSize: string
  filePreview: string
  fileFormat: string
}

interface FileIconProps {
  filepath?: string
}

const FileIcon: React.FC<FileIconProps> = ({ filepath = '' }) => {
  const [file, setFile] = useState<File>({
    filename: 'file_name_001',
    fileSize: '2.4 MB',
    filePreview: DocIcon,
    fileFormat: 'doc',
  })
  useEffect(() => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', `${filepath}`, true)
    xhr.responseType = 'blob'
    xhr.onreadystatechange = function () {
      if (this.readyState == this.DONE) {
        const newfile: File = {
          filename: catchFileNameFromPath(filepath),
          filePreview: `${filepath}`,
          fileSize: sizeConvert(this.response?.size),
          fileFormat: this.response?.type,
        }
        setFile(newfile)
      }
    }
    xhr.send(null)
  }, [])
  return (
    <a className="file" href={filepath}>
      {file.fileFormat === 'image/jpg' ||
      file.fileFormat === 'image/png' ||
      file.fileFormat === 'image/jpeg' ||
      file.fileFormat === 'image/gif' ? (
        <Image src={file.filePreview} />
      ) : (
        <>
          <img
            src={DocIcon}
            className="file-icon"
            alt={catchFileNameFromPath(DocIcon)}
          />
          <div className="file-description">
            <Text text={file.filename} type="1" weight="600" />
            <Text text={file.fileSize} weight="400" type="2" />
          </div>
        </>
      )}
    </a>
  )
}
export default FileIcon
