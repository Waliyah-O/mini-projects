const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profileImg = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_text = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 3000);

async function getData() {
  //   const request1 = fetch("https://randomuser.me/api").then((res) => res.json());
  //   const request2 = fetch("https://jsonplaceholder.typicode.com/posts/2").then(
  //     (res) => res.json()
  //   );

  //   Promise.all([request1, request2])
  //     .then(([data1, data2]) => {
  //       console.log(data2.title);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

  header.innerHTML = `<img src="https://source.unsplash.com/featured/300x201" alt="unsplash"/>`;

  const adviceRes = await fetch("https://api.adviceslip.com/advice");
  const adviceJson = await adviceRes.json();
  // console.log(adviceJson);
  excerpt.innerHTML = `${adviceJson.slip.advice}`;

  const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  const responseJson = await response.json();
  //   console.log(responseJson);
  title.innerHTML = `${responseJson.title}`;

  const res = await fetch("https://randomuser.me/api");
  const { results } = await res.json();
  console.log(results);
  results.forEach((user) => {
    profileImg.innerHTML = `<img src="${user.picture.large}" src="${user.name.first}"/>`;
    name.innerHTML = `${user.name.first} ${user.name.last}`;
    date.innerHTML = `Age: ${user.dob.age}`;

    animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
    animated_bg_text.forEach((text) =>
      text.classList.remove("animated-bg-text")
    );
  });
}
