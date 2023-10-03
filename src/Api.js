


export async function getFavotitesTrack() {
  const answer = JSON.parse(localStorage.getItem('Active')).Access
  console.log(answer);
  const response = await fetch("https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/", {
 method: "GET",
 headers: {
  Authorization: `Bearer ${answer}`,
   "content-type": "application/json",
 },
})


if (!response.ok) {

console.log(JSON.stringify("Error"));
} else {
  const data = await response.json();
  console.log(data);
}
}

export async function getAllTracks() {
   const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/', {
   });
   if(!response.ok) {
    throw new Error('Не удалось загрузить плейлист. Попробуй позже')
}

   const data = await response.json();
   return data;
}

export async function postNewUser({email, password, props}) {

   const response = await fetch("https://skypro-music-api.skyeng.tech/user/signup/", {
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
// написать ошибки

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
  
  localStorage.setItem('Active', JSON.stringify(activeUser))
  LoginIn({email, password, props})
}
}



export async function LoginIn({email, password, props}) {
  const response = await fetch("https://skypro-music-api.skyeng.tech/user/login/", {
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
 return GetToken({email, password, props})
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

async function GetToken({email, password, props}) {

  const response = await fetch("https://skypro-music-api.skyeng.tech/user/token/", {
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
  const activeUser = {
    Access: data.access,
    Refresh: data.refresh,
    Name: email,
  }
  localStorage.setItem('Active', JSON.stringify(activeUser))

const answer = JSON.parse(localStorage.getItem('Active'))
props.setBearer(answer)


return
}

}


