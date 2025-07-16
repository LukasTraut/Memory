import { useState } from "react";

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

function shuffle(array: number[]): number[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const indexes = shuffle([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
]);

Cities.forEach((city, index) => {
  console.log(`Index: ${index}, Element: ${city}`);
});

let lastClicked: { index: number; value: number; flipBack: () => void } | null = null;

type MemoryCardProps = {
  index: number;
  lastClickedIndex: number;
};

const MemoryCard = ({ index, lastClickedIndex }: MemoryCardProps) => {
 const [isClicked, setIsClicked] = useState(false);
  const [isFirstCard, setIsFirstCard] = useState(false);

  const pickIndex = indexes[index];
  const stringindex = Cities[pickIndex];

  console.log(lastClickedIndex)

  const flipBack = () => setIsClicked(false);

  const handleClick = () => {

    setIsClicked(true);

    if (!lastClicked) {
      lastClicked = { index, value: pickIndex, flipBack };
    } else {

      const isMatch =
        (pickIndex < 12 && pickIndex + 12 === lastClicked.value) ||
        (pickIndex >= 12 && pickIndex - 12 === lastClicked.value);


      if (isMatch) {
        setIsFirstCard(true);
        setTimeout(() => {
          alert("Its a Match");
          console.log("Its a Match");
          lastClicked = null;
        }, 500);
      } else {
        setTimeout(() => {
          alert("It's not a Match");
          console.log("It's not a Match");
          setIsClicked(false);
          lastClicked?.flipBack();
          lastClicked = null;
        }, 1000);

      }
    }
  };


  return (
    <div
      onClick={handleClick}
    >
      <img
        src={
          isClicked || isFirstCard
            ? stringindex
            : "https://www.crowdify.net/media/projects/6362/news/9877_detail.webp?m=1558343507"
        }
        alt={stringindex}

      />
    </div>
  );
};

export default MemoryCard;