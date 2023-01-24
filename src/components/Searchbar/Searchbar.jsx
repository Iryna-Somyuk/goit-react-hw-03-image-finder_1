import {
  SearchbarForm,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnlLabel,
  SearchFormInput,
} from './Searchbar.styled';
import PropTypes from 'prop-types';
// import toast, { Toaster } from 'react-hot-toast';
import {FcSearch } from "react-icons/fc";

export const Searchbar = ({ onSubmit }) => {
  const handelSubmitForm = event => {
    event.preventDefault();

    const { query } = event.currentTarget.elements;
      onSubmit(query.value);



}

  return (
    <SearchbarForm>
      <SearchForm onSubmit={handelSubmitForm}>
        <SearchFormBtn type="submit"><FcSearch size={48}/>
          <SearchFormBtnlLabel>Search</SearchFormBtnlLabel>
        </SearchFormBtn>
        <SearchFormInput
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarForm>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}