"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Lorem ipsum dolor sit amet consectetur.",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur dolore doloribus.",
  },
  {
    q: "Lorem ipsum dolor sit amet consectetur.",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur dolore doloribus.",
  },
  {
    q: "Lorem ipsum dolor sit amet consectetur.",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur dolore doloribus.",
  },
  {
    q: "Lorem ipsum dolor sit amet consectetur.",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur dolore doloribus.",
  },
  {
    q: "Lorem ipsum dolor sit amet consectetur.",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur dolore doloribus.",
  },
  {
    q: "Lorem ipsum dolor sit amet consectetur.",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur dolore doloribus.",
  },
];

export default function FaQ() {
    return (
        <section className="w-full bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-center text-4xl md:text-5xl font-semibold tracking-tight font-[quicksand]">
          Frequently Ask Question
        </h2>

        <Accordion
          type="single"
          collapsible
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-8"
        >
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-gray-200"
            >
              <AccordionTrigger className="group flex w-full items-center justify-between py-4 text-left text-lg font-normal hover:no-underline [&>svg]:hidden">
                <span>{item.q}</span>

                <span className="ml-4 flex h-6 w-6 items-center justify-center rounded-full border border-[#C2824D] text-[#C2824D]">
                  <Plus className="h-4 w-4 group-data-[state=open]:hidden" />
                  <Minus className="h-4 w-4 hidden group-data-[state=open]:block" />
                </span>
              </AccordionTrigger>

              <AccordionContent className="pb-4 pr-10 text-gray-600">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}