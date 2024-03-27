/* eslint-disable react/prop-types */
import { IF } from "../url";

const HomePosts = ({ post }) => {
  return (
    <div className="flex flex-col  mt-5 w-full rounded-lg border-solid border-2 border-primary text-primary  hover:bg-primary hover:text-secondary">
      <div className="flex flex-row mt-2 space-x-4  items-center border-b border-primary ">
        {/* left */}
        <div className="w-[80%] h-[50px] flex flex-row justify-left items-center ml-5">
          <div className="flex flex-row items-center justify-center items-center ">
            <div className="w-[50%]">
              <h4 className="text-[20px] uppercase font-bold ">
                {post.companyName}
              </h4>
            </div>
            <div className="w-[100%] ml-5">{post.jobDesignation}</div>
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col w-[20%]">
          <div className="flex flex-row items-center justify-center items-center">
            <div className="w-[50%]">
              <p>@{post.username}</p>
            </div>
            <div className="w-[50%]">
              <p>{new Date(post.updatedAt).toString().slice(0, 10)}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-4 items-center px-10 py-10">
        <div className="w-[70%] h-min flex flex-row justify-left items-center ml-5 mr-10">
          <div className="flex flex-row items-center justify-center items-center ">
            <div>
              <h4 className="text-[18px] leading-2">{post.aboutCompany}</h4>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-[20%]">
          <div className="flex flex-col justify-center items-left">
            <div>
              <h3 className="font-bold text-sm">Stipend:</h3>
              <p>{post.CostToCompany}</p>
            </div>
            <div>
              <div>
                <h3 className="font-bold text-sm">Bond:</h3>
                <p>{post.bond ? "Yes" : "No"}</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-sm">Location:</h3>
              <p>{post.PlaceOfPosting}</p>
            </div>
            <div>
              <h3 className="font-bold text-sm">No of Rounds:</h3>
              {post.noofRounds.map((round, index) => (
                <p key={index}>
                  {index + 1}.{round}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePosts;
