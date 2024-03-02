
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
let images = []; 

function fetchData() {
    const input = document.querySelector('.text');
    const inputValue = input.value;
    const link = `https://pixabay.com/api/?key=42659935-3ef7103821fe0025c24926046&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true`;

    return fetch(link)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.show({
                    message: 'Sorry, there are no images matching your search query. Please try again ',
                    color: 'red',
                    position: "topRight"
                });
            } else {
                images = data.hits; 
            }
           
            return data;
        })
        .catch(error => {
            console.error('Error:', error);
            throw error; 
        });
}

export { fetchData, images }; 
