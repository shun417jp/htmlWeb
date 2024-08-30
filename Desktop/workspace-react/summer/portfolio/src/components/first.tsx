import Image from "next/image";
import { FC } from "react";

type Props = {
  title: string;
  subtitle: string;
  isImage?: boolean;
};

const First: FC<Props> = ({ title, subtitle, isImage }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="container flex flex-row
        justify-between items-center max-w-5xl"
      >
        <div
          className="flex flex-col justify-center items-center
        pt-16 pb-24"
        >
          <h1 className="text-9xl from-neutral-500">{title}</h1>
          <p className="text-3xl">{subtitle}</p>
        </div>
        {isImage && (
          <figure className="">
            <Image
              src={"/猫ちゃんフード01.png"}
              alt="アイコン"
              width={380}
              height={300}
              className="w-full"
            />
          </figure>
        )}
      </div>
    </div>
  );
};

export default First;
