import { useState } from 'react'
import styles from './Testimonials.module.css'
import './Testimonials.css'

export default function Testimonials({ people, title }) {
    const [ testimonial, setTestimonial ] = useState(people[0])
    const [ currentTest, setCurrentTest ] = useState([0])

    function changeTestimonial(e) {
        console.log(currentTest)
        if (currentTest.length > 0) {
            document.querySelector(`.item-${currentTest[0]}`).classList.remove('actived')
            setCurrentTest([])
        }
        e.target.classList.add('actived')
        setCurrentTest([e.target.id])

        setTestimonial(people[e.target.id])
    }


    return (
        <div className={ styles.testimonialsDiv}>
            <h2>{ title }</h2>
            <div className={ styles.testimonials }>
                <div className={ styles.item }>
                    <div className={ styles.text }>
                        <h4>{ testimonial.name }</h4>
                        <h5>{ testimonial.specific }</h5>
                    </div>
                    <div className={ styles.mainText }>
                        <p>{ testimonial.text }</p>
                    </div>
                </div>
            <nav>
                <ul>
                    { people.map((item, index) => (
                        <li key={ index } id={`${index}`} className={ `item-${index} ${index === 0 ? "actived" : ''}` } onClick={ e => changeTestimonial(e) }></li>
                    )) }
                </ul>
            </nav>
            </div>
        </div>
    )
}