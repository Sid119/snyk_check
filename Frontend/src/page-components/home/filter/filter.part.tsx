import { useContext, useMemo } from "react";
import data from "@/public/tabledata.json";
import { HomePageContext } from "./../context";
import styles from "./filter.module.scss";
import clsx from "clsx";
import { getAllCategories, getOwners } from "@/src/repo/template-service";
import { useQuery } from "@tanstack/react-query";
import { Checkbox } from "@/src/components/ui/checkbox";

const Filter: React.FC = () => {
  const allCategories = useQuery({
    queryKey: ["getAllCategories"],
    queryFn: getAllCategories,
  });

  const getOwner = useQuery({
    queryKey: ["getOwners"],
    queryFn: getOwners,
  });

  const context = useContext(HomePageContext);
  const fields = ["owner", "category", "status", "access"];

  const commonDropdown = clsx({
    [styles.commonDropdownsActive]: context?.innerDropDown,
    [styles.dropDownInactive]: !context?.innerDropDown,
  });

  const selectedCategory = useMemo(() => {
    return allCategories?.data?.find((e) => e.id === context?.openCategoryId);
  }, [allCategories?.data, context?.openCategoryId]);

  const categoryChildren = useMemo(() => {
    return (
      allCategories?.data?.find((e) => e.id === context?.openCategoryId)
        ?.childrens || []
    );
  }, [allCategories?.data, context?.openCategoryId]);



  return (
    <>
      <div
        className={clsx(styles.filter, {
          [styles.filterActive]: context?.showDropDown,
        })}
        onClick={context?.toggleFilterDropDown}
      >
        <FilterImg />
        Filter
      </div>
      <div
        className={clsx({
          [styles.dropdownContainerActive]: context?.showDropDown,
          [styles.dropdownContainerInactive]: !context?.showDropDown,
        })}
      >
        <div className={clsx(styles.commonDropdowns, "z-30")}>
          {Object.keys(data[0])
            .filter((list) => fields.includes(list))
            .map((cur, i) => (
              <div
                key={i}
                className={styles.filterItem}
                onClick={() => context?.openFilterChildDropDown(cur)}
              >
                {cur}
                <ArrowImg />
              </div>
            ))}
        </div>

        <div className={clsx(commonDropdown, "z-20")}>
          {context?.keys === "status" && (
            <>
              <div
                className={styles.filterItem}
                onClick={() => {
                  context?.addStatus("draft");
                  context?.toggleFilterDropDown();
                }}
              >
                Draft
              </div>
              <div
                className={styles.filterItem}
                onClick={() => {
                  context?.addStatus("published");
                  context?.toggleFilterDropDown();
                }}
              >
                Published
              </div>
            </>
          )}
          {context?.keys === "access" && (
            <>
              <div
                className={styles.filterItem}
                onClick={() => {
                  context?.addAccess("view");
                  context?.toggleFilterDropDown();
                }}
              >
                View
              </div>
              <div
                className={styles.filterItem}
                onClick={() => {
                  context?.addAccess("edit");
                  context?.toggleFilterDropDown();
                }}
              >
                Edit
              </div>
            </>
          )}
          {context?.keys === "owner" &&
            (getOwner?.data || []).length > 0 &&
            (getOwner?.data || []).map((value, index) => (
              <div
                className={styles.filterItem}
                key={index}
                onClick={() => {
                  context?.addOwner(value);
                  context?.toggleFilterDropDown();
                }}
              >
                {value.Owners}
              </div>
            ))}
          {context?.keys === "category" &&
            allCategories?.data &&
            allCategories?.data.map((category, index) => (
              <div
                className={styles.filterItem}
                key={index}
                onClick={() => {
                  if (category.childrens?.length) {
                    context?.toggleCategory(category.id);
                  } else {
                    context?.addCategory(category);
                    context?.toggleFilterDropDown();
                  }
                }}
              >
                <>
                  {category.name}
                  {category.childrens?.length > 0 && <ArrowImg />}
                </>
              </div>
            ))}
        </div>

        {context?.subCategoryToggle &&
          context?.keys === "category" &&
          selectedCategory &&
          categoryChildren.length > 0 && (
            <div className={clsx(commonDropdown, "z-10")}>
              {categoryChildren.map((subsubCategory, index) => {
                const item = {
                  id: selectedCategory.id,
                  name: selectedCategory.name,
                  child: {
                    id: subsubCategory.id,
                    name: subsubCategory.name,
                  },
                };
                return (
                  <>
                      <div className={clsx(styles.filterItem, styles.filterCheckItem)}>
                        <Checkbox
                          checked={context?.isCategorySelected(item)}
                          className="relative h-[16px] w-[16px] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 checked:border-primary checked:bg-primary checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer focus:before:opacity-[0.12] focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem]"
                          id={selectedCategory.name + "-" + subsubCategory.name}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              context?.addCategory(item);
                            } else {
                              context?.removeCategory(item);
                            }
                          }}
                        />
                        <label
                          className="self-stretch"
                          htmlFor={
                            selectedCategory.name + "-" + subsubCategory.name
                          }
                        >
                          {subsubCategory.name}
                        </label>
                      </div>
                  </>
                );
              })}
            </div>
          )}
      </div>
    </>
  );
};

export default Filter;

const ArrowImg: React.FC = () => (
  <img
    style={{ width: "5px", height: "9.167px" }}
    src="/assets/right-arrow 10px.svg"
  />
);

const FilterImg: React.FC = () => (
  <img
    src="/assets/filter 12px.svg"
    style={{ width: "12px", height: "12px" }}
  />
);