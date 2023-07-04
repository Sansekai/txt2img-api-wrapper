const axios = require('axios');

const url = 'https://api.fusionbrain.ai/api/v1/text2image/run';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }
async function main() {
  const requestData = {
    queueType: 'generate',
    query: '1girl, short hair', // input your prompt here
    preset: '1',
    style: 'in anime style'
  };

  const headers = {
    'Referer': 'https://editor.fusionbrain.ai/',
    'Origin': 'https://editor.fusionbrain.ai',
    'Host': 'api.fusionbrain.ai'
  };

  try {
    const response = await axios.post(url, requestData, { headers });
    await sleep(30000);
    // get result
    const result = await axios.get(`https://api.fusionbrain.ai/api/v1/text2image/generate/pockets/${response.data.result.pocketId}/entities`);
    console.log(result.data.result[0].response[0]); // result.data.result[0].response[0] is the base64 image
  } catch (error) {
    console.error(error);
  }
}
main();