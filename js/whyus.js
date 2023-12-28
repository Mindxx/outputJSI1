setTimeout(() => {
    let showWhyUs = document.getElementsByClassName("fetchAPIWhyUs")

fetch("../json/whyus.json")
    .then((response) => response.json())
    .then((data) => {
        for (i = 0; i < data.length; i++) {
            for (j = 0; j < showWhyUs.length; j++) {
                showWhyUs[j].innerHTML += `
                <div class="col-lg-4">
                <div class="box" data-aos="zoom-in" data-aos-delay="100">
                  <span>${data[i].id}</span>
                  <h4>${data[i].title}</h4>
                  <p>${data[i].description}</p>
                </div>
              </div>
            `
            }
        }
    })
}, 2000)

