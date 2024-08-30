declare module "lucide-react" {
  import { FC, SVGProps } from "react";

  // ここで必要なコンポーネントや型を定義します。
  export const IconName: FC<SVGProps<SVGSVGElement>>;

  // 例: 複数のアイコンコンポーネントを定義する場合
  export const Camera: FC<SVGProps<SVGSVGElement>>;
  export const Heart: FC<SVGProps<SVGSVGElement>>;
  export const Github: React.FC<React.SVGProps<SVGSVGElement>>;
  export const Facebook: React.FC<React.SVGProps<SVGSVGElement>>;
  export const X: React.FC<React.SVGProps<SVGSVGElement>>;
  // 必要に応じて他のアイコンも追加
}
