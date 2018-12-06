const apiPath =  [
    {
      path: '/',
      controller: "home"
    },
    {
      path: '/cart',
      controller: "cart",
      permission: "user"
    },
    {
      path: '/upload',
      controller: "upload",
      permission: "admin"
    }
  ]
  
  export default apiPath