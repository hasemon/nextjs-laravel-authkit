const api = {
  auth: {
    register: () => "/api/register", // POST
    login: () => "/api/login", // POST
    logout: () => "/api/logout", // POST
  },

  users: {
    index: () => "/api/users", // GET
    show: (id: string) => `/api/users/${id}`, // GET
    update: (id: string) => `/api/users/${id}`, // PUT/PATCH
    destroy: (id: string) => `/api/users/${id}`, // DELETE
    },
  
};

export default api;
