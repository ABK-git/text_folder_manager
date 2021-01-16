import React from "react";
import reactStringReplace from "react-string-replace";
import { useLocation } from "react-router-dom";
//styles
import {ChangeString} from "./test_component.styles";

const TestPage = () => {
    //locationを取得
    const location = useLocation();
    //行ごとに分割する
    const splitLine = location.state.creating_text.split("\n");

    //{}で囲まれた文字列を取り出す正規表現
    const regExp = /{(.*?)}/g;

    return (
        <div>
            {splitLine.map((line, index) => {
                //文字がない行の場合
                if (line === "") {
                    //改行だけする
                    return <br key={index} />;
                }

                return (
                    <p key={index}>
                        {reactStringReplace(line, regExp, (match, i) => (
                            <ChangeString key={i} name={match}>{match}</ChangeString>
                        ))}
                    </p>
                );
            })}
        </div>
    );
};

export default TestPage;
