import "./sass/main.scss";
import { openHamburgerMenu } from "./modules/hamburgerMenu.js";
import { changeIcons } from "./modules/changeIconFill";
import { openSidebar } from "./modules/sidebarOpen";
import { toggleProjects } from "./modules/toggleProjects";
openHamburgerMenu();
changeIcons();
openSidebar();
toggleProjects();