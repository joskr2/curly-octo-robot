import React from 'react'
import "./../styles/Content.css"
import CardTitleSection from './CardTitleSection'
import Card from './Card'

const cardContent = [
  {
    title: "Greek Salad",
    price: "$12.99",
    description: "Fresh greens, tomatoes, cucumbers, onions, feta cheese, and olives",
    orderDelivery: 1,
    imageUrl: "https://cdn.pixabay.com/photo/2017/06/02/18/24/food-2367029_1280.jpg"
  },
  {
    title: "Bruchetta",
    price: "$5.99",
    description: "Fresh tomatoes, basil, garlic, and olive oil",
    orderDelivery: 2,
    imageUrl: "https://cdn.pixabay.com/photo/2016/03/05/19/02/food-1238246_1280.jpg"
  },
  {
    title: "Lemon Dessert",
    price: "$5.00",
    description: "Fresh lemons, sugar, and water",
    orderDelivery: 3,
    imageUrl: "https://cdn.pixabay.com/photo/2013/10/05/16/25/cake-191011_1280.jpg"
  }
]
const Content = () => {
  return (
    <>
     <CardTitleSection />
    <section className='card-section'>
      {
        cardContent.map( ( card, index ) => {
          return (
            <Card key={index} title={card.title} price={card.price} description={card.description} url={card.imageUrl} />
          )
        } )
      }
    </section>
    </>

  )
}

export default Content