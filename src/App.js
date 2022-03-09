import Home from './components/home/Home'

function App() {
  const classes = [
    "bg-gray-200",
    "min-h-screen"
  ]

  return (
    <div className={classes.join(" ")}>
      <Home />
    </div>
  )
}

export default App
