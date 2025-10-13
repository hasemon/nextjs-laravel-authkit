const api = {
  auth: {
    register: () => "register", // POST
    login: () => "login", // POST
    logout: () => "logout", // POST
  },

  users: {
    index: () => "users", // GET
    show: (id: string) => `users/${id}`, // GET
    update: (id: string) => `users/${id}`, // PUT/PATCH
    destroy: (id: string) => `users/${id}`, // DELETE
  },
};

export default api;
