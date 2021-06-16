function Feature({Icon, title, description, children, className}) {
  return (
    <div className={className}>
      <div>{Icon && <Icon />}</div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Feature
