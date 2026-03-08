import { useState } from "react";
import { Heart } from "react-feather";
import HeartsBackground from "./HeartsBackground";
import { motion } from "framer-motion";
import TimeTogether from "./TimeTogether";

const moments = [
  {
    title: "Quando tudo começou",
    text: "O dia em que eu percebi que não poderia deixar essa pessoa maravilhosa sair da minha vida.",
    image: "/dia-das-mulheres/foto1.jpeg",
  },
  {
    title: "Alguem que não percebe o quanto é incrível!",
    text: "Uma mulher forte, corajosa, guerreira e de coração ENORME!",
    image: "/dia-das-mulheres/foto4.webp",
  },
  {
    title: "Mudou a minha pra melhor de tantas maneiras",
    text: "Sua alegria contagiante e capacidade de me entender como ninguém me fez perceber que ao seu lado é o meu lugar..",
    image: "/dia-das-mulheres/foto5.webp",
  },
  {
    title: "Você é muito mais importante do que imagina",
    text: "Sua vida é muito valiosa para todos que estão ao seu redor, eu e o Neneji te amamos muito!!",
    image: "/dia-das-mulheres/foto6.webp",
  },
  {
    title: "Hoje",
    text:
      <p className="text-white text-lg mb-6">
        <TimeTogether />
      </p>,
    image: "/foto3.jpg",
  },
];

export default function App() {
  const [step, setStep] = useState(-1);

  const next = () => setStep((prev) => prev + 1);

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-6">
      <motion.div
        key={step}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeartsBackground />
        <div className="w-full max-w-md text-center">
          {step === -1 && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <Heart className="text-pink-500 mx-auto mb-4" size={48} />

              <h1 className="text-4xl font-bold text-pink-600 mb-4">
                Meu amor
              </h1>

              <p className="text-gray-600 mb-6">
                Preparei algo simples, mas de todo o coração.
              </p>

              <button
                onClick={next}
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl shadow transition"
              >
                Começar
              </button>
            </div>
          )}

          {step >= 0 && step < moments.length && (
            <div
              className="h-screen w-screen flex items-center justify-center bg-cover bg-center bg-gray-900/60 backdrop-blur-md rounded-2xl shadow-xl p-8 max-w-md text-center text-white"
              style={{
                backgroundImage: `url(${moments[step].image})`,
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 max-w-md text-center">
                <h2 className="text-2xl font-semibold text-pink-600 mb-2">
                  {moments[step].title}
                </h2>

                <p className="text-gray-700 mb-6">
                  {moments[step].text}
                </p>

                <button
                  onClick={next}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl"
                >
                  Próximo
                </button>
              </div>
            </div>
          )}

          {step >= moments.length && (
            <div
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <Heart className="text-pink-500 mx-auto mb-4" size={48} />

              <h1 className="text-4xl font-bold text-pink-600 mb-4">
                Feliz Dia das Mulheres
              </h1>

              <span className="text-4xl font-bold text-pink-600 mb-4">
                Obrigado por caminhar comigo todos os dias.
                Você faz minha vida melhor.
              </span>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}