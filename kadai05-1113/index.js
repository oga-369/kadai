    const profile = {
        firstName: 'Jiro',
        familyName: 'Sato',
        age: 49,
        hobby: 'baseball',
        job: 'actor',

    };

const keys = Object.keys(profile);

for (let i = 0; i < keys.length; i = i+ 1){
    const key = keys[i];
    const value = profile[key];
    const text = "私の" + key + "は、" + value + "です。" ;
    console.log(text);
}