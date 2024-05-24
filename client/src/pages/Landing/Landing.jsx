import { Helmet } from "react-helmet-async";
import Title from "../../components/Landing/Title";
import OurCourses from "../../components/Landing/OurCourses";
import WhyPromptTheFuture from "../../components/Landing/WhyPromptTheFuture";
import Hackathons from "../../components/Landing/Hackathons";
import FrequentQuestions from "../../components/Landing/FrequentQuestions";

const Landing = () => {
  return (
    <>
      <Helmet>
        <title>Inicio | Prompt The Future</title>
        <meta
          name="description"
          content="Bienvenidos a Prompt The Future, la plataforma líder en educación y eventos de Inteligencia Artificial. Descubre nuestros cursos de IA, participa en hackathons, y resuelve tus dudas con nuestras preguntas frecuentes."
        />
        <meta
          name="keywords"
          content="Prompt The Future, cursos de IA, hackathons, preguntas frecuentes, educación en IA, eventos tecnológicos, plataforma de IA"
        />
      </Helmet>
      <Title />
      <OurCourses />
      <WhyPromptTheFuture />
      <Hackathons />
      <FrequentQuestions />
    </>
  );
};

export default Landing;
