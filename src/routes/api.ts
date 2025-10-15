const api = {
  auth: {
    user: () => "user", // GET
    register: () => "register", // POST
    login: () => "login", // POST
    logout: () => "logout", // POST
  },

  // posts: {
  //   index: () => "posts", // GET
  //   show: (id: string) => `posts/${id}`, // GET
  //   update: (id: string) => `posts/${id}`, // PUT/PATCH
  //   destroy: (id: string) => `posts/${id}`, // DELETE
  // },

};

export default api;
