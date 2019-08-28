import React, { Component } from "react";
import swal from "sweetalert";
import Navbar from "../../container/Navbar";
import { Star} from '../../components/Picture'
import * as UI from "./style";
import Rating from 'react-rating'
import moment from 'moment'
import validator from 'validator'
import openSocket from 'socket.io-client'

import { data, allChatText } from "./data";

// import images
import adminProfilePic from "../../assets/images/admin-profile.png";
// import avatar from "../../assets/images/avatar.png";
// import profilePic from "../../assets/images/profilePic.png";
import bagIcon from "../../assets/images/briefcase-5-line.png";
import searchIcon from "../../assets/images/search-image.png";
import attachIcon from "../../assets/images/round-attach_file-24px.png";
import picPhotoIcon from "../../assets/images/round-insert_photo-24px.png";
import emojiIcon from "../../assets/images/round-sentiment_satisfied_alt-24px.png";




const SelectedUserInfo =({ selectedUser, ...props})=>{
  let chatId = localStorage.getItem('currentChatId')
  let userId = localStorage.getItem('userId')
  let firstName
  let lastName
  let organizationName
  let profileImageUrl
  let organizationLogoUrl
  let nameToDisplay
  let imageToDisplay
  let status = selectedUser.active ? 'online' : 'offline'
  if (selectedUser.freelancer) {
    firstName = selectedUser.freelancer.firstName
    lastName = selectedUser.freelancer.lastName
    profileImageUrl = selectedUser.freelancer.profileImageUrl
  }
  if (selectedUser.organization) {
    organizationName = selectedUser.organization.organizationName
    organizationLogoUrl = selectedUser.organization.organizationLogoUrl
  }
  if (selectedUser.type === 'freelancer') {
    nameToDisplay = `${firstName} ${lastName}`
    imageToDisplay = profileImageUrl
  }
  if (selectedUser.type === 'organization') {
    nameToDisplay = organizationName
    imageToDisplay = organizationLogoUrl
  }
  return (
     <UI.ChatHeaderProfile>
       <UI.ChatHeaderProfileItem1 src={imageToDisplay} />
       <UI.ChatHeaderProfileItem2>
         {nameToDisplay}
       </UI.ChatHeaderProfileItem2>
     </UI.ChatHeaderProfile>
   )
 }

const ChatMessages = ({chats, ...props}) =>{
let userId = localStorage.getItem('userId')
  return chats.map(chat =>{
    if (chat.userId !== userId){
    return (  
        <UI.ChatTextDisplayLeft key={chat._id}>
            <UI.ChatTextDisplayOthersText
                color="blue"
                backgroundColor="#FFF">
                  {chat.message}
            </UI.ChatTextDisplayOthersText>
        </UI.ChatTextDisplayLeft>
      )
    }
    return (  
      <UI.ChatTextDisplayRight key={chat._id}>
          <UI.ChatTextDisplayMyText
                color="#FFF"
                backgroundColor="#3CB46E"
              >
                {chat.message}
          </UI.ChatTextDisplayMyText>
      </UI.ChatTextDisplayRight>
    )
  })
 }

 const UserInfo =({selectedUser, averageRate, jobsCompleted, ...props})=> {
  let chatId = localStorage.getItem('currentChatId')
  let userId = localStorage.getItem('userId')
  let firstName
  let lastName
  let organizationName
  let profileImageUrl
  let organizationLogoUrl
  let nameToDisplay
  let imageToDisplay
  let profession 
  let biography
  let skills = []
  // let status = selectedUser.active ? 'online' : 'offline'
  if (selectedUser.freelancer) {
    firstName = selectedUser.freelancer.firstName
    lastName = selectedUser.freelancer.lastName
    profileImageUrl = selectedUser.freelancer.profileImageUrl
    profession = selectedUser.freelancer.jobTitle
    biography = selectedUser.freelancer.biography
    skills = selectedUser.freelancer.skills
  }
  if (selectedUser.organization) {
    organizationName = selectedUser.organization.organizationName
    organizationLogoUrl = selectedUser.organization.organizationLogoUrl
    profession = 'Organization'
  }
  if (selectedUser.type === 'freelancer') {
    nameToDisplay = `${firstName} ${lastName}`
    imageToDisplay = profileImageUrl
  }
  if (selectedUser.type === 'organization') {
    nameToDisplay = organizationName
    imageToDisplay = organizationLogoUrl
  }
   return (
    <UI.Div>
       <UI.Div>
       <UI.ProfileSectionJob>
            <UI.ProfileImage src={imageToDisplay} />
        </UI.ProfileSectionJob>
        <UI.ProfileSectionName>
          {nameToDisplay}
        </UI.ProfileSectionName>
        <UI.ProfileSectionJob>
          {profession}
        </UI.ProfileSectionJob>
        <UI.ProfileSectionJob>
        <Rating
              style={{ margin: '0' }}
              readonly
              initialRating={averageRate || '0'}
              emptySymbol={<Star empty='true' />}
              fullSymbol={<Star />}
            />
        </UI.ProfileSectionJob>
       
      </UI.Div>
      <UI.JobsCompletedTextContainer>
        <UI.JobsCompletedTextIcon src={bagIcon} />
        <UI.JobsCompletedText>{jobsCompleted && jobsCompleted.length > 0 ? jobsCompleted.length : '0' } Jobs completed</UI.JobsCompletedText>
      </UI.JobsCompletedTextContainer>
      <UI.BioSection>
        Bio <br />
        <UI.BioTextSection>{biography}</UI.BioTextSection>
      </UI.BioSection>
      <UI.Div style={{paddingLeft: '10px'}}>
        Skills <br />
        {skills && skills.length > 0 ?
        <UI.DisplaySkilll>
          <DisplaySkill skill={skills}/>
        </UI.DisplaySkilll> : null}
      </UI.Div>
    </UI.Div>
  )
 }

 const DisplaySkill = ({skills, ...props}) => skills.map(skill => (
  <UI.SkillText key={Math.random()}>{skill}</UI.SkillText>
));
/**
 *@class chat
 */
