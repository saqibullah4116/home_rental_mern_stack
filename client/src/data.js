import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import {
  FaSkiing,
  FaPumpSoap,
  FaShower,
  FaFireExtinguisher,
  FaUmbrellaBeach,
  FaKey,
} from "react-icons/fa";
import { FaHouseUser, FaPeopleRoof, FaKitchenSet } from "react-icons/fa6";
import {
  BiSolidWasher,
  BiSolidDryer,
  BiSolidFirstAid,
  BiWifi,
  BiSolidFridge,
  BiWorld,
} from "react-icons/bi";
import { BsSnow, BsFillDoorOpenFill, BsPersonWorkspace } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla, MdMicrowave, MdBalcony, MdYard, MdPets } from "react-icons/md";
import {
  PiBathtubFill,
  PiCoatHangerFill,
  PiTelevisionFill,
} from "react-icons/pi";
import { TbIroning3 } from "react-icons/tb";
import {
  GiHeatHaze,
  GiCctvCamera,
  GiBarbecue,
  GiToaster,
  GiCampfire,
} from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";

export const categories = [
  {
    label: "All",
    icon: <BiWorld fontSize="24px" />,
    img:"https://images.pexels.com/photos/942317/pexels-photo-942317.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    img: "https://images.pexels.com/photos/8438219/pexels-photo-8438219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    label: "Beachfront",
    icon: <TbBeach fontSize="24px" />,
    iconCategory: <TbBeach fontSize="34px" color="white"/>,
    description: "This property is close to the beach!",
  },
  {
    img: "https://images.pexels.com/photos/5822015/pexels-photo-5822015.jpeg?auto=compress&cs=tinysrgb&w=600",
    label: "Windmills",
    icon: <GiWindmill fontSize="24px" />,
    iconCategory: <GiWindmill fontSize="34px" color="white"/>,
    description: "This property is has windmills!",
  },
  {
    img: "https://images.pexels.com/photos/18065265/pexels-photo-18065265/free-photo-of-row-of-gondolas-moored-by-waterfront-in-venice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    label: "Iconic cities",
    icon: <MdOutlineVilla fontSize="24px" />,
    iconCategory: <MdOutlineVilla fontSize="34px" color="white"/>,
    description: "This property is modern!",
  },
  {
    img: "https://images.pexels.com/photos/2131791/pexels-photo-2131791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    label: "Countryside",
    icon: <TbMountain fontSize="24px" />,
    iconCategory: <TbMountain fontSize="34px" color="white"/>,
    description: "This property is in the countryside!",
  },
  {
    img: "https://images.pexels.com/photos/6130000/pexels-photo-6130000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    label: "Amazing Pools",
    icon: <TbPool fontSize="24px" />,
    iconCategory: <TbPool fontSize="34px" color="white"/>,
    description: "This is property has a beautiful pool!",
  },
  {
    img: "https://images.pexels.com/photos/1481096/pexels-photo-1481096.jpeg?auto=compress&cs=tinysrgb&w=600",
    label: "Islands",
    icon: <GiIsland fontSize="24px" />,
    iconCategory: <GiIsland fontSize="34px" color="white"/>,
    description: "This property is on an island!",
  },
  {
    img: "https://images.pexels.com/photos/17693986/pexels-photo-17693986/free-photo-of-chicago-skyline-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    label: "Lakefront",
    icon: <GiBoatFishing fontSize="24px" />,
    iconCategory: <GiBoatFishing fontSize="34px" color="white"/>,
    description: "This property is near a lake!",
  },
  {
    img: "https://images.pexels.com/photos/20169569/pexels-photo-20169569/free-photo-of-ski-jump-slopes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    label: "Ski-in/out",
    icon: <FaSkiing fontSize="24px" />,
    iconCategory: <FaSkiing fontSize="34px" color="white"/>,
    description: "This property has skiing activies!",
  },
  {
    img: "https://images.pexels.com/photos/1055068/pexels-photo-1055068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    label: "Castles",
    icon: <GiCastle fontSize="24px" />,
    iconCategory: <GiCastle  fontSize="34px" color="white"/>,
    description: "This property is an ancient castle!",
  },
  {
    img: "https://images.pexels.com/photos/2980254/pexels-photo-2980254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    label: "Caves",
    icon: <GiCaveEntrance fontSize="24px" />,
    iconCategory: <GiCaveEntrance fontSize="34px" color="white"/>,
    description: "This property is in a spooky cave!",
  },
  {
    img: "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=600",
    label: "Camping",
    icon: <GiForestCamp fontSize="24px" />,
    iconCategory: <GiForestCamp fontSize="34px" color="white"/>,
    description: "This property offers camping activities!",
  },
  {
    img: "https://images.pexels.com/photos/3384695/pexels-photo-3384695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    label: "Arctic",
    icon: <BsSnow fontSize="24px" />,
    iconCategory: <BsSnow fontSize="34px" color="white"/>,
    description: "This property is in arctic environment!",
  },
  {
    img: "https://images.pexels.com/photos/998653/pexels-photo-998653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    label: "Desert",
    icon: <GiCactus fontSize="24px" />,
    iconCategory: <GiCactus fontSize="34px" color="white"/>,
    description: "This property is in the desert!",
  },
  {
    img: "https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    label: "Barns",
    icon: <GiBarn fontSize="24px" />,
    iconCategory: <GiBarn fontSize="34px" color="white"/>,
    description: "This property is in a barn!",
  },
  {
    img: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    label: "Luxury",
    icon: <IoDiamond fontSize="24px" />,
    iconCategory: <IoDiamond fontSize="34px" color="white"/>,
    description: "This property is brand new and luxurious!",
  },
];

