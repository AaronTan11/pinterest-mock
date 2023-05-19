let images = [
   {
      img_url:
         "https://rare-gallery.com/uploads/posts/340158-Digital-Art-Astronaut-Chill-Chilling.jpg",
      alt_text: "Chilling Astronaut",
   },
   {
      img_url:
         "https://rare-gallery.com/uploads/posts/340158-Digital-Art-Astronaut-Chill-Chilling.jpg",
      alt_text: "Chilling Astronaut",
   },
   {
      img_url:
         "https://rare-gallery.com/uploads/posts/340158-Digital-Art-Astronaut-Chill-Chilling.jpg",
      alt_text: "Chilling Astronaut",
   },
   {
      img_url:
         "https://rare-gallery.com/uploads/posts/340158-Digital-Art-Astronaut-Chill-Chilling.jpg",
      alt_text: "Chilling Astronaut",
   },
   {
      img_url:
         "https://rare-gallery.com/uploads/posts/340158-Digital-Art-Astronaut-Chill-Chilling.jpg",
      alt_text: "Chilling Astronaut",
   },
   {
      img_url:
         "https://rare-gallery.com/uploads/posts/340158-Digital-Art-Astronaut-Chill-Chilling.jpg",
      alt_text: "Chilling Astronaut",
   },
];

function addImages(image, description) {
   $("#gallery").append(`
           <div class="gallery-item">
            <figure>
               <img
                  src="${image}"
                  alt="${description}"
               />
            </figure>
         </div>
    `);
}

$(document).ready(function () {
   images.forEach((image) => {
      addImages(image.img_url, image.alt_text);
   });
});
