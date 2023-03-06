import * as bootstrap from "bootstrap";

const modal = {
    showModal: (id:string) => {
        const elementModal = document.getElementById(id) as HTMLElement;
        if (elementModal !== null && elementModal !== undefined){
            !elementModal?.classList.contains('show') && new bootstrap.Modal(elementModal)?.show();
        }
    },
    hideModal: (id:string) => {
        const elementModal = document.getElementById(id) as HTMLElement;
        if (elementModal !== null && elementModal !== undefined){
            bootstrap.Modal.getInstance(elementModal)?.hide();
        }
    },
}

export default modal;
