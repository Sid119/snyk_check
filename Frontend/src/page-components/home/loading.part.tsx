// import { Skeleton } from "@/components/ui/skeleton"
import { Skeleton } from "@/src/components/ui/skeleton";
import styles from "./home.page.module.scss";

const LoadingPart: React.FC = () => {
  const array = Array.from({ length: 13 }, (_, index) => index + 1);
  return (
    <>
      <div>
        <div className="flex flex-col gap-4">
          {/* for the searchbar*/}
          <Skeleton className="w-[478px] h-10 rounded-sm  bg-gradient-to-r from-gray-100 to-gray-300" />
          <div>
            <Skeleton className="w-[157px] h-[15.75px] rounded-sm bg-gradient-to-r from-gray-100 to-gray-300" />
            <div className="flex gap-5">
              {/* outerbox */}{" "}
              <Skeleton className="mt-5 flex h-[140px]  gap-5 justify-center items-center flex-[1_0_0] px-[27.515px] py-[29px] rounded-[5.694px] border-[0.949px] border-solid border-[#DBDBDB] bg-white">
                <div className="w-[130.969px] h-[82px]">
                  <Skeleton className=' w-[30px] h-[30px] shrink-0 bg-gradient-to-r from-gray-100 to-gray-300' />
                  {/* <img
                    className="w-[30px] h-[30px] rounded-sm pr-2 m-auto"
                    src="/assets/file-skeleton.svg"
                  /> */}
                  <Skeleton className="flex start-0 w-[67px] mt-5 h-[13.375px] shrink-0 rounded-sm bg-gradient-to-r from-gray-100 to-gray-300 " />

                  <Skeleton className="flex start-0 w-[67px] mt-5 h-[13.375px] shrink-0 rounded-sm bg-gradient-to-r from-gray-100 to-gray-300 " />
                </div>
              </Skeleton>
              {[1, 2, 3, 4].map((e, i) => (
                <>
                  <Skeleton
                    key={`loading-loop1-${i}`}
                    className="mt-5 flex flex-col  items-center flex-[1_0_0] self-stretch border  rounded-lg border-solid border-[#DBDBDB] p-3 bg-white"
                  >
                    <div className="mb-[19.5px] w-[176px] h-[37px] flex flex-col justify-center items-start gap-[7.875px] self-stretch pr-23.5">
                      <Skeleton className="w-[82px] h-[13.125px] rounded-sm bg-gradient-to-r from-gray-100 to-gray-300" />
                      <Skeleton className="w-[43px] h-4 rounded-sm bg-gradient-to-r from-gray-100 to-gray-300" />
                      {/* <img className='w-[43px] h-4 rounded-sm' src='/assets/draft-skeleton.svg'></img> */}
                    </div>
                    <div className="flex flex-col self-stretch mt-1">
                      <div className="flex flex-row self-stretch mb-2">
                        <Skeleton className="w-[58.6px] h-2.5 rounded-sm mb-1 flex items-start  bg-gradient-to-r from-gray-100 to-gray-300" />
                        <Skeleton className="w-[58.6px] h-2.5 rounded-sm mb-1 flex items-start bg-gradient-to-r from-gray-100 to-gray-300 ml-5 " />
                      </div>
                      <div className="flex flex-row self-stretch mb-2">
                        <Skeleton className="w-[45.6px] h-2.5 rounded-sm mb-1 flex items-start bg-gradient-to-r from-gray-100 to-gray-300" />
                        <Skeleton className="w-[45.6px] h-2.5 rounded-sm mb-1 flex items-start bg-gradient-to-r from-gray-100 to-gray-300 ml-9" />
                      </div>
                      <div className="flex flex-row self-stretch mb-2">
                        <Skeleton className="w-[40.6px] h-2.5 rounded-sm mb-1 flex items-start bg-gradient-to-r from-gray-100 to-gray-300" />
                        <Skeleton className="w-[40.6px] h-2.5 rounded-sm mb-1 flex items-start bg-gradient-to-r from-gray-100 to-gray-300 ml-10" />
                      </div>
                    </div>
                  </Skeleton>
                </>
              ))}
            </div>
            {/* for tabs */}{" "}
            <div className="flex h-9 items-start gap-1 self-stretch pr-0 mt-7 mb-4">
              {[1, 2, 3].map((e, i: number) => (
                <Skeleton
                  key={`loading-loop2-${i}`}
                  className="w-[116px] shrink-0 self-stretch bg-gradient-to-r from-gray-100 to-gray-300"
                />
                //   <img className='w-[120px]  shrink-0 self-stretch  rounded-sm' src='/assets/draft-skeleton.svg'></img>
              ))}
              <Skeleton className="flex h-9 max-w-[100px] items-center flex-[1_0_0] rounded ml-8 pl-[22.5px] pr-[65.5px] -3 bg-gradient-to-r from-gray-100 to-gray-300" />
            </div>
            <div className="flex flex-col items-start self-stretch  h-126 rounded border px-0 border-solid border-[#E1E1E1] bg-[#fff]">
              <Skeleton className="flex w-full h-9 justify-start items-start self-stretch">
                <div className="w-[246px] h-[36px] flex items-start justify-start pt-2  bg-[#F2F2F2]">
                  <Skeleton className="w-[30px] h-[12px]  rounded-sm mb-1 flex items-start ml-2 justify-center bg-gradient-to-r from-gray-100 to-gray-300" />
                </div>
                <div className="w-[160px] h-[36px] flex items-start justify-start pt-2  bg-[#F2F2F2]">
                  <Skeleton className="w-[39px] h-[12px]  rounded-sm mb-1 flex items-start ml-2 justify-center bg-gradient-to-r from-gray-100 to-gray-300" />
                </div>
                <div className="w-[137px] h-[36px] flex items-center justify-center pb-2  bg-[#F2F2F2]">
                  <Skeleton className="w-[72px] h-[12px]  rounded-sm  flex items-start  justify-center bg-gradient-to-r from-gray-100 to-gray-300" />
                </div>
                <div className="w-[137px] h-[36px] flex items-center justify-center pb-2  bg-[#F2F2F2]">
                  <Skeleton className="w-[72px] h-[12px]  rounded-sm    justify-center bg-gradient-to-r from-gray-100 to-gray-300" />
                </div>
                <div className="w-[137px] h-[36px] flex items-center justify-center pb-2  bg-[#F2F2F2]">
                  <Skeleton className="w-[72px] h-[12px]  rounded-sm    justify-center bg-gradient-to-r from-gray-100 to-gray-300" />
                </div>
                <div className="w-[140px] h-[36px] flex items-center justify-start pb-2  bg-[#F2F2F2]">
                  <Skeleton className="w-[52px] h-[12px]  rounded-sm  justify-center bg-gradient-to-r from-gray-100 to-gray-300" />
                </div>
                <div className="w-[140px] h-[36px] flex items-center justify-center pb-2  bg-[#F2F2F2]">
                  <Skeleton className="w-[49.5px] h-[12px]  rounded-sm  bg-gradient-to-r from-gray-100 to-gray-300" />
                </div>
                <div className="w-[70px] h-[36px] flex items-center justify-start pb-2  bg-[#F2F2F2]">
                  <Skeleton className="w-[23px] h-[12px]  rounded-sm  bg-gradient-to-r from-gray-100 to-gray-300" />
                </div>
            
                  <Skeleton className=" flex h-[36px] flex-[1_0_0] px-0 py-2 w-[129px] bg-[#F2F2F2] bg-gradient-to-r from-gray-100 to-gray-300" />
            
              </Skeleton>
              {array.map((e, i) => (
                <Skeleton
                  key={`loading-loop4-${i}`}
                  className="flex h-9 flex-row justify-start items-start self-stretch bg-[#fff]"
                >
                  <div className="w-[246px] h-[36px] flex items-start justify-start pt-2   bg-[#fff]">
                    <Skeleton className="w-[96px] h-[12.25px]  rounded-sm mb-1 flex items-start ml-2 justify-center bg-gradient-to-r from-gray-100 to-gray-300" />
                  </div>
                  <div className="w-[160px] h-[36px] flex items-start justify-start pt-2   bg-[#fff]">
                    <Skeleton className="w-[160px] h-[12.25px]  rounded-sm mb-1 flex items-start ml-2 justify-center bg-gradient-to-r from-gray-100 to-gray-300" />
                  </div>
                  <div className="w-[137px] h-[36px] flex items-start justify-center pt-2   bg-[#fff]">
                    <Skeleton className="w-[19px] h-[12.25px]  rounded-sm mb-1 flex items-center ml-2 justify-center bg-gradient-to-r from-gray-100 to-gray-300" />
                  </div>
                  <div className="w-[137px] h-[36px] flex items-start justify-start pt-2   bg-[#fff]">
                    <Skeleton className="w-[62px] h-[12.25px]  rounded-sm mb-1 flex items-start ml-2 justify-center bg-gradient-to-r from-gray-100 to-gray-300" />
                  </div>
                  <div className="w-[137px] h-[36px] flex items-start justify-center pt-2   bg-[#fff]">
                    <Skeleton className="w-[51px] h-[12.25px]  rounded-sm mb-1 flex items-start ml-2 justify-start bg-gradient-to-r from-gray-100 to-gray-300" />
                  </div>

                  <div className="w-[137px] h-[36px] flex items-start justify-start pt-2   bg-[#fff]">
                    <Skeleton className="w-[72px] h-[12.25px]  rounded-sm mb-1 flex items-start ml-2 justify-center bg-gradient-to-r from-gray-100 to-gray-300" />
                  </div>

                  <div className="w-[140px] h-[36px] flex items-start justify-center pt-2   bg-[#fff]">
                    <Skeleton className="w-[72px] h-[12.25px]  rounded-sm mb-1 flex items-start ml-2 justify-center bg-gradient-to-r from-gray-100 to-gray-300" />
                  </div>
                  <div className="w-[70px] h-[36px] flex items-start justify-center pt-[10px] px-48.5  bg-[#fff]">
                    <Skeleton className="w-[14px] h-[14px]  rounded-sm mb-1 flex items-start ml-2 justify-center bg-gradient-to-r from-gray-100 to-gray-300" />
                  </div>
                  <div className="w-[140px] h-[36px] flex items-center justify-center pt-[10px] px-48.5 bg-[#FFF]">
                    <Skeleton className="w-4 h-[7px] rounded-sm mb-1 flex items-center ml-2 justify-center bg-gradient-to-r from-gray-100 to-gray-300" />
                  </div>
                </Skeleton>
              ))}
            </div>
            <div className=" flex w-[1382px]  flex-col justify-center items-center gap-5 shrink-0 p-6">
              <Skeleton className=" mt-5 w-[308px] h-6 shrink-0 bg-gradient-to-r from-gray-100 to-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingPart;
