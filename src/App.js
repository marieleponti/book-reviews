// import logo from './logo.svg';
import './App.css';
import Review from './components/Review.js'

function App() {
  return (
    <div className="App">
      <h1>KIDS BOOKS TO CHECK OUT</h1>
      <Review 
        bookTitle="Ahmad Aziz's Epic Year"
        image='AhmedAzizsEpicYear'
        author='Nina Hamza'
        synopsis='A Indian American boy endures a family move from Hawaii to frigid 
        Minnesota and, with the help of three life-changing books he reads in school, he learns to 
        like reading, and ultimately, himself.'
        reviewText="From School Library Journal: &quot;A strong debut destined to become 
        a classic. Recommended for classrooms and libraries of all types, particularly where Zanib 
        Mian's &quot;Planet Omar&quot; series flies off the shelves.&quot; --Mahasin A. Aleem, Oakland P.L., CA"
      />
       <Review 
        bookTitle="A Sky-Blue Bench"
        image='aSkyBlueBench'
        author='Bahram Rahman'
        synopsis='Young Aria returns to school after recovering from an accident and being fitted with 
        a prosthetic leg, but the school has no furniture and sitting on the floor is too painful. 
        She finds a way to build her own bench, surprising and inspiring her classmates.'
        reviewText=""
      />
        <Review 
        bookTitle="I Love Vincent"
        image='iLoveVincent'
        author='Laura Ljungkvist'
        synopsis='Scout, a seeing-eye dog, and his human, Vincent, who is blind, make their way 
        through a typical day.'
        reviewText=""
      />
    </div>
  );
}

export default App;
