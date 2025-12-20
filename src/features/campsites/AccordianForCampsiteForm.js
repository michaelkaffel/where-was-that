import { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import AddCampsiteForm from './AddCampsiteForm';



function AccordianForCampsiteForm() {
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
          <AccordionHeader targetId="1">Add Campsite</AccordionHeader>
          <AccordionBody accordionId="1">
            <AddCampsiteForm />
          </AccordionBody>
        </AccordionItem>
      </Accordion>
      
    </>
  );
}

export default AccordianForCampsiteForm;