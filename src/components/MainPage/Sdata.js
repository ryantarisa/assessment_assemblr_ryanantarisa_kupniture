import { Model1 } from "../assets/furniture/Furniture1"
import { Model2 } from "../assets/furniture/Furniture2"
import { Model3 } from "../assets/furniture/Furniture3"
import { Model4 } from "../assets/furniture/Furniture4"

const Sdata = [
  {
    id: 1,
    title: `The Sanctuary`,
    desc: `The Sanctuary chair will be your home’s comfy oasis. An eye-catcher that reflects your personality and style. Great to sit, lie down and hang out on.`,
    cover: <Model1/>
  },
  {
    id: 2,
    title: "Yggdrasil",
    desc: `Yggdrasil's clean design and durable material make them easy to use – and they’re also made of layer-glued wood that minimizes waste during production. A coffee table to enlight your day`,
    cover: <Model2/>
  },
  {
    id: 3,
    title: `Sienna`,
    desc: `Bar stools in the Sienna series offer cushiony comfort and many cover options, like this one in stylish beige leather.`,
    cover: <Model3/>
  },
  {
    id: 4,
    title: "Mammut",
    desc: `This easy chair makes us believe in love at first sight, with its clean Scandinavian lines and airy expression. Smart production minimizes environmental impact and price – and maximizes acessibility!`,
    cover: <Model4/>,
  },
]

export default Sdata
