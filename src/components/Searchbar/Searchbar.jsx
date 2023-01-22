import { SearchbarForm, SearchForm, SearchFormBtn, SearchFormBtnlLabel, SearchFormInput } from "./Searchbar.styled";


export const Searchbar = ({onSubmit}) => {
const handelSubmitForm = (event) => {
  event.preventDefault();

  const { query } = event.currentTarget.elements;
  onSubmit(query.value);
  query.value = '';

}

return <SearchbarForm>
<SearchForm onSubmit={handelSubmitForm}>
  <SearchFormBtn type="submit">
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
}





