import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import Link from 'next/link';
import { useState } from 'react';
import ADD_SIGN from '../lib/apollo/queries/addSign';

function NewSign(){
    const router = useRouter();
    const [formState, setFormState] = useState({});
    const [addSign] = useMutation(ADD_SIGN, {
        onCompleted(){
            router.push("/");
        },
    });
    const handleInput = ({e, name}) => {
        setFormState({
            ...formState,
            [name]: e.target.value,
        });
};
return (
    <div>
        <h2>Sign in</h2>
        <div>
            <label htmlFor="nickname">nickname</label>
            <input id="nickname" type="text" 
            onChange={(e) => handleInput({e,name:'nickname'})}
            placeholder="Twoje imie"></input>
        </div>
        <div>
            <label htmlFor="content">Zostaw wiadomość</label>
            <textarea id="content"
            onChange={(e) => handleInput({e,name:'content'})}
            placeholder="Zostaw wiadomość"></textarea>
        </div>
        <div>
            <label htmlFor="country">country</label>
            <input id="country" type="text" 
            onChange={(e) => handleInput({e,name:'country'})}
            placeholder="Kraj"></input>
        </div>
        <div>
            <button onClick={() => addSign({variables: formState})}>Wyślij</button>
        </div>
        <Link href="/" passHref><a>Powrót do strony głównej</a></Link>
    </div>
);
}
export default NewSign;