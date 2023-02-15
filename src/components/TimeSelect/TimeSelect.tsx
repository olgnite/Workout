import { FC, SelectHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { IWorkout } from "../../types/interfaces";
import { rangeTimeData } from "../constData";
import styles from './TimeSelect.module.scss';


interface IRegisterProps extends SelectHTMLAttributes<HTMLSelectElement> {
    register: UseFormRegister<IWorkout>;
}

const TimeSelect: FC<IRegisterProps> = ({ register }) => {

    return (
        <>
            <select
                className={styles.minutesSelect}
                {...register('time.minutes')}
            >
                <option value={0}>Minutes</option>
                {rangeTimeData.map((v: number, i: number) =>
                    <option
                        key={'__keyMinutes__' + i}
                        value={v}
                    >
                        {v}
                    </option>
                )}
            </select>
            <select
                className={styles.secondsSelect}
                {...register('time.seconds')}
            >
                <option value={0}>Seconds</option>
                {rangeTimeData.map((v: number, i: number) =>
                    <option
                        key={'__keySeconds__' + i}
                        value={v}
                    >
                        {v}
                    </option>
                )}
            </select>
        </>
    )
}
export default TimeSelect;