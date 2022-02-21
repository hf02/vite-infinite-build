import "./style.css";
import { start } from "./lib";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = '<h1 id="hello">Hello...</h1>';

start();
