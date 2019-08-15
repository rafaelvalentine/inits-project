import React, { Component } from "react";
import swlt from "sweetalert";
import Navbar from "../../container/Navbar";
import * as UI from "./style.js";

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

/**
 *@class chat
 */
export default class Chat extends Component {
  state = {
    contacts: [],

    chatText: "",
    textToDisplay: "",

    selectedContact: "",
  };

  componentWillMount() {
    this.setState({ contacts: data });
  }

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleKeyPress = event => {
    if (event.keyCode === 13) {
      if (!this.state.selectedContact) {
        return swlt("", "No Contact Selected Yet!", "error");
      }
      event.target.value = "";
      this.setState({ textToDisplay: this.state.chatText });
    }
  };

  handleSelectedContact = data => this.setState({ selectedContact: data });

  render() {
    const { contacts, selectedContact } = this.state;
    const displaySkill = (selectedContact.skills || []).map(data => (
      <UI.SkillText>{data}</UI.SkillText>
    ));
    const displayPeople = contacts.map(data => (
      <UI.ChatPeopleContainer onClick={() => this.handleSelectedContact(data)}>
        <UI.ChatItemImage src={data.avatar} />
        <UI.ChatItemName>{data.name}</UI.ChatItemName>
        <UI.ChatItemTime>{data.time}</UI.ChatItemTime>
        <UI.ChatItemPhrase>{data.phrase}</UI.ChatItemPhrase>
      </UI.ChatPeopleContainer>
    ));
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
              {selectedContact && (
                <UI.ChatHeaderProfile>
                  <UI.ChatHeaderProfileItem1 src={selectedContact.avatar} />
                  <UI.ChatHeaderProfileItem2>
                    {selectedContact.name}
                  </UI.ChatHeaderProfileItem2>
                </UI.ChatHeaderProfile>
              )}
            </UI.ChatHeader>
            <UI.ChatTextDisplaySection>
              {selectedContact && (
                <UI.ChatTextDisplayLeft>
                  {selectedContact.conversation.length > 0 &&
                    selectedContact.conversation.map(data => {
                      if (data.notReply) {
                        return (
                          <UI.ChatTextDisplayOthersText
                            color="blue"
                            backgroundColor="#FFF"
                          >
                            {data.text}
                          </UI.ChatTextDisplayOthersText>
                        );
                      }
                    })}
                </UI.ChatTextDisplayLeft>
              )}
              {selectedContact && (
                <UI.ChatTextDisplayRight>
                  {selectedContact.conversation.length > 0 &&
                    selectedContact.conversation.map(data => {
                      if (!data.notReply) {
                        return (
                          <UI.ChatTextDisplayMyText
                            color="#FFF"
                            backgroundColor="#3CB46E"
                          >
                            {data.text}
                          </UI.ChatTextDisplayMyText>
                        );
                      }
                    })}
                </UI.ChatTextDisplayRight>
              )}
            </UI.ChatTextDisplaySection>
            <UI.ChatFooter>
              <UI.footerIcon src={attachIcon} />
              <UI.ChatTextArea
                placeholder="Type your message here..."
                name="chatText"
                onChange={this.handleChange}
                onKeyUp={this.handleKeyPress}
              />
              <UI.footerIcon src={picPhotoIcon} />
              <UI.footerIcon src={emojiIcon} />
            </UI.ChatFooter>
          </UI.ChatContainer>

          {/* THIRD SECTION COLUMN */}
          <UI.FlexThirdColumn>
            {selectedContact ? (
              <UI.Div>
                <UI.ProfileImage src={selectedContact.profilePic} />
                <UI.Div>
                  <UI.ProfileSectionName>
                    {selectedContact.name}
                  </UI.ProfileSectionName>
                  <UI.ProfileSectionJob>
                    {selectedContact.profession}
                  </UI.ProfileSectionJob>
                </UI.Div>
                <UI.JobsCompletedTextContainer>
                  <UI.JobsCompletedTextIcon src={bagIcon} />
                  <UI.JobsCompletedText>48 Jobs Completed</UI.JobsCompletedText>
                </UI.JobsCompletedTextContainer>
                <UI.BioSection>
                  Bio <br />
                  <UI.BioTextSection>{selectedContact.bio}</UI.BioTextSection>
                </UI.BioSection>
                <UI.Div style={{paddingLeft: '10px'}}>
                  Skills <br />
                  <UI.DisplaySkilll>{displaySkill}</UI.DisplaySkilll>
                </UI.Div>
              </UI.Div>
            ) : (
              <UI.NoContactSelected>
                No Contact Selected Yet!
              </UI.NoContactSelected>
            )}
          </UI.FlexThirdColumn>
        </UI.GridLayout>
      </UI.View>
    );
  }
}
