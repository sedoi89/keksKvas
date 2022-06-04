import React, {useState} from "react";
import Header from "./components/Header/Header";
import News from "./components/NewItem/New";
import Features from "./components/Features/Features";
import History from "./components/History/History";
import Press from "./components/Press/Press";
import Assortment from "./components/Assortment/Assortment";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import ModalQuestion from "./components/Modal/ModalQuestion";


function App() {


    const [modalActive, setModalActive] = useState(false)
    const [shownModal, setShownModal] = useState(false)
    const showModal = function () {
        if (window.scrollY >= 2600 && window.scrollY < 2700 && shownModal === false) {
            setModalActive(true)
            setShownModal(true)

            window.removeEventListener('scroll', showModal)
        }
    }
    window.addEventListener('scroll', showModal)

    return (
        <div>
            <main>
                <Header/>

                <News/>
                <Features/>
                <History/>
                <Press/>
                <Assortment/>
                <Form/>
                <Footer/>
            </main>
            <Modal
                active={modalActive}
                setActive={setModalActive}

            />
            <ModalQuestion setActiveQuestion={setModalActive}/>

        </div>
    )
}

export default App;
