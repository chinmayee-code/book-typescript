import { SelectedPage, ClassType } from "@/shared/types";
import book_11 from "@/assets/book_11.jpg";
import arrival_6 from "@/assets/arrival_6.jpg";
import arrival_7 from "@/assets/arrival_7.jpg";
import book_9 from "@/assets/book_9.jpg";
import book_5 from "@/assets/book_5.jpg";
import book_6 from "@/assets/book_6.jpg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Boring Girls: A Novel",
    description:
      "A bloodstained journey into the dark heart of the music industry, Boring Girls traces Rachel’s deadly coming-of-age, Fern at her side — as the madness deepens, their band’s success heightens, and their taste for revenge grows ravenous.",
    price: 34,
    image: book_11,
  },
  {
    name: "HARRY POTTER AND THE PHILOSOPHER'S STONE",
    description:"Orphan Harry learns he is a wizard on his 11th birthday when Hagrid escorts him to magic-teaching Hogwarts School. As a baby, his mother's love protected him and vanquished the villain Voldemort, leaving the child famous as The Boy who Lived. With his friends Hermione and Ron, Harry has to defeat the returned He Who Must Not Be Named.",
    price: 67 ,
    image: arrival_6,
  },
  {
    name: "The Heroes of Olympus",
    description:
      "The Heroes of Olympus is an appealing series and a must read for anyone who has followed the Percy Jackson series. Familiar places such as Camp Half-Blood are back as are many of the characters and creatures. What truly makes this series fly is the way in which the classic ideas of Greek and Roman mythology and wound together and become a part of everyday modern life.",
    price: 54,
    image: arrival_7,
  },
  {
    name: "Free Fall",
    description:
      "Sammy Mountjoy, artist, rises from poverty and an obscure birth to see his pictures hung in the Tate Gallery. Swept into World War II, he is taken as a prisoner-of-war, threatened with torture, then locked in a cell of total darkness to wait. He emerges from his cell like Lazarus from the tomb, seeing infinity in a grain of sand and eternity in an hour. ",
    price: 34,
    image: book_9,
  },
  {
    name: "Cleverlands",
    description:"The Secrets Behind the Success of the World’s Education Superpowers.Cleverlands documents Crehan’s journey around the world, weaving together her experiences with research on policy, history, psychology and culture to offer extensive new insights into what we can learn from these countries.",
    price: 34,
    image: book_5,
  },
  {
    name: "Shattered by Dick Francis",
    description:
      "Dick Francis worked on his books with his wife, Mary, before her death.Mary and I worked as a team.I have often said that I would have been happy to have both our names on the cover. Mary's family always called me Richard due to having another Dick in the family. I am Richard, Mary was Mary, and Dick Francis was the two of us together.",
    price: 34,
    image: book_6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const FeaturedBooks = ({ setSelectedPage }: Props) => {
  return (
    <section id="featuredbooks" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.FeaturedBooks)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>FEATURED BOOKS</HText>
            <p className="py-5">
            Ever wanted to buy a book but could not because it was too expensive? worry not! because We are here! Our team is committed to bring to you all kinds of best books at the minimal prices ever seen anywhere. Yes, we are literally giving you away a steal.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
                price={item.price}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedBooks;