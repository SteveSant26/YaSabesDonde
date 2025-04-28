export const authRoutesConfig = {
  base: {
    path: 'auth',
    url: '/auth',
    label: 'Auth'
  },
  children: {

    login: {
      path: 'login',
      url: '/auth/login',
      label: 'Login'
      
    },
    register: {
      path: 'register',
      url: '/auth/register',
      label: 'Register'
    },
    me: {
      path: 'me',
      url: '/auth/me',
      label: 'Me'
    },
    edit: {
      path: 'edit',
      url: '/auth/me/edit',
      label: 'Edit'
    },
  }
};
