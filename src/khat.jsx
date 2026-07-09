import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useState } from "react";

const Khat = () => {
  const CARD_WIDTH = 220;
  const CARD_HEIGHT = 320;

  const RADIUS = 900;
  const START_ANGLE = -45;
  const END_ANGLE = 45;

  const videos = [
    "/ek.mp4",
    "/do.mp4",
    "/paanch.mp4",
    "/char.mp4",
    "/teen.mp4",
    "/che.mp4",
    "/saat.mp4",
  ];

  const progress = useMotionValue(0);
  const [, forceUpdate] = useState(0);

  useAnimationFrame((_, delta) => {
    progress.set(progress.get() + delta * 0.00023); // speed
    forceUpdate((v) => v + 1);
  });

  const angleStep = (END_ANGLE - START_ANGLE) / (videos.length - 1);

  return (
    <div>
      <div className="dancing text-[30px] max-w-3xl text-center leading-8 text-xl md:text-2xl font-light px-4">
        <div>Ek khat tere naam❤️</div> <br />{" "}
        <div>
          Samaj nahi aara kaha se start karun mere lie bhaut hard hone wala hai.
          Chll mei tumhe ek example se smjhata hun like tu jab bhi durgesh,
          divyanshu ya kisi aur ladke ka naam mention krti haii, mera dimaag
          khraab ho jaata haii, aadha dimag depression mei aur aadhe ka temper
          high ho jaata haiii. Bhaut gandi walii jaleousy hoti hai... uss time
          bss yahii sochta hun kab ye topic change hoga.{" "}
        </div>{" "}
        <div>
          Mei bhi itna nadaan kabhi kuch bola hi nahi iss baare mei, bss haan
          mei haan milata gaya kabhi ye nahi bataya ki mujhe kaisa feel hora...
          kyuki mei tujhe khone se darta tha...tujhe itni baar khoya hai ab mere
          ander himmat nahi bachi ki tujhe ek aur baar kho saku. But meine bhi
          soch lia ab agr aise khone ke dar se to vo kabhi bol hi nahi paunga jo
          hamesha se bolna chahta tha.
        </div>{" "}
        <div>
          Neha mujhe tu bhaut bhaut bhautt achi lagti hai. Mujhe koi interest
          nahi sirf tera dost bane rehne mei. Mei vo tere lie sb krna chata hun
          jisse tujhe khush dekh sakun. Mujhe tere saath comfortable rehna hai
          jisse mei jab chahun jo chaahun vo bol saku, jab bhi tujhe kuch bolta
          hun bhaut jyada soch mei pad jaata hun maybe tumhe vo baat pasand
          aaegi ya nahi aur uss chakkar mei sab kharaab kar deta hun. I
          overthink too much...tum agr sirf plain sa ‘gd mrng’ text kroge to bss
          yahi sochte reh jaunga aaj iska mood theek nahii hai aur mere dimaag
          me vo cheej chlti rahegi.{" "}
        </div>{" "}
        <div>
          Neha, tuhme kabhi bhi life mei problem hoti hai ya kabhi koi help
          chahiye hoti hai to haq jata ke bola krr ye mtt socha krr ki mujhe
          kuch burden padega ya nahi.I know Tujhe khud se sab karne ki aadat hai
          and tujhe kisi ka support lena psnd nahi haii. Dekh yrr simple hai
          merpe time nahi hoga to bata dunga otherwise no matter what i will
          always come for you. Ab mujhe dimaag se nahi sirf dil se chalna hai.
        </div>{" "}
        <div>
          Tumhe ek baat batata hun, jab bhi collage mei humari ladai hoti thi
          hum ek doosre se baat nahi krte the...prr meri nigahein sirf terpe
          rehti thi...yahi dekhta rehta tha tum kaha ho kiske saath ho kya krr
          rahi haii...teri har ek harqat prr nazar rehti thi, aur bhyii ye
          ladkii ye nahi ki ek baar idhar bhi dekh le ki koi teri nazar ke lie
          taras raha ho.
        </div>
        <div>
          Mera aaj bhi kabhi kabhi man krta hai ki tumse thodi bhout choti moti
          fights to hoti rehni chahiye. Prr tumhe gussa itna jyada aa jaata hai
          ki devi parvati ka bhi krodhh kam lagne lagta hai. Manta hun gussa
          hona tera haq hai prr itna gussa nahi ki cheejein theek karne mei 1
          saal lag jaye.
        </div>{" "}
        <div>
          {" "}
          Meine 7 saal wait kia prr ab mujhe 7 janam tere saath rehna hai. Khush
          bhi tumhare saath, udaas bhi tumhare saath, hasna bhi tumhare saath,
          rona bhi tumhare saath. Har ek cheej tumse share karni haii.{" "}
        </div>{" "}
        <div>
          Jahan bhi jaana hai tumhare saath jaana hai. Tumhara haath pakad krr
          ek trek kia hai abhi hazaaron aur trek Karne baaki hai.Tere bhai ka
          fikar karna banta haii But agli baar advance mei bol dunga, trek karne
          jaa rahe hai koi plane se nahi jaare, to thakna to pakka hai, neha
          chahe kitni bhi difficult situation aa jaye i will always keep you
          safe.
        </div>{" "}
        <div>Mujhe aisi zindagi jeeni hai tere saath.</div>
        <div
          className="relative overflow-hidden "
          style={{
            height: 500,
            perspective: 1800,
          }}
        >
          {videos.map((src, index) => {
            const p = progress.get();

            const angle =
              START_ANGLE + ((index + p) % videos.length) * angleStep;

            const rad = (angle * Math.PI) / 180;

            const x = Math.sin(rad) * RADIUS;

            const y = RADIUS - Math.cos(rad) * RADIUS;

            return (
              <motion.div
                key={index}
                className="absolute"
                animate={{
                  x: x,
                  y: y,
                  rotate: angle,
                  rotateY: -angle * 0.8,
                  scale: 1 - Math.abs(angle) / 150,
                }}
                transition={{
                  duration: 0,
                }}
                style={{
                  width: CARD_WIDTH,
                  height: CARD_HEIGHT,
                  left: "50%",
                  top: 20,
                  marginLeft: -CARD_WIDTH / 2,
                  transformOrigin: "center bottom",
                }}
              >
                <video
                  src={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full rounded-xl object-cover"
                />
              </motion.div>
            );
          })}
        </div>
        <div>
          Agar ye bhi kam pad jae to tumhare saath building prr chadh jaunga.
          Frr tu bhi mana nahi krr paegii
        </div>
        <div className="space-y-5">
          <div className="h-[250px] flex items-center overflow-hidden rounded-md">
            {" "}
            <img src="/empire.png" alt="" />{" "}
          </div>{" "}
          <div className="w-full flex    gap-4 ">
            <div className="h-[150px] flex items-center overflow-hidden rounded-md">
              {" "}
              <img src="/prop.jpg" alt="" />{" "}
            </div>{" "}
            <div className="h-[150px] flex items-center overflow-hidden rounded-md">
              {" "}
              <img src="/ring.jpg" alt="" />{" "}
            </div>{" "}
          </div>
          <div className="h-[250px] flex items-center overflow-hidden rounded-md">
            {" "}
            <video
              src={"/climb.mp4"}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full rounded-xl object-cover"
            />
          </div>{" "}
        </div>
        <div>Neha,</div>
        <div>I wanna hold your hands.</div>{" "}
        <div>I wanna see your eyes for endless time.</div> <div></div>{" "}
        <div></div> <div>I wanna hear your lovely voice .</div>
        <div>I wanna hug you tightly like never before.</div>{" "}
        <div>
          I wanna put your hairs behind your ears whenever they messed up.
        </div>{" "}
        <div>I am not a good chef but i wanna make food for you.</div>{" "}
        <div>Then i wanna feed you with my hands.</div>{" "}
        <div>And most important</div>
        <div>I wanna be successful with you.</div>
      </div>
    </div>
  );
};

export default Khat;
