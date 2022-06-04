import React, {useState} from 'react';
import axios from "axios";

import FormModule from "./Form.module";


const Form = () => {


    const [form, setForm] = useState({name: '', phoneNumber: '', additionalNumber: '', email: '', comments: '',})
    const [nameDirty, setNameDirty] = useState(false)
    const [phoneDirty, setPhoneDirty] = useState(false)
    const [formError, setNameError] = useState('Поле не модет быть пустым')
    const [phoneError, setPhoneError] = useState('Поле не модет быть пустым')
    const [fieldIsDisabled, setFieldDisabled] = useState(true)
    const handleBlur = (ek) => {
        switch (ek.target.name) {
            case 'fullName':
                setNameDirty(true)
                break
            case 'phoneNumber':
                setPhoneDirty(true)
                break
        }
    }

    const sendForm = (e) => {
        e.preventDefault()

        const newForm = {
            id: Date.now(),
            form
        }

        axios.post('my.ip', form).then((res) => {
            console.log(res.data)

        }).catch(err => {
            console.log(err.response.data)
        })
        console.log(newForm);
        setForm({name: '', phoneNumber: '', additionalNumber: '', email: '', comments: ''})
    }

    return (
        <div className={'order'}>
            <div className={'title'}>
                <h2>Заказать</h2>
            </div>
            <div className={'oderFlex'}>
                <p>Не ждите пока нас отрекламируют, как Вятский квас, и мы поднимем цены! Закажите настоящий крафтовый
                    квас сейчас. При заказе от 10 баррелей — скидка 10%.
                </p>
                <div className={'form'}>
                    <form>

                        <FormModule>
                            {{name: 'fullName', label: ' Представьтесь:', placeholder: "Квас Квасович"}}
                            {e => {
                                if (e.target.value.length < 2) {
                                    setNameError('Поле не должно быть пустым');
                                    setFieldDisabled(true)
                                } else {
                                    setNameError('')
                                }
                                setForm({...form, name: e.target.value,})
                            }}
                            {form.name}
                            {et => handleBlur(et)}

                        </FormModule>
                        {(nameDirty && formError) && <div className={'error'}>{formError} </div>}
                        <FormModule>
                            {{name: 'phoneNumber', label: ' Номер телефона:', placeholder: "7 (999) 123 45-67"}}
                            {e => {
                                if (e.target.value.length < 9) {
                                    setPhoneError('Не корректный номер');
                                    setFieldDisabled(true)
                                } else {
                                    setPhoneError('');
                                    setFieldDisabled(false)
                                }

                                setForm({...form, phoneNumber: e.target.value,})
                            }}
                            {form.phoneNumber}
                            {et => handleBlur(et)}

                        </FormModule>
                        {(phoneDirty && phoneError) && <div className={'error--phone'}>{phoneError} </div>}
                        <FormModule>
                            {{name: 'additionalNumber', label: 'Доп. номер:', placeholder: 'Можно бабушки'}}
                            {e => setForm({...form, additionalNumber: e.target.value,})}
                            {form.additionalNumber}


                        </FormModule>

                        <FormModule>
                            {{name: 'email', label: 'Email:', placeholder: "kvas@zakaz.ru"}}
                            {e => setForm({...form, email: e.target.value,})}
                            {form.email}

                        </FormModule>

                        <label htmlFor="litres">Объем заказа:</label>
                        <select defaultValue={'1'} name="litres" id="litres">
                            <option value="1">От 5 до 10 баррелей в неделю</option>
                        </select>
                        <div className="comment">
                            <label htmlFor="comment">Доп. комментарий:</label>
                            <textarea placeholder={'Комментарий к заказу'}
                                      onChange={e => setForm({...form, comments: e.target.value,})}
                                      value={form.comments} name="comment" id="comment"></textarea>
                        </div>
                        <div className="approval">

                            <input className={'custom-checkbox'} type="checkbox" name="approval" id="approval"
                                   defaultChecked/>
                            <label htmlFor="approval">Я согласен получать квасную рассылку</label>
                            <input disabled={fieldIsDisabled} onClick={sendForm} className="suborder" type="submit"
                                   value="Отправить заказ"/>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    );
};

export default Form;