import React from "react";
import {ProjectCard} from "@/components/project-card";
import BlurFade from "@/components/magicui/blur-fade";
import {DATA} from "@/data/data";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

const page = () => {
    return (
        <section id="more_projects">
            <div className="-mt-12 space-y-12 w-full py-12">
                <BlurFade delay={BLUR_FADE_DELAY * 10}>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
                                Explora mis proyectos
                            </h2>
                            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Soy un desarrollador 100% autodidacta, he participado en proyectos de alto impacto
                                desarrollando tanto frontend como backend{" "}
                                <Link
                                    href={DATA.WhatsApp.url}
                                    target="_blank"
                                    className="text-blue-500 font-bold pb-0.5"
                                >
                                    Escríbeme por WhatsApp
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </BlurFade>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                    {DATA.more_projects.map((project, id) => (
                        <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 11 + id * 0.05}
                        >
                            <ProjectCard
                                href={project.href}
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                // video={project.video}
                                links={project.links}
                            />
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default page;
