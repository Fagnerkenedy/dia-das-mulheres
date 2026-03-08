import { useEffect, useState } from "react";
import calculateTime from "./calculateTime";

export default function TimeTogether() {
    const startDate = "2024-10-22T00:00:00";

    const [time, setTime] = useState(() => calculateTime(startDate));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(calculateTime(startDate));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-center">
            <p>Já estamos juntos há:</p>
            <p className="text-white text-lg">
                {time.years} ano, {time.months} meses, {time.days} dias,
                {" "}{time.hours} horas, {time.minutes} minutos e {time.seconds}s
            </p>
            <p>
                E é só o começo da nossa história..
            </p>
            <p>
                Quero viver pra sempre ao seu lado!
            </p>
            <p>
                Te amo! ❤️
            </p>
        </div>
    );
}