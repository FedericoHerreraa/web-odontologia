import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full" style={{width: 700, display: "flex",  flexDirection: "column", justifyContent: "center", alignContent: "center"}}>
        <AccordionItem value="item-1">
          <AccordionTrigger>¿Cuáles son los horarios de atención?</AccordionTrigger>
          <AccordionContent>
            Los Horarios de Atención son de 9:00 AM hasta 18:30 PM
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>¿Cómo puedo agendar una cita?</AccordionTrigger>
          <AccordionContent>
          Puedes agendar una cita llamando a nuestro número de contacto, enviándonos un correo electrónico, o a través de nuestro sistema de citas en línea en nuestro sitio web.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>¿Trabajan con seguros y prepagas?</AccordionTrigger>
          <AccordionContent>
            No trabajamos con seguros o prepagas. El consultorio es 100% privado.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  