import Header from "../components/Main/Header";
import Body from "../components/Main/Body";

function Main() {
  return (
    <>
      <h1>Redux TodoList</h1>
      <Header />
      <Body success={false} />
      <Body success={true} />
    </>
  );
}

export default Main;
