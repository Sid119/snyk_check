import SearchBarComponent from "@/src/components/searchbar/searchbar.component";
import Filter from "@/src/page-components/home/filter/filter.part";
import CreateTemplateBox from "./create-template-box.part";
import DashboardLayout from "@/src/layouts/dashboard/dashboard.layout";
import styles from "./home.page.module.scss";
import TemplateBox, { SubSection } from "./template-box.part";
import PageTitleComponent from "@/src/components/page-title/page-title.component";
import LoadingPart from "./loading.part";
import { Button } from "@/src/components/ui/button";
import {
    getAllTemplates,
    getFavoritesById,
    getOwnerById,
    getRecentTemplatesById,
} from "@/src/repo/template-service";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import TableComponent from "@/src/page-components/home/table.part";
import { useContext, useEffect, useMemo, useState } from "react";
import { HomePageContext, useHomePage } from "./context";
import { Badge } from "@/src/components/ui/badge";
import { format } from "date-fns";
import {
    Dialog,
    DialogContent,
    DialogHeader,
} from "@/src/components/ui/dialog";
import TemplateUploadPage from "../templates/upload/template-upload.page";
import clsx from "clsx";
import Pagination from "@/src/components/pagination/pagination.component";
import { AppContext } from "@/src/context/app-context";

enum Tabs {
    AllTemplates,
    MyTemplates,
    Favourites,
}

