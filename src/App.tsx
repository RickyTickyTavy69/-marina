import './App.css'
import s from "./app.module.css";
import marina from "./assets/marina.jpeg";

function App() {

  return (
    <div className="App">
      <h1 className={s.marinaTitle}>Marina English Repetitor</h1>
        <img className={s.marinaFoto} src={marina} alt="Marina E."/>
        <p>Hello, my name is Marina and I am the best english repetitor in the f*cking universe. I will teach you english
            for 200 bucks an hour. Feel free to contact me if you want to become the best english speaker.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias autem eius iste labore quae quaerat recusandae repellat, tempore temporibus!</p>
        <button className={s.contactButton}>Contact</button>
    </div>
  )
}

export default App
