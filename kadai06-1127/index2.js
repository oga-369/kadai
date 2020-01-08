const str1 = "abc"
const str2 = "'abc'"
const str3 = '"abc"'
const str4 = '{"a": undefined}'
const str5 = '{"a": 123}'
const str6 = '{a: 123}'

//str1 のパース結果
try{
    console.log(JSON.parse(str1))
} catch (error) {
    console.log(error)
　　// 正しくは'"abc"' 文字列は必ずダブルクーテーションで囲む必要がある。
}

//str2 のパース結果
try{
    console.log(JSON.parse(str2))
} catch (error) {
    console.log(error)
    //正しくは'"abc"' 文字列は必ずダブルクオーテーションで囲む必要がある。
}

//str3 のパース結果
try{
    console.log(JSON.parse(str3))
} catch (error) {
    console.log(error)
//正しい
}

//str4 のパース結果
try{
    console.log(JSON.parse(str4))
} catch (error) {
    console.log(error)
　//undefinedはJSONの値として使えない
}

//str5 のパース結果
try{
    console.log(JSON.parse(str5))
} catch (error) {
    console.log(error)
　//正しい
}

//str6 のパース結果
try{
    console.log(JSON.parse(str6))
} catch (error) {
    console.log(error)
　//正しくは'{"a": 123}'
}

