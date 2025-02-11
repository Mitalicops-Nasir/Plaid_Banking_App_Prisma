import { topCategoryStyles } from "@/constants";
import { cn } from "@/lib/utils";
import { CategoryProps } from "@/index";
import { Progress } from "../ui/progress";

const Category = ({ category }: CategoryProps) => {
  const {
    bg,
    circleBg,
    text: { main, count },
    progress: { bg: progressBg, indicator },
    icon,
  } = topCategoryStyles[category.name as keyof typeof topCategoryStyles] ||
  topCategoryStyles.default;

  return (
    <div className={cn("gap-[18px] flex p-4 rounded-xl dark:bg-[#363949]", bg)}>
      <figure className={cn("flex-center size-10 rounded-full", circleBg)}>
        <div>{icon}</div>
      </figure>
      <div className="flex w-full flex-1 flex-col gap-2">
        <div className="text-14 flex justify-between dark:bg-[#a3bdcc] p-[4px] rounded-lg">
          <h2 className={cn("font-medium", main)}>{category.name}</h2>
          <h3 className={cn("font-normal", count)}>{category.count}</h3>
        </div>
        <Progress
          value={(category.count / category.totalCount) * 100}
          className={cn("h-2 w-full", progressBg)}
          indicatorClassName={cn("h-2 w-full", indicator)}
        />
      </div>
    </div>
  );
};

export default Category;
