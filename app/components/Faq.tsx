'use client'

import * as Accordion from '@radix-ui/react-accordion';
import Plus from '@/public/assets/Plus.svg';
import Minus from '@/public/assets/Minus.svg';
import Image from 'next/image';


const items = [
  {
    question: 'How do I get started?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corporis placeat facilis id ratione aut.'
  },
  {
    question: 'How do I get started?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corporis placeat facilis id ratione aut.'
  },
  {
    question: 'How do I get started?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corporis placeat facilis id ratione aut.'
  },
  {
    question: 'How do I get started?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corporis placeat facilis id ratione aut.'
  },
  {
    question: 'How do I get started?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corporis placeat facilis id ratione aut.'
  },
  {
    question: 'How do I get started?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corporis placeat facilis id ratione aut.'
  }
]


export function Faq() {
  return (
    <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-6  ">
      <div className='lg:w-1/3 lg:pr-[56px] lg:py-[32px]'>
        <h3 className="text-[#eb2891] text-[14px] font-medium lg:text-base">Frequently Asked Questions</h3>
        <h1 className="py-4 text-2xl font-medium lg:text-[42px] lg:leading-[58px] text-[#172026] ">Let's clarify some of your questions</h1>
        <p className="text-[#36485C] pb-[24px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corporis placeat facilis id ratione aut.</p>
      </div>


      <div className='lg:w-2/3  '>
        <Accordion.Root className='flex flex-col gap-y-4 ' collapsible type='single' defaultValue='item-1'>
          {items.map((item, idx) => (
            <div key={idx}>
              <Accordion.Item value={`item-${idx+1}`} className='bg-[#e3f1ff] p-4 rounded-lg hover:bg-[#f7f7f7]'>
                <Accordion.Header>
                  <Accordion.Trigger className='flex w-full items-center justify-between'>
                    <p className='text-left text-medium lg:text-[18px]  '>{item.question}</p>
                    <span><Image src={Plus} alt="See More" /></span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  <p className='pt-2 text-[#36485C]'>{item.answer}</p>
                </Accordion.Content>
                
              </Accordion.Item>

            </div>
          ))}
        </Accordion.Root>
      </div>
    </div>
  )
}