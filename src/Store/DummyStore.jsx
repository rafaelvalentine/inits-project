const initState = {
  Admin: {
    fullname: '',
    email: '',
    analytics: {
      registeredUsers: 0,
      activeUsers: 0,
      transactionsPerformed: 0,
      transactionsValue: 0,
      jobsPosted: 0,
      jobsCompleted: 0,
      blackListedUsers: 0
    },
    allUsers: [],
    categories: [],
    transactions: [],
    jobs: []
  }
}

export default initState
