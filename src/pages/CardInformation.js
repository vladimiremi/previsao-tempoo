import React, { useState } from 'react';
import Modal from './Modal';



export default function Example() {
    const [show, setShow] = useState(false);
  
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(false);
  
    return (
        <>
            <button className="button" variant="primary" onClick={ ()=> setShow(true) }>
                🔎
            </button>
            {show ? (
                 <Modal onClose={ ()=>setShow(false) }>
                       
                 </Modal>
            ) : "" }
        </>
    );
  }
  

//-----------------------------------------------------

// export default function CardInformation(){
//     return(
        // <div className="card">
        //     <p>Niteroi, RJ - Brasil</p>
        //     <h2 className="title">20ºC Nublado</h2>
        //     <div>
        //         <div className="containerVento">
        //             <div>
        //                 <p>⬇16º ⬆25º</p>
        //                 <p>Vento 18km/h</p>
        //             </div>
        //             <div>
        //                 <p>Sensação 19°C</p>
        //                 <p>Humidade 89%</p>
        //             </div>
        //         </div>
        //         <hr/>
        //         <div className="weekdays">
        //             <div>
        //                 <p>Terça</p>
        //                 <p>18º 26º</p>
        //             </div>
        //             <div>
        //                 <p>Quanta</p>
        //                 <p>18º 26º</p>
        //             </div>
        //             <div>
        //                 <p>Quinta</p>
        //                 <p>18º 26º</p>
        //             </div>
        //             <div>
        //                 <p>Sexta</p>
        //                 <p>18º 26º</p>
        //             </div>
        //             <div>
        //                 <p>Sábado</p>
        //                 <p>18º 26º</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
//     )
// }