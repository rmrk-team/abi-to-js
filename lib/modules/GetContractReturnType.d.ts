import { Abi, AbiFunction, AbiParametersToPrimitiveTypes, AbiParameterToPrimitiveType, ExtractAbiFunction } from 'abitype';
export type GetContractReturnType<TAbi extends Abi | readonly unknown[] = Abi, TFunctionName extends string = string, TAbiFunction extends AbiFunction & {
    type: 'function';
} = TAbi extends Abi ? ExtractAbiFunction<TAbi, TFunctionName> : AbiFunction & {
    type: 'function';
}, TArgs = AbiParametersToPrimitiveTypes<TAbiFunction['outputs']>, FailedToParseArgs = ([TArgs] extends [never] ? true : false) | (readonly unknown[] extends TArgs ? true : false)> = true extends FailedToParseArgs ? unknown : TArgs extends readonly [] ? void : TArgs extends readonly [infer Arg] ? Arg : TArgs & {
    [Output in TAbiFunction['outputs'][number] as Output extends {
        name: infer Name extends string;
    } ? Name extends '' ? never : Name : never]: AbiParameterToPrimitiveType<Output>;
};
