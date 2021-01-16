import React from "react";
import { useLocation } from "react-router-dom";
//component
import Line from "../../components/line/line.component";

const TestPage = () => {
    //locationを取得
    const location = useLocation();
    //行ごとに分割する
    const splitLine = location.state.creating_text.split("\n");

    return (
        <div>
            {splitLine.map((line, index) => {
                //文字がない行の場合
                if (line === "") {
                    //改行だけする
                    return <br key={index} />;
                }

                return <Line key={index}>{line}</Line>
            })}
        </div>
    );
};

export default TestPage;
