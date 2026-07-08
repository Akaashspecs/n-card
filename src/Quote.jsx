import { TypeAnimation } from 'react-type-animation'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { GiNestedHearts } from "react-icons/gi";



const Quote = () => {

const quote = `
I am pretty sure you get my gifts.          
“Tumhe mei ek raaz ki baat batau!!!mujhe ye flowers gifts karne ka concept samaj hi nai aata tha infact i hate the concept, mei hamesha smjta tha flowers going to die anyway so what’s the point??? Jab mei tumse mila aur jaana ki shyd mei hi galat soch raha tha...the point is never about flowers the real point is tum kisko gift krr rahe ho vo tumhare lie kitni special hai aur yrr kasam se aaj jab teri smile dekhi!!!... ufff...sirf uss jhalak ke lie mei tumhe ek nahi hazaro baar flowers gift krr skta hun mei hamesha chahta hun tumhare chehre prr aisi smile dekhna.”

We met only twice,
and perhaps it was just a passing moment for the world,
but certain encounters carry a strange elegance —
gentle, unspoken, and memorable.

There was a calmness in your presence
and a grace in the way you spoke,
the kindness that you hold within you,
long after the moment has passed.

Its your birthday,
And I simply wish that life treats you kindly,
that your days are filled with purpose and peace,
and the emptiness within you finds its solace,
wherever you go.

May this new year of your life
bring quiet joy, meaningful moments,
and all the beautiful things you truly deserve.

Happy Birthday ✨

— From someone who remembers that meeting with a smile
`;

    return (
        <div className='h-full bg-[url(/bggg.png)] bg-repeat-y bg-auto bg-top relative pb-6'>
 <img src='flags.png'/>
 <div className='dancing flex flex-col justify-center items-center gap-1 text-[40px] '>
  <div className='-rotate-10 curve-down  '>
    Happy     Birthday
  </div>
<div className='relative flex flex-col items-center mr-11'>

  <div className='-rotate-11 curve-up'>
    To you
  </div>

  <div className='-rotate-11 curve-up'>
    Neha
  </div>

  <img
    src='bear.png'
    className='absolute bottom-0 w-[100px] h-[160px] ml-[190px] pt-[40px] object-contain -rotate-1'
  />

</div>
  

  
 </div>
 <div className='relative'>
    <img src='cake.gif' className='relative z-20 mx-auto h-96'/>
      
 </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.03,
            },
          },
        }}
        className="max-w-3xl text-center leading-8 text-xl md:text-2xl font-light px-4"
      >
       {quote.split("").map((char, index) => {

  const shouldBreak =
    char === "," ||
    char === "." ||
    char === "—" || char === " br ";

  return (
    <span key={index} className='dancing relative font-bold text-[30px] z-30'>
      <motion.span
        variants={{
          hidden: {
            opacity: 0,
            y: 20,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
       {char}
      </motion.span>

      {shouldBreak && <br />}
     
    </span>
  );
})} 
      </motion.div>
      <div className='my-[150px] flex justify-center flex-col items-center gap-3  pb-11'>
        <div className='poppins font-light text-xl'>
   There's something for you
        </div>
       


      </div>

 </div>
    )
}

export default Quote    