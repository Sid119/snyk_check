import iconSet from "@/src/lib/selection.json";
import IcoMoon, { IconProps } from "react-icomoon";

const Icon = (props: IconProps) => <IcoMoon iconSet={iconSet} {...props} />;

export default Icon;
