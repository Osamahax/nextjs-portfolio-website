const Heading = ({title}:{title:string}) => {
  return (
    <div className="flex flex-col justify-center items-center text-4xl font-bold">
      {title}
      <span className={`mt-2 w-28  h-0.5 bg-green-600 animate-ping`}></span>
    </div>
  );
};
export default Heading;
