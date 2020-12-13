export default {
  LOGIN: '/login',
  // REGISTER: 'auth/register',
  USERBYID: (userId) => {
    return `users/${userId}`;
  },

  // PRODUCT: '/product?limit=10&offset=0&search=',
  PRODUCT: (limit, offset, search) => {
    return `product?limit=${limit}&offset=${offset}&search=${search}`;
  },
};
