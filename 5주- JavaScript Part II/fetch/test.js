let postData;

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    postData = data;
  });

const postURL = "https://jsonplaceholder.typicode.com/todos";

fetch(postURL, {
  method: "POST", 
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(postData),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

  // 이것은 잘못된 코드. test2 코드가 제대로 된 코드이다.
  // fetch(postURL,~) 이 함수가 fetch("https://jsonplaceholder.typicode.com/todos/1")
  // 함수 안에서 실행되어야 제대로 실행된다.