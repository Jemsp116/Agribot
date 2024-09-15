import DivWrapper from '@/components/DivWrapper'
import Form from '@/components/Form'
import React from 'react'

const ContactForm = () => {
    return (
        <DivWrapper className={'border dark:border-[#444] md:w-[500px] mx-auto w-full py-12 rounded-3xl shadow-lg'} title={"Write to Us"}>
            <h4>Fill this form to reach us!”</h4>
            <Form />
        </DivWrapper>
    )
}

export default ContactForm