export const types = [
  {
    name: "An entire place",
    description: "Guests have the whole place to themselves",
    icon: <FaHouseUser fontSize="24px"/>,
  },
  {
    name: "Room(s)",
    description:
      "Guests have their own room in a house, plus access to shared places",
    icon: <BsFillDoorOpenFill fontSize="24px"/>,
  },
  {
    name: "A Shared Room",
    description:
      "Guests sleep in a room or common area that maybe shared with you or others",
    icon: <FaPeopleRoof fontSize="24px"/>,
  },
];

export const facilities = [
  {
    name: "Bath tub",
    icon: <PiBathtubFill />,
  },
  {
    name: "Personal care products",
    icon: <FaPumpSoap />,
  },
  {
    name: "Outdoor shower",
    icon: <FaShower />,
  },
  {
    name: "Washer",
    icon: <BiSolidWasher />,
  },
  {
    name: "Dryer",
    icon: <BiSolidDryer />,
  },
  {
    name: "Hangers",
    icon: <PiCoatHangerFill />,
  },
  {
    name: "Iron",
    icon: <TbIroning3 />,
  },
  {
    name: "TV",
    icon: <PiTelevisionFill />,
  },
  {
    name: "Dedicated workspace",
    icon: <BsPersonWorkspace />
  },
  {
    name: "Air Conditioning",
    icon: <BsSnow />,
  },
  {
    name: "Heating",
    icon: <GiHeatHaze />,
  },
  {
    name: "Security cameras",
    icon: <GiCctvCamera />,
  },
  {
    name: "Fire extinguisher",
    icon: <FaFireExtinguisher />,
  },
  {
    name: "First Aid",
    icon: <BiSolidFirstAid />,
  },
  {
    name: "Wifi",
    icon: <BiWifi />,
  },
  {
    name: "Cooking set",
    icon: <FaKitchenSet />,
  },
  {
    name: "Refrigerator",
    icon: <BiSolidFridge />,
  },
  {
    name: "Microwave",
    icon: <MdMicrowave />,
  },
  {
    name: "Stove",
    icon: <GiToaster />,
  },
  {
    name: "Barbecue grill",
    icon: <GiBarbecue />,
  },
  {
    name: "Outdoor dining area",
    icon: <FaUmbrellaBeach />,
  },
  {
    name: "Private patio or Balcony",
    icon: <MdBalcony />,
  },
  {
    name: "Camp fire",
    icon: <GiCampfire />,
  },
  {
    name: "Garden",
    icon: <MdYard />,
  },
  {
    name: "Free parking",
    icon: <AiFillCar />,
  },
  {
    name: "Self check-in",
    icon: <FaKey />
  },
  {
    name: " Pet allowed",
    icon: <MdPets />
  }
];