import { useEffect, useRef, useState } from 'react';
import { auth, storage, db } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Loader from 'react-loaders';



const Home = () => {
  const form = useRef();
  const nameInput = useRef();
  const descriptionInput = useRef();
  const urlInput = useRef();
  const imageInput = useRef();


  const submitPortfolio = (e) => {
    e.preventDefault();
    const name = nameInput.current.value;
    const description = descriptionInput.current.value;
    const url = urlInput.current.value;
    const image = imageInput.current.files[0];

    if (image) {
      const storageRef = ref(storage, `portfolio/${image.name}`);

      uploadBytes(storageRef, image)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref)
            .then((downloadUrl) => {
              savePortfolio({
                name,
                description,
                url,
                image: downloadUrl
              });
            })
            .catch((error) => {
              console.log(error);
              savePortfolio({
                name,
                description,
                url,
                image: null
              });
            });
        })
        .catch((error) => {
          console.log(error);
          savePortfolio({
            name,
            description,
            url,
            image: null
          });
        });
    } else {
      // Handle the case when no file is selected
      savePortfolio({
        name,
        description,
        url,
        image: null
      });
    }
  };

  const savePortfolio = async (portfolio) => {
      try {
          await addDoc(collection(db, 'portfolio'), portfolio);
          window.location.reload(false);
      } catch (error) {
          alert('Failed to add portfolio');
      }
  }

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container portfolio-submit-page">
        <div className="text-zone">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Submit Item".split("")}
              index={15}
            />
          </h1>
          <div className="portfolio-form">
              <form ref={form} onSubmit={submitPortfolio}>
                <ul>
                  <li className="half"><input type="text" placeholder="Name" ref={nameInput} /></li>
                  <li className="half"><textarea placeholder="Description" ref={descriptionInput} /></li>
                  <li className="half"><input type="text" placeholder="Url" ref={urlInput} /></li>
                  <li className="half"><input type="file" placeholder="Image" ref={imageInput} /></li>
                  <li className="half"><button type="submit" className="flat-button">Submit</button></li>
                  <li className="half"><button onClick={() => auth.signOut()} className="flat-button">Sign out</button></li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      <Loader type="pacman" />
      </>
  )
}

export default Home;
