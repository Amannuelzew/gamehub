import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import {
  SiNintendo,
  SiPlaystation2,
  SiPlaystation,
  SiPlaystation3,
  SiPlaystation4,
  SiPlaystation5,
} from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";

interface a {
  as: string;
}
const icon: { [key: string]: React.ReactElement } = {
  pc: <FaWindows />,
  playstation5: <SiPlaystation5 />,
  playstation4: <SiPlaystation4 />,
  playstation3: <SiPlaystation3 />,
  playstation2: <SiPlaystation2 />,
  "xbox-series-x": <FaXbox />,
  xbox360: <FaXbox />,
  "xbox-one": <FaXbox />,
  nintendo: <SiNintendo />,
  "nintendo-switch": <SiNintendo />,
  macos: <FaApple />,
  linux: <FaLinux />,
  android: <FaAndroid />,
  ios: <MdPhoneIphone />,
  web: <BsGlobe />,
};
const Icon = ({ as }: a) => {
  return icon[as];
};

export default Icon;
