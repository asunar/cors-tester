exports.lambdaHandler = async (event, context) => {

    const response = {
        'statusCode': 200,
        'body': JSON.stringify({ message: 'hello world 1'})
        , "headers": { 
            "access-control-allow-origin": "https://obedient-duck.surge.sh",
            "access-control-allow-headers": "x-my-auth-token"
        }
    }


    return response
};
