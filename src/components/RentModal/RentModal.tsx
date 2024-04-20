import React, { useState } from 'react'
import Modal from '@/components/Modal'

export const RentModal = () => {
    const [open, setOpen] = useState(false);
    return (
        <Modal
            id="contact"
            open={open}
            onClose={() => setOpen(false)}
            title="Edit Contact Information"
            className="!max-w-[46.5rem] !w-full shadow-xl"
        >
            <div className="">
                Modal
            </div>
        </Modal>
    )
}

