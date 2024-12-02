import { golubika4_1_PNG } from "../Images";

export const Logo = () => {
  return (
    <div className="flex items-center lg:flex-1">
      <span className="sr-only">
        SuperGolubika - свежая голубика Минский район, Беларусь
      </span>
      <img
        src={golubika4_1_PNG}
        alt="логотип SuperGolubika"
        className="size-14 -ml-2"
      />
      <span className="text-accent">SuperGolubika</span>
    </div>
  );
};
