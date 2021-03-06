import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../components/Logo";

import imgUrl from "../../../src/assets/code-mockup.png";

const CREATE_SUBSCRIBER_MUTATION = gql`
    mutation createSubscriber($name: String!, $email: String!) {
        createSubscriber(data: { name: $name, email: $email }) {
            id
        }
    }
`;

export function Subscribe() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const navigate = useNavigate();

    // o primeiro param é a funcao de mutacao e o segundo sao os dados que a funcao retorna (nesse caso o id)
    const [createSubscriber, { loading }] = useMutation(
        CREATE_SUBSCRIBER_MUTATION
    );

    async function handleSubscribe(e: FormEvent) {
        e.preventDefault();
        await createSubscriber({
            variables: {
                name,
                email,
            },
        });

        navigate("/event");
    }
    return (
        <div
            className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center 
        "
        >
            <div
                className="w-full max-w-[1000px] flex items-center justify-between mt-20 mx-auto gap-10
            medium:max-w-[700px]
            small:flex-col small:mt-0 small:gap-0
            
            "
            >
                <div className="max-w-[640px] small:p-8 flex flex-col justify-items text-center">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight ">
                        Construa uma{" "}
                        <strong className="text-blue-500">
                            {" "}
                            aplicação completa
                        </strong>
                        , do zero, com{" "}
                        <strong className="text-blue-500">React</strong>
                    </h1>

                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das
                        tecnologias mais utilizadas e com alta demanda para
                        acessar as melhores oportunidades do mercado.
                    </p>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded small: w-full mt-8">
                    <strong className="text-2sl mb-6 block">
                        Inscreva-se gratuitamente
                    </strong>

                    <form
                        onSubmit={handleSubscribe}
                        action=""
                        className="flex flex-col gap-2 w-full"
                    >
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text"
                            placeholder="Seu nome completo"
                            onChange={(e) => setName(e.target.value)}
                        />

                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="email"
                            placeholder="Digite seu email"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-small hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                            Garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>
            <img src={imgUrl} alt="" />
        </div>
    );
}
