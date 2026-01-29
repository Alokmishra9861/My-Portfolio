import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiWebrtc } from "react-icons/si";

import wanderlust from "../assets/wanderlust";
import apnaVideoCall from "../assets/apnaVideoCall";
import zerodha from "../assets/zerodha";

function Projects() {
  return (
    <>
      <div>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white   mb-4">
            Projects
          </h2>
        </div>
      </div>
      <div className="grid gap-7 sm:grid-cols-3  mt-20 mx-auto">
        <Card
          sx={{ maxWidth: 500 }}
          className="box-border rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out border border-gray-100"
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="340"
              image={wanderlust}
              className="shadow-lg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Wanderlust
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
              ></Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Full stack hotel booking app
              </Typography>
              <div className="flex gap-2 mt-5">
                <FaHtml5 color="text-yellow-600" />
                <FaCss3 color="blue" />
                <FaJs color="yellow" />
                <DiMongodb color="green" />
              </div>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <a
                href="https://github.com/Alokmishra9861/Wanderlust"
                target="_blank"
                rel="noopener noreferrer"
                className="border bg-slate-900 text-white rounded-2xl px-2 py-2 hover:ease-in ease-out"
              >
                Check it out
              </a>
            </Button>
          </CardActions>
        </Card>

        {/* card 2 */}
        <Card
          sx={{ maxWidth: 500 }}
          className="rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out border border-gray-100"
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="340"
              image={zerodha}
              className="shadow-lg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Zerodha
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
              ></Typography>

              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Full stack stock monitoring tool
              </Typography>

              <div className="flex gap-2 mt-5">
                <FaReact color="blue" />
                <RiTailwindCssFill color="blue" />
                <FaJs color="text-orange-600" />
                <DiMongodb color="green" />
                <FaNodeJs color="green" />
                <SiExpress color="black" />
              </div>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <a
                href="https://github.com/Alokmishra9861/Zerodha-Clone"
                target="_blank"
                rel="noopener noreferrer"
                className="border bg-slate-900 text-white rounded-2xl px-2 py-2 hover:ease-in ease-out"
              >
                Check it out
              </a>
            </Button>
          </CardActions>
        </Card>

        {/* card 3 */}

        <Card
          sx={{ maxWidth: 500 }}
          className="rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out border border-gray-100"
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="340"
              image={apnaVideoCall}
              className="shadow-lg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ApnaVideoCall
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
              ></Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Full stack Video Conferencing app
              </Typography>
              <div className="flex gap-2 mt-5">
                <FaReact color="blue" />
                <RiTailwindCssFill color="blue" />
                <FaJs color="text-orange-600" />
                <DiMongodb color="green" />
                <FaNodeJs color="green" />
                <SiExpress color="black" />
                <SiWebrtc />
              </div>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="secondary">
              <a
                href="https://github.com/Alokmishra9861/Apna-Video-Call"
                target="_blank"
                rel="noopener noreferrer"
                className="border bg-slate-900 text-white rounded-2xl px-2 py-2 hover:ease-in ease-out"
              >
                Check it out
              </a>
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}

export default Projects;
