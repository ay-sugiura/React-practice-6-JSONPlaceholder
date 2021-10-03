import axios from "axios";

export default function App() {
  const onClickUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  };

  const onClickUser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?id=3")
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={onClickUsers}>users</button> <br />
      <button onClick={onClickUser1}>id=1のuser</button>
      <h2>2021/10/03 codecommitへのpush、CodeBuildでのECRプッシュ</h2>
      <h2>2021/10/03 その後BlueGreenDeployment</h2>
    </div>
  );
}
