import { FC, SelectHTMLAttributes, useEffect } from "react";
import { UseFormRegister } from "react-hook-form";
import { IWorkout } from "../../types/interfaces";
import { rangeTimeData } from "../constData";
import styles from './TimeSelect.module.scss';


interface IRegisterProps extends SelectHTMLAttributes<HTMLSelectElement> {
    register: UseFormRegister<IWorkout>;
    controlName: keyof IWorkout;
    labelSelect: string;
}

const TimeSelect: FC<IRegisterProps> = ({ register, controlName, labelSelect }) => {

    return (
        <>
            <select
                className={styles.minutesSelect}
                {...register(controlName)}
            >
                <option value={0}>{labelSelect}</option>
                {rangeTimeData.map((v: number, i: number) =>
                    <option
                        key={'__keyMinutes__' + i}
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