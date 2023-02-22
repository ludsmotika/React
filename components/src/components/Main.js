import React from 'react';

export default function Main() {
    return (
        <main>
            <h1 className='main--title'>The most famous pizzas</h1>
            <ul className='main--facts'>
                <li>Margherita: This classic Neapolitan pizza features tomato sauce, mozzarella cheese, and fresh basil leaves. It is named after Queen Margherita of Savoy, who was said to have enjoyed the pizza on a visit to Naples.</li>
                <li>Pepperoni: A favorite in the United States, this pizza is topped with tomato sauce, mozzarella cheese, and slices of pepperoni sausage.</li>
                <li>Hawaiian: This pizza is topped with tomato sauce, mozzarella cheese, ham, and pineapple. It is a controversial pizza with fans and critics alike.</li>
                <li>Meat Lovers: As the name suggests, this pizza is topped with a variety of meats, such as sausage, pepperoni, bacon, and sometimes ground beef.</li>
                <li>Veggie: For those who prefer a meatless pizza, this one is topped with a variety of vegetables, such as mushrooms, onions, peppers, and olives.</li>
            </ul>
        </main>);
}