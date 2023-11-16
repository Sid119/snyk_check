import { useMemo } from "react";
import styles from "./pagination.module.scss";
import clsx from "clsx";

type SetPage = (p: number) => void;

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  setPage: SetPage;
};

type PageItem = {
  type: "page" | "ellipsis";
  value?: number;
};

const Pagination: React.FC<PaginationProps> = (props) => {
  const { currentPage, totalPages, setPage } = props;

  const pages: PageItem[] = useMemo(() => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    let visiblePages: PageItem[] = [];
    const pageCountToShow = 5;

    if (totalPages <= pageCountToShow) {
      const totalPages: PageItem[] = pageNumbers.map((n) => ({
        type: "page",
        value: n,
      }));
      visiblePages = [...visiblePages, ...totalPages];
    } else {
      if (currentPage <= 3) {
        visiblePages.push(
          { type: "page", value: 1 },
          { type: "page", value: 2 },
          { type: "page", value: 3 },
          { type: "ellipsis" },
          { type: "page", value: totalPages }
        );
      } else if (currentPage >= totalPages - 2) {
        visiblePages.push(
          { type: "page", value: 1 },
          { type: "ellipsis" },
          { type: "page", value: currentPage - 2 },
          { type: "page", value: currentPage - 1 },
          { type: "page", value: currentPage },
          { type: "page", value: totalPages }
        );
      } else {
        visiblePages.push(
          { type: "page", value: 1 },
          { type: "ellipsis" },
          { type: "page", value: currentPage - 1 },
          { type: "page", value: currentPage },
          { type: "page", value: currentPage + 1 },
          { type: "ellipsis" },
          { type: "page", value: totalPages }
        );
      }
    }

    return visiblePages;
  }, [currentPage]);

  const handleButtonClick = (buttonText: 'prev' | 'next') => {
    if (buttonText === "next" && currentPage < totalPages) {
      setPage(currentPage + 1);
    } else if (buttonText === "prev" && currentPage > 1) {
      setPage(currentPage - 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.paginationButton}
        onClick={() => handleButtonClick("prev")}
        disabled={currentPage === 1}
      >
       &lt; Previous
      </button>
      {pages.map((e, i) => (
        <PageItem
          currentPage={currentPage}
          index={i}
          item={e}
          setPage={setPage}
          key={`page-${i}`}
        />
      ))}
      <button
        className={styles.paginationButton}
        onClick={() => handleButtonClick("next")}
        disabled={currentPage === totalPages}
      >
        Next &gt;
      </button>
    </div>
  );
};

const PageItem: React.FC<{
  item: PageItem;
  currentPage: number;
  setPage: SetPage;
  index: number;
}> = (props) => {
  const { item, index, setPage, currentPage } = props;
  if (item.type === "page") {
    return (
      <button
        key={index}
        className={clsx(styles.paginationButton, {
          [styles.paginationButtonActive]: currentPage === item.value 
        })}
        onClick={() => {
          if (item.value) {
            setPage(item.value);
          }
        }}
      >
        {item.value}
      </button>
    );
  } else if (item.type === "ellipsis") {
    return (
      <span key={index} className={styles.paginationButton}>
        ...
      </span>
    );
  }
};

export default Pagination;