const HomePage: React.FC = () => {
    const appContext = useContext(AppContext);
    const [showCreateDialog, setShowCreateDialog] = useState(false);
    const [tabs, setTabs] = useState<Tabs>(Tabs.AllTemplates);
    const context = useHomePage();
    const router = useRouter();
    const page = useMemo(() => {
        let p = 1;
        if (router.query.page && typeof router.query.page === "string") {
            p = Number(router.query.page);
        }
        return p;
    }, [router.query.page]);

    const query = {
        page: router.query.page || 1,
        order: router.query.order || "ASC",
    };

    const allTemplates = useQuery<any, Error>({
        queryKey: ["getAllTemplates", query],
        queryFn: getAllTemplates,
        enabled: false,
    });

    const userId = appContext?.user.id;
    
    const favoriteData = useQuery({
        queryKey: ["getAllFavoritesById", userId],
        queryFn: () => getFavoritesById({ id: userId }),
        enabled: false,
    });

    const recentTemplates = useQuery({
        queryKey: ["getRecentTemplatesById", userId],
        queryFn: () => getRecentTemplatesById({ id: userId }),
    });

    const recentTemplatesData = recentTemplates?.data?.data?.Items?.map(
        (i: any) => i.template_data
    );

    const myTemplates = useQuery<any, Error>({
        queryKey: ["getMyTemplates"],
        queryFn: () => getOwnerById({ id: userId }),
        enabled: false,
    });

    const isFilterActive = useMemo(() => {
        return (
            context.selectedOwners.length > 0 ||
            context.selectedStatus.length > 0 ||
            context.selectedAccess.length > 0 ||
            context.selectedCategories.length > 0
        );
    }, [
        context.selectedAccess.length,
        context.selectedCategories.length,
        context.selectedOwners.length,
        context.selectedStatus.length,
    ]);

    const requests = useMemo(() => {
        switch (tabs as any) {
            case Tabs.AllTemplates:
                return allTemplates;
            case Tabs.MyTemplates:
                return myTemplates;
            case Tabs.Favourites:
                return favoriteData;
            default:
                return allTemplates;
        }
    }, [allTemplates, favoriteData, myTemplates, tabs]);

    useEffect(() => {
        if (requests) {
            requests.refetch();
        }
    }, [requests]);

    const [selectedTab, setSelectedTab] = useState<Tabs>(Tabs.AllTemplates);
    let length = 4 - (recentTemplatesData || []).length;

    const alltemplates = clsx(styles.onClick, {
        [styles.defaultButton]: tabs === Tabs.AllTemplates,
        [styles.onRemoveHover]: tabs !== Tabs.AllTemplates,
    });
    const mytemplates = clsx(styles.onClick, {
        [styles.defaultButton]: tabs === Tabs.MyTemplates,
        [styles.onRemoveHover]: tabs !== Tabs.MyTemplates,
    });
    const myfavorites = clsx(styles.onClick, {
        [styles.defaultButton]: tabs === Tabs.Favourites,
        [styles.onRemoveHover]: tabs !== Tabs.Favourites,
    });

    return (
        <>
            <HomePageContext.Provider value={context}>
                <DashboardLayout>
                    {requests.error && requests.error instanceof Error && (
                        <p>{requests.error.message}</p>
                    )}
                    {requests.isLoading &&
                        !requests.data &&
                        !requests.error && <LoadingPart />}
                    {!requests.isLoading && requests.data && (
                        <>
                            <div style={{ marginBottom: "20px" }}>
                                <SearchBarComponent />
                                <PageTitleComponent>
                                    Recent Template
                                </PageTitleComponent>
                                <div className={styles.templateBoxContainer}>
                                    <CreateTemplateBox
                                        onClick={() => {
                                            setShowCreateDialog(true);
                                        }}
                                    />

                                    {recentTemplatesData?.map((e: any) => (
                                        <>
                                            <TemplateBox
                                                title={e._categoryName}
                                                badge={
                                                    e._status === "Draft" ? (
                                                        <Badge variant="warning">
                                                            {e._status}
                                                        </Badge>
                                                    ) : (
                                                        <Badge variant="success">
                                                            {e._status}
                                                        </Badge>
                                                    )
                                                }
                                                content={<Content items={e} />}
                                            />
                                        </>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.filterButtonWrapper}>
                                <div className={styles.filterTabs}>
                                    <Button
                                        variant="secondary"
                                        onClick={() =>
                                            setTabs(Tabs.AllTemplates)
                                        }
                                        className={alltemplates}
                                    >
                                        All templates
                                    </Button>
                                    <Button
                                        className={mytemplates}
                                        variant="secondary"
                                        onClick={() =>
                                            setTabs(Tabs.MyTemplates)
                                        }
                                    >
                                        My template
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        onClick={() => setTabs(Tabs.Favourites)}
                                        className={myfavorites}
                                    >
                                        Favorites
                                    </Button>
                                </div>
                                <span className={styles.filterSeperator} />
                                <div className="flex-1">
                                    <Filter />
                                </div>
                            </div>

                            {isFilterActive && (
                                <>
                                    <div className={styles.filterStore}>
                                        <div className="flex h-6 py-[10px] pr-[12px] justify-center items-center gap-[6px] ">
                                            {context.selectedOwners.map((e) => (
                                                <FilterOption
                                                    key={`filter-owner-${e.id}`}
                                                    title="Owner"
                                                    value={e.Owners}
                                                    onRemove={() =>
                                                        context.removeOwner(
                                                            e.id
                                                        )
                                                    }
                                                />
                                            ))}

                                            {context.selectedStatus.map((e) => (
                                                <FilterOption
                                                    key={`status-${e}`}
                                                    title="Status"
                                                    value={e}
                                                    onRemove={() =>
                                                        context.removeStatus(e)
                                                    }
                                                />
                                            ))}

                                            {context.selectedAccess.map((e) => (
                                                <FilterOption
                                                    key={`access-${e}`}
                                                    title="access"
                                                    value={e}
                                                    onRemove={() =>
                                                        context.removeAccess(e)
                                                    }
                                                />
                                            ))}

                                            {context.selectedCategories.map(
                                                (e) => (
                                                    <FilterOption
                                                        key={`category-${e}`}
                                                        title="category"
                                                        value={
                                                            e.child
                                                                ? e.name +
                                                                  " / " +
                                                                  e.child.name
                                                                : e.name
                                                        }
                                                        onRemove={() =>
                                                            context.removeCategory(
                                                                e
                                                            )
                                                        }
                                                    />
                                                )
                                            )}
                                        </div>
                                        <Button
                                            className={styles.filterMenuClear}
                                            onClick={context.clearAll}
                                        >
                                            Clear all
                                        </Button>
                                    </div>
                                </>
                            )}
                            <div className="rounded mt-5 overflow-hidden">
                                <TableComponent
                                    data={requests?.data}
                                    refetchData={allTemplates?.refetch}
                                />
                            </div>
                            <Pagination
                                totalPages={context.totalPages}
                                currentPage={page}
                                setPage={(p) => {
                                    router.push({
                                        pathname: router.pathname,
                                        query: {
                                            ...router.query,
                                            page: p,
                                        },
                                    });
                                }}
                            />
                        </>
                    )}
                </DashboardLayout>
            </HomePageContext.Provider>
            <Dialog
                open={showCreateDialog}
                onOpenChange={(e) => {
                    setShowCreateDialog(e);
                }}
            >
                <DialogContent className="max-w-[912px] max-h-[607px] overflow-y-auto">
                    <DialogHeader>
                        <TemplateUploadPage
                            onCancel={() => {
                                setShowCreateDialog(false);
                            }}
                        />
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
};

interface ContentType {
    items: any;
}

const Content: React.FC<ContentType> = ({ items }) => {
    return (
        <>
            <SubSection title={"Subcategory"} value={items._subCategoryName} />
            <SubSection title={"Owner"} value={items._ownerName} />
            <SubSection
                title={"Modified"}
                value={format(new Date(items._lastModifiedDate), "MM.dd.yy")}
            />
        </>
    );
};

const FilterOption = (props: {
    title: string;
    value: string;
    onRemove: () => void;
}) => {
    return (
        <Badge className={styles.filterMenu}>
            {props.title}: {props.value}
            <Button variant="link" onClick={props.onRemove}>
                &times;
            </Button>
        </Badge>
    );
};

export default HomePage;
