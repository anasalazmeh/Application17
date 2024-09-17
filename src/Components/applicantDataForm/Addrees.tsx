import React from "react";
interface Props{
  title:string,
  discrption:string
}
const Addrees = ({title,discrption}:Props) => {
  return (
    <div className="container">
      <div className="text-primary flex flex-col justify-center items-center">
        <p className="text-xl md:text-4xl font-bold my-1 md:my-5">

          {title}
        </p>
        <p className="text-xm md:text-3xl w-3/4 md:w-[800px] text-center font-[600]">

          {discrption}
        </p>
      </div>
    </div>
  );
};

export default Addrees;
