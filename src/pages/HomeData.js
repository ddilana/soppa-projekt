import Gulasch from '../img/gulasch.jpg'
import Meat from '../img/köttsoppa.jpg';
import Lax from '../img/laxsoppa.jpg';
import Morot from '../img/morotssoppa.jpg';
import Quesa from '../img/quesadillas.jpg';
import Ramen from '../img/ramen.jpg';
import Skal from '../img/skaldjurssoppa.jpg';
import Toscana from '../img/toscana.jpg';

import { FaUtensilSpoon } from 'react-icons/fa'

export const HomeData = [
    {
        icon: <FaUtensilSpoon />,
        headerTitle: "Kött eller kyckling",
        vegeterian: "Vegeterian",
        skaldjur: "Fisk och Skaldjur",
        title: "Ramen",
        ingredients: "Med Kyckling, ägg, majs och Persilja",
        id: 1,
        info: "info",
        add: "Add",
        image: Ramen
    },
    {
        title: "Köttsoppa",
        ingredients: "Med rotfrukter och vitkål",
        id: 2,
        info: "info",
        add: "Add",
        image: Meat
    },
    {
        title: "Toscana",
        ingredients: "Med potatis, morötter, paprika, tomater, vita bönor",
        id: 3,
        info: "info",
        add: "Add",
        image: Toscana
    },
    {
        title: "Gulasch",
        ingredients: "Med bönor, potatis, paprika, lök",
        id: 4,
        info: "info",
        add: "Add",
        image: Gulasch
    },
    {
        title: "Rostad majsoppa",
        ingredients: "Med quesadilla",
        id: 5,
        info: "info",
        add: "Add",
        image: Quesa
    },
    {
        title: "Morotssoppa",
        ingredients: "Med Avocado",
        id: 6,
        info: "info",
        add: "Add",
        image: Morot
    },
    {
        title: "Skaldjurssoppa",
        ingredients: "Med blåmusslor, havskräftor, räkor, torsk",
        id: 7,
        info: "info",
        add: "Add",
        image: Skal
    },
    {
        title: "Laxsoppa",
        ingredients: "Med morot, dill, ärtor",
        id: 8,
        info: "info",
        add: "Add",
        image: Lax
    }
]