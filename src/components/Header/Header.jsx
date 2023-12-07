import CurrentDate from '../CurrentDate/CurrentDate'; 
import Searchbar from '../SearchBar/SearchBar';

const Header = (props) => {
    const handleSearch = (query) => {
        console.log('Performing search for:', query);
    }
  return (
    <>
        <div className="flex justify-between">
            <div className="flex flex-col p-3">
                <div className="font-barlow text-4xl text-white">
                    {props.heading}
                </div>
                <div className="mt-2">
                    <CurrentDate />
                </div>
            </div>
            <div className='p-3'>
                <Searchbar onSearch={handleSearch}/>
            </div>
        </div>
    </>
  );
};

export default Header;
