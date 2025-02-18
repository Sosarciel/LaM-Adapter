import { SLogger, UtilFunc } from "@zwa73/utils";
import { getTokensizer } from "@/src/Tokensize";
import { ChatTaskOption, LaMChatMessages, MessageType } from "./ChatTaskInterface";
import { LaMInterface } from "@/src/LaMInterface";
import { AnyOpenAITextRespFormat } from "./OpenAI/Resp";
import { OpenAITextAPITextAPIResp } from "APITool";





/**测试模型 */
export class TestModule implements LaMInterface{
    async chat(options:ChatTaskOption){
        SLogger.http(options);
        const resp:AnyOpenAITextRespFormat = {
            "choices": [{
                "finish_reason": "stop",
                "index": 0,
                "logprobs": null,
                "text": `test time ${UtilFunc.getTime()}`
            }],
            "created": 1737376418,
            "id": "cmpl-ArlGEsDLJx7IJeeCynsgqAnVju4zt",
            "model": "gpt-3.5-turbo-instruct" as any,
            "object": "text_completion",
            "usage": {"completion_tokens":4248,"prompt_tokens":1849,"total_tokens":6097}
        };
        const result = {
            completed:new OpenAITextAPITextAPIResp(resp),
            pending:[]
        };
        return result;//DefChatLaMResult;
    }
    async isRuning(){return true;}
    async getData(){return {};}
    async calcToken(messageList: LaMChatMessages): Promise<number> {
        let ntext:string="";
        for(const item of messageList){
            ntext=item.type==MessageType.DESC
            ? `${ntext}\n${item.content}`
            : `${ntext}\n${item.name}:${item.content}`;
        }
        const turboMessage = ntext.trim();
        return (await this.encodeToken(turboMessage)).length;
    }
    async encodeToken(str: string) {
        return getTokensizer("cl100k_base").encode(str);
    }
    async decodeToken(arr: number[]) {
        return getTokensizer("cl100k_base").decode(arr);
    }
}