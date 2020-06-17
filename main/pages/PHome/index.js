import React from 'react'
import { observer } from 'startupjs'
import { ScrollView, ImageBackground } from 'react-native'
import { EntryPoint } from 'components'
import './index.styl'
import { Content } from '@startupjs/ui'
import { BASE_URL } from '@env'

export default observer(function PHome () {
  const base = BASE_URL
  const bg = base + '/img/background.png'
  return pug`
    ScrollView.root
      Content.maxWidth
        ImageBackground.bgSize(source = bg)
          EntryPoint
  `
})
