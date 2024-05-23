import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../slice/searchTermSlice';

const SearchBar = () => {
    const dispatch = useDispatch()
    return (
        <TextField
            id="outlined-search"
            label="Search For A Pup"
            type="search"
            variant="filled"
            color="primary"
            onChange={e => dispatch(setSearchTerm(e.target.value))}
            />
    );
}

SearchBar.propTypes = {
    onSearchChange: PropTypes.func,
};

export default SearchBar;