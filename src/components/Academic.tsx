import { motion } from "framer-motion";
import { GraduationCap, FlaskConical, Users, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Pesquisadores Ativos",
    description: "Colaboradores atuando diretamente em pesquisa acadêmica de IA",
  },
  {
    icon: FlaskConical,
    title: "Técnicas de Ponta",
    description: "Aplicação prática das mais recentes descobertas científicas",
  },
  {
    icon: Users,
    title: "Cocriação",
    description: "Parceria colaborativa do início ao fim do projeto",
  },
  {
    icon: Lightbulb,
    title: "Inovação Contínua",
    description: "Metodologias ágeis com foco em resultados mensuráveis",
  },
];

const Academic = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-3">
              Nosso Diferencial
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Integração profunda com a{" "}
              <span className="text-gradient">academia</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Na LapaLab, a fronteira entre pesquisa e aplicação é tênue. 
              Grande parte de nossa equipe atua diretamente em pesquisas acadêmicas 
              de inteligência artificial, o que nos permite trazer técnicas e 
              abordagens de ponta para cada projeto.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Isso significa que você não recebe apenas uma solução — você recebe 
              uma solução construída com o que há de mais avançado no campo da IA.
            </p>
          </motion.div>

          {/* Right grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="glass p-6 rounded-xl hover:border-primary/30 transition-colors"
              >
                <item.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Academic;