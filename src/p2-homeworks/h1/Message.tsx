import React from 'react'
import messCSS from "./Message.module.css"

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div>
            <div className={messCSS.message}>
                <div className={messCSS.messageImgContainer}>
                    <img src={props.avatar} alt=""/>
                </div>
                <div className={messCSS.messageInfo}>
                    <div className={messCSS.messageInfoName}>{props.name}</div>
                    <div className={messCSS.messInfoContainer}>
                        <div className={messCSS.messageInfoMessage}>{props.message}</div>
                        <div className={messCSS.messageInfoTime}>{props.time}</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Message
