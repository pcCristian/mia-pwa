import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-white text-gray-800 dark:bg-neutral-900 dark:text-white font-sans min-h-screen flex flex-col">
      <header className="p-6 flex justify-between items-center shadow">
        <h1 className="text-xl font-bold">ArtiLocal</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Prodotti</a>
          <a href="#" className="hover:underline">Contatti</a>
        </nav>
      </header>

      <section className="relative bg-cover bg-center h-[60vh]" style={{ backgroundImage: "url('/images/laboratorio.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center p-6">
          <motion.h2
            className="text-4xl font-serif mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Maria Rossi – Ceramiche Artigianali di Modena
          </motion.h2>
          <p className="max-w-xl text-lg">Dall’argilla alle tue mani, ogni pezzo racconta una storia.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto p-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-8 items-center"
        >
          <img src="/images/maria.jpg" alt="Maria" className="w-40 h-40 rounded-full object-cover shadow-lg" />
          <div>
            <h3 className="text-2xl font-bold mb-2">Chi sono</h3>
            <p>
              Lavoro la ceramica da oltre 20 anni. Ogni creazione è unica e nasce nel mio laboratorio di Modena.
              Credo nella bellezza dell'imperfezione e nella forza della tradizione.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="bg-neutral-100 dark:bg-neutral-800 p-8 flex-grow">
        <h3 className="text-2xl font-bold text-center mb-6">Prodotti in evidenza</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[1,2,3].map((item) => (
            <motion.div
              key={item}
              className="bg-white dark:bg-neutral-700 rounded-xl shadow-md overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.03 }}
            >
              <img src={`/images/prodotto${item}.jpg`} alt={`Prodotto ${item}`} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold">Ciotola decorata #{item}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">€45</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="p-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2025 ArtiLocal – Made with ❤️ in Emilia-Romagna
      </footer>
    </div>
  );
}