import { CheckCircle, Lock } from "phosphor-react";

import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: "live" | "class";
}
export default function Lesson(props: LessonProps) {
    const { slug } = useParams<{ slug: string }>();
    const isLessonAvailableAt = isPast(props.availableAt);
    const formattedAvailabeDate = format(
        props.availableAt,
        "EEEE' • 'd 'de 'MMMM' • 'k'h'mm",
        {
            locale: ptBR,
        }
    );

    const isActiveLesson = slug === props.slug;
    return (
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-gray-300">{formattedAvailabeDate}</span>

            <div
                className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-300 ${
                    isActiveLesson ? "bg-green-500" : ""
                }`}
            >
                <header className="flex items-center justify-between">
                    {isLessonAvailableAt ? (
                        <span
                            className={`text-sm  font-medium flex items-center gap-2 ${
                                isActiveLesson ? "text-white" : "text-blue-500"
                            }`}
                        >
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className="text-sm  font-medium flex items-center gap-2  text-orange-500">
                            <Lock size={20} />
                            Em breve
                        </span>
                    )}
                    <span
                        className={`text-xs rounded px-2.5 py-[2px] text-white border font-bold ${
                            isActiveLesson
                                ? "border-white "
                                : "border-green-300 "
                        } `}
                    >
                        {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
                    </span>
                </header>

                <strong
                    className={` ${
                        isActiveLesson
                            ? "text-white"
                            : "text-gray-200 mt-5 block"
                    }`}
                >
                    {props.title}
                </strong>
            </div>
        </Link>
    );
}
