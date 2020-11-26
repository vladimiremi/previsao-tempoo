import {CgArrowUp, CgArrowDown} from 'react-icons/cg';
import './Modal.css';

export default function Modal({ onClose = () => {},  children }){
    return(
        <div className="card">
                <strong>Niteroi, RJ - Brasil</strong>
                <a className="close" onClick={onClose}>X</a>
            <h2 className="title">20ºC Nublado</h2>
            <div>
                <div className="containerVento">
                    <div>
                        <strong><CgArrowDown />16º <CgArrowUp />25º</strong>
                        <p>Vento <strong>18km/h</strong></p>
                    </div>
                    <div>
                        <p>Sensação <strong>19°C</strong></p>
                        <p>Humidade <strong>89%</strong></p>
                    </div>
                </div>
                <hr/>
                <div className="weekdays">
                    <div>
                        <p>Terça</p>
                        <p>18º 26º</p>
                    </div>
                    <div>
                        <p>Quanta</p>
                        <p>18º 26º</p>
                    </div>
                    <div>
                        <p>Quinta</p>
                        <p>18º 26º</p>
                    </div>
                    <div>
                        <p>Sexta</p>
                        <p>18º 26º</p>
                    </div>
                    <div>
                        <p>Sábado</p>
                        <p>18º 26º</p>
                    </div>
                </div>
            </div>
        </div>
    )
}