class Chat extends Component {
  state = {
    contacts: [],

    message: "",
    textToDisplay: "",

    selectedContact: "",
  };

  componentWillMount() {
    this.setState({ contacts: data });
  }

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleKeyPress = event => {
    let message = this.state.message
    let userId = localStorage.getItem('userId')
    let data
    data={
      userId,
      message
    }
    if(validator.isEmpty(message)){
      swal('', 'Enter message', 'warning')
      return
    }
    if (event.keyCode === 13) {
      event.preventDefault()
      this.props.handlePostNewChatMessage(data)
      .then(res=>{
        this.setState({loading:false, message:'', file:''})
        this.props.handleFetchUserChatHistory()
      })
    }
  };

  handleSelectedContact = (...props) => {
    this.props.handleSetChatInfo(...props)
  };
  socket = openSocket('https://primework-staging.herokuapp.com/')
  componentDidMount(){
    this.props.handleFetchUserChatHistory()
    // let chatId = localStorage.getItem('currentChatId')
    // console.log(`chat${chatId}`)
    // this.socket.on(`chat${chatId}`, (data) => console.log(data))
    // this.socket.on(`data`, (data) => console.log(data))
  }
  handleResult = data =>{
    this.props.handleResult(data)
    this.props.handleFetchUserChatHistory()
    // .then(res=>{
    //   this.setState({loading:false, message:'', file:''})
    // })
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.ChatIds !==  this.props.ChatIds) {
      nextProps.ChatIds.map(id => (
        this.socket.on(`chat${id}`, data => this.handleResult(data))
      ))
      // console.log('[this is from the willUpdate component]', nextProps.ChatIds);
    }
  }
  render() {
    // const { contacts, selectedContact } = this.state;
    const { Contacts, SelectedUser, Chat, AllUsers } = this.props
    const selectedUserExtras = AllUsers.filter(user =>(
      user._id === SelectedUser._id
    ))
    // console.log('selectedUserExtras :', selectedUserExtras);
    const displayPeople = Contacts.map(chat => { 
        let userId = localStorage.getItem('userId')
        let firstName
        let lastName
        let organizationName
        let ImageToDisplay = ''
        if (chat.SUser === null || chat.FUser === null) {
          return null
        }
        if (chat.SUser._id !== userId) {
          if (chat.SUser.freelancer) {
            firstName = chat.SUser.freelancer.firstName
            lastName = chat.SUser.freelancer.lastName
            ImageToDisplay = chat.SUser.freelancer.profileImageUrl
          }
          if (chat.SUser.organization) {
            organizationName = chat.SUser.organization.organizationName
            ImageToDisplay = chat.SUser.organization.organizationLogoUrl
          }
          let status = chat.active ? 'online' : 'offline'
          let nameToDisplay
          let lastMessage = chat.chat.length - 1
          let latestMessage = chat.chat && chat.chat.length > 0 ? chat.chat[ lastMessage ].message : status
          let LatestMessageTime = chat.chat && chat.chat.length > 0 ? moment(new Date(chat.chat[lastMessage].createdAt)).calendar(null, {
            sameDay: 'LT',
            nextDay: '[Tomorrow]',
            nextWeek: 'dddd',
            lastDay: '[Yesterday]',
            lastWeek: '[Last] dddd',
            sameElse: 'DD/MM/YYYY'
          }) : moment(new Date()).fromNow()
          if (chat.SUser.type === 'freelancer') {
            nameToDisplay = `${firstName} ${lastName}`
          }
          if (chat.SUser.type === 'organziation') {
            nameToDisplay = organizationName
          }
          // console.log(user)
          return (
            <UI.ChatPeopleContainer key={Math.random()} onClick={() => this.handleSelectedContact(chat.SUser, chat.chat, chat._id, Contacts, 'SUser')}>
              <UI.ChatItemImage src={ImageToDisplay} />
              <UI.ChatItemName>{nameToDisplay}</UI.ChatItemName>
              <UI.ChatItemTime>{LatestMessageTime}</UI.ChatItemTime>
              <UI.ChatItemPhrase>{latestMessage}</UI.ChatItemPhrase>
            </UI.ChatPeopleContainer>
          )
        }
        if (chat.SUser._id === userId) {
          if (chat.FUser.freelancer) {
            firstName = chat.FUser.freelancer.firstName
            lastName = chat.FUser.freelancer.lastName
            ImageToDisplay = chat.FUser.freelancer.profileImageUrl
          }
          if (chat.FUser.organization) {
            organizationName = chat.FUser.organization.organizationName
            ImageToDisplay = chat.FUser.organization.organizationLogoUrl
          }
          let status = chat.active ? 'online' : 'offline'
          let nameToDisplay
          let lastMessage = chat.chat.length - 1
          let latestMessage = chat.chat && chat.chat.length > 0 ? chat.chat[ lastMessage ].message : status
          let LatestMessageTime = chat.chat && chat.chat.length > 0 ? moment(new Date(chat.chat[lastMessage].createdAt)).calendar(null, {
            sameDay: 'LT',
            nextDay: '[Tomorrow]',
            nextWeek: 'dddd',
            lastDay: '[Yesterday]',
            lastWeek: '[Last] dddd',
            sameElse: 'DD/MM/YYYY'
          }) : moment(new Date()).fromNow()
          if (chat.FUser.type === 'freelancer') {
            nameToDisplay = `${firstName} ${lastName}`
          }
          if (chat.FUser.type === 'organization') {
            nameToDisplay = organizationName
          }
          // console.log(user)
          return (
            <UI.ChatPeopleContainer onClick={() => this.handleSelectedContact(chat.FUser, chat.chat, chat._id, Contacts, 'FUser')}>
              <UI.ChatItemImage src={ImageToDisplay} />
              <UI.ChatItemName>{nameToDisplay}</UI.ChatItemName>
              <UI.ChatItemTime>{LatestMessageTime}</UI.ChatItemTime>
              <UI.ChatItemPhrase>{latestMessage}</UI.ChatItemPhrase>
            </UI.ChatPeopleContainer>
          )
        }
      })

      
    return (
      <UI.View>
        <Navbar />
        <UI.GridLayout>
          {/* FIRST SECTION COLUMN */}
          <UI.Div>
            <UI.SearchPeopleContainer>
              <UI.SearchPoepleIcon src={searchIcon} />
              <UI.SearchPoepleInput
                type="search"
                placeholder="Search for skill, freelancer.."
              />
            </UI.SearchPeopleContainer>

            {/* DISPLAY ALL CONTACTS */}
            <UI.ContactsContainer>{displayPeople}</UI.ContactsContainer>
          </UI.Div>

          {/* SECOND SECTION COLUMN */}
          <UI.ChatContainer>
            <UI.ChatHeader>
            <SelectedUserInfo selectedUser={SelectedUser}/>
            </UI.ChatHeader>
            <UI.ChatTextDisplaySection>
              <ChatMessages chats={Chat}/>
            </UI.ChatTextDisplaySection>
            <UI.ChatFooter>
              <UI.footerIcon src={attachIcon} />
              <UI.ChatTextArea
                placeholder="Type your message here..."
                name="message"
                onChange={this.handleChange}
                onKeyUp={this.handleKeyPress}
                value={this.state.message}
              />
              <UI.footerIcon src={picPhotoIcon} />
              <UI.footerIcon src={emojiIcon} />
            </UI.ChatFooter>
          </UI.ChatContainer>

          {/* THIRD SECTION COLUMN */}
          <UI.FlexThirdColumn>
         <UserInfo selectedUser={SelectedUser} {...selectedUserExtras[0]}/>
          </UI.FlexThirdColumn>
        </UI.GridLayout>
      </UI.View>
    );
  }
}
export default Chat