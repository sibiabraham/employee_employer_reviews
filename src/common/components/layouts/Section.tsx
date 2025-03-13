import { cn } from "@/common/utils/cn";
import { type ComponentProps } from "react";

type Props = ComponentProps<"section">;

const Section = ({ children, className, ...rest }: Props) => {
  return (
    <section className={cn("relative w-full pb-20 pt-14", className)} {...rest}>
      {children}
    </section>
  );
};

export default Section;
