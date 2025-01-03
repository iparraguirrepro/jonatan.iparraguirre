import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { WhatsApp } from "@/components/whatsapp";
import { DATA } from "@/data/data";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-2xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none"
                yOffset={8}
                text={`Hola, soy ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrlDark} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-2xl font-bold">Sobre mi</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-2xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>

        <div className="flex min-h-0 flex-col gap-y-3 mt-4">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-sm font-bold">Cloud</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.cloud.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>

        <div className="flex min-h-0 flex-col gap-y-3 mt-4">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-sm font-bold">Otros conocimientos:</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.learning.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="resume">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="space-y-3">
              <h3 className="text-2xl block font-bold tracking-tighter sm:text-3xl">
                Descarga mi{" "}
                <Link
                  href="/CV-JONATAN 2024_DESARROLLADOR.pdf"
                  target="_blank"
                  className="text-blue-500 underline sm:no-underline hover:underline"
                >
                  perfil en PDF
                </Link>
              </h3>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="projects">
        <div className="-mt-4 space-y-12 w-full py-11">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm select-none">
                  Mi experiencia
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Te muestro mis últimas 4 experiencias
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Durante mi experiencia he participado de proyectos con gran
                  alcance y un alto impacto, desarrollando tanto frontend como
                  backend.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 11 + id * 0.05}
              >
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  active={!id}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12 mb-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Hagamos Contacto
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                ¿Buscas un desarrollador de software?
                <Link
                  href={DATA.WhatsApp.url}
                  target="_blank"
                  className="text-blue-500 font-bold border-b border-white pb-0.5 ml-2"
                >
                  Contrátame
                </Link>
                .
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      <WhatsApp />
    </main>
  );
}
