module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.body.userName ?? 'userName not provided');
    const responseMessage = 'Api hit'
        context.bindings.outputBlob = name + 'Thanks for using the function app'

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {message: responseMessage}
    };
}