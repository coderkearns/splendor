import Home from "./routes/home"
import About from "./routes/about"
import GameHome from "./routes/game-home"
import Game from "./routes/game"

let routes = {
  "/game/:players": Game,
  "/game/": GameHome,
  "/about": About,
  "/": Home,
}

export default routes
