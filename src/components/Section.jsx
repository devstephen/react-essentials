export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2 data-test={`${title.toLowerCase()}-heading`}>{title}</h2>
      {children}
    </section>
  )
}
