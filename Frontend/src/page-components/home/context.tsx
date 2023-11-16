"useClient";
import { Owner } from "@/src/repo/template-service";
import React, { useEffect, useRef, useState } from "react";

export interface Item {
  name: string;
  owner: string;
  category: string;
  subCategory: string;
  templateId: string;
  lastModified: string;
  status: string;
  access: string;
}

type TemplateStatuses = "draft" | "published";
type TemplateAccess = "view" | "edit";
type TemplateCategory = {
  id:  number;
  name: string;
  child?: TemplateCategory;
};

type HomePageContextType = {
  data: Array<any>;
  showDropDown: boolean;
  innerDropDown: boolean;
  subCategoryToggle: boolean;
  modalDropDown: boolean;
  keys: keyof Item | undefined;
  showTableDropDown: boolean;
  ind: number;
  isModalOpen: boolean;
  currentPage: number;
  totalPages: number;
  SetPage: (page: number) => void;
  toggleFilterDropDown: () => void;
  openFilterChildDropDown: (v: string) => void;

  selectedOwners: Owner[];
  addOwner: (owner: Owner) => void;
  removeOwner: (id: number) => void;

  selectedStatus: TemplateStatuses[];
  addStatus: (status: TemplateStatuses) => void;
  removeStatus: (status: TemplateStatuses) => void;

  selectedAccess: TemplateAccess[];
  addAccess: (access: TemplateAccess) => void;
  removeAccess: (access: TemplateAccess) => void;

  selectedCategories: TemplateCategory[];
  addCategory: (cat: TemplateCategory) => void;
  removeCategory: (cat: TemplateCategory) => void;
  isCategorySelected: (cat: TemplateCategory) => boolean;

  toggleCategory: (cat: number) => void;
  openTableDropdown: (ind: any) => void;
  openCategoryId: number | undefined;
  Modal: () => void;
  closeModal: (e: any) => void;
  openModal: () => void;
  closeModals: () => void;
  clearAll: () => void;
  activeAllDetailsModal: boolean;
  setActiveAllDetailsModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HomePageContext = React.createContext<HomePageContextType | null>(null);

export const useHomePage = () => {
  const [data, setData] = useState([]);
  const [showDropDown, setDropDown] = useState(false);
  const [innerDropDown, setInnerDropDown] = useState(false);
  const [openCategoryId, setOpenCategoryId] = useState<number>();
  const [subCategoryToggle, setSubCategoryToggle] = useState(false);

  const [selectedOwners, setSelectedOwners] = useState<Owner[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<TemplateStatuses[]>([]);
  const [selectedAccess, setSelectedAccess] = useState<TemplateAccess[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<TemplateCategory[]>([]);


  const [keys, setKeys] = useState<keyof Item | undefined>();
  const [showTableDropDown, setTableDropDown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalDropDown, setModalDropDown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [ind, setInd] = useState(-1);
  const [activeAllDetailsModal, setActiveAllDetailsModal] = useState(false);

  const modalRef = useRef();
  const itemsPerPage = 10;
  const totalItems = 90;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const SetPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const toggleCategory = (cat: number) => {
    setSubCategoryToggle(p => !p);
    setOpenCategoryId(cat);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModals = () => setIsModalOpen(false);

  const toggleFilterDropDown = () => {
    setDropDown((prev) => !prev);
    setInnerDropDown(false);
    setSubCategoryToggle(false);
  };

  const openFilterChildDropDown = (v: any) => {
    setKeys(v);
    setInnerDropDown(!innerDropDown);
    setSubCategoryToggle(false);
  };
  const openTableDropdown = (ind: any) => {
    setInd(ind);
    setTableDropDown(!showTableDropDown);
  };

  const closeModal = (e: any) => {
    if (e.target === modalRef.current) {
      setModalDropDown(true);
    }
  };

  const Modal = () => {
    setModalDropDown(!modalDropDown);
  };

  const addOwner = (owner: Owner) => {
    setSelectedOwners((o) => [...o, owner]);
  };

  const removeOwner = (id: number) => {
    setSelectedOwners((o) => {
      const list = [...o];
      const index = list.findIndex((e) => e.id === id);
      list.splice(index, 1);
      return list;
    });
  };

  const addStatus = (status: TemplateStatuses) => {
    setSelectedStatus((s) => [...s, status]);
  };

  const removeStatus = (status: TemplateStatuses) => {
    setSelectedStatus((o) => {
      const list = [...o];
      const index = list.findIndex((e) => e === status);
      list.splice(index, 1);
      return list;
    });
  };

  const addAccess = (access: TemplateAccess) => {
    setSelectedAccess((s) => [...s, access]);
  };

  const removeAccess = (access: TemplateAccess) => {
    setSelectedAccess((o) => {
      const list = [...o];
      const index = list.findIndex((e) => e === access);
      list.splice(index, 1);
      return list;
    });
  };

  const addCategory = (cat: TemplateCategory) => {
    setSelectedCategories((s) => [...s, cat]);
  };

  const removeCategory = (cat: TemplateCategory) => {
    setSelectedCategories((o) => {
      const list = [...o];
      const index = list.findIndex((e) => {
        if(e.id === cat.id && !e.child && !cat.child) return true;
        if(e.id === cat.id && e.child && cat.child && e.child.id == cat.child.id) return true;
        return false;
      });
      list.splice(index, 1);
      return list;
    });
  };

  const isCategorySelected = (cat: TemplateCategory) => {
    return selectedCategories.some((e) => {
      if(e.id === cat.id && !e.child && !cat.child) return true;
      if(e.id === cat.id && e.child && cat.child && e.child.id == cat.child.id) return true;
      return false;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      // TODO: REmove any
      const simulatedData: any = Array.from({ length: totalItems }, (_, i) => ({
        id: i + 1,
        name: `Item ${i + 1}`,
      })).slice(startIndex, endIndex);
      setData(simulatedData);
    };

    fetchData();
  }, [currentPage]);

  const clearAll = () => {
    // setAllFilter({ keyv: "", primary: "", secondary: "" });
    setSelectedOwners([]);
    setSelectedStatus([]);
    setSelectedAccess([]);
    setSelectedCategories([]);
  };

  return {
    data,
    showDropDown,
    innerDropDown,
    subCategoryToggle,
    modalDropDown,
    keys,
    showTableDropDown,
    currentPage,
    totalPages,
    isModalOpen,
    ind,
    activeAllDetailsModal,
    toggleCategory,
    toggleFilterDropDown,
    openFilterChildDropDown,
    openTableDropdown,
    SetPage,
    Modal,
    closeModal,
    openModal,
    closeModals,
    clearAll,
    setActiveAllDetailsModal,
    openCategoryId,

    selectedOwners,
    addOwner,
    removeOwner,

    selectedStatus,
    addStatus,
    removeStatus,

    selectedAccess,
    addAccess,
    removeAccess,

    selectedCategories,
    addCategory,
    removeCategory,
    isCategorySelected,
  };
};