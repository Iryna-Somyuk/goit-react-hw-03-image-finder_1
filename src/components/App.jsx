import { Component } from "react";
import { AppContainer } from './App.styled';
import { fetchImages } from 'Services/api.Services';
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';



export class App extends Component {
  state ={
    query: '',
    page: 1,
    images: [],
    isLoading: false,
    totalImages: 0,
    error: null,
  }

  componentDidUpdate(_, prevState){

    const { query, page } = this.state;
    if(prevState.query !== query || prevState.page !== page) {
      fetchImages(query, page).then(resp => {
      this.setState(prev => ({ images: page === 1 ? [...resp.hits] : [...prev.images, ...resp.hits],
        totalImages: resp.totalHits,
      })
    )})}

      }
  
handelSubmit =(query)=> {
  console.log(query);
  this.setState({query});
}

handleLoadMore = () => {
this.setState(prev => ({page: prev.page + 1,
}))
}

// renderButtonOrLoader = () => {
//   const { isLoading, images, totalImages } = this.state;
//   return isLoading ? (
//     <Loader />
//   ) : (
//     !!images.length && images.length < totalImages && (
//       <Button onLoadMore={this.handleLoadMore} />
//     )
//   );
// };
  
render() {
  return <>

  <Searchbar onSubmit={this.handelSubmit}/>
  <AppContainer>
  <ImageGallery images ={this.state.images}/>
  </AppContainer>
  {!!this.state.images.length && <Button onLoadMore={this.handleLoadMore}/>}
  </>

}
}
