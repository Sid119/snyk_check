import { useState } from 'react';
import styles from './searchbar.component.module.scss';
import data from '@/public/tabledata.json';

interface Item {
    name: string;
    owner: string;
    category: string;
    subCategory: string;
    templateId: string;
    lastModified: string;
    status: string;
    access: string;
}

const formatTextWithHighlight = (text: string, searchTerm: string) => {
    const lowerText = text.toLowerCase();
    const lowerSearchTerm = searchTerm.toLowerCase();
    const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));

    return parts.map((part, index) => (
        part.toLowerCase() === lowerSearchTerm ? (
            <span key={index} className={styles.highlightedText}>
                {part}
            </span>
        ) : (
            <span key={index}>
                {part}
            </span>
        )
    ));
};


const SearchBarComponent: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortedData, setSortedData] = useState<Item[]>([]);
    const [noResults, setNoResults] = useState(false);
    const [isCrossEnabled, setIsCrossEnabled] = useState(false);
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(true);


    const serachImg = <img width={'16px'} height={"16px"} src='/assets/Search 16px.svg' ></img>
    const remove = <img src='/assets/e-remove.svg'></img>
    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);
        if (newSearchTerm.trim() !== "") {
            const sorted = data.filter(item =>
                item.category.toLowerCase().includes(newSearchTerm.toLowerCase())
                || item.name.toLowerCase().includes(newSearchTerm.toLowerCase())
                || item.subCategory.toLowerCase().includes(newSearchTerm.toLowerCase())
                || item.owner.toLowerCase().includes(newSearchTerm.toLowerCase())
            );
            sorted.sort((a, b) => a.category.localeCompare(b.category));
            setSortedData(sorted);
            setNoResults(sorted.length === 0);
        }
        else {
            setSortedData([]);
            setNoResults(false);
        }
        if (newSearchTerm.trim() === "all") {
            setSortedData(data);
            setNoResults(false);

        }
    };


    return (
        <>

            <div style={{ marginBottom: '20px' }} >

                <div className={styles.searchbarContainer}>
                    <img width={'16px'} height={"16px"} src='/assets/Search 16px.svg' />
                    <input className={styles.searchbar}
                        type="text"
                        placeholder="Search for Templates, Contracts, or People"
                        value={searchTerm}
                        onChange={handleSearchInputChange}
                        onFocus={() => setIsCrossEnabled(!isCrossEnabled)}
                    />
                    {/* <span><img src='/assets/e-remove.svg' /></span> */}
                    <span
                        className={isCrossEnabled ? styles.Active : styles.Inactive}
                        onClick={() => {
                            setIsCrossEnabled(false);
                            // setSearchTerm(" ");
                            setNoResults(false);
                            setSortedData([])
                        }}
                    >
                        <img src='/assets/e-remove.svg' />
                    </span>
                </div>
                {/* {isSearchBarOpen && ( */}
                {
                    sortedData.length > 0 && isSearchBarOpen && (
                        <div className={styles.results}>
                            {sortedData.map((item, index) => (
                                <div className={styles.dis} key={index}>
                                    <span>{<NewsImg />}</span>
                                    <span>{formatTextWithHighlight(item.category, searchTerm)}</span>
                                    <span>{formatTextWithHighlight(item.name, searchTerm)}</span>
                                    <span>{formatTextWithHighlight(item.subCategory, searchTerm)}</span>
                                    <span>{formatTextWithHighlight(item.owner, searchTerm)}</span>
                                </div>
                            ))}
                        </div>
                    )
                }
                {/* )} */}
                {noResults && isSearchBarOpen && (
                    <div className={styles.results}>
                        <div className={styles.notfound}>
                            <img className={styles.noItemFound} src='/assets/noresult.svg' alt="No items found" />
                            <div className={styles.bottom_info}>
                                <div className={styles.nf_text1}>No items match your search</div>
                                <div className={styles.nf_text2}>Try with a different keyword</div>
                            </div>
                        </div>
                    </div>
                )}

            </div>

        </>

    );
};




export default SearchBarComponent;
const NewsImg: React.FC = () => (
    <img
        style={{ width: "16px", height: "16px", margin: "auto" }}
        src="/assets/news 2.svg"
        alt="news"
    />
);
