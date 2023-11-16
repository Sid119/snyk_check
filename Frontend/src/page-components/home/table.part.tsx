import { Badge } from "../../components/ui/badge";
import { useContext, useEffect } from "react";
import { HomePageContext } from "@/src/page-components/home/context";
import { useRouter } from "next/router";
import styles from "./home.page.module.scss";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteTemplatesById, setFavorites } from "@/src/repo/template-service";
import ModalComp from "./modal.part";
import { CreateTemplateDto, FavouriteDTO } from "ceq-common-service/dist/dto";
import TemplateBox from "./template-box.part";
import { format } from "date-fns";

interface TableComponentProps {
  data: any;
  refetchData: () => void;
}

const TableComponent: React.FC<TableComponentProps> = ({
  data,
  refetchData,
}) => {
  const allTemplates: any =
    data?.data?.Items ||
    data?.data?.templateFav.map((i: any) => i) ||
    data?.Items;
  console.log("alltemplates", allTemplates);
  const router = useRouter();
  const id = router.query.id;
  const { data: deleteData, mutate: deleteId } = useMutation({
    mutationKey: ["delete-template"],
    mutationFn: deleteTemplatesById,
  });

  const { mutate: setFavorite } = useMutation({
    mutationKey: ["setFavorites"],
    mutationFn: setFavorites,
  });

  const tableData = (allTemplates || []).map((i: any) => i?.template_data || i);

  const context = useContext(HomePageContext);
  useEffect(() => {
    if (deleteData) {
      refetchData();
    }
  }, [deleteData, refetchData]);

  return (
    <>
      <table className={styles.table}>
        {tableData.length > 0 ? (
          <thead>
            <tr className="bg-[#EBF2FC]">
              <th className="w-[246px] text-left ">Name</th>
              <th className="w-[160px] text-left">Owner</th>
              <th className="w-[192px] text-left">Category</th>
              <th className="w-[192px] text-left">Subcategory</th>
              <th className="w-[137px] text-center">Template ID</th>
              <th className="w-[140px] text-center">Last Modified</th>
              <th className="w-[100px] text-center">Status</th>
              <th className="w-[70px] text-center">Access</th>
              <th className="w-[65px] text-center"></th>
            </tr>
          </thead>
        ) : (
          <thead>
            <tr>
              <th
                className="w-[160px] text-left"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                Owner
              </th>
              <th
                className="w-[246px] text-left "
                style={{ backgroundColor: "#F2F2F2" }}
              >
                Name
              </th>
              <th
                className="w-[192px] text-left"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                Category
              </th>
              <th
                className="w-[192px] text-left"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                Subcategory
              </th>
              <th
                className="w-[137px] text-center"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                Template ID
              </th>
              <th
                className="w-[140px] text-center"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                Last Modified
              </th>
              <th
                className="w-[100px] text-center"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                Status
              </th>
              <th
                className="w-[70px] text-center"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                Access
              </th>
              <th
                className="w-[65px] text-center"
                style={{ backgroundColor: "#F2F2F2" }}
              ></th>
            </tr>
          </thead>
        )}
        <tbody>
          {tableData.length > 0 ? (
            tableData.map((e: any, index: number) => (
              <tr key={index}>
                <td className=" text-[#1F6C9D] font-semibold max-w-[1px]">
                  {e.title}
                </td>
                <td className="font-medium max-w-[1px]">{e.ownerName}</td>
                <td className=" font-medium max-w-[1px] ">{e.categoryName}</td>
                <td className="text-[#2D333E] font-normal max-w-[1px]">
                  {e.subCategoryName}
                </td>
                <td className="text-[#54616A] text-center max-w-[1px] ">
                  {e.id}
                </td>
                <td className="text-[#54616A] text-center max-w-[1px]">
                  {format(new Date(e.lastModifiedDate), "MM.dd.yy")}
                </td>
                <td align="center">
                  <div className="flex justify-center align-middle  m-auto">
                    {e.status === "Published" && (
                      <Badge variant="success">{e.status}</Badge>
                    )}
                    {e.status === "Draft" && (
                      <Badge variant="warning">{e.status}</Badge>
                    )}
                  </div>
                </td>
                <td>{e.status === "Published" ? <ViewImg /> : <EditImg />}</td>
                <td
                  align="center"
                  className="flex justify-center align-middle text-[#051D4C] m-auto"
                >
                  <div
                    className="text-[#051D4C]"
                    style={{ position: "relative" }}
                  >
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <DotsImg
                          onClick={() => context?.openTableDropdown(index)}
                        />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className={styles.table_DropDown}>
                        <DropdownMenuItem className={styles["item-menu"]}>
                          <img
                            src="/assets/Edit.svg"
                            alt="Edit"
                            className="mr-3 w-[14px] h-[14px]"
                          />

                          <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className={styles["item-menu"]}
                          onClick={() => {
                            router.push({
                              pathname: router.pathname,
                              query: {
                                ...router.query,
                                id: e.id,
                              },
                            });
                          }}
                        >
                          <img
                            className="mr-3 w-4 h-4"
                            src="/assets/c-info 1.svg"
                            alt="info"
                          />
                          <span>All Details</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className={styles["item-menu"]}
                          onClick={() => {
                            setFavorite({
                              contractFav: [],
                              templateFav: [e],
                              userId: 101,
                            });
                          }}
                        >
                          <img
                            className="mr-3 w-4 h-4"
                            src="/assets/Vector.svg"
                            alt="vector"
                          />
                          <span>Add to favorites</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className={styles["item-menu"]}>
                          <img
                            className="mr-3 w-4 h-4"
                            src="/assets/news 2.svg"
                            alt="news"
                          />
                          <span>Create contract</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className={styles["item-menu"]}
                          onClick={() => deleteId(e.id)}
                        >
                          <img
                            className="mr-3 w-4 h-4"
                            src="/assets/delete-forever 1.svg"
                            alt="delete"
                          />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr className="h-[470px]">
              <td colSpan={9} className="align-middle">
                <div className={styles.tableDataNotFound}>
                  <NotFoundFilterDataImg />
                  <div className={styles.notFoundTextContainer}>
                    <div className={styles.item1}>No items found</div>
                    <div className={styles.item2}>
                      Try with{" "}
                      <span className={styles.different}>
                        {" "}
                        different filters
                      </span>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <ModalComp />
    </>
  );
};
interface DropdownItemProps {
  title: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const DropdownItem: React.FC<DropdownItemProps> = (props) => {
  return (
    <>
      <div className="list" onClick={props.onClick}>
        <span>{props.icon}</span>
        <span>{props.title}</span>
      </div>
    </>
  );
};

export default TableComponent;
interface ImgProps {
  onClick?: () => void;
  onFocus?: () => void;
}

const DeletInModalImg: React.FC<ImgProps> = (props) => (
  <img
    style={{ width: "16px", height: "16px" }}
    src="assets/deletInModal.svg"
    alt="delete"
  />
);
const EditImg: React.FC = () => (
  <img
    src="/assets/Edit.svg"
    alt="Edit"
    style={{
      width: "14px",
      height: "14px",
      margin: "auto",
      position: "relative",
    }}
  />
);
const ViewImg: React.FC = () => (
  <img
    src="/assets/View Access.svg"
    alt="View Access"
    style={{ width: "14px", height: "14px", margin: "auto" }}
  />
);
const InfoImg: React.FC<ImgProps> = (props) => (
  <img
    style={{ width: "16px", height: "16px", margin: "auto" }}
    src="/assets/c-info 1.svg"
    alt="info"
  />
);
const VectorImg: React.FC = () => (
  <img
    style={{ width: "16px", height: "16px", margin: "auto" }}
    src="/assets/Vector.svg"
    alt="vector"
  />
);
const NewsImg: React.FC<ImgProps> = (props) => (
  <img
    style={{ width: "16px", height: "16px", margin: "auto" }}
    src="/assets/news 2.svg"
    alt="news"
  />
);
const DeleteImg: React.FC<ImgProps> = (props) => (
  <img
    style={{ width: "16px", height: "16px", margin: "auto" }}
    src="/assets/delete-forever 1.svg"
    alt="delet"
  />
);
const DotsImg: React.FC<ImgProps> = (props) => (
  <img
    className={styles.onhoverImg}
    onClick={props.onClick}
    style={{ width: "16px", height: "16px" }}
    src="/assets/menu-dots.svg"
    alt="dots"
  />
);
const NotFoundFilterDataImg: React.FC<ImgProps> = (props) => (
  <img
    style={{ width: "104.28px", height: "128.93px", margin: "auto" }}
    src="/assets/Group 305.svg"
    alt="notFound"
  />
);
