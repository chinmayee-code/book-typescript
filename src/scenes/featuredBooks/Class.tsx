type Props = {
    name: string;
    description?: string;
    image: string;
    price: number;
  };
  
  const Class = ({ name, description, price, image }: Props) => {
    const overlayStyles = `p-5 absolute z-30 flex
    h-[380px] w-[450px] flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90`;
  
    return (
      <li className="relative mx-5 inline-block h-[380px] w-[450px]">
        <div className={overlayStyles}>
          <p className="text-2xl">{name}</p>
          <p className="mt-5">{description}</p>
          <p className="mt-5">{price}</p>
        </div>
        <img className="w-4/6 h-5/6" alt={`${image}`} src={image} />
      </li>
    );
  };
  
  export default Class;