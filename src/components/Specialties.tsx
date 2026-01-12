import { motion } from "framer-motion";
import { Brain, Eye, Gamepad2 } from "lucide-react";

const specialties = [
  {
    icon: Brain,
    title: "Agentes & LLMs",
    description:
      "Desenvolvemos sistemas baseados em agentes integrados a Large Language Models, criando soluções inteligentes e conversacionais.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Aplicamos técnicas avançadas de visão computacional para análise de imagens, detecção de objetos e reconhecimento de padrões.",
  },
  {
    icon: Gamepad2,
    title: "Reinforcement Learning",
    description:
      "Criamos agentes autônomos que aprendem através de interação, otimizando decisões em ambientes complexos e dinâmicos.",
  },
];

const Specialties = () => {
  return (
    <section className="py-24 bg-background relative">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-3">
            Especialidades
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Tecnologias que dominamos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nossa equipe combina experiência prática com pesquisa de ponta para entregar soluções inovadoras.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="bg-gradient-card p-8 rounded-2xl border border-border h-full transition-all duration-300 hover:border-primary/50 hover:glow-soft">
                {/* Icon container */}
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 glow-soft">
                  <specialty.icon className="h-7 w-7 text-primary-foreground" />
                </div>

                <h3 className="font-display text-xl font-semibold mb-3">
                  {specialty.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {specialty.description}
                </p>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;