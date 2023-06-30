
const BACKGROUND_STYLE = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgb(0,0,0, 0.7)',
    zIndex: '1000'
  }
  
  const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    padding: '150px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    color: 'black'
  }

  const BT_MODAL_STYLE = {
    position: 'fixed',
    top: '10px',
    right: '10px',
    cursor: 'pointer'
    

  }

export default function Modal({isOpen, setModal}){
    

    if(isOpen){
        return(
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}> 
                    
                    
                    <label onClick={setModal} style={BT_MODAL_STYLE}>X</label>
            
                </div>

            </div>

        )
    }
    return null
}