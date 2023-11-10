import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

// export const fetchImages = async () => {
//   const response = await axios.get(
//     `/?q=cat&page=1&key=39745378-dd24554a2bcf90950765bc548&image_type=photo&orientation=horizontal&per_page=12`
//   );
//   return response.data.hits;
// };

export async function fetchImages(searchQuerry, currentPage = 1) {
  try {
    const response = await axios.get(
      `/?q=${searchQuerry}&page=${currentPage}&key=39745378-dd24554a2bcf90950765bc548&image_type=photo&orientation=horizontal&per_page=12`
    );
    if (response.data.hits.length === 0) {
      console.log('bad');
      return;
    }
    return response.data.hits;
  } catch (error) {
    console.log('problem', error);
  }
}

// export class ApiService extends Component {
//   state = {
//     searchQuery: null,
//     loading: false,
//     error: null,
//     images: [],
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevName = prevProps.searchQuery;
//     const nextName = this.props.searchQuery;

//     if (prevName !== nextName) {
//       this.setState({ loading: true, searchQuery: null });

//       axios.defaults.baseURL = 'https://pixabay.com/api';

//       const fetchImages = async () => {
//         const response = await axios.get(
//           `/?q=${nextName}&page=1&key=39745378-dd24554a2bcf90950765bc548&image_type=photo&orientation=horizontal&per_page=12`
//         );
//         return response.data.hits;
//       };

//       this.setState({ images: fetchImages });
//     }
//     //   axios
//     //     .get(
//     //       `https://pixabay.com/api/?q=${nextName}&page=1&key=39745378-dd24554a2bcf90950765bc548&image_type=photo&orientation=horizontal&per_page=12`
//     //     )
//     //     .then(response => {
//     //       console.log(response.data.hits);
//     //       if (response.ok) {
//     //         return response.data;
//     //       }
//     //     })
//     //     .catch(error => {
//     //       if (error.response) {
//     //         this.state({ error });
//     //       }
//     //     })
//     //     .finally(() => this.setState({ loading: false }));
//     // }
//   }

//   render() {
//     return (
//       <div>
//         {this.state.error && <h1>{this.error.message}</h1>}
//         {this.state.loading && <h2>Загрузка...</h2>}
//       </div>
//     );
//   }
// }

// axios.defaults.baseURL = 'https://pixabay.com/api';

// export const fetchImages = async () => {
//   const response = await axios.get(
//     `/?q=cat&page=1&key=39745378-dd24554a2bcf90950765bc548&image_type=photo&orientation=horizontal&per_page=12`
//   );
//   return response.data.hits;
// };
