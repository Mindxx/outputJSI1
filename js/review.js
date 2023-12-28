
let fetchAPIReview = document.getElementsByClassName("fetchAPIReview")

fetch("review.json")
    .then((response) => response.json())
    .then((data) => {
        for (i = 0; i < data.length; i++) {
            for (j = 0; j < fetchAPIReview.length; j++) {
                fetchAPIReview[j].innerHTML += `

                <div class="swiper-slide" style = "width: 33%">
                    <div class="testimonial-item">
                        <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        P${data[i].comment}
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src="${data[i].img}" class="testimonial-img" alt="">
                        <h3>${data[i].name}</h3>
                        <h4>${data[i].customer}</h4>
                    </div>
                </div>
            `
            }
        }
    })


