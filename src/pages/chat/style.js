import Styled from 'styled-components';

export const View = Styled.div ``;
export const Div = Styled.div ``;

export const GridLayout = Styled.div `
    display: grid;
    grid-template-columns: 20% 60% 19%;
    background-color: #F5F7F9;
    height: auto;
    min-height: 100vh;
`;

// First column

export const SearchPeopleContainer = Styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #EEEEEE;
    padding: 28px 50px;
    height: auto;
`;

export const SearchPoepleIcon = Styled.img `
    width: 24px;
    height: 24px;
`;

export const SearchPoepleInput = Styled.input `
    width: 100vw;
    border: none;
    height: 40px;
    background: transparent;

    ::placeholder,
    ::-webkit-input-placeholder {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;    
        line-height: 16px;
        color: #626262;
    }
`;

export const ContactsContainer = Styled.div `
    overflow-y: auto;
    height: 700px;
`;

export const ChatPeopleContainer = Styled.div `
    display: grid;
    grid-template-areas:
    'image name name name time time'
    'image phrase phrase phrase phrase phrase';
    grid-gap: 10px;
    padding: 28px 15px 10px 15px;
    border-bottom: .5px solid #EEEEEE;
    cursor: pointer;

    :hover {
        background: #eff4f8;
        transition: 2
        padding-left: 2px;
    }
`;

export const ChatItemImage = Styled.img `
    grid-area: image
    height: 48px;
    width: 48px;
    border-radius: 50%;
    background: #E5E5E5;
`;

export const ChatItemName = Styled.div `
    grid-area: name;
    font-family: Open Sans;
    font-size: 16px;
    line-height: 16px;
    color: #7E7E7E;
`;

export const ChatItemTime = Styled.div `
    grid-area: time;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 14px;
    color: #515151;

`;

export const ChatItemPhrase = Styled.div `
    grid-area: phrase;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    color: #515151;

`;



// SECOND COLUMN

export const ChatContainer = Styled.div `
    display: grid;
    grid-template-rows: 20% 60% 10%;
    padding: auto 10px;
    border-right: 1px solid #EEEEEE;
    border-left: 1px solid #EEEEEE;
`;

export const ChatHeader = Styled.div `
    border-bottom: 1px solid #EEEEEE;
    margin: 0 15px;
    height: 98px;
    display: flex;
    align-items: center;
    padding-left: 30px;
`;

export const ChatHeaderProfile = Styled.div `
    display: grid;
    grid-gap: 20px;
    grid-template-areas:
    'profileImage profileImage profileImage profileName profileName profileName'
    'profileImage profileImage profileImage profileName profileName profileName';
`;

export const ChatHeaderProfileItem1 = Styled.img `
    grid-area: profileImage;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    background: #E5E5E5;
`;

export const ChatHeaderProfileItem2 = Styled.div `
    grid-area: profileName;
    transform: translateY(10px);
    font-family: Open Sans;
    font-size: 18px;
    line-height: 25px;
    color: #7E7E7E;
`;



export const ChatFooter = Styled.div `
    border-top: 1px solid #EEEEEE;
    margin: 10px;
    padding: 0px 10px;
    padding-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const footerIcon = Styled.img `
    width: 24px;
    height: 24px;
    margin: 0 10px;
`;

export const ChatTextDisplaySection = Styled.div `
   overflow-y: auto;
   height: 500px;
`;

export const ChatTextDisplayRight = Styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
`;
export const ChatTextDisplayLeft = Styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const ChatTextDisplayMyText = Styled.div `
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 14px;
    color: #FFFFFF;
    background: #3CB46E;
    // width: 300px;
    // height: 74px;
    text-align: center;
    border-radius: 10px;
    margin: 12px;
    padding: 12px;
`;

export const ChatTextDisplayOthersText = Styled.div `
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 14px;
    color: ${props => props.theme.blue};
    background: ${props => props.theme.white};
    // width: 300px;
    // height: 74px;
    text-align: center;
    border-radius: 10px;
    margin: 12px;
    padding: 12px;
`;

export const ChatTextAreaContainer = Styled.div `
    border-top: 1px solid #EEEEEE;
`;

export const ChatTextArea = Styled.textarea `
    border: none;
    width: 75%;
    margin: 0 5px;
    padding: 20px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    line-height: 16px;
    color: #7E7E7E;
    // height: 100px;
    background: transparent;
    :focus {
        outline: none;
    }
    ::placeholder {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 16px;
        color: #7E7E7E;
    }
`;


// THIRD COLUMN

export const FlexThirdColumn = Styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: auto 10px;
`

export const ProfileImage = Styled.img `
    width: 120px;
    height: 120px;
    background: #EEEEEE;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 16px;
    // margin-left: 34%;
`;

export const ProfileSectionName = Styled.p `
    font-family: Open Sans;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #7E7E7E;
`;

export const ProfileSectionJob = Styled.p `
    font-family: Open Sans;
    font-size: 10px;
    line-height: 14px;
    text-align: center;
    color: #7E7E7E;
`;

export const JobsCompletedTextContainer = Styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #EEEEEE;
    border-top: 1px solid #EEEEEE;
`;

export const JobsCompletedTextIcon = Styled.img `
   width: 1rem;
   height: 1rem;
   margin-right: 20px;
`;

export const JobsCompletedText = Styled.div `
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #2F80ED;
`;

export const BioSection = Styled.div `
    padding: 20px 10px;
`;

export const BioTextSection = Styled.p `
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 177.04%;
    color: #404040;
`;


export const SkillText = Styled.div `
    background: #FFFFFF;
    border-radius: 2px;
    font-size: 10px;
    line-height: 14px;
    color: #515151;
    padding: 8px;
    margin-right: 10px;
    margin-top: 10px;
`;

export const DisplaySkilll = Styled.div `
    display: flex;
    flex-wrap: wrap;
`;

export const NoContactSelected = Styled.div `
    margin: 50% auto;
    font-size: 1rem;
    color: #a5a5a5;
`;