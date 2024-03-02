import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchData } from "./js/pixabay-api";
import { createLi } from "./js/render-functions";

const galleryUl = document.querySelector(".gallery");
const submit = document.querySelector(".form");
const loader = document.querySelector(".loader")
submit.addEventListener("submit", function (event) {
    event.preventDefault();
    loader.classList.remove("is-hiden")
 galleryUl.innerHTML = null;

    const input = document.querySelector('.text');
    if (input.value === '') {
        iziToast.show({
            message: 'Please, write your request ',
            color: 'red',
            position: "topRight"
        });
        return;
    }

    fetchData()
        .then(data => {
            
            
                const images = data.hits; 
                galleryUl.insertAdjacentHTML("afterbegin", createLi(images));
                const lightbox = new SimpleLightbox('.gallery a', {
                    captionsData: 'alt',
                    captionDelay: 250
                });
                lightbox.refresh()
             input.value = null;
        })
        .catch(error => console.error('Error:', error))
        .finally(() => {
       loader.classList.add("is-hiden")
   })
  
});
