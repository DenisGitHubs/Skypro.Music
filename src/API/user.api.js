
const BASE_URL = 'https://skypro-music-api.skyeng.tech/user'
 // написать ошибки
 export async function LoginIn(email, password) {
    const response = await fetch(`${BASE_URL}/login/`, {
    method: "POST",
    body: JSON.stringify({
      email: `${email}`,
      password: `${password}`,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
  const data = await response.json();
  
  if(response.ok){
   return GetToken(email, password)
  }
  if(!response.ok){
    if(data.email){
      localStorage.setItem('error', JSON.stringify(data.email))
    }
    if(data.password){
      localStorage.setItem('error', JSON.stringify(data.password))
    }  
    if(data.detail){
      localStorage.setItem('error', JSON.stringify(data.detail))
    }
  }
  }

export async function postNewUser(email, password) {
    const response = await fetch(`${BASE_URL}/signup/`, {
   method: "POST",
   body: JSON.stringify({
     email: `${email}`,
     password: `${password}`,
     username: `${email}`,
   }),
   headers: {
     "content-type": "application/json",
   },
 })
 const data = await response.json();
 if (!response.ok) {
   if(data.email){
     localStorage.setItem('error', JSON.stringify(data.email))
   }
   if(data.password){
     localStorage.setItem('error', JSON.stringify(data.password))
   }
   
 console.log(JSON.stringify(data));
 } else {
   const activeUser = {
     Name: email,
   }
   return LoginIn(email, password)
 }
 }

    async function GetToken(email, password) {
    const response = await fetch(`${BASE_URL}/token/`, {
    method: "POST",
    body: JSON.stringify({
        email: `${email}`,
        password: `${password}`,
    }),
    headers: {
        "content-type": "application/json",
    },
    })
    const data = await response.json();
    if (response.ok) {
    const user = {
        Access: data.access,
        Refresh: data.refresh,
        Name: email,
    }
    return user
    }
    }

    export async function GetNewTokens({refresh}) {
      const name = JSON.parse(localStorage.getItem('userName'))
      const response = await fetch(`${BASE_URL}/token/refresh/`, {
      method: "POST",
      body: JSON.stringify({
        refresh: `${refresh}`
      }),
      headers: {
          "content-type": "application/json",
      },
      })
      const data = await response.json();
      if (response.ok) {
      const user = {
          Access: data.access,
          Refresh: refresh,
          Name: name,
      }
      if(!response.ok){
        console.log('error');
      }
      return user
      }
      }