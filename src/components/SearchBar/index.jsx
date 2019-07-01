import React from 'react'
import { SearchInput } from '../Input'
import { SearchButton, FilterButton } from '../Button'
import * as Page from './styles'

const SearchBar = ({ inputs, changed, clicked, filterClicked }) => {
  return (
    <Page.Wrapper>
      <SearchInput
        name='search users'
        value={inputs.query}
        placeholder='Search for users...'
        changed={changed}
      />
      <SearchButton
        content='search'
      />
      <FilterButton
        clicked={filterClicked}
        content='filter'

      />
    </Page.Wrapper>

  )
}

export default SearchBar
