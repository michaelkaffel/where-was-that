import { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import AddHikeForm from './AddHikeForm';



function AccordianForHikeForm() {
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
          <AccordionHeader targetId="1">Add Hikes</AccordionHeader>
          <AccordionBody accordionId="1">
            <AddHikeForm />
          </AccordionBody>
        </AccordionItem>
      </Accordion>
      
    </>
  );
}

export default AccordianForHikeForm;