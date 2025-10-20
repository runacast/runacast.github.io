'use client'

import { useState } from 'react'
import Modal from '@/components/admin/register/Modal'

export default () => {

    const [modal, setModal] = useState(false)

    return <>
    <a href='#' onClick={() => setModal(true)}>Register</a>
    {modal && <div className="modal-background"><Modal set={setModal} /></div>}
    </>
}