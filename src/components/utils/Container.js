function Container({children, padding=12}) {
  const classForContainer = `lg:px-${padding}`;

  return (
    <div className={classForContainer}>
      {children}
    </div>
  )
}

export default Container
