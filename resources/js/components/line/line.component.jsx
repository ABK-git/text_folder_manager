import React from "react";
import reactStringReplace from "react-string-replace";
import { ChangeString } from "./line.styles";

const Line = ({ children }) => {
    //{}で囲まれた文字列
    const regExp = /{(.*?)}/g;

    //childrenの文字数を取得
    const length = children.length;

    let newChildren = children;
    
    //{}で囲まれた部分を切り出す
    const reg = newChildren.match(regExp);
    console.log(reg);

    return (
        <p>
            {reactStringReplace(children, regExp, (match, i) => (
                <ChangeString key={i}>
                    {match}
                </ChangeString>
            ))}
        </p>
    );
};

export default Line;
