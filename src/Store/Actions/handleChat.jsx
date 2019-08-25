import type from '../Type'
import axios from 'axios'
// import swal from 'sweetalert'
import { handleError } from '../../lib'
import openSocket from 'socket.io-client'
const socket = openSocket('https://primework-staging.herokuapp.com')

const { SET_CHAT_HISTORY, SET_CURRENT_CHAT, SET_CURRENT_USER, UPDATE_CURRENT_CHAT } = type

const handleSetAllChat = payload => ({
  type: SET_CHAT_HISTORY,
  payload
})
const handleSetCurrentChat = payload => ({
  type: SET_CURRENT_CHAT,
  payload
})
const handleSetCurrentUser = payload => ({
  type: SET_CURRENT_USER,
  payload
})
const handleUpdateChat = payload => ({
  type: UPDATE_CURRENT_CHAT,
  payload
})
export const handleFetchUserChatHistory = () => dispatch => {
  let userId = localStorage.getItem('userId')
  let chat = []
  let user
  let data = []
  return axios({
    url: `https://primework-staging.herokuapp.com/api/v1/chat/user/all/${userId}`,
    method: 'GET'
  }).then(res => {
    let result = res.data
    if (result.data && result.data.length > 0) {
      data = result.data.filter(chat => chat.FUser !== null).filter(chat => chat.SUser !== null).sort((a, b) => {
        let first = a.chat && a.chat.length > 0 ? new Date(a.chat[a.chat.length - 1].createdAt).getTime() : new Date().getTime()
        let second = b.chat && b.chat.length > 0 ? new Date(b.chat[b.chat.length - 1].createdAt).getTime() : new Date().getTime()
        return second - first
      })
    }
    // console.log(data)

    if (data && data.length > 0) {
      localStorage.setItem('currentChatId', data[0]._id)
      chat = data[0].chat
      if (data[0].FUser._id !== userId) {
        user = data[0].FUser
        dispatch(handleSetCurrentUser({ user }))
      }
      if (data[0].FUser._id === userId) {
        user = data[0].SUser
        dispatch(handleSetCurrentUser({ user }))
      }
    }

    // console.log(user)
    dispatch(handleSetAllChat({ data }))
    dispatch(handleSetCurrentChat({ chat }))
    // dispatch(handleSetAllChat({ data: _data }))
    return result
  }).catch(err => {
    handleError(err)
    console.log(err)
  })
}

export const handleSetChatInfo = (user, chat, chatId, chatArray, userType) => dispatch => {
  let newChatArray = chatArray.filter(chats => {
    if (chats.SUser !== null) {
      return chats.SUser._id !== user._id
    }
  })
  let nonEmptyArray = chatArray.filter(chat => chat.SUser !== null)
  let data

  data = [
    nonEmptyArray.find(users => users.SUser._id === user._id),
    ...newChatArray
  ]

  if (userType === 'FUser') {
    let newChatArray = chatArray.filter(chats => chats.FUser._id !== user._id)
    data = [
      chatArray.find(users => users.FUser._id === user._id),
      ...newChatArray
    ]
  }

  if (chatId !== undefined) {
    localStorage.setItem('currentChatId', chatId)
  }
  dispatch(handleSetCurrentChat({ chat }))
  dispatch(handleSetCurrentUser({ user }))
  dispatch(handleSetAllChat({ data }))
}

export const handlePostNewChatMessage = message => dispatch => {
  let chatId = localStorage.getItem('currentChatId')
  return axios
    .post(`/chat/message/send/${chatId}`, message)
    .then(res => {
      let result = res.data
      localStorage.setItem('currentChatId', result.data._id)
      dispatch(handleUpdateChat(result.data))
      socket.on(`chat${chatId}`, data => console.log(data))
      return res
    })
    .catch(err => {
      handleError(err)
      console.log(err)
    })
}
export const handleStartNewChat = SUserId => dispatch => {
  let FUserId = localStorage.getItem('userId')
  let chat = {
    FUserId,
    SUserId
  }
  return axios
    .post(`/chat/new`, chat)
    .then(res => {
      let result = res.data
      localStorage.setItem('currentChatId', result.data.chatId)
      return res
    })
    .catch(err => {
      handleError(err)
      console.log(err)
    })
}
export const handleSearchResult = results => dispatch => {
  console.log(results)
}