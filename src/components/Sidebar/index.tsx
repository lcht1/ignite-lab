import { gql, useQuery } from "@apollo/client";
import Lesson from "../Lesson";

const GET_LESSONS_QUERY = gql`
    query {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
            id
            lessonType
            availableAt
            slug
            title
        }
    }
`;

interface getLessonsQueryResponse {
    lessons: {
        id: string;
        title: string;
        slug: string;
        availableAt: Date;
        lessonType: "live" | "class";
    }[];
}
export default function Sidebar() {
    const { data } = useQuery<getLessonsQueryResponse>(GET_LESSONS_QUERY);

    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray- block">
                Cronograma das aulas
            </span>

            <div className="flex flex-col gap-8">
                {data?.lessons.map((lesson) => {
                    return (
                        <Lesson
                            key={lesson.id}
                            title={lesson.title}
                            availableAt={new Date(lesson.availableAt)}
                            slug={lesson.slug}
                            type={lesson.lessonType}
                        />
                    );
                })}
                {/* <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson /> */}
            </div>
        </aside>
    );
}
