import React from "react";
import { getAllTemplatesById } from "@/src/repo/template-service";
import { useQuery } from "@tanstack/react-query";
import { Modal, ModalContent } from "../../components/modal/modal";
import styles from "./home.page.module.scss";
import { Button } from "../../components/ui/button";
import { useRouter } from "next/router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { format } from "date-fns";

const ModalComp = () => {
  const router = useRouter();
  const id = router.query.id;

  const templateByID = useQuery<any, Error>({
    queryKey: ["getAllTemplateById", id],
    queryFn: () => getAllTemplatesById(id),
  });

  const TemplateById = templateByID?.data?.data?.Items;

  const deletInModal = (
    <img
      style={{ width: "16px", height: "16px" }}
      src="assets/deletInModal.svg"
      alt="delete"
    />
  );

  const crossImg = (
    <img
      width={"13.33px"}
      height={"13.33px"}
      src="assets/crossImgModal.svg"
    ></img>
  );

  const closeModal = () => {
    const query = { ...router.query };
    delete query.id;
    router.push({
      pathname: router.pathname,
      query,
    });
  };

  if (typeof id !== "string") return <></>;

  return (
    <Modal active={Boolean(id)} onClose={closeModal}>
      <ModalContent position="right">
        {TemplateById && (
          <>
            <div className={styles.first_frame}>
              <div className={styles.first_innerFrame}>
                <span className={styles.name_text}>
                  {TemplateById[0]?.template_data?.title}
                  {TemplateById[0]?.template_data?.status === "Draft" && (
                    <Badge variant="warning" size="lg">
                      {TemplateById[0]?.template_data?.status}
                    </Badge>
                  )}
                  {TemplateById[0]?.template_data?.status !== "Draft" && (
                    <Badge variant="success" size="lg">
                      {TemplateById[0]?.template_data?.status}
                    </Badge>
                  )}
                </span>
                <span className="cursor-pointer" onClick={closeModal}>
                  {crossImg}
                </span>
              </div>
              <div className={styles.docType}>
                {TemplateById[0]?.template_data?.categoryName} •
                {TemplateById[0]?.template_data?.categoryName}
              </div>
              <div className={styles.descriptionDetails}>
                {TemplateById[0]?.template_data?.description}
              </div>
              <Button size="sm" variant="outlineblue">
                Edit Template
              </Button>
            </div>
            <div className={styles.rowInfo_Container}>
              <div> Owner </div>
              <div className="font-semibold text-[#606069]">
                {TemplateById[0]?.template_data?.ownerName}
              </div>
              <div> Access </div>
              <div className="font-semibold text-[#606069]">
                {TemplateById[0]?.template_data?.ownerAccess}
              </div>
              <div> Creation date</div>
              <div className="font-semibold text-[#606069]">
                {format(new Date(TemplateById[0]?.template_data?.creationDate), "MM.dd.yy")}
              </div>
              <div>Last modified</div>
              <div className="font-semibold text-[#606069]">
                {format(new Date(TemplateById[0]?.template_data?.lastModifiedDate), "MM.dd.yy")}
                
              </div>
              <div> Approvial Type </div>
              <div className="font-semibold text-[#606069]">
                {TemplateById[0]?.template_data?.approvalType}
              </div>
              <div> Template Id</div>
              <div className="font-semibold text-[#606069]">
                {TemplateById[0]?.template_data?.id}
              </div>
              <div> Approvers</div>
              <div className="flex flex-col gap-2 font-semibold text-[#606069]">
                {TemplateById[0]?.template_data?.approvalList?.map(
                  (e: any) => (
                    <>
                      <p className="flex flex-row a items-center justify-start gap-[2px]">
                        <Avatar>
                          <AvatarImage className="flex mt-[2px] items-center justify-center rounded-full h-5 w-5" src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        {e.name} {"•"}
                        <p className="text-[#73737B]">{e.email}</p>
                      </p>
                    </>
                  )
                )}
              </div>
            </div>

            <div className={styles.access_list_Container}>
              <div className={styles.user_Access_List}>
                <div className={styles.accessList}>Access List</div>
                <div>People who can create contracts out of this template.</div>
              </div>
              <Button size="sm" variant="outlineblue">
                + Add User
              </Button>
            </div>
            <div style={{ borderRadius: "4px" }}>
              <table className={styles.table} style={{ borderRadius: "4px" }}>
                <thead>
                  <tr>
                    <th className="w-[286px] h-9" >User</th>
                    <th className="w-[286px] h-9" >Email</th>
                    <th className="w-[90px] h-9" > </th>
                  </tr>
                </thead>
                <tbody>
                  {TemplateById[0]?.template_data?.accessList.map(
                    (item: any, index: number) => (
                      <tr key={index}>
                        <td
                          className="flex flex-row gap-2 px-4 py-2  text-[#3D404B] font-normal text-xs"
                          style={{
                            fontSize: "12px",
                            fontWeight: "400px",
                            color: "#3D404B",
                            lineHeight: "20px",
                          }}
                        >
                          <Avatar>
                            <AvatarImage src={item.src} />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          {item.name}
                        </td>
                        <td
                          className="font-normal text-[11px]"
                          style={{
                            fontSize: "11px",
                            fontWeight: "400px",
                            color: "#4E5059",
                            lineHeight: "20px",
                          }}
                        >
                          {item.email}
                        </td>
                        <td>{deletInModal}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
        {templateByID.error && <div>{templateByID.error.message}</div>}
      </ModalContent>
    </Modal>
  );
};

export default ModalComp;
