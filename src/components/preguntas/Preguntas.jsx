import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="md:w-[80%] flex flex-col justify-center mx-auto bg-slate-50 p-10 rounded-lg shadow-md"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-nunito font-bold">
          ¿Cuáles son los horarios de atención?
        </AccordionTrigger>
        <AccordionContent className="font-nunito">
          Los Horarios de Atención son de <span className="text-blue-900">9:00 AM hasta 18:30 PM</span>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="font-nunito font-bold">¿Cómo puedo agendar una cita?</AccordionTrigger>
        <AccordionContent className="font-nunito">
          Puedes agendar una cita llamando a nuestro número de contacto,
          enviándonos un correo electrónico, o a través de nuestro sistema de
          citas en línea en nuestro sitio web.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="font-nunito font-bold">¿Trabajan con seguros y prepagas?</AccordionTrigger>
        <AccordionContent className="font-nunito">
          No trabajamos con seguros o prepagas. El consultorio es <span className="text-blue-900">100% privado.</span>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
