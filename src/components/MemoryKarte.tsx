const Cities = [
  "Berlin",
  "Rom",
  "Paris",
  "Washington",
  "London",
  "Sydney",
  "Moskau",
  "Agra",
  "Peking",
  "Kairo",
  "Rio",
  "New York",
];

const images = [
  "https://www.tip-berlin.de/wp-content/uploads/2022/02/imago0139832481h-scaled.jpg",
  "https://aws-tiqets-cdn.imgix.net/images/content/b3a66adfc33a4c1f9d8480800ee981c9.jpg?auto=format&fit=crop&h=333&ixlib=python-3.2.1&q=70&w=500&s=17591fcdc23a9427f0c649273de806e0",
  "https://blog.assets.studyflix.de/wp-content/uploads/2024/09/Wordpress_Eiffelturm_Lina-1024x576.jpg",
  "https://www.tagesspiegel.de/images/2773597/alternates/BASE_21_9_W1000/1662019584000/das-wei-e-haus.jpeg",
  "https://statics.getnofilter.com/photos/regular/ef0d6b06-e455-4b0a-ad5f-c88769c6bc9c.jpg",
  "https://te-cdn-marketing-site.storage.googleapis.com/travelessence/australia/blog/Aus-Sydney-opera-house-tomasz-abramowicz-unsplash.jpg",
  "https://img.freepik.com/fotos-premium/catedral-san-basilio-plaza-roja-kremlin-moscu-rusia_336475-227.jpg",
  "https://natuerlich.reisen/wp-content/uploads/2013/04/Taj-Mahal-in-Indien.jpg",
  "https://urlaubszeit.de/wp-content/uploads/2025/01/chinesische-mauer-1.jpg",
  "https://www.americanexpress.com/de-de/amexcited/media/cache/resolve/seo_social_image_filter/cms/2023/02/pyramiden-gizeh-titelbild.jpg",
  "https://cdn.book-family.de/travelbook/data/uploads/2023/06/gettyimages-161356248.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d3/Statue_of_Liberty%2C_NY.jpg",
];

const usedNames = new Set<string>();
const usedUrls = new Set<string>();

function shuffle(array: number[]): number[] {
   for (let i = array.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     [array[i], array[j]] = [array[j], array[i]];
   }
  return array;
}


const citynumbers = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11  ]);
console.log("names", JSON.stringify(citynumbers));

const imageUrlnumbers = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
console.log("bild", JSON.stringify(imageUrlnumbers));

const CreateCard = (props: {index:number}) => {
  console.log("render");
  const city = Cities[citynumbers[props.index]];
  const imageUrl = images[imageUrlnumbers[props.index]];

  console.log("city:", city);
  console.log("imageUrl:", imageUrl);

  console.log(citynumbers.length, props.index);
  console.log(imageUrlnumbers.length, props.index);

    if (!usedNames.has(city) && props.index < citynumbers.length) {
      usedNames.add(city);
      return (
          <div>
            {props.index}
            <h2>{city}</h2>
          </div>
      );
  } else if ((props.index - 12) < imageUrlnumbers.length) {

    const imageIndex = props.index - 12;
    const imageUrl = images[imageUrlnumbers[imageIndex]];

    if (!usedUrls.has(imageUrl)) {
      usedUrls.add(imageUrl);
      return (
          <div>
            {props.index}
            <img src={imageUrl} alt={city}/>
          </div>
      );
    }
  }

  return null;

// }
  //
  // const imagenumbers = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  // console.log("names", JSON.stringify(imagenumbers));
  //
  // const imagerandomIndex = imagenumbers.pop()!;
  // const imageUrl = images[imagerandomIndex];
  //
  // if (!usedUrls.has(imageUrl)) {
  //   usedUrls.add(imageUrl);
  //   return (
  //       <div>
  //         <img src={imageUrl} alt={city}/>
  //       </div>
  //   );
  // }
};

export default CreateCard;

