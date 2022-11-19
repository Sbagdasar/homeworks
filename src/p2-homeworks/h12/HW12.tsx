import React, {useEffect} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC, InitialStateType, ThemesType} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'default'];

function HW12() {
    const theme = useSelector<AppStoreType, ThemesType>(state => state.theme.theme)
    const dispatch = useDispatch()
    const onChangeCallback = (theme: ThemesType) => {
        dispatch(changeThemeC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <div>
                <SuperSelect options={themes}
                             value={theme}
                             onChangeOption={onChangeCallback}/>
            </div>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
