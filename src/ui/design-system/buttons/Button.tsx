import clsx from "clsx";
import { IconType } from "react-icons";

interface Props {
  children?: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ico"
    | "success"
    | "warning"
    | "danger";
  size?: "small" | "medium" | "large";
  icon?: { icon: IconType };
  icoPosition?: "left" | "right";
  icoTheme?: "accent" | "secondary" | "gray";
  className?: "string";
}

export const Button = ({
  children,
  className,
  variant = "primary",
  size = "small",
  icon,
  icoPosition = "right",
  icoTheme = "accent",
}: Props) => {
  let variantStyle: string = "";
  let sizeStyle: string = "";

  switch (variant) {
    case "primary":
      variantStyle = "bg-primary text-white hover:bg-primary-400 rounded";
      break;
    case "secondary":
      variantStyle = "bg-secondary text-white hover:bg-secondary-400 rounded";
      break;
    case "outline":
      variantStyle =
        "bg-white text-black border border-gray hover:bg-gray-400 rounded";
      break;
    case "success":
      variantStyle =
        "bg-alert-success text-black hover:bg-secondary-400 rounded";
      break;
    case "warning":
      variantStyle =
        "bg-alert-warning text-white hover:bg-secondary-400 rounded";
      break;
    case "danger":
      variantStyle =
        "bg-alert-danger text-white hover:bg-secondary-400 rounded";
      break;
    case "ico":
      if (icoTheme === "accent") {
        variantStyle =
          "bg-primary text-white hover:bg-primary-400 rounded-full";
      }
      break;
  }

  switch (size) {
    case "small":
      sizeStyle = `${
        variant === "ico"
          ? "w-[30px] h-[30px] flex items-center justify-center"
          : "px-[14px] py-[4px] font-medium text-caption2"
      }`;
      break;
    case "medium":
      sizeStyle = `${
        variant === "ico"
          ? "w-[40px] h-[40px] flex items-center justify-center"
          : "px-[18px] py-[4px] font-medium text-caption1"
      }`;
      break;
    case "large":
      sizeStyle = `${
        variant === "ico"
          ? "w-[50px] h-[50px] flex items-center justify-center"
          : "px-[22px] py-[5px] font-medium text-caption1"
      }`;
      break;
  }

  return (
    <button className={clsx(variantStyle, sizeStyle, className)}>
      {icon && variant === "ico" ? (
        <icon.icon size={24} />
      ) : (
        icon &&
        icoPosition && (
          <div>
            {icoPosition === "left" && (
              <div className="flex flex-row items-center justify-center gap-2">
                <icon.icon size={24} />
                {children}
              </div>
            )}
            {icoPosition === "right" && (
              <div className="flex flex-row items-center justify-center gap-2">
                {children}
                <icon.icon size={24} />
              </div>
            )}
          </div>
        )
      )}
    </button>
  );
};
