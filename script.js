const img1 = document.querySelector(".img1");
const displaycontent = document.querySelector(".display_line");
const gridValue = document.querySelector(".grid_template_content");
// var dataFetch = async function () {

//   data = await data.json();
//   console.log(data);

//   data.forEach((ele) => {});
// };
// dataFetch();

class Pictures {
  async getPcitures() {
    let data = await fetch(
      "https://api.unsplash.com/photos?client_id=I0bQu-f7_8Z0W9VT9wQNG-Njomej6PQjCAyNT_cYkLM&page=30"
    );
    let pic = await data.json();
    // let allimg = pic.url;
    pic = pic.map((ele) => {
      return ele.urls.small;
    });
    return pic;
  }
}

class UI {
  displayProducts(pictures) {
    console.log(pictures);
    let result = "";
    pictures.forEach((ele) => {
      result += ` <div class="grid_card_container">
            <img
            src=${ele}
              alt=""
              style="width: 100%"
              class="img1"
            />
            <div class="display_line">
              <p ><i class="bi bi-arrow-up"></i>
               214
               <i class="bi bi-arrow-down"></i>
              </p>
              <p><i class="bi bi-chat-square"></i></p>
              <p>this</p>
            </div>
          </div>`;
    });
    gridValue.innerHTML = result;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const pictures = new Pictures();
  pictures.getPcitures().then((data) => ui.displayProducts(data));
});

//  accesss key I0bQu-f7_8Z0W9VT9wQNG-Njomej6PQjCAyNT_cYkLM
//secrete key tYjH-bDNcqBot7QXyPW6wjbdqjznxrUAsCj3_rIfXvQ
