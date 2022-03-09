import {useState, useEffect} from 'react'
import Container from '../utils/Container'

function Navbar() {
  const [linksMenu, setLinksMenu] = useState(null)
  const classesNav = [
    "bg-green-200",
    "flex",
    "justify-center",
    "lg:justify-between",
    "p-6"
  ]

  const linksMenuContainer = [
    "hidden",
    "lg:flex"
  ]

  const classesLinkNav = [
    "p-2"
  ]

  useEffect(() => {
    setLinksMenu([
      {id: 1, link: "#", label: "Home", featured: false},
      {id: 2, link: "#", label: "About Me", featured: false},
      {id: 3, link: "#", label: "Skills", featured: false},
      {id: 4, link: "#", label: "My Work", featured: false},
      {id: 5, link: "#", label: "Get In Touch", featured: true},
    ])
  }, [])

  return (
    <Container>
      <nav className={classesNav.join(" ")}>
        <div>
          Logo here
        </div>
        <div className={linksMenuContainer.join(" ")}>
          {linksMenu && linksMenu.map((el) => (
            <a
              className={classesLinkNav.join(" ")}
              key={el.id}
              href={el.link}>
                {el.label}
            </a>
          ))}
        </div>
      </nav>
    </Container>
  )
}

export default Navbar
