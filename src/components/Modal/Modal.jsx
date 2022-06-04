import React, {useState} from 'react';
import axios from "axios";


const Modal = ({active, setActive}) => {

    const [modalForm, setModalForm] = useState({modalName: '', modalPhoneNumber: ''})

    const sendModal = (e) => {
        e.preventDefault()
        const modalFormToSend = {
            id: Date.now(),
            modalForm
        }
        axios.post('my.ip', modalFormToSend).then((res) => {
            console.log(res.data)

        }).catch(err => {
            console.log(err.response.data)
        });

        setModalForm({modalName: '', modalPhoneNumber: ''});
        setActive(false)
    }

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() =>
            setActive(false)

        }>
            <div className={active ? 'modal__content active' : 'modal__content'}
                 onClick={event => event.stopPropagation()}>
                <h3>Остались вопросы?</h3>
                <form>
                    <div className={'modalName'}>
                        <label>Как Вас зовут?</label>
                        <input value={modalForm.modalName}
                               onChange={e => setModalForm({...modalForm, modalName: e.target.value})} type={"text"}/>
                    </div>

                    <div className={'modalPhone'}>
                        <label>Ваш номер телефона:</label>
                        <input value={modalForm.modalPhoneNumber}
                               onChange={e => setModalForm({...modalForm, modalPhoneNumber: e.target.value})}
                               type={"text"}/>
                    </div>

                    <input onClick={sendModal} className="subModal" type="submit" value="Мы обязательно перезвоним!"/>
                </form>
            </div>

        </div>
    );
};

export default Modal;