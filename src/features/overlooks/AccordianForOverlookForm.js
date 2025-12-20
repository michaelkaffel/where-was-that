import { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import AddOverlookForm from './AddOverlookForm';


function AccordianForOverlookForm() {
  const [open, setOpen] = useState('');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  

  return (
    <>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Add Overlooks</AccordionHeader>
          <AccordionBody accordionId="1">
            <AddOverlookForm />
          </AccordionBody>
        </AccordionItem>
      </Accordion>
      
    </>
  );
}

export default AccordianForOverlookForm;