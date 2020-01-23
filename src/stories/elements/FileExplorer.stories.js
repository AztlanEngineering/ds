/* @fwrlines/generator-storybook-story 1.0.1 */
import React from 'react'


import { FileExplorer } from 'ui'

export default {
  title: 'elements/FileExplorer',
  component:FileExplorer,
  parameters: {
    decorators: [
      /* storyfn => <div className="">{ storyfn() }</div>,*/
    ]
  }
}

export const Default = () => (
  <FileExplorer
    root='Root'
    rootIcon='F'
  >
    <FileExplorer.Folder name='Music'>
      <FileExplorer.File name='a-good-song.mp3'/>
      <FileExplorer.File name='mymp3.mp3'/>
      <FileExplorer.File name='highQuality.wave'/>
    </FileExplorer.Folder>
    <FileExplorer.Folder
      name='Souvenirs'
      open
    >
      <FileExplorer.File name='holidays.jpg'/>
      <FileExplorer.File name='China.png'/>
      <FileExplorer.File name='lastNight.jpg'/>
    </FileExplorer.Folder>
    <FileExplorer.Folder
      name='Images'
      open
    >
      <FileExplorer.File name='holidays.jpg'/>
      <FileExplorer.File name='China.png'/>
      <FileExplorer.File name='lastNight.jpg'/>
    </FileExplorer.Folder>

  </FileExplorer>
)


