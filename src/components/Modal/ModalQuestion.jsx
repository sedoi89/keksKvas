import React, {useState} from 'react';

const ModalQuestion = ({setActiveQuestion}) => {
    const [state, setState] = useState('modalQuestionBody')


    return (
        <div id={'container'} className={state} onMouseOver={() => setState('modalQuestionBody active')}
             onMouseOut={() => setState('modalQuestionBody')}>
            <div className={'modalQuestionContent'} onClick={() => {
                setActiveQuestion(true)
            }}>
                <img src={'./img/pngQuestion.png'} width={'40px'} height={'40px'} alt={'question'}/>
                Ответим на все
            </div>
        </div>
    );
};

export default ModalQuestion;