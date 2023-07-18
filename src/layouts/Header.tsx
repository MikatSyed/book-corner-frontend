import { Carousel, Typography, Button } from "@material-tailwind/react";
 
export default function Header() {
  return (
    <Carousel className="rounded-xl">
      <div className="relative h-full w-full">
        <img style={{height:'500px'}}
          src="https://img.freepik.com/free-vector/hand-drawn-book-club-sale-banner_23-2149750499.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Welcome to Our Bookstore
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
             At our bookstore, we take pride in curating an extensive collection of literary wonders from every genre. Whether you're an avid reader or just starting your literary journey, we have something special for you. Explore a treasure trove of bestsellers, timeless classics, thrilling mysteries, heartwarming romances, and so much more.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img style={{height:'500px'}}
          src="https://www.shutterstock.com/image-vector/reading-book-web-banner-design-260nw-1944889516.jpg"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Bestsellers on Sale
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
             Dive into captivating stories penned by celebrated authors and discover new voices that will whisk you away to far-off lands and exciting adventures. With our commitment to quality and diversity, we strive to cater to every taste and preference..
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img style={{height:'500px'}}
          src="https://img.freepik.com/free-vector/realistic-book-lovers-day-horizontal-background-with-composition-text-books-with-lamp-cup-vector-illustration_1284-77302.jpg"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Get Lost in Amazing Stories!
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
             Our knowledgeable staff is always ready to guide you through the shelves and recommend the perfect read that matches your interests. Step into our cozy nooks and immerse yourself in the magic of words, where imagination knows no bounds.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}