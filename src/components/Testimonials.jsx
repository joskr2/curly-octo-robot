import React from 'react'
import "../styles/Testimonials.css"

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  },
  {
    id: 2,
    name: "Martin Lu",
    image: "https://cdn.pixabay.com/photo/2015/01/12/10/45/man-597178_1280.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  },
  {
    id: 3,
    name: "Steve Smith",
    image: "https://cdn.pixabay.com/photo/2016/03/27/22/21/boy-1284509_1280.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  }
]

const TestimonialCard = ( { url, title, content } ) => {
  return (
    <>
      <div className="testimonial_card">
        <img className="testimonial_card__image" src={url} />
        <div className="testimonial_card__container__text__and__name">
          <p> {content} </p>
          <h3>{title}</h3>
        </div>
      </div>
    </>
  )
}

const Testimonials = () => {
  return (
    <section className='testimonial-section'>
      <h1>Testimonials</h1>
      <div className="testimonials">
        {
          testimonials.map( ( testimonial ) => {
            return (
              <TestimonialCard
                key={testimonial.id}
                url={testimonial.image}
                title={testimonial.name}
                content={testimonial.text}
              />
            )
          } )
        }
      </div>
    </section>
  )
}

export default Testimonials