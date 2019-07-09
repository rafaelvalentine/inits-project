const initState = {
  Admin: {
    fullname: '',
    email: '',
    analytics: {
      registeredUsers: '',
      activeUsers: '',
      transactionsPerformed: '',
      transactionsvalue: '',
      jobsPosted: '',
      jobsCompleted: '',
      blackListedUsers: ''
    },
    allUsers: [{}],
    categories: []
  },
  AdminSearch: {
    searchType: 'freelance',
    loading: false,
    searchQuery: '',
    searchError: '',
    result: {
      users: [],
      jobs: []
    }
  }

}

export default initState
