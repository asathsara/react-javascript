import React from 'react';
import Card from "./components/Card";

function App() {
  const aliens = [
    {
      title: "Heatblast",
      text: "Heatblast can create and control fire.",
      imgSrc: "https://i.pinimg.com/736x/db/c0/c9/dbc0c96af54ab289c359c4924fa02c6c.jpg",
      altText: "Heatblast"
    },
    {
      title: "Four Arms",
      text: "Four Arms is super strong and tough.",
      imgSrc: "https://i.pinimg.com/474x/1d/40/fc/1d40fc1cf05a619ee2a1c7486b8d592c.jpg",
      altText: "Four Arms"
    },
    {
      title: "Diamondhead",
      text: "Diamondhead can create crystals.",
      imgSrc: "https://i.pinimg.com/originals/33/40/f8/3340f88ccc964782ed6ce332a70501fa.jpg",
      altText: "Diamondhead"
    },
    {
      title: "XLR8",
      text: "XLR8 has super speed and agility.",
      imgSrc: "https://i.pinimg.com/originals/38/65/70/386570015965adac3c76c9b01155c5cd.png",
      altText: "XLR8"
    },
    {
      title: "Ghostfreak",
      text: "Ghostfreak can become intangible and invisible.",
      imgSrc: "https://i.pinimg.com/originals/a9/ab/59/a9ab598793bb5d20136d9430f2d7563b.jpg",
      altText: "Ghostfreak"
    },
    {
      title: "Wildmutt",
      text: "Wildmutt has enhanced senses and agility.",
      imgSrc: "https://i.pinimg.com/originals/c9/95/c8/c995c8cb1e91675537d77063cf5bf46c.png",
      altText: "Wildmutt"
    },
    {
      title: "Upgrade",
      text: "Upgrade can merge with and control technology.",
      imgSrc: "https://i.pinimg.com/originals/2e/f8/ff/2ef8ff391c0b3581fd4a572a7677f815.png",
      altText: "Upgrade"
    },
    {
      title: "Ripjaws",
      text: "Ripjaws has aquatic abilities and sharp teeth.",
      imgSrc: "https://i.pinimg.com/474x/f3/03/ab/f303ab4bb176a769fc70b85716d69ce8.jpg",
      altText: "Ripjaws"
    },
    {
      title: "Grey Matter",
      text: "Grey Matter has super intelligence and small size.",
      imgSrc: "https://i.pinimg.com/550x/56/29/ca/5629cac008780d7900f86750aac7be9b.jpg",
      altText: "Grey Matter"
    },
    {
      title: "Spidermonkey",
      text: "Spidermonkey has spider-like abilities and agility.",
      imgSrc: "https://i.pinimg.com/originals/e3/40/4b/e3404ba7b8f43a5aaa382b1206e0f401.png",
      altText: "Spidermonkey"
    }
  ];

  {aliens.map((alien, index) => (
        <Card
          key={index}
          title={alien.title}
          text={alien.text}
          imgSrc={alien.imgSrc}
          altText={alien.altText}
        />
      ))}
      
  return (
    <div>
      
    </div>
  );
}

export default App;

