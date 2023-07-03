import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
function ModalPage(){
    const [showModal, setShowModal] = useState(false);

    

    const handleClick = () => {
        setShowModal(!showModal);
    }

    const handleClose = () => {
        setShowModal(!showModal)
    }

    const actionBarContent = <div>
        <Button primary onClick={handleClose}>I Accept</Button>
    </div>

    const modalContent = <Modal onClose = {handleClose} actionBar={actionBarContent}>
        <p>This is a modal</p>
    </Modal>;

    return (
        <div>
            
            {showModal && modalContent}
            <Button onClick={handleClick}  primary>Open Modal</Button>

            <p>Nam mattis libero nec pellentesque porta. Donec at pharetra turpis. Sed malesuada non lectus quis posuere. Aliquam erat volutpat. In efficitur rhoncus libero, vitae porttitor urna sodales sit amet. Etiam bibendum neque turpis, quis maximus ipsum suscipit eget.</p>
            <p>Nam mattis libero nec pellentesque porta. Donec at pharetra turpis. Sed malesuada non lectus quis posuere. Aliquam erat volutpat. In efficitur rhoncus libero, vitae porttitor urna sodales sit amet. Etiam bibendum neque turpis, quis maximus ipsum suscipit eget.</p>
            <p>Nam mattis libero nec pellentesque porta. Donec at pharetra turpis. Sed malesuada non lectus quis posuere. Aliquam erat volutpat. In efficitur rhoncus libero, vitae porttitor urna sodales sit amet. Etiam bibendum neque turpis, quis maximus ipsum suscipit eget.</p>
            <p>Nam mattis libero nec pellentesque porta. Donec at pharetra turpis. Sed malesuada non lectus quis posuere. Aliquam erat volutpat. In efficitur rhoncus libero, vitae porttitor urna sodales sit amet. Etiam bibendum neque turpis, quis maximus ipsum suscipit eget.</p>
            <p>Nam mattis libero nec pellentesque porta. Donec at pharetra turpis. Sed malesuada non lectus quis posuere. Aliquam erat volutpat. In efficitur rhoncus libero, vitae porttitor urna sodales sit amet. Etiam bibendum neque turpis, quis maximus ipsum suscipit eget.</p>
            <p>Nam mattis libero nec pellentesque porta. Donec at pharetra turpis. Sed malesuada non lectus quis posuere. Aliquam erat volutpat. In efficitur rhoncus libero, vitae porttitor urna sodales sit amet. Etiam bibendum neque turpis, quis maximus ipsum suscipit eget.</p>
            <p>Nam mattis libero nec pellentesque porta. Donec at pharetra turpis. Sed malesuada non lectus quis posuere. Aliquam erat volutpat. In efficitur rhoncus libero, vitae porttitor urna sodales sit amet. Etiam bibendum neque turpis, quis maximus ipsum suscipit eget.</p>
            <p>Nam mattis libero nec pellentesque porta. Donec at pharetra turpis. Sed malesuada non lectus quis posuere. Aliquam erat volutpat. In efficitur rhoncus libero, vitae porttitor urna sodales sit amet. Etiam bibendum neque turpis, quis maximus ipsum suscipit eget.</p>
            <p>Nam mattis libero nec pellentesque porta. Donec at pharetra turpis. Sed malesuada non lectus quis posuere. Aliquam erat volutpat. In efficitur rhoncus libero, vitae porttitor urna sodales sit amet. Etiam bibendum neque turpis, quis maximus ipsum suscipit eget.</p>
            <p>Nam mattis libero nec pellentesque porta. Donec at pharetra turpis. Sed malesuada non lectus quis posuere. Aliquam erat volutpat. In efficitur rhoncus libero, vitae porttitor urna sodales sit amet. Etiam bibendum neque turpis, quis maximus ipsum suscipit eget.</p>
            
        </div>
    )
}

export default ModalPage;