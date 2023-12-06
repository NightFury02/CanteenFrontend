import CurrentDate from '../CurrentDate/CurrentDate'; 

const Header = (props) => {
  return (
    <div className="flex flex-col p-3">
      <div className="font-barlow text-4xl text-white">
        {props.heading}
      </div>
      <div className="mt-2">
        <CurrentDate />
      </div>
    </div>
  );
};

export default Header;
