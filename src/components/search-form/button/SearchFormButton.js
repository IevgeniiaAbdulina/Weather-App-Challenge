import './SearchFormButton.css';
import Button from '../../button/Button';

const SearchFormButton = () => {
    const value = 'Search';
    const myClassName="search-form-button";

    return ( 
        <Button 
            value={value} 
            myClassName={myClassName}
        />
     );
}
 
export default SearchFormButton;