import React, { useState } from 'react'
import {
  observer
} from 'startupjs'
import './index.styl'
import { TouchableOpacity } from 'react-native'
import { Div, Span, H2, H3, TextInput, Row, Link } from '@startupjs/ui'

export default observer(function Suggestion () {
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()

  return pug`
    Div.root
      H2.h2 Add a suggestion
      H3.h3 We love to hear new ideas on how to be even more awesome

      TextInput.title(
        size='m'
        placeholder='Title of suggestion'
        onChangeText=setTitle
        value=title
      )
      TextInput.description(
        multiline
        resize
        numberOfLines=4
        placeholder='Make a suggestion'
        onChangeText=setDescription
        value=description
      )

      Row.suggContact
        Div
          Span.additionalText send a private suggestion email to us:
          Link.mail(to='#') culture@virginhotels.com
        TouchableOpacity.postBtn
          Span Post
  `
})
