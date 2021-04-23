import './SearchForm.css';
import SearchFormInput from './input/SearchFormInput';
import SearchFormButton from './button/SearchFormButton';

const SearchForm = () => {
    return ( 
        <form>
            <SearchFormInput />
            <SearchFormButton />
        </form>
     );
}
 
export default SearchForm;