import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useState, useEffect, useRef } from "react";

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
  const audioRef = useRef(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // or "auto"
    });
  }, []);

  useEffect(() => {
    // Attempt autoplay immediately
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log(
          "Autoplay blocked by browser. Music will play after user interaction.",
          err,
        );
      });
    }

    // Play on first user interaction anywhere if autoplay was blocked
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .catch((err) => console.log("Play on click failed:", err));
      }
      window.removeEventListener("click", playAudio);
    };
    window.addEventListener("click", playAudio);

    return () => {
      window.removeEventListener("click", playAudio);
    };
  }, []);

  useAnimationFrame((_, delta) => {
    progress.set(progress.get() + delta * 0.00023); // speed
    forceUpdate((v) => v + 1);
  });

  const angleStep = (END_ANGLE - START_ANGLE) / (videos.length - 1);

  return (
    <div>
      <div className="dancing text-[30px] max-w-3xl text-center leading-8 text-xl md:text-2xl font-light  ">
        <div className=" bg-[url(/bgggp.jpg)] pt-10 px-4 ">
          <div className="px-4 text-[60px] leading-[60px] arvo">
            Ek khat tere naam❤️
          </div>{" "}
          <br />{" "}
          <div>
            Samaj nahi aara kaha se start karun🤔 mere lie bhaut hard hone wala
            hai. Chll mei tumhe ek example se smjhata hun like tu jab bhi
            durgesh, divyanshu ya kisi aur ladke🧍🏻‍♂️ ka naam mention krti haii,
            mera dimaag khraab ho jaata haii, aadha dimag depression mei aur
            aadhe ka temper high ho jaata haiii.
          </div>
          <div className="w-full h-[200px] flex justify-center items-center overflow-hidden rounded-md mt-5">
            {" "}
            <img
              src="angry.gif"
              className="relative z-20 mx-auto h-96 object-contain"
            />{" "}
          </div>
          <div className="mt-5">
            {" "}
            Bhaut gandi walii jaleousy hoti hai🔥🔥... uss time bss yahii sochta
            hun kab ye topic change hoga.{" "}
          </div>{" "}
        </div>
        <div className=" bg-[url(/bgggp.jpg)] bg- pt-10 px-4 ">
          <div>
            Mei bhi itna nadaan kabhi kuch bola hi nahi iss baare mei, bss haan
            mei haan milata gaya kabhi ye nahi bataya ki mujhe kaisa feel
            hora... kyuki mei tujhe khone se darta tha👀👀...tujhe itni baar
            khoya hai ab mere ander himmat nahi bachi ki tujhe ek aur baar kho
            saku💔. But meine bhi soch lia ab agr aise khone ke dar se to vo
            kabhi bol hi nahi paunga jo hamesha se bolna chahta tha{" "}
            <img src="catt.png" className="  inline h-10 w-10" />.
          </div>{" "}
          <div>
            Neha mujhe tu bhaut bhaut bhautt achi lagti hai❤️❤️❤️. Mujhe koi
            interest nahi sirf tera dost bane rehne mei.{" "}
            <img src="catno.gif" className="  inline h-10 w-10 mb-4" />. Mei vo
            tere lie sb krna chata hun jisse tujhe khush dekh sakun😇😇. Mujhe
            tere saath comfortable rehna hai jisse mei jab chahun jo chaahun vo
            bol saku, jab bhi tujhe kuch bolta hun bhaut jyada soch mei pad
            jaata hun
            <img src="thinkk.gif" className="  inline h-10 w-10 mb-4" />, maybe
            tumhe vo baat pasand aaegi ya nahi aur uss chakkar mei sab kharaab
            kar deta hun. I overthink too much...tum agr sirf plain sa ‘gd mrng’
            text kroge to bss yahi sochte reh jaunga aaj iska mood theek nahii
            hai aur mere dimaag me vo cheej chlti rahegi.{" "}
            <img src="rip.gif" className="  inline h-10 w-10 mb-4" />{" "}
          </div>{" "}
        </div>
        <div className=" bg-[url(/bgggp.jpg)] bg- pt-10 px-4 ">
          {" "}
          <div>
            Neha, tuhme kabhi bhi life mei problem hoti hai ya kabhi koi help
            chahiye hoti hai to haq jata ke bola krr ye mtt{" "}
            <img src="catno.gif" className="  inline h-10 w-10 mb-4" /> socha
            krr ki mujhe kuch burden padega ya nahi.I know Tujhe khud se sab
            karne ki aadat hai and tujhe kisi ka support lena psnd nahi haii.
            <div className="w-[100px] mx-auto h-[100px] flex justify-center items-center overflow-hidden rounded-md mt-5">
              {" "}
              <img
                src="blabla.gif"
                className="relative z-20 mx-auto h-96 object-contain"
              />{" "}
            </div>
            But mujhe tere lie karna acha lagta hai ❤️❤️ and koi bhi situatuion
            ho no matter what i will always come for you. Ab mujhe dimaag se
            nahi sirf dil se chalna hai❤️.
          </div>{" "}
          <div className="mt-5">
            Tumhe ek baat batata hun, jab bhi collage mei humari ladai{" "}
            <img src="fight.png" className="mb-3  inline h-10 w-10" /> hoti thi
            hum ek doosre se baat nahi krte the...prr meri nigahein👀👀 sirf
            terpe rehti thi...yahi dekhta rehta tha tum kaha ho kiske saath ho
            kya krr rahi haii...teri har ek harqat prr nazar rehti thi, aur
            bhyii ye ladkii ye nahi ki ek baar idhar bhi dekh le ki koi teri
            nazar ke lie taras raha ho.
          </div>
          <div className="w-[100px] mx-auto h-[100px] flex justify-center items-center overflow-hidden rounded-md mb-5">
            {" "}
            <img
              src="beg.gif"
              className="relative z-20 mx-auto h-96 object-contain"
            />{" "}
          </div>
          <div>
            Mera aaj bhi kabhi kabhi man krta hai ki tumse thodi bhout choti
            moti fights to hoti rehni chahiye😅😅. Prr tumhe gussa itna jyada aa
            jaata hai ki devi parvati ka bhi krodhh kam lagne lagta hai.
            <div className="w-[100px] mx-auto h-[100px] flex justify-center items-center overflow-hidden rounded-md my-5">
              {" "}
              <img
                src="angs.gif"
                className="relative z-20 mx-auto h-96 object-contain"
              />{" "}
            </div>
            Manta hun gussa hona tera haq hai prr itna gussa nahi ki cheejein
            theek karne mei 1 saal lag jaye😓😓.
          </div>{" "}
        </div>
        <div className="bg-[url(/bgggp.jpg)] bg-center bg-cover px-4 pt-6">
          <div>
            {" "}
            Meine 7 saal wait kia ⏰ prr ab mujhe 7 janam tere saath rehna
            hai🤝🏻.
            <br />
            Khush bhi tumhare saath😊,
            <br /> Udaas bhi tumhare saath😓, <br />
            Hasna bhi tumhare saath😂, <br />
            Rona bhi tumhare saath😭. <br />
            Har ek cheej tumse share karni haii❤️❤️.{" "}
          </div>{" "}
          <div>
            Jahan bhi jaana hai tumhare saath jaana hai.
            <div className="w-full h-[200px] flex justify-center items-center overflow-hidden rounded-md my-5">
              {" "}
              <img
                src="holdd.jpeg"
                className="relative z-20 mx-auto h-96 object-contain"
              />{" "}
            </div>{" "}
            Tumhara haath pakad krr ek trek kia hai abhi hazaaron aur trek Karne
            baaki hai. Dekh tere bhai ka fikar karna banta haii But agli baar
            advance mei bol dunga, trek karne jaa rahe hai pahadon prr⛰️ koi
            plane🛩️ se nahi jaare, to thakna to pakka hai🛌🏻,aur dekh yrr
            photographer thoda bura hun prr seekh jaunga dheere dheere😅😅 neha
            chahe kitni bhi difficult situation aa jaye i will always keep you
            safe❤️❤️.
          </div>{" "}
          <div className="text-black pt-7">
            Bhaut ho gya yrr...meine tujhe door se bhaut dekh lia...ab tumhe
            pass se janna hai. Mujhe aisi zindagi jeeni hai tere saath❤️❤️❤️❤️.
          </div>
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
                  className="absolute shadow-2xl"
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
        </div>
        <div className="bg-black p-4">
          <div className="fjalla text-[72px] leading-[80px] font-bold text-start text-white">
            Agar ye bhi kam pad jae to tumhare saath building prr chadh jaunga.
            Frr tu bhi mana nahi krr paegii
          </div>
          <div className="space-y-5 mt-5">
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
        </div>
        <div className="bg-[url(/bgggp.jpg)] bg-center bg-cover px-4 py-5">
          <div className="fjalla text-start  ">
            Hahaha, Thoda jyada filmy ho gya na? 😂, well ye filmo jaisi hi
            chaiye tumhe.
          </div>
          <div className="mt-5">Neha❤️,</div>
          <div>I wanna hold your hands.</div>{" "}
          <div className="w-[100px] mx-auto h-[100px] flex justify-center items-center overflow-hidden rounded-md mt-5">
            {" "}
            <img
              src="hand.gif"
              className="relative z-20 mx-auto h-96 object-contain"
            />{" "}
          </div>
          <div>I wanna see your eyes for endless time.</div>
          <div className="w-full h-[100px] mb-6 flex justify-center items-center overflow-hidden rounded-md mt-5">
            {" "}
            <img
              src="eyess.jpeg"
              className="relative z-20 mx-auto h-96 object-contain"
            />{" "}
          </div>
          <div></div> <div>I wanna hear your lovely voice❤️ .</div>
          <div>I wanna hug you tightly like never before.</div>{" "}
          <div className="w-[200px] mx-auto h-[200px] flex justify-center items-center overflow-hidden rounded-md mt-5">
            {" "}
            <img
              src="bubu.gif"
              className="relative z-20 mx-auto h-96 object-contain"
            />{" "}
          </div>
          <div>
            I wanna put your hairs behind your ears whenever they messed up❤️❤️.
          </div>{" "}
          <div>I am not a good chef but i wanna make food for you.</div>{" "}
          <div className="w-[200px] mx-auto h-[200px] flex justify-center items-center overflow-hidden rounded-md mt-5">
            {" "}
            <img
              src="chefff.gif"
              className="relative z-20 mx-auto h-96 object-contain"
            />{" "}
          </div>
          <div>Then i wanna feed you with my hands.❤️</div>{" "}
          <div>And most important</div>
          <div>I wanna be successful with you.❤️❤️❤️</div>
        </div>
      </div>

      <div className="bg-[url(/herr.jpg)] text-white caveat text-center h-screen text-[50px] flex flex-col justify-center items-center gap-5">
        <div>Neha❤️</div>
        <div>I just want to say</div>
        <div className="-rotate-12 py-6">I love you ❤️❤️❤️</div>
        <div>Jaate Jaate ye gaana tere lie 😉</div>
        <audio ref={audioRef} controls autoPlay loop>
          <source src="/khattt.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default Khat;
