import './SearchPlaces.css';
import Button from '../../button/Button';

const SearchPlaces = () => {
    const value = "Search for places";
    const myClassName ='search-places-button';
    
    return ( 
        <Button 
            value={value} 
            myClassName={myClassName}
        />
     );
}
 
export default SearchPlaces;