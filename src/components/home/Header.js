import {useState, useEffect} from 'react'

function Header({ navbar }) {
  const [headerContent, setHeaderContent] = useState(null);

  useEffect(() => {
    setHeaderContent({
      title: "HI, I’M CLEIBERT MORA",
      subtitle: "I am a Web Developer",
      description: "From back to front and learning more everyday :)",
      action: {label: "About me", link:"#"}
    })
  }, [])

  const classesHeader = [
    "bg-blue-200"
  ]

  const classesInnerHeader = [
    "flex",
  ]

  const classesCallToAction = [
    "w-full",
    "text-center",
    "lg:text-left",
    "lg:w-1/3"
  ]

  const classesMainPhoto = [
    "hidden",
    "lg:block",
    "lg:w-2/3"
  ]

  return (
    <header
      className={classesHeader.join(" ")}>
      {navbar}
      <div className={classesInnerHeader.join(" ")}>
        <div className={classesCallToAction.join(" ")}>
          <h1>{headerContent.title}</h1>
          <h3>{headerContent.subtitle}</h3>
          <p>{headerContent.description}</p>
        </div>
        <div className={classesMainPhoto.join(" ")}>
          hola
        </div>
      </div>
    </header>
  )
}

export default Header
