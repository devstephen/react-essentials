import CoreConcept from './CoreConcept'
import { CORE_CONCEPTS } from '../data.js'

export default function CoreConcepts() {
  return (
    <section id='core-concepts' data-test='core-concepts'>
      <h2 data-test="core-concepts-title">Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept}  />
        ))}
      </ul>
    </section>
  )
}
