import type from '../Type'
import axios from 'axios'
// import swal from 'sweetalert'
import { handleError } from '../../lib'
import openSocket from 'socket.io-client'
const socket = openSocket('https://primework-staging.herokuapp.com')

const { SET_CHAT_HISTORY, SET_CURRENT_CHAT, SET_CURRENT_USER, UPDATE_CURRENT_CHAT, STORE_CHAT_IDS } = type

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
const handleStoreChatIds = payload => ({
  type: STORE_CHAT_IDS,
  payload
})
export const handleFetchUserChatHistory = () => dispatch => {
  let userId = localStorage.getItem('userId')
  let chat = []
  let user
  let data = []
  let chatIds
 
}

export const handleSetChatInfo = (user, chat, chatId, chatArray, userType) => dispatch => {
 
}

export const handlePostNewChatMessage = message => dispatch => {
  let chatId = localStorage.getItem('currentChatId')
 
}
export const handleStartNewChat = SUserId => dispatch => {
  let FUserId = localStorage.getItem('userId')
  let chat = {
    FUserId,
    SUserId
  }

}
export const handleResult = results => dispatch => {
  dispatch(handleUpdateChat(results))
}