import React from 'react'
import { User, Star, Logo } from '../Picture'
import { Container, JobsCompleted, FixContainer, FixContainerAlt } from './styles'
import { UserHandle, SubHandle, Number, Label, SkillType } from '../../theme/style/typeface'
import Rating from 'react-rating'

/**
 * this the component that holds the profile picture, username and rating for the user Card
 */
export const UserDetails = ({ image, name, type, rating }) => {
  return (
    <Container
      align='flex-start'
      justify='flex-start'
      backgroundColor='transparent'
      width='100%'
      height='112px'
      boxShadow='none'
      padding='24px 16px 8px'
    >

      <Container
        direction='row'
        align='center'
        justify='flex-start'
        backgroundColor='transparent'
        width='100%'
        height='50px'
        padding='0'
        color='red'
        boxShadow='none'
      >
        <User
          image={image}
        />
        <Container
          align='flex-start'
          justify='flex-start'
          content='flex-start'
          backgroundColor='transparent'
          width='calc(100% - 48px)'
          height='100%'
          padding='8px 8px 0'
          boxShadow='none'
        >
          {/* this is the name div that shows the name for a user */}
          <UserHandle>
            { name || 'harry potter' }
          </UserHandle>
          <div>
            {/* this is the rating component that shows all the stars for a user */}
            <Rating
              readonly
              initialRating={rating || '0'}
              emptySymbol={<Star empty='true' />}
              fullSymbol={<Star />}
            />
            <Number>{rating || '0'}</Number>
          </div>
        </Container>
      </Container>
      {/* this is the type div that shows the occupation of a user */}
      <SubHandle>
        { type || 'freelancer' }
      </SubHandle>
    </Container>
  )
}
/**
 * this is the Job completed component that shows all the jobs a user has completed
 */
export const JobCompleted = ({ jobs }) => (
  <div style={{ padding: '0 16px' }}>
    <JobsCompleted>
      <Logo width='16px' height='16px' margin='0 10px 0 0'src={require('../../assets/images/jobsposted.svg')} />
      <span>{jobs || 0 } Job completed</span>
    </JobsCompleted>
  </div>

)

const SkillListContainer = ({ skills }) => {
  return (
    <FixContainer>
      {skills && skills.length > 0 ? skills.map(skill => {
        let _skill
        let capitalized = skill.charAt(0).toUpperCase() + skill.slice(1)
        let uppercase = skill.toUpperCase()
        skill.length < 6 ? _skill = uppercase : _skill = capitalized
        return (
          <Container
            key={Math.random()}
            align='center'
            center='center'
            content='center'
            boxShadow='none'
            width='60px'
            height='20px'
            backgroundColor='#F7F7F7'
            borderRadius='2px'
            margin='4px .5px'
            padding='4px 0'
          >
            <SkillType>
              {_skill }
            </SkillType>

          </Container>
        )
      }) : <UserHandle> No Skills Listed </UserHandle> }
    </FixContainer>
  )
}

export const SkillList = ({ skills }) => (
  <FixContainerAlt>
    <Label>
      skills
    </Label>
    <SkillListContainer skills={skills} />
  </FixContainerAlt>
)
