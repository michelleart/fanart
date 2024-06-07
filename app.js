

const price = "38bs";
const galleryItems = document.getElementById("galleryItems");
const imgs = [
    "download-removebg-preview.png",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
]

for (let i = 0; i < imgs.length; i++) {
    console.log(imgs[i])
    galleryItems.innerHTML += `
    <div class="gallery-item" id="${imgs[i]}">
                    <button class="btn-ver-dibujo">
                        <i class="fa-solid fa-bag-shopping"></i> 
                        ${price}
                    </button>
                    <a href="imgs/${imgs[i]}">
                        <img src="imgs/${imgs[i]}" alt="">
                    <div class="gallery-item-body">
                    </a>
                        
                        <button class="btn-buy-img">
                            <i class="fa-solid fa-bag-shopping"></i> Pedir
                        </button>
                        <a href="">
                            <button class="btn-ver-img">
                                <i class="fa-solid fa-eye"></i> Ver
                            </button>
                        </a>
                    </div>
    `;
    
}