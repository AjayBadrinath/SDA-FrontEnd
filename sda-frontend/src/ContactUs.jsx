import React from 'react'
/* Boiler Plate Obtained from https://tailwindcomponents.com/component/basic-contact-form  */
/* Mailer Reference https://dev.to/daliboru/how-to-send-emails-from-a-form-in-react-emailjs-27d1 */

import { Footer } from './Footer'
import { useState,useRef } from 'react';
import emailjs from 'emailjs-com';
import {useNavigate} from 'react-router-dom'
export default function ContactUs() {
    const succesfulSubmit=useNavigate();
    const form=useRef();
    const onSubmit=(e)=>{
        e.preventDefault();
        emailjs.sendForm("service_s1dcjcf","template_p90es18",form.current,"JenjWX8WP8BxxQWOB").then((res)=>{
            console.log(res.text);
            succesfulSubmit('/submitted')
        },(err)=>{
            console.log(err.text);
        });
    }
  return (
    <>
        <div className=' h-full flex flex-col  mt-20 z-0 justify-center '>
      
       <div className='mt-10'></div>

        <div class="p-4 w-1/2 h-full rounded-2xl shadow-[0_0_30px_aqua] z-0   m-auto   mt-10 flex justify-center items-center ">
        
        <form ref={form } class="w-full max-w-lg " onSubmit={onSubmit}>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name='Fn' id="grid-first-name" type="text" placeholder="Jane"/>
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='ln' id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="org">
        Organization
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="og" id="org" type="text"/>
      <p class="text-gray-600 text-xs italic"> Your Company Name</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="org">
        Phone Number
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="ph" id="org" type="tel"/>
      <p class="text-gray-600 text-xs italic"> Your Company Phone Number</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
        E-mail
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="em" id="email" type="email"/>
      <p class="text-gray-600 text-xs italic">Format org/name@domain.com</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Message
      </label>
      <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" name='mg' id="message"></textarea>
      <p class="text-gray-600 text-xs italic">Any Enquiry Pls Feel Free to Drop in </p>
    </div>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3">
      <button class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
        Send
      </button>
    </div>
    <div class="md:w-2/3"></div>
  </div>
</form>     

</div>

<br></br>
<br></br>
<br></br>
<br></br>
<hr></hr>
<Footer/>
 </div>
 
</>
  )
}
