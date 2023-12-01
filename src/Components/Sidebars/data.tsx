import {
  EmoThink,
  IconBags,
  IconBook,
  IconBulb,
  IconCamera,
  IconDev,
  IconHeart,
  IconHome,
  IconMicrophone,
  IconSexophone,
  IconTag,
} from "@/Assets/icons";
import { v4 as uuid } from "uuid";

export const SidebarItems = [
  { id: uuid(), name: "Home", icon: <IconHome /> },
  { id: uuid(), name: "Podcast", icon: <IconMicrophone /> },
  { id: uuid(), name: "Videos", icon: <IconCamera /> },
  { id: uuid(), name: "Tags", icon: <IconTag /> },
  { id: uuid(), name: "FAQ", icon: <IconBulb /> },
  { id: uuid(), name: "Forem Shoe", icon: <IconBags /> },
  { id: uuid(), name: "Advertise on DEV", icon: <IconHeart /> },
  { id: uuid(), name: "About", icon: <IconDev /> },
  { id: uuid(), name: "Contact", icon: <IconSexophone /> },
  { id: uuid(), name: "Guids", icon: <IconBook /> },
  { id: uuid(), name: "Software comparision", icon: <EmoThink /> },
];
