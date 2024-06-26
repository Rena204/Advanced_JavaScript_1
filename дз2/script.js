// Создаем коллекцию поваров и их специализаций
const chefs = new Map([
    ['Виктор', 'Пицца'],
    ['Ольга', 'Суши'],
    ['Дмитрий', 'Десерты']
  ]);
  
  // Создаем коллекцию блюд и их поваров
  const dishes = new Map([
    ['Пицца "Маргарита"', 'Виктор'],
    ['Пицца "Пепперони"', 'Виктор'],
    ['Суши "Филадельфия"', 'Ольга'],
    ['Суши "Калифорния"', 'Ольга'],
    ['Тирамису', 'Дмитрий'],
    ['Чизкейк', 'Дмитрий']
  ]);
  
  // Создаем коллекцию заказов клиентов
  const orders = new Map();
  
  // Добавляем заказы клиентов
  orders.set({ name: 'Алексей' }, ['Пицца "Пепперони"', 'Тирамису']);
  orders.set({ name: 'Мария' }, ['Суши "Калифорния"', 'Пицца "Маргарита"']);
  orders.set({ name: 'Ирина' }, ['Чизкейк']);
  
  // Выводим информацию о заказах
  orders.forEach((dishes, client) => {
    console.log(`${client.name} заказал: ${dishes.join(', ')}`);
  });
  
  // Выводим информацию о поварах и их специализациях
  chefs.forEach((specialization, chef) => {
    console.log(`${chef} - специализация: ${specialization}`);
  });
  
  // Выводим информацию о блюдах и их поварах
  dishes.forEach((chef, dish) => {
    console.log(`${dish} - повар: ${chef}`);
  });
  