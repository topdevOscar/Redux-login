
const authReducer = (state={user:null, users:Array(0), error: ""}, action) => {
  const { type, payload } = action;

  switch(type) {
    case 'ADD_USER':
      console.log('Add user', state.users)
      // window.localStorage.setItem('users', JSON.stringify([...state.users,payload]))
      window.users = [...state.users, payload]
      // console.log("str",JSON.stringify(window.users))
      // const dd = JSON.stringify([...state.users, payload])
      // window.localStorage.setItem('users', dd)
      return {
        ...state,
        users: [
          ...state.users,
          payload
        ],
        error: ""
      }
    case 'LOGIN_USER':
      const matched_user = state.users.filter(ele=>ele.email===payload.email && ele.pass==payload.pass)
      console.log(matched_user)

      if (matched_user.length !== 0)
        return {
          ...state,
          user: payload
        }
      else
        return {
          ...state,
          error: "Not valid"
        }

    case 'LOGOUT_USER':
      return {
        ...state,
        user: null,
        error: ""
      }
    case 'INIT_USERS':
      
      return {
        ...state,
        users: payload
      }
  }
}

export default authReducer