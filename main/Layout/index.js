import React from 'react'
import { observer, useValue } from 'startupjs'
import './index.styl'
import { Row, Div, Layout, SmartSidebar, Menu, Button, H1, Span } from '@startupjs/ui'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { displayName } from '../../app.json'
import { TouchableOpacity, Image, ImageBackground, ScrollView, Platform } from 'react-native'
import { BASE_URL } from '@env'

const APP_NAME = displayName.charAt(0).toUpperCase() + displayName.slice(1)

export default observer(function ({ children }) {
  const [opened, $opened] = useValue(false)
  const base = BASE_URL
  const logoUrl = '/img/main-logo-white.png'
  const icons = [
    '/img/twitter.png',
    '/img/facebook.png',
    '/img/instagram.png',
    '/img/whatsapp.png'
  ]
  const navigation = ['Valentines', 'V ❤ Peeps', 'V ❤ Prep', 'Culture', 'Tribe', 'Recources']
  const isWeb = Platform.OS === 'web'

  function renderSidebar () {
    return pug`
      Div.root
        TouchableOpacity.logotype
          Image.logoStyle(
            source={uri: base + logoUrl}
          )
        Menu.sidebar
          each value, index in navigation
            Menu.Item.menuItem(key = index  url='/' onPress=()=>{})
              Span.item= value

        Row.social
          each url, index in icons
            Button.btnSocial(
              color='#ffffff'
              shape='circle'
              variant='flat'
              onPress=()=>{}
              key = index styleName=index === 0 ? 'first' : '')
              Image.image(
                source={uri: base + url}
              )
    `
  }

  return pug`
    Layout
      SmartSidebar(
        backgroundColor='#f90000'
        path=$opened.path()
        renderContent=renderSidebar
      )
        Row.menu
          Button(color='#ffffff' icon=faBars onPress=() => $opened.set(!opened))
          H1.logo
            Span.logoText(size='xl')= APP_NAME

        ScrollView.body
          ImageBackground.bgSize(source={ uri: base + '/img/background.png' })
          Div.pageWrapper
            Div= children



  
  `
})
