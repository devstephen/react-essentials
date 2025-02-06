export default function CoreConcept({ id, image, title, description }) {
  return (
    <li data-test={id}>
      <img src={image} alt={title} data-test={`${id}-img`} />
      <h3 data-test={`${id}-title`}>{title}</h3>
      <p data-test={`${id}-desc`}>{description}</p>
    </li>
  )
}
