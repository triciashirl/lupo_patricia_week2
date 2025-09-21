import{ useState, useEffect } from "react";


export default function Content(){
    const [count, setCount] = useState(0);
    const Addcount = () => {
          setCount(addcount => addcount+1);
    }
    const [isBool , setIsBool] = useState(true);

    const ifBool = () => {
        return isBool ? (
            <>
                <p>Bool is True</p>
            </>
        ): (
            <>
                <p>Bool is False</p>
            </>
        )
    }

                const [timer , setTimer] = useState(0);

                useEffect(() => {
                    setTimeout (() => {
                    setTimer((timer) => timer +1);

                    }, 1000);

                });
  return (
    <>
        <h1>Content Page</h1>
        <h2> Counter: {count} </h2>
        <h2>Timer: {timer} </h2>
        <button onClick={Addcount}>Add count</button>
        <button onClick={() => setIsBool ((isTrue) => !isTrue) }>Bool Button</button>
        {ifBool()}
    </>
  );
}