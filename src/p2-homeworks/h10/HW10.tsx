import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {AppStoreType} from "./bll/store";
import {loadingAC, StateType} from "./bll/loadingReducer";
import {useDispatch, useSelector} from "react-redux";
import s from './HW10.module.css'

function HW10() {
    // useSelector, useDispatch

    const loading = useSelector<AppStoreType, StateType>(state => state.loading)
    const dispatch = useDispatch()
    const setLoading = () => {

        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading.isLoading
                ? (
                    <div className={s.loader}></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
