
export async function getAllTracks() {
   const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/', {
   });
   if(!response.ok) {
   console.log("objecefsgerherht");
    throw new Error('Не удалось загрузить плейлист. Попробуй позже')
}

   const data = await response.json();
   return data;
}
