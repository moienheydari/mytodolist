import InputField from './inputField';
import '../css/inputCont.min.css'

export default function InputContainer ({pressed, editphase}) {
    return (
        <div className={`input-cont ${(pressed||editphase) ? 'hide' : 'show'}`}>
            <InputField pressed={pressed} editphase={editphase}/>
        </div>
    )
}