const { table, getHighScores } = require('./utils/airtable');

exports.handler = async (event) => {
    console.log(event)
        if (event.httpMethod !== 'POST') {
            return {
                statusCode: 405,
                body: JSON.stringify({
                    msg: 'Method Not Allowed'
                })
            }
        }
        const { score, name } = JSON.parse(event.body);
        if (typeof score === 'undefined' || !name) {
            return {
                statusCode: 405,
                body: JSON.stringify({ err: 'Bad request' }),
            };
        }

        try {
            const records = await getHighScores(false);
            const lowestRecord = records[9];
            if (typeof lowestRecord === 'undefined') {
                return {
                    statusCode: 200,
                    body: JSON.stringify({}),
                };
            }
            if (
                typeof lowestRecord.fields.score === 'undefined' ||
                score > lowestRecord.fields.score
            ) {
                //update this record with the incoming score
                const updatedRecord = {
                    id: lowestRecord.id,
                    fields: { name, score },
                };
                await table.update([updatedRecord]);
                return {
                    statusCode: 200,
                    body: JSON.stringify(updatedRecord),
                };
            } else {
                return {
                    statusCode: 200,
                    body: JSON.stringify({}),
                };
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: JSON.stringify({
                    msg: error
                })
            }
        }
    }