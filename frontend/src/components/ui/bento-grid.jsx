import { Edit } from "lucide-react";
import { cn } from "../lib/utils"
import { Button } from "./button";
import { Trash } from "lucide-react";

export const BentoGrid = ({ className,children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({ key, title, header,className}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:scale-105 hover:shadow-xl transition duration-200 shadow dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )} key={key}>
        <iframe src={header} frameborder="0" className="w-full h-full" />
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          <div
            className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div
            className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 flex justify-between items-center">
             <Button className=""> <Edit /></Button>
             <Button className="bg-red-500"> <Trash /></Button>
          </div>
         </div>
    </div>
  );
};
