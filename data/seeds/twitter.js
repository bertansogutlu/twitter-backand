/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('order_toppings').truncate()
  await knex('orders').truncate()
  await knex('toppings').truncate()
  await knex('pizzas').truncate()
  await knex('users').truncate()
  await knex('roles').truncate()

  await knex('roles').insert([
    {role_id: 1, role: 'admin'},
    {role_id: 2, role: 'user'},
  ]);
  await knex('users').insert([
    {username: "Defne", surname: 'Atik', email: "defne@gmail.com", password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', role_id: 2},
    {username: "Bertan", surname: 'Sogutlu', email: "bertan@gmail.com", password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', role_id: 1},
  ]);
  await knex('pizzas').insert([
    {pizza: 'Pepperoni', description: 'Hot', price: '150'},
    {pizza: 'Fungi', description: 'Soft', price: '120'},
  ]);
  await knex('toppings').insert([
    {topping: 'Pepperoni'},
    {topping: 'Sausage'},
    {topping: 'Mushrooms'},
    {topping: 'Chicken'},
    {topping: 'Onions'},
    {topping: 'Peppers'},
  ]);
  await knex('orders').insert([
    {user_id: 1, dough: 'thick', size: 'small', quantity: 1, note: 'Extra hot', status: 'Preparing', price: '150', pizza_id: 1},
    {user_id: 2, dough: 'thick', size: 'small', quantity: 1, note: 'Extra sauce', status: 'Preparing', price: '120', pizza_id: 2},
  ]);
  await knex('order_toppings').insert([
    {order_id: 1, topping_id: 1},
    {order_id: 2, topping_id: 2},
  ]);

};
