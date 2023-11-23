import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading='lazy'
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "/frontpage/coover1.png",
    title: "Breakfast",
  },
  {
    img: "/frontpage/haber_substation.jpg",
    title: "Burger",
  },
  {
    img: "/frontpage/control_room.jpg",
    title: "Camera",
  },
  {
    img: "/frontpage/download.jpeg",

    title: "Coffee",
  },
  {
    img: "/frontpage/shutterstock_1012762273.jpg",

    title: "Hats",
  },
  {
    img: "/frontpage/coover2.png",

    title: "Honey",
  },
  {
    img: "/frontpage/Pella-Substation-panorama-e94197d27d628ea5bcd34d3302e118d6-608acb9f29e1f.jpg",
    title: "Basketball",
  },
  {
    img: "/frontpage/coover3.png",
    title: "Fern",
  },
  {
    img: "/frontpage/electrical-substation-electric-power-safety-getty.jpg",
    title: "Mushrooms",
  },
  {
    img: "/frontpage/generator.jpg",
    title: "Tomato basil",
  },
  {
    img: "/frontpage/61c15752-fd86-46ce-8f10-03c2f9d48d58-3-1_ISU_Coal_Power_plant_3.webp",
    title: "Sea star",
  },
  {
    img: "/frontpage/ddbc26f3-8721-4995-8640-1f08efd3346f-3-1_ISU_Coal_Power_plant_13.webp",

    title: "Bike",
  },
];
