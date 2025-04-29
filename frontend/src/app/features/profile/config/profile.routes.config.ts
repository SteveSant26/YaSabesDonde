export const profileRoutesConfig = {
  base: {
    path: 'profile',
    label: 'Profile',
    url: '/profile',
  },
  children: {
    edit: {
      path: 'edit',
      label: 'Edit',
      url: '/profile/edit',
    },
    me: {
      path: 'me',
      label: 'Me',
      url: '/profile/me',
    },
  },
};
