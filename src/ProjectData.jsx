import Weather from "./Images/Weather_report.png";
import Evento from "./Images/Evento.png";
import Admin from "./Images/Admin_Panel.png";
import Animes from "./Images/Animes.png";
import Dishpoll from "./Images/dish-poll.png";
import Dice from "./Images/dicegame.png";

const ProjectData = [
  {
    name: "Dish Poll",
    link: "https://sks-19.github.io/favdishes/",
    tech_used: "React, Redux, API and Axios",
    desc: "This is a small react app for ranking dishes. Multiple users can login into the app and vote for their favourite dishes and see the results of the poll.",
    photo: Dishpoll,
    code: "https://github.com/Sks-19/favdishes",
  },
  {
    name: "Anime Info App",
    link: "https://sks-19.github.io/animes/",
    tech_used: "React, API and Axios",
    desc: "This app will show list of animes with details. Users can search anime by their title, Filter anime according to genres. Users can create a watchlist by dragging any anime from anime list.",
    photo: Animes,
    code: "https://github.com/Sks-19/Animes",
  },
  {
    name: "Admin Panel",
    link: "https://sks-19.github.io/Admin-Panel/",
    tech_used: "React, API and Axios",
    desc: "This app is an interface for admins to see, edit and delete users in place. There is a search bar which will help admin to filter on any property. Admin should be able to select one or more rows. Multiple selected rows can be deleted at once using the 'Delete Selected' button at the bottom left. Checkbox on the top left is a shortcut to select or deselect all displayed rows.",
    photo: Admin,
    code: "https://github.com/Sks-19/Admin-Panel",
  },
  {
    name: "Weather Report",
    link: "http://weather-sks.herokuapp.com/",
    tech_used: "React, Axios, WeatherAPI",
    desc: "This App provides accurate weather information based on location. This app will also provide rain forecast, humidity information, maximum and minimum tempratures of the day.",
    photo: Weather,
    code: "https://github.com/Sks-19/Weather_Report_React",
  },
  {
    name: "Dice Game",
    link: "https://sks-19.github.io/piggame/",
    tech_used: "JavaScript(DOM), HTML & CSS",
    desc: "Developed a Dice Game using DOM, HTML5, CSS.",
    photo: Dice,
    code: "https://github.com/Sks-19/piggame",
  },
  {
    name: "Evento",
    link: "#",
    tech_used: "React, Django",
    desc: "Developed a Full-Stack web application EVENTO (Event Information System) using Django Framework, HTML5, CSS. This project is helpful for each company to reach out more audience for their events. It helps small events to get more and more visitorsand let people know about the events.",
    photo: Evento,
    code: "#",
  },
];

export default ProjectData;
