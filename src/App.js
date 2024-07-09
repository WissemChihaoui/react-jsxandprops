import HeadingParagraph from "./components/ex1/HeadingParagraph ";
import Greeting from "./components/ex2/Greeting";
import CurrentDateTime from "./components/ex3/CurrentDateTime";
import FullName from "./components/ex4/FullName";
import Card from "./components/ex5/Card";
import ItemList from "./components/ex6/ItemList";
import LoginStatus from "./components/ex7/LoginStatus";
import UserInfo from "./components/ex8/UserInfo";

function App() {
  const names = ['Jon', 'Jane', 'Phillipie', 'Adam'];

  const userObject = {
    name:'Jon',
    email:'jon@example.com',
    age:25,
  }
  return (
    <>
      {/* Exercise 1  */}
      <HeadingParagraph />

      {/* Exercise 2 */}
      <Greeting name="Jon" />

      {/* Exercise 3 */}
      <CurrentDateTime />

      {/* Exercise 4  */}
      <FullName firstName="Jon" lastName="Doe"/>

      {/* Exercise 5 */}
      <Card title="Wise Code" children="Your best agency" />

      {/* Exercise 6 */}
      <ItemList items={names}/>

      {/* Exercise 7 */}
      <LoginStatus isLoggedIn={true} />

      {/* Exercise8 */}
      <UserInfo user={userObject}  />
    </>
  );
}

export default App;
