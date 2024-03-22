import "./style.css";

import { Sortable } from "@shopify/draggable";

fetch("/items.json")
  .then((response) => response.json())
  .then((items) => {
    const container = document.querySelector("#container2");
    items.forEach((item) => {
      const div = document.createElement("div");
      div.className = "item";
      div.textContent = item.name;
      container.appendChild(div);
    });

    // Initialisez Draggable après avoir généré les éléments
    const sortable = new Sortable(
      [
        document.querySelector("#container1"),
        document.querySelector("#container2"),
        document.querySelector("#container3"),
      ],
      {
        draggable: ".item",
      }
    );

    sortable.on("sortable:start", () => {
      console.log("sortable:start");
      document.body.style.cursor = "grabbing";
    });

    sortable.on("sortable:stop", () => {
      console.log("sortable:stop");
      document.body.style.cursor = "default";
    });
  });
