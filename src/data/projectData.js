import pentaPeduliImg from "../img/penta-peduli.png"
import hospitalSytemImg from "../img/hospital-system.png"
import portfolioWebImg from "../img/portfolio-web.png"
import snakeGameImg from "../img/snake-game.png"
import todoListImg from "../img/todo-list.png"
import barcodeImg from "../img/barcode.png"
import scribbleImg from "../img/scribble-app.png"
import drawingAppImg from "../img/drawing-app.png"

const data = [
  {
    "id": 1,
    "title": "Portfolio Website",
    "img": portfolioWebImg,
    "site": "",
    "desc": "A personal portfolio website made with React.js and ChakraUI.",
    "tech": ["Language: Javascript", "React.js", "ChakraUI", "Github"],
    "resource": {
      "repo": "https://github.com/danielcm585/portfolio-web",
    },
  },
  {
    "id": 2,
    "title": "Penta Peduli",
    "img": pentaPeduliImg,
    "site": "https://pentapeduli.hexalogi.cyou/",
    "role": ["Junior Backend Developer"],
    "desc": "A web app for crowdfunding, that consists of frontend and backend made by Penta Team as Compfest Software Engineering Academy 2021 final project.",
    "tech": ["Language: HTML, SASS, Typescript, Go", "React.js", "Redux Saga", "PostgreSQL", "GORM", "Docker", "Github"],
    "resource": {
      "frontRepo": "https://github.com/matthewCAlbert/compfest-final-task-frontend",
      "backRepo": "https://github.com/bhimsur/compfest-final-task-backend",
    },
    "show": true,
  },
  {
    "id": 3,
    "title": "Hospital System",
    "img": hospitalSytemImg,
    "site": "https://hospital-system-compfest.herokuapp.com/",
    "role": ["Fullstack Developer"],
    "desc": "A web app for booking an appointment with doctor, that consists of frontend and backend made by me as Compfest Software Engineering Academy 2021 first project.",
    "tech": ["Language: HTML, CSS, Javascript, PHP", "PHPMyAdmin", "Github"],
    "resource": {
      "repo": "https://github.com/danielcm585/hospital-system",
    },
    "show": true,
  },
  {
    "id": 4,
    "title": "Snake Game",
    "img": snakeGameImg,
    "site": "",
    "desc": "A simple snake game made with Java.",
    "tech": ["Language: Java", "JFrame", "JPanel"],
    "resource": {
      "repo": "https://github.com/danielcm585/snake-game",
    },
    "show": true,
  },
  {
    "id": 5,
    "title": "Drawing App",
    "img": drawingAppImg,
    "desc": "An elastic shape application made with Python.",
    "tech": ["Language: Python", "Tkinter"],
    "resource": {
      "repo": "https://github.com/danielcm585/drawing-app",
    },
  },
  {
    "id": 6,
    "title": "EAN-13 Barcode Generator",
    "img": barcodeImg,
    "desc": "An EAN-13 barcode generator application made with Python.",
    "tech": ["Language: Python", "Tkinter"],
    "resource": {
      "repo": "https://github.com/danielcm585/barcode-generator",
    },
  },
  {
    "id": 7,
    "title": "Scribble App",
    "img": scribbleImg,
    "desc": "A drawing and writting application made with Python.",
    "tech": ["Language: Python", "Tkinter"],
    "resource": {
      "repo": "https://github.com/danielcm585/drawing-app",
    },
  },
  {
    "id": 8,
    "title": "Todo List App",
    "img": todoListImg,
    "desc": "An application for tracking todo lists made with React.js.",
    "tech": ["Language: Javascript", "React.js"],
    "resource": {
      "repo": "https://github.com/danielcm585/todo-list-app",
    },
  },
  {
    "id": 9,
    "title": "Problemset Competitive Programming Problem",
    "img": pentaPeduliImg,
    "role": ["Problemsetter"],
    "desc": "TOKI Regular Open Contest is a Competitive Programming contest that is held by Indonesian Informatics Olympiad National Team regularly.",
    "tech": ["Language: C++"],
  },
]

export default data