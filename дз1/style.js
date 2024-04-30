// Создание объекта Музыкальная коллекция
const musicCollection = {
    albums: [
      {
        title: "Альбом 1",
        artist: "Исполнитель 1",
        year: "2000"
      },
      {
        title: "Альбом 2",
        artist: "Исполнитель 2",
        year: "2010"
      },
      {
        title: "Альбом 3",
        artist: "Исполнитель 3",
        year: "2020"
      }
    ],
    [Symbol.iterator]() {
      let index = 0;
      const albums = this.albums;
      return {
        next() {
          if (index < albums.length) {
            return { value: albums[index++], done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  // Использование цикла for...of для вывода альбомов
  for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
  }
  