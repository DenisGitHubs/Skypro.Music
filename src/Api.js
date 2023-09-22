
// получить все треки
export async function getAllTracks() {
   const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/', {
   });
   if(!response.ok) {
    throw new Error('Не удалось загрузить плейлист. Попробуй позже')
}

   const data = await response.json();
   return data;
}

//регистрация
export async function postNewUser() {
   const response = await fetch("https://skypro-music-api.skyeng.tech/user/signup/", {
  method: "POST",
  body: JSON.stringify({
    email: "gleb@fokin.ru",
    password: "Aa12345!!",
    username: "gleb@fokin.ru",
  }),
  headers: {
    // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
    "content-type": "application/json",
  },
})
// написать ошибки
// динамические данные
const data = await response.json();
console.log(data);
}
