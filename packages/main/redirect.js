function main() {
    return {
        headers: {
            location: process.env.REDIRECT_URL
        },
        statusCode: 302
    }
}
