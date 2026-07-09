import { TypeAnimation } from "react-type-animation";

import { Link, useLocation } from "react-router-dom";
import { GiNestedHearts } from "react-icons/gi";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

const Quote = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollY !== undefined) {
      window.scrollTo({
        top: location.state.scrollY,
        behavior: "instant", // or "auto"
      });
    }
  }, [location]);

  return (
    <div className="h-full bg-[url(/bggg.png)] bg-repeat-y bg-auto bg-top relative pb-6">
      <img src="flags.png" />
      <div className="dancing flex flex-col justify-center items-center gap-1 text-[40px] ">
        <div className="-rotate-10 curve-down  ">Happy Birthday</div>
        <div className="relative flex flex-col items-center mr-11">
          <div className="-rotate-11 curve-up">To you</div>

          <div className="-rotate-11 curve-up">Neha</div>

          <img
            src="bear.png"
            className="absolute bottom-0 w-[100px] h-[160px] ml-[190px] pt-[40px] object-contain -rotate-1"
          />
        </div>
      </div>
      <div className="relative">
        <img src="cake.gif" className="relative z-20 mx-auto h-96" />
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
        className="dancing text-[30px] max-w-3xl text-center leading-8 text-xl md:text-2xl font-light px-4"
      >
        <div className="relative z-30">
          <div>I am pretty sure you get the flowers💐,</div>
          <br />
          <div>Tumhe mei ek raaz ki baat batau🙊!!!</div>
          <br />
          <div>
            Mujhe ye flowers gift karne ka concept samaj hi nai aata tha infact
            i hate the concept, mei hamesha smjta tha flowers going to die
            anyway so what’s the point???{" "}
          </div>
          <div className="w-full h-[200px] flex justify-center items-center overflow-hidden rounded-md mt-5">
            {" "}
            <img
              src="pooh.gif"
              className="relative z-20 mx-auto h-96 object-contain"
            />{" "}
          </div>
          <br />
          <div>
            Jab mei tumse mila aur jaana shyd mei hi galat soch raha tha...the
            point is never about flowers the real point is tum kisko gift krr
            rahe ho vo tumhare lie kitni special hai✨✨
          </div>{" "}
          <br />
          <div>
            Aur yrr kasam se aaj jab teri smile dekhi 👀!!!... ufff
            ❤️❤️❤️...sirf uss jhalak ke lie mei tumhe ek nahi hazaro baar
            flowers gift krr skta hun mei hamesha chahta hun tumhare chehre prr
            aisi smile dekhna.
          </div>{" "}
          <br />
          <div className="relative z-20 ">
            {" "}
            <img
              src="bouqet.png"
              className="opacity-50 left-1/12 absolute z-10 mx-auto h-96 mt-20"
            />{" "}
            <div className="relative z-30">
              Tumhe yaad hai rose day?? Tumne jab apne dost ke rose ki story prr
              photo daali thi !! Mujhe vo cheej bilkul bhi achi nahi lagi thi
              because I know you also deserve roses that day and mei tumhare lie
              kuch nahi krr paaya
            </div>{" "}
            .
          </div>{" "}
          <br />
          <div className="relative z-30">
            Na hi tumhara address pta tha aur na mei Chandigarh tha, but meine
            soch lia that i am going to fix this
          </div>{" "}
          <br />
          <div>
            Tumhare lie jab bouqet banwa raha tha to bhiaya ki jaan khaa
            dii...agr theek se nahi bana na to tumhari khair nahi.
          </div>{" "}
          <br />
          <div>So here we are...I hope that you also love it❤️.</div> <br />
          <br />
          <div>And the chocolatesssss🍫 part...</div> <br />
          <div>
            Dekh Dekh Dekh gussa mat hona, mujhe realization ho gya theek hai!
          </div>
          <div className="w-full h-[200px] flex justify-center items-center overflow-hidden rounded-md mt-5">
            {" "}
            <img src="slapp.gif" className="  object-contain" />{" "}
          </div>
          <br />
          <div>
            collage mei us din tumhare lie bhi chocolate lani chahiye
            thi🥺🥺...mei bhiiii kitna pagal thaa tumko bss bol dia ki ritika ko
            chocolate de dena aur ek baar bhi tumhare baare mei nahi socha ki
            tumhe kaisa lagega.
          </div>{" "}
          <br />
          <div>
            Neha, is baar ye chocolates🍫 sirf tumhare lie haii, isme sirf aur
            sirf tumhara haq hai. Chahe kha kha krr tum mote kyu na ho jao{" "}
            <img src="choc.png" className="  inline h-10 w-10" /> but ye tumhare
            lie hi haii...and don’t try to share it with another person, naii to
            dekh lena.
            <img src="cat.png" className="  inline h-10 w-10" />
          </div>{" "}
          <br />
          <div>Once Again</div> <br />
          <div>Happy Happy happpiieeeee birthday to you Neha 🧁❤️</div> <br />
          <div>
            Mei bss bhagawaan se yahi dua karunga🙏🏻🙏🏻🙏🏻 ki tumhe vo sab mile jo
            tum chahte ho, aur tumhare chehre prr hamesha smile rahe😇🫶🏻.
          </div>{" "}
          <br />
          <div>Ek Khat aur padhna Chahoge????🥺🥺🥺</div>
          <div>Iske baad mei kisi cheej ki koi guarantee nahi le skta.</div>
          <div>Read at your own risk⚠️⚠️</div> <br /> <div>.</div> <br />{" "}
          <div>.</div> <br /> <div>.</div>
        </div>
      </motion.div>
      <div className="my-[150px] flex justify-center flex-col items-center gap-3  pb-11">
        <Link
          to="/khat"
          state={{ scrollY: window.scrollY }}
          className="border text-xl bg-red-500 text-white p-2 rounded-xl px-3 flex items-center gap-1"
        >
          Click Here <GiNestedHearts />
        </Link>
      </div>
    </div>
  );
};

export default Quote;
