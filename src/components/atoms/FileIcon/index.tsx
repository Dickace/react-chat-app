import React from 'react'
import DocIcon from '../../../assets/img/fileIcon.svg'
import './style.scss'
import Text from '../Text'
import Image from '../Image'
import { catchFileNameFromPath } from '../../../assets/additionalFuntions'

export type File = {
  filename: string
  fileSize: string
  filePreview: string
  fileFormat: string
}

interface FileIconProps {
  file?: File
}

const FileIcon: React.FC<FileIconProps> = ({
  file = {
    filename: 'file_name_001',
    fileSize: '2.4 MB',
    filePreview: DocIcon,
    fileFormat: 'doc',
  },
}) => {
  return (
    <div className="file">
      {file.fileFormat === 'jpg' ||
      file.fileFormat === 'png' ||
      file.fileFormat === 'jpeg' ||
      file.fileFormat === 'gif' ? (
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
    </div>
  )
}
export default FileIcon
