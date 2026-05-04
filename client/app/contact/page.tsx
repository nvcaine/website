import { ReactElement } from 'react';
import ContactForm from '@/app/ui/contact/contact-form';

export default function Page(): ReactElement {
    return (
        <>
            <div>
                You can also send a message by filling out the following form:
            </div>

            <br />

            <ContactForm />
        </>
    );
}
