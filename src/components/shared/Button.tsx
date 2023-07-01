const Button = ({title}:{title:string}) => {
  return (
    <button className="bg-green-700 py-2 px-10 rounded-3xl w-fit">
      {title}
    </button>
  );
};
export default Button;
