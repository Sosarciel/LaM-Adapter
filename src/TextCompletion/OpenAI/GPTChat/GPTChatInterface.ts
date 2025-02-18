import { assertType } from '@zwa73/utils';
import { TextCompleteionModelData } from '@/TextCompletion/TextCompletionDrive';

const OpenAIChatModelDataBase = {
    /**此模型api的标准路径 */
    endpoint:'/v1/chat/completions',
    chat_formater:'openai_chat',
    tokensizer:'cl100k_base',
    request_formater:'openai',
} as const;

export const GPT4 = {
    ...OpenAIChatModelDataBase,
    id:'gpt-4',
    alias:'GPT4',
    price:{
        promptPrice:0.03,
        completionPrice:0.06
    },
    valid_account:['EylinkAz','Eylink4','Gptge','Gptus'],
} as const;
export type GPT4 = typeof GPT4;
assertType<TextCompleteionModelData>(GPT4);

export const GPT4Chat = {
    ...OpenAIChatModelDataBase,
    id:'gpt-4-turbo',
    alias:'GPT4Chat',
    price:{
        promptPrice:0.01,
        completionPrice:0.03
    },
    valid_account:['EylinkAz','Eylink4','Gptge','Gptus'],
} as const;
export type GPT4Chat = typeof GPT4Chat;
assertType<TextCompleteionModelData>(GPT4Chat);

export const GPT4O = {
    ...OpenAIChatModelDataBase,
    id:'gpt-4o',
    alias:'GPT4O',
    price:{
        promptPrice:0.005,
        completionPrice:0.015
    },
    valid_account:['EylinkAz','Eylink4','Gptge','Gptus'],
} as const;
export type GPT4O = typeof GPT4O;
assertType<TextCompleteionModelData>(GPT4O);

export const GPT4OMini = {
    ...OpenAIChatModelDataBase,
    id:'gpt-4o-mini',
    alias:'GPT4OMini',
    price:{
        promptPrice:0.00015,
        completionPrice:0.0006
    },
    valid_account:['EylinkAz','Eylink4','Gptge','Gptus'],
} as const;
export type GPT4OMini = typeof GPT4OMini;
assertType<TextCompleteionModelData>(GPT4OMini);

export const GPT35Chat = {
    ...OpenAIChatModelDataBase,
    id:'gpt-3.5-turbo',
    alias:'GPT35Chat',
    price:{
        promptPrice:0.0005,
        completionPrice:0.0015
    },
    valid_account:['EylinkAz','Eylink4','Gptge','Gptus'],
} as const;
export type GPT35Chat = typeof GPT35Chat;
assertType<TextCompleteionModelData>(GPT35Chat);

export type OpenAIChatModelData =  GPT4 | GPT4Chat | GPT4O | GPT4OMini | GPT35Chat;
export type OpenAIChatModel =  OpenAIChatModelData['id